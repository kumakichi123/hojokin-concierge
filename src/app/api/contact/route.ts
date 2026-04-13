import { sendContactEmail } from "@/lib/contact-email";
import { storeContactSubmission } from "@/lib/contact-storage";

type ContactPayload = {
  companyUrl?: unknown;
  email?: unknown;
  prefecture?: unknown;
  city?: unknown;
  industry?: unknown;
  useCase?: unknown;
  notes?: unknown;
};

function mustString(value: unknown, fieldName: string) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid ${fieldName}`);
  }

  return value.trim();
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const submission = {
      submittedAt: new Date().toISOString(),
      companyUrl: mustString(payload.companyUrl, "companyUrl"),
      email: mustString(payload.email, "email"),
      prefecture: mustString(payload.prefecture, "prefecture"),
      city: mustString(payload.city, "city"),
      industry: mustString(payload.industry, "industry"),
      useCase: mustString(payload.useCase, "useCase"),
      notes: typeof payload.notes === "string" ? payload.notes.trim() : "",
    };

    const notification = await sendContactEmail(submission);
    await storeContactSubmission({ ...submission, notification });

    return Response.json({ ok: true, notificationStatus: notification.status });
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
