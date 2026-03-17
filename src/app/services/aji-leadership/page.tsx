import Image from 'next/image';
import { CurriculumSection } from "@/components/CurriculumSection";

const skills = [
  {
    title: "自分を印象付けるスキル",
    body: "自分がどう見られると、人はどう感じ、どう判断するのか。日本ではあまり訓練されないことですが、ZEPHYROSでは世界水準のセルフブランディングを教えています。声の出し方や話すスピード、立ち方やアイコンタクトまでを意識することで、「自分をどう見せるか」を体験的に学んでいきます。自分を大きく見せることではなく、「伝えるべきものを、きちんと届ける力」のための振る舞いを育みます。",
  },
  {
    title: "意見を引き出すスキル",
    body: "リーダーとして本当に大切なのは「仲間に話してもらう力」です。ZEPHYROSでは、相手が自然に話し出したくなるような問いかけや、意見が対立しそうなときでも安心して意見できる空気づくりの力も重視しており、これをスキルとして学んでいただきます。",
  },
  {
    title: "対立を価値に変えるスキル",
    body: "人が集まれば、意見のぶつかり合いは避けられません。けれど、それを「面倒なもの」として避けるのではなく、「価値が生まれる前兆」ととらえることができれば、チームはぐっと成長します。ZEPHYROSでは、あえて意見が異なる状況に身を置き、対話を重ねながら解決策を見つけ出すプロセスを体験します。",
  },
];

const programImages = [
  { src: "/images/camp06-scaled.jpeg", caption: "答えの無い作戦会議は、最高のトレーニングの場", position: "object-center" },
  { src: "/images/camp04-scaled.jpeg", caption: "大自然の中で、身体から得た情報を通じて気付く", position: "object-center" },
  { src: "/images/camp01-scaled.jpeg", caption: "料理もまたリーダーシップ実践の場となる", position: "object-center" },
  { src: "/images/camp03-scaled.jpeg", caption: "海と山、庵治半島は心をオープンにしてくれる", position: "[object-position:center_30%]" },
];

const instructors = [
  {
    name: "Jun Page",
    role: "リーダーシップ、瀬戸内海のスペシャリスト",
    bio: "米国ペンシルベニア大学卒業後、ARTHUR ANDERSEN, LLP・米国日本能率協会コンサルティング・KPMG LLP にて10年間以上の経営コンサルティングを経験。リーダーシップ・プログラムの講師として、数多くの有力企業を指導。日英バイリンガル。瀬戸内海で生まれ育ち、庵治半島は「庭」。高松市 観光大使、香川県 KAGAWA アンバサダー。",
    image: "/images/juninstructor1.png",
  },
  {
    name: "久保 晃信",
    role: "身体運動による人間力向上をサポート",
    bio: "福岡大学 スポーツ科学部ほか体育・医療系大学の講師を経て、球技・格闘技・陸上競技・自転車競技など、トップアスリートのストレングス＆コンディショニングコーチを歴任。トレイン株式会社 代表取締役、株式会社メディフィットプラス 最高執行責任者。香川県在住。",
    image: "/images/kuboinstructor1.png",
  },
];

const clients = [
  "アマゾンジャパン合同会社",
  "伊藤忠商事株式会社",
  "EY ストラテジー・アンド・コンサルティング株式会社",
  "大塚製薬株式会社",
  "KPMG コンサルティング株式会社",
  "株式会社日立製作所",
  "株式会社トヨタ",
  "株式会社タダノ",
  "株式会社今治造船",
  "ヤマト運輸株式会社",
  "株式会社パソナ",
  "シャープ株式会社",
  "四国電力株式会社",
];

const testimonials = [
  {
    headline: "「なんとなく」の感覚が言語化され、一生モノのスキルになりました。",
    body: "感覚的に理解していたことが講師によって言語化され、過去の成功・失敗の理由が一気に明確になりました。座学の直後に屋外アクティビティで実践する構成により、理論が「使いこなせるツール」へと変わり、5日間とは思えない深い成長を実感しました。",
  },
  {
    headline: "「小難しい話」だと思っていたリーダーシップ論が、最高に面白いものに変わった。",
    body: "参加前は少し身構えていましたが、蓋を開けてみれば終始わくわくの連続でした。多様な年齢・肩書きの方々と一つの目標に向かう体験は貴重な財産となり、苦手だった意見交換やプレゼンにも自信が持てるようになりました。",
  },
  {
    headline: "「同じ考えの人」を作るのではなく、「同じビジョンを持つ違う個性」を活かす大切さ。",
    body: "かつては「自分と同じように動ける人」を求めていましたが、研修を通じて異なる個性が共通のビジョンで集まることの真の価値を理解しました。その視点は職場だけでなく、家庭や人間関係にも活きる、一生モノの気づきでした。",
  },
];


