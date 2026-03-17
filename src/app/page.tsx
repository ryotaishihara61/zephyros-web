import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";
import { getNewsList } from "@/lib/microcms";

export const metadata = {
  title: "世界で成果を出す「日本人」を創る。",
  description:
    "創業50年、受講者累計41万人。単なる英語教育ではなく、文化の壁を越え人を動かすためのグローバル・コミュニケーションとリーダーシップを教える ZEPHYROS。",
  openGraph: {
    title: "世界で成果を出す「日本人」を創る。| ZEPHYROS",
    description:
      "創業50年、受講者累計41万人。単なる英語教育ではなく、文化の壁を越え人を動かすためのグローバル・コミュニケーションとリーダーシップを教える ZEPHYROS。",
  },
};

export const revalidate = 60;

const services = [
  {
    title: "ビジネス英語研修",
    description: "実践的なビジネス英語を習得し、国際的な業務をスムーズに進めるスキルを養います。",
    href: "https://www.languagehouse.jp/ja/",
    external: true,
    image: "/images/AdobeStock_306467498-scaled.jpeg",
  },
  {
    title: "グローバル管理職研修",
    description: "現場のマネージャーに必要なリーダーシップと組織マネジメント力を高めます。",
    href: "/services/ead",
    external: false,
    image: "/images/AdobeStock_509762950-1-scaled.jpeg",
  },
  {
    title: "若者向け屋外型リーダーシップ研修",
    description: "自然の中での体験活動を通じて、次世代リーダーを育成するプログラムです。",
    href: "/services/aji-leadership",
    external: false,
    image: "/images/YLP-TOP-e1738318572296.jpg",
  },
  // TODO: ページ完成後に再表示
  // {
  //   title: "外国人投資家とのコミュニケーション改善研修",
  //   description: "グローバルな場面で求められる、投資家向けコミュニケーション力を強化します。",
  //   href: "https://lp.zephyros.jp/eebc",
  //   external: true,
  //   image: "/images/pexels-photo-1533720-1533720.jpg",
  // },
];

export default async function Home() {
  const latestNews = await getNewsList(3).then((r) => r.contents).catch(() => []);

  return (
    <main>
      <HeroSection />

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">サービス</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">ニュース</h2>
            <Link href="/news" className="text-sm text-gray-500 hover:text-gray-900">
              一覧を見る →
            </Link>
          </div>
          {latestNews.length === 0 ? (
            <p className="text-gray-500">ニュースはまだありません。</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-3">
              {latestNews.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.id}`}
                  className="group rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-video w-full bg-gray-100">
                    {article.thumbnail ? (
                      <Image
                        src={article.thumbnail.url}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-200" />
                    )}
                  </div>
                  <div className="p-4">
                    <time className="text-xs text-gray-400">
                      {new Date(article.publishedAt).toLocaleDateString("ja-JP")}
                    </time>
                    <p className="mt-1 text-sm font-medium text-gray-900 group-hover:text-gray-600 leading-snug">
                      {article.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
