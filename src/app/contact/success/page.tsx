import Link from "next/link";

export const metadata = {
  title: "送信完了 | ZEPHYROS INC.",
};

export default function ContactSuccessPage() {
  return (
    <main>
      <section className="bg-gray-900 py-24 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight">送信完了</h1>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">お問い合わせを受け付けました</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            お問い合わせいただきありがとうございます。<br />
            内容を確認の上、担当者よりご連絡いたします。
          </p>
          <p className="mb-8 text-sm text-gray-400">
            当社への営業目的のお問合せは折り返しのご連絡をしない場合がございます。
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-gray-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            トップページへ戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
