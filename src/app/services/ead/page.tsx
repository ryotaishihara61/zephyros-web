import Image from 'next/image';

const trainers = [
  {
    name: "Joseph Lee",
    bio: "KPMGで11年間コンサルティングパートナーを務め、25年以上の経営コンサルティング経験を持つ。ドラッカースクール、ペパーダイン大学グラツィアディオビジネススクール、中央大学大学院にて教授職を歴任。数千名のエグゼクティブ・プロフェッショナル・MBA学生へのトレーニング実績。",
    image: "/images/Joseph-Lee.jpg",
  },
  {
    name: "Jun Page",
    bio: "米国ペンシルベニア大学卒業後、ARTHUR ANDERSEN・米国日本能率協会コンサルティング・KPMG LLP にて10年以上の経営コンサルティングを経験。2008年より Joseph Lee 氏と共にグローバルリーダー育成トレーニングを実施。米国での人材・組織開発活動、香川県警などで公的役職も担う。",
    image: "/images/JunPage.png",
  },
];

const skills = [
  {
    number: "01",
    title: "「発信力」を備えた人材の育成",
    body: "自身の教養を論理的な言葉に変え、異文化間でも「納得」を生む発信術を習得します。心理学的アプローチにより、文脈の異なる相手の心に深く届く伝え方を磨きます。",
  },
  {
    number: "02",
    title: "「意見を引き出す力」",
    body: "問いかけの技術を駆使し、多様な背景を持つメンバーから潜在的な意見を引き出します。集団心理を理解し、チーム全体の知性を最大化させる対話力を構築します。",
  },
  {
    number: "03",
    title: "「影響力」のある人材の育成",
    body: "役職や権限に頼らず、信頼と行動科学によって人を動かす技術を習得します。共感と論理の両面から周囲を巻き込み、組織を自発的な行動へと導く推進力を養成します。",
  },
  {
    number: "04",
    title: "「世界観」を備えたリーダーの育成",
    body: "歴史や哲学に裏打ちされた教養を磨き、揺るぎない決断の軸（世界観）を構築します。混迷するグローバル社会において、組織が進むべき明確なビジョンを提示する力を養います。",
  },
  {
    number: "05",
    title: "「仲間の成長」を促すリーダーの育成",
    body: "行動変容を促すフィードバックとコーチングにより、個人のポテンシャルを最大限に解放します。次世代のリーダーを育て、組織全体のパフォーマンスを底上げする「導く技術」を確立します。",
  },
];

const clients = [
  "アマゾンジャパン合同会社",
  "伊藤忠商事株式会社",
  "EYストラテジー・アンド・コンサルティング株式会社",
  "大塚製薬株式会社",
  "KPMGコンサルティング株式会社",
  "株式会社日立製作所",
  "株式会社トヨタ",
  "株式会社タダノ",
  "株式会社今治造船",
  "ヤマト運輸株式会社",
  "株式会社パソナ",
  "シャープ株式会社",
  "四国電力株式会社",
];

const steps = [
  {
    step: "STEP 1",
    title: "お問い合わせ",
    description: "お問い合わせフォーム、電話、メールでご相談ください。",
  },
  {
    step: "STEP 2",
    title: "ヒアリング・プログラム概要説明",
    description: "研修検討の背景や経営課題をヒアリングします。オンライン対応も可能です。",
  },
  {
    step: "STEP 3",
    title: "ご提案",
    description: "ヒアリング内容に基づき、プログラム内容・進め方をご提案します。",
  },
  {
    step: "STEP 4",
    title: "研修実施",
    description: "クライアント指定場所またはオンラインで実施します。",
  },
  {
    step: "STEP 5",
    title: "アンケート実施",
    description: "プログラム終了後、改善・活用のためアンケートを実施します。",
  },
];

const faqs = [
  {
    q: "対象人数の制限（最小・最大）はありますか？",
    a: "対象人数の制限はありません。",
  },
  {
    q: "遠方での開催も可能でしょうか？",
    a: "対応可能です。研修内容・ご予算に合わせてご提案します。",
  },
];

