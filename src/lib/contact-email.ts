import { ContactSubmission, NotificationMeta } from "@/lib/contact-storage";

function buildTextBody(submission: Omit<ContactSubmission, "notification">) {
  return [
    "新しい受付フォーム送信がありました。",
    "",
    `送信日時: ${submission.submittedAt}`,
    `会社URL: ${submission.companyUrl}`,
    `メールアドレス: ${submission.email}`,
    `都道府県: ${submission.prefecture}`,
    `市区町村: ${submission.city}`,
    `業種: ${submission.industry}`,
    `使い道: ${submission.useCase}`,
    `補足事項: ${submission.notes || "(なし)"}`,
  ].join("\n");
}

export async function sendContactEmail(
  submission: Omit<ContactSubmission, "notification">,
): Promise<NotificationMeta> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_NOTIFICATION_FROM ?? null;
  const to = process.env.CONTACT_NOTIFICATION_TO ?? null;

  if (!apiKey || !from || !to) {
    console.warn("Email notification skipped: missing environment variables.");
    return {
      provider: "resend",
      from,
      to,
      status: "skipped",
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "【Karte Web】新しい受付フォーム送信",
      text: buildTextBody(submission),
    }),
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(`Failed to send notification email: ${responseText}`);
  }

  return {
    provider: "resend",
    from,
    to,
    status: "sent",
  };
}
