"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContact(_: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const type = formData.get("type") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !type || !message) {
    return { error: "必須項目を入力してください。" };
  }

  const body = `
お名前：${name}
メールアドレス：${email}
会社名：${company || "（未入力）"}
お問い合わせの種類：${type}

【お問い合わせ内容】
${message}
`.trim();

  const { error } = await resend.emails.send({
    from: "ZEPHYROS <website@languagehouse.jp>",
    to: "website@languagehouse.jp",
    subject: `[お問い合わせ] ${type} - ${name}様`,
    text: body,
  });

  if (error) {
    return { error: "送信に失敗しました。しばらく経ってから再度お試しください。" };
  }

  redirect("/contact/success");
}
