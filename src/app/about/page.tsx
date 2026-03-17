import Image from 'next/image';

const companyInfo = [
  { label: "社名", value: "株式会社 ZEPHYROS（ゼフロス）" },
  { label: "設立", value: "1976年" },
  { label: "資本金", value: "1,000万円" },
  { label: "代表取締役社長", value: "Jun Page" },
  { label: "事業内容", value: "若者向けリーダーシップ育成プログラム、ビジネススキルトレーニング、英会話研修" },
  { label: "本社住所", value: "香川県高松市瓦町2-3-2" },
  { label: "電話番号", value: "087-834-3322" },
];

const publicRoles = [
  "公益財団法人入管協会 評議員",
  "公益社団法人日本水難救済会 青い羽根募金運営協議会 委員",
  "高松北警察署 高松北国際交流協議会 会長",
  "香川県 国際交流連絡協議会 副会長",
  "高松市 観光大使",
  "香川県 KAGAWAアンバサダー",
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-900 py-24 text-center text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-white">会社概要</h1>
        </div>
      </section>

      {/* CEO Message */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">CEO message / 代表メッセージ</h2>
          <div className="max-w-2xl space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg font-semibold text-gray-800">
              「世界を動かすのは、言葉ではなく『意志の伝達』である」
            </p>
            <p>
              高校時代、教員から「君にはリーダーシップがない」と指摘されたあの日が、私の人生の原点です。その言葉への問いから始まった探求は、いつしか「人が人を動かす力とは何か」という、ビジネスにおける最も本質的なテーマへと繋がりました。
            </p>
            <p>
              私たちが50年の歴史の中で、41万人を超える受講者の皆様と共に見出してきた答えはシンプルです。リーダーシップや人を動かすコミュニケーションは、決して選ばれた人間だけの「才能」ではありません。それは、正しい型を知り、実践と失敗を繰り返すことで誰もが習得できる「技術」なのです。
            </p>
            <p>
              私たちは長年、日本を代表するグローバル企業各社と共に歩んできました。そこで求められるのは、単に流暢な英語を話すことではありません。文化の壁を越え、非言語の機微を読み取り、相手の心を動かして、確かな「成果」を勝ち取ること。私たちが教えてきたのは、英語というツールの先にある、この「人を動かす技術」そのものです。
            </p>
            <p>
              AIが言語の壁を溶かし、自律分散型（DAO）の組織が広がる現代において、この「人間特有のリーダーシップ」の価値はかつてないほど高まっています。四国という地から西日本、そして世界へ。挑み続ける日本人が、逆風を切り裂き、自らの想いで世界を動かすための「追い風（ZEPHYROS）」でありたい。
            </p>
            <p>
              私たちはこれからも、世界に挑戦するすべてのグローバルタレントの伴走者であり続けます。
            </p>
            <p className="font-semibold text-gray-900">Jun Page｜代表取締役社長</p>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">代表取締役社長プロフィール</h2>
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="flex items-start gap-6">
              <Image
                src="/images/JunPage.png"
                alt="Jun Page"
                width={96}
                height={96}
                className="h-24 w-24 shrink-0 rounded-full object-cover bg-gray-200"
              />
              <div>
                <p className="text-xl font-bold text-gray-900">Jun Page</p>
                <p className="text-sm text-gray-500">代表取締役社長／インストラクター</p>
              </div>
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">経歴</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>ペンシルベニア大学 卒業</li>
                  <li>ARTHUR ANDERSEN LLP 勤務</li>
                  <li>米国日本能率協会コンサルティング 勤務</li>
                  <li>KPMG LLP 勤務（経営コンサルタント）</li>
                  <li>リーダーシップ研修講師歴 10年以上</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">公的役職</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {publicRoles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin of Company Name */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Origin of Company name / 社名の由来</h2>
          <div className="grid gap-10 sm:grid-cols-2 items-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                「ZEPHYROS（ゼフロス）」はギリシャ神話における西風の神です。地中海沿岸では西風が「春の訪れ」「恵みの象徴」として長く語り継がれてきました。
              </p>
              <p>
                日本の中心より西に位置する香川県で起業したことにも、この名前への想いは重なります。若者の「未見の可能性」に風を送り、その芽を開かせること——それがZEPHYROSの願いです。
              </p>
              <p>
                リーダーシップは与えられるものでなく、自ら育むもの。ZEPHYROSは若者が自らの想いと行動によってリーダーシップを見つける旅の「追い風」となることを志しています。
              </p>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-gray-100 p-8">
              <Image
                src="/images/ZEPHYROS-LOGO.png"
                alt="ZEPHYROS ロゴ"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">会社概要</h2>
          <dl className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white overflow-hidden">
            {companyInfo.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-3 px-6 py-4 sm:grid-cols-4">
                <dt className="text-sm font-medium text-gray-500">{label}</dt>
                <dd className="col-span-2 text-sm text-gray-900 sm:col-span-3">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <p className="mb-6 text-gray-600">サービス・その他に関するご相談・お問い合わせはこちら</p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-gray-900 px-10 py-3 font-semibold text-white transition hover:bg-gray-700"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