export default function EadPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-900 py-28 text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src="/videos/ead-hero.mov" type="video/mp4" />
        </video>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-300">
            Eruditio Ars Ducendi
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white">
            グローバル管理職研修
          </h1>
          <p className="mt-6 text-xl text-gray-300">
            真のグローバルリーダーは、国内で開発されるプログラムで育つのか？
          </p>
          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-white px-8 py-3 font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            お問い合わせ
          </a>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">About EAD</h2>
          <div className="grid gap-10 sm:grid-cols-2 items-center">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg font-semibold text-gray-900">教養を、人を動かす武器に変える。</p>
              <p>
                EADとは、ラテン語で「教養は指導の技術である（Eruditio Ars Ducendi）」を意味します。
              </p>
              <p>
                EADプログラムは、グローバル社会で不可欠な「知性」と「統率力」を同時に鍛える、人材育成のスペシャリスト研修です。外資系コンサルの実戦経験と行動心理学のエッセンスを凝縮。型通りの研修では得られない、多文化・多国籍な環境で成果を出すための「一生モノのスキル」を伝授します。
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/EAD-LOGO.png"
                alt="EAD Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">Training Philosophy</h2>
          <blockquote className="border-l-4 border-gray-900 pl-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              「リーダーシップとは人々のビジョンをより高いところへ持っていく。そして人々の仕事の効率を向上させる。そして最終的には周りの人々の人格そのものをより高い水準に引き上げる。」
            </p>
            <footer className="mt-3 text-sm text-gray-500">— ピーター・ドラッカー</footer>
          </blockquote>
          <p className="text-gray-600 leading-relaxed">
            EADが目指すのは、旗振り役としてのリーダーではなく、周囲の可能性を引き出すリーダーの育成です。
          </p>
        </div>
      </section>

      {/* Trainers */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">Trainer</h2>
          <p className="mb-8 text-gray-500">グローバル企業での実績豊富なトレーナー</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {trainers.map((trainer) => (
              <div key={trainer.name} className="flex gap-4 rounded-lg border border-gray-200 p-6">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 shrink-0 rounded-full object-cover bg-gray-200"
                />
                <div>
                  <p className="font-bold text-gray-900">{trainer.name}</p>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{trainer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Contents */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Training Contents</h2>
          <p className="mb-2 text-gray-500">5つのグローバルコアスキル</p>
          <div className="mb-8 flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="rounded-full border border-gray-200 bg-white px-4 py-1">
              受講時間：4日間（午前・午後）
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-4 py-1">
              クライアント指定場所またはオンライン対応
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.number} className="rounded-lg bg-white p-6 shadow-sm">
                <p className="mb-2 text-xs font-semibold text-gray-400">{skill.number}</p>
                <p className="mb-2 font-bold text-gray-900">{skill.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{skill.body}</p>
              </div>
            ))}
            <div className="rounded-lg bg-white p-6 shadow-sm flex items-center justify-center">
              <Image
                src="/images/EAD-Core.png"
                alt="EAD Core図"
                width={200}
                height={200}
                className="w-full max-w-[200px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">EAD 導入企業様</h2>
          <p className="mb-2 text-gray-500">
            対象業界：金融、商社、製造業、物流業、人材業、コンサルティング業
          </p>
          <p className="mb-8 text-gray-600 leading-relaxed">
            グローバル化加速時代における組織課題解決と次世代リーダー育成で高い評価をいただいています。
          </p>
          <ul className="flex flex-wrap gap-3">
            {clients.map((client) => (
              <li
                key={client}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600"
              >
                {client}
              </li>
            ))}
            <li className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-400">
              企業・組織・団体 他多数
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">よくあるご質問</h2>
          <div className="space-y-4">
            {/* 導入までの流れ */}
            <div className="rounded-lg bg-white p-5 shadow-sm">
              <p className="font-bold text-gray-900">Q. 導入までの流れを教えてください。</p>
              <ol className="mt-3 space-y-2">
                {steps.map((s) => (
                  <li key={s.step} className="flex gap-3 text-sm text-gray-600">
                    <span className="shrink-0 font-semibold text-gray-400">{s.step}</span>
                    <span><span className="font-medium text-gray-800">{s.title}</span>：{s.description}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* その他FAQ */}
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-lg bg-white p-5 shadow-sm">
                <p className="font-bold text-gray-900">Q. {faq.q}</p>
                <p className="mt-2 text-sm text-gray-600">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <p className="mb-6 text-gray-600">当研修に関するご相談・お問い合わせはこちら</p>
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
