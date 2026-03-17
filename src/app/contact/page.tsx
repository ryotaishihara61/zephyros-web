import ContactForm from "./ContactForm";

export const runtime = "edge";

export const metadata = {
  title: "お問い合わせ",
  description: "ZEPHYROSへのご相談・お問い合わせはこちらから。研修・サービスに関するご質問をお気軽にどうぞ。",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gray-900 py-24 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight">お問い合わせ</h1>
        <p className="mt-4 text-gray-400 text-sm">
          研修・サービスに関するご質問・ご相談はお気軽にどうぞ。
        </p>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6">
          <p className="mb-8 text-sm text-gray-500">
            <span className="text-red-500">*</span> は必須項目です。
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