export default function AjiLeadershipPage() {
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
          <source src="/videos/0424_mini.webm" type="video/webm" />
        </video>
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-300">
            屋外型リーダーシップ研修
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white">
            特別じゃなくても<br />リーダーになれる
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            リーダーシップは才能でも役職でもない。想いを言葉にし、仲間の意見を引き出し、対立を乗り越える力——それこそAI時代に人にしかできない力です。正解のない問いに仲間と向き合う体験から、「自ら選び、自ら進むリーダー」へ。
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
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            リーダーシップ育成プログラム ZEPHYROS（ゼフロス）とは
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/RUWyBAH-KTo"
                title="リーダーシップ育成プログラム ZEPHYROS"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 text-gray-600 leading-relaxed">
              <p>
                ZEPHYROSは、若者を対象にした屋外体験型の<strong>リーダーシップ育成プログラム</strong>です。ここでいうリーダーシップとは、役職や指導力のことではありません。「想いを実現する力」すなわち、自分の内にある想いを、社会に向けて具体的な行動に変えていく力を意味します。
              </p>
              <p>
                香川県・庵治半島の海と山に囲まれた自然環境の中で、参加者は「問いを立てる」「仲間とぶつかる」「迷いながら進む」というプロセスを体験します。非日常の場で自分と向き合う時間を通じて、AIでは代替できない"人間らしいリーダーシップ"が育まれます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">ZEPHYROSで身につく３つのスキル</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {skills.map((skill, i) => (
              <div key={i} className="rounded-lg bg-white p-6 shadow-sm">
                <p className="mb-1 text-xs font-semibold text-gray-400">0{i + 1}</p>
                <h3 className="mb-3 font-bold text-gray-900">{skill.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{skill.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">ZEPHYROS（ゼフロス）の特徴</h2>
          <h3 className="mb-6 text-lg text-gray-600">
            庵治半島の大自然の中で。体験を通じて気づく、一生モノのスキル
          </h3>
          <p className="mb-8 text-gray-600 leading-relaxed">
            カヤックトリップ、マウリ族の伝統的な調理法であるハンギ、極限状態でのサバイバル再現ゲームや、仲間と賞金を奪い合う心理戦など、エキサイティングな30種類以上の実践エクササイズを通じて、リーダーに必要な力を"体験"から学べるよう設計されています。自らの行動に基づく気づき、特に失敗体験を通じて得た気づきは、脳科学的にも記憶定着率が高く、一生モノのスキルとして身につきます。瀬戸内海に面した庵治半島は、心をオープンにし自分自身と向き合うのにも最適な環境です。
          </p>
          <p className="mb-8 text-sm text-gray-500">
            ※参加者の分析、ご要望をもとに最適な体験型プログラムをセミオーダーで構築することも可能です
          </p>
          <div className="grid grid-cols-2 gap-4">
            {programImages.map((img) => (
              <figure key={img.src}>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className={`object-cover ${img.position}`}
                  />
                </div>
                <figcaption className="mt-2 text-xs text-gray-500 text-center">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CurriculumSection />

      {/* Instructors */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">
            リーダーシップ開発、脳科学、アウトドアアクティビティ、瀬戸内海に精通した講師陣
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {instructors.map((instructor) => (
              <div key={instructor.name} className="flex gap-4 rounded-lg bg-white p-6 shadow-sm">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 shrink-0 rounded-full object-cover bg-gray-200"
                />
                <div>
                  <p className="font-bold text-gray-900">{instructor.name}</p>
                  <p className="mb-2 text-xs text-gray-400">{instructor.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{instructor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            "グローバル社会で通用する力"を、今ここで育てる
          </h2>
          <p className="mb-10 text-gray-600 leading-relaxed">
            当社では、トヨタ、伊藤忠商事、大塚製薬、日立製作所など、日本を代表する企業の幹部社員を対象に、長年にわたりグローバルリーダーシッププログラムを提供してきました。その実績とノウハウを活かし、グローバルビジネスの実態をふまえながら、世界で活躍できる若者の育成を目指します。
          </p>
          <h3 className="mb-6 font-bold text-gray-900">幹部育成プログラム導入企業例</h3>
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

      {/* Testimonial */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            お客様の声｜岡田武史様（FC今治高校 里山校 学園長）
          </h2>
          <blockquote className="rounded-lg border border-gray-200 bg-white p-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              「僕はこれからの時代、『ロールモデルがいない社会』がやってくると思っています。先が読めず、何が正解かもわからない中で生きていくには、最終的には自分で判断して、自分で動ける人間じゃないとやっていけない。ZEPHYROSは、まさにそういう人間を育てるきっかけになるプログラムだと思っています。」
            </p>
            <p>
              「正解を教える教育ではなくて、問いを立て、自分の頭で考えて、仲間とぶつかりながら行動する。その中で初めて見えてくるものがある。そういう場を、若いうちに持てることはすごく貴重です。」
            </p>
            <p>
              「FC今治高等学校でもこのプログラムを取り入れていますが、先生方から聞く生徒の様子や声を通して、彼らが何かに向き合い、悩み、動いた経験をしているのが伝わってきます。教育っていうのは、本当はそういうものなんじゃないかと思うんです。」
            </p>
            <p>
              「これからAIがどんどん進化して、何が本当かわからないような時代になります。そんなときに必要なのは、自分をしっかり持って、心と体の両方がタフな人間になること。ZEPHYROSみたいに、頭だけじゃなく、感情も体もフルに使ってぶつかっていく体験が、その土台を作ると思います。」
            </p>
            <p>
              「僕は教育に『エラー・アンド・ラーン（失敗して学ぶ）』という考え方がもっと必要だと思っていて、ZEPHYROSはまさにそういう時代に合った取り組みです。うまくいかなくてもいい、でもまずは自分でやってみる。その経験の中でしか、本当の力は育たない。そう思っています。」
            </p>
            <footer className="pt-4 flex items-center gap-4">
              <Image
                src="/images/okadakantoku-scaled-1.jpg"
                alt="岡田武史"
                width={96}
                height={96}
                className="h-24 w-24 shrink-0 rounded-full object-cover object-top"
              />
              <span className="text-sm text-gray-500">岡田武史｜FC今治高校 里山校 学園長</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">受講者の声</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col rounded-lg bg-gray-50 p-6">
                <span className="mb-4 text-3xl font-bold text-yellow-400 leading-none">"</span>
                <p className="mb-4 font-bold text-gray-900 leading-snug">{t.headline}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
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
