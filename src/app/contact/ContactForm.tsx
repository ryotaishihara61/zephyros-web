"use client";

import { useActionState } from "react";
import { sendContact } from "./actions";

const INQUIRY_TYPES = [
  "屋外型リーダーシップ研修",
  "グローバル管理職研修",
  "ビジネス英語研修",
  "海外投資家コミュニケーション研修",
  "その他",
];

const labelClass = "block text-sm font-medium text-gray-700 mb-1";
const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 transition";

export default function ContactForm() {
  const [state, action, isPending] = useActionState(sendContact, null);

  return (
    <form action={action} className="space-y-6">
      {state?.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <div>
        <label htmlFor="name" className={labelClass}>
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="山田 太郎"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="example@company.co.jp"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          会社名
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="株式会社○○"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="type" className={labelClass}>
          お問い合わせの種類 <span className="text-red-500">*</span>
        </label>
        <select id="type" name="type" required className={inputClass}>
          <option value="">選択してください</option>
          {INQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="お問い合わせ内容をご記入ください。"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
