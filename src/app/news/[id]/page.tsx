import { getNewsDetail } from "@/lib/microcms";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const runtime = "edge";

export const revalidate = 60;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = await getNewsDetail(id).catch(() => null);
  if (!article) return {};

  const plainText = article.content.replace(/<[^>]+>/g, "");
  const description = plainText.slice(0, 120);

  return {
    title: article.title,
    description,
    openGraph: {
      title: `${article.title} | ZEPHYROS`,
      description,
      ...(article.thumbnail && { images: [{ url: article.thumbnail.url }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      ...(article.thumbnail && { images: [article.thumbnail.url] }),
    },
  };
}


export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const article = await getNewsDetail(id).catch(() => null);
  if (!article) notFound();

  return (
    <main>
      <section className="bg-gray-900 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 text-sm text-gray-400">
            {new Date(article.publishedAt).toLocaleDateString("ja-JP")}
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight">{article.title}</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          {article.thumbnail && (
            <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={article.thumbnail.url}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          <div className="mt-12 border-t border-gray-100 pt-8">
            <Link href="/news" className="text-sm text-gray-500 hover:text-gray-900">
              ← ニュース一覧に戻る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
