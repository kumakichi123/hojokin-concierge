import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

export type NotificationMeta = {
  provider: "resend";
  from: string | null;
  to: string | null;
  status: "sent" | "skipped";
};

export type ContactSubmission = {
  submittedAt: string;
  companyUrl: string;
  email: string;
  prefecture: string;
  city: string;
  industry: string;
  useCase: string;
  notes: string;
  notification: NotificationMeta;
};

const storagePath = path.join(process.cwd(), "data", "contact-submissions.jsonl");

export async function storeContactSubmission(submission: ContactSubmission) {
  await mkdir(path.dirname(storagePath), { recursive: true });
  await appendFile(storagePath, `${JSON.stringify(submission)}\n`, "utf8");
}
