import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";

export type ContactSubmission = {
  companyUrl: string;
  email: string;
  prefecture: string;
  city: string;
  industry: string;
  useCase: string;
  notes: string;
};

type ParseSuccess = {
  success: true;
  data: ContactSubmission;
};

type ParseFailure = {
  success: false;
  fieldErrors: Partial<Record<keyof ContactSubmission, string>>;
};

const REQUIRED_FIELDS: Array<keyof ContactSubmission> = [
  "companyUrl",
  "email",
  "prefecture",
  "city",
  "industry",
  "useCase",
];

function getFieldValue(formData: FormData, key: keyof ContactSubmission) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function parseContactFormData(formData: FormData): ParseSuccess | ParseFailure {
  const data: ContactSubmission = {
    companyUrl: getFieldValue(formData, "companyUrl"),
    email: getFieldValue(formData, "email"),
    prefecture: getFieldValue(formData, "prefecture"),
    city: getFieldValue(formData, "city"),
    industry: getFieldValue(formData, "industry"),
    useCase: getFieldValue(formData, "useCase"),
    notes: getFieldValue(formData, "notes"),
  };

  const fieldErrors: Partial<Record<keyof ContactSubmission, string>> = {};

  for (const field of REQUIRED_FIELDS) {
    if (!data[field]) {
      fieldErrors[field] = "必須項目です。";
    }
  }

  if (data.email && !isValidEmail(data.email)) {
    fieldErrors.email = "メールアドレスの形式が正しくありません。";
  }

  if (data.companyUrl && !isValidUrl(data.companyUrl)) {
    fieldErrors.companyUrl = "URL は http:// または https:// で入力してください。";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      fieldErrors,
    };
  }

  return {
    success: true,
    data,
  };
}

function getStorageDir() {
  return process.env.CONTACT_STORAGE_DIR || path.join(process.cwd(), "data");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export async function saveContactSubmission(submission: ContactSubmission) {
  const storageDir = getStorageDir();
  const filePath = path.join(storageDir, "contact-submissions.jsonl");
  const record = {
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
    ...submission,
  };

  await mkdir(storageDir, { recursive: true });
  await appendFile(filePath, `${JSON.stringify(record)}\n`, "utf8");
}

export async function notifyContactSubmission(submission: ContactSubmission) {
  const user = getRequiredEnv("GMAIL_USER");
  const pass = getRequiredEnv("GMAIL_APP_PASSWORD");
  const to = getRequiredEnv("CONTACT_NOTIFICATION_TO_EMAIL");
  const subject = `新しい受付が届きました: ${submission.prefecture} ${submission.city}`;

  const html = `
    <div>
      <h1>新しい受付が届きました</h1>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; border-color: #d1d5db;">
        <tr><th align="left">会社URL</th><td>${escapeHtml(submission.companyUrl)}</td></tr>
        <tr><th align="left">メールアドレス</th><td>${escapeHtml(submission.email)}</td></tr>
        <tr><th align="left">都道府県</th><td>${escapeHtml(submission.prefecture)}</td></tr>
        <tr><th align="left">市区町村</th><td>${escapeHtml(submission.city)}</td></tr>
        <tr><th align="left">業種</th><td>${escapeHtml(submission.industry)}</td></tr>
        <tr><th align="left">使い道</th><td>${escapeHtml(submission.useCase)}</td></tr>
        <tr><th align="left">補足事項</th><td>${escapeHtml(submission.notes || "なし")}</td></tr>
      </table>
    </div>
  `.trim();

  const text = [
    "新しい受付が届きました",
    "",
    `会社URL: ${submission.companyUrl}`,
    `メールアドレス: ${submission.email}`,
    `都道府県: ${submission.prefecture}`,
    `市区町村: ${submission.city}`,
    `業種: ${submission.industry}`,
    `使い道: ${submission.useCase}`,
    `補足事項: ${submission.notes || "なし"}`,
  ].join("\n");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from: user,
    to,
    subject,
    html,
    text,
    replyTo: submission.email,
  });
}
