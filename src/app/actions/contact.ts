"use server";

import {
  notifyContactSubmission,
  parseContactFormData,
  saveContactSubmission,
  type ContactSubmission,
} from "@/lib/contact";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactSubmission, string>>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = parseContactFormData(formData);

  if (!parsed.success) {
    return {
      status: "error",
      message: "入力内容を確認してください。",
      fieldErrors: parsed.fieldErrors,
    };
  }

  try {
    await saveContactSubmission(parsed.data);
    await notifyContactSubmission(parsed.data);

    return {
      status: "success",
      message: "送信を受け付けました。内容を確認してご連絡します。",
    };
  } catch (error) {
    console.error("Failed to handle contact submission", error);

    return {
      status: "error",
      message: "送信処理に失敗しました。設定を確認して再度お試しください。",
    };
  }
}
