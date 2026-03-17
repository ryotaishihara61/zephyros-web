import Link from "next/link";
import Image from "next/image";
import { getNewsList } from "@/lib/microcms";

export const metadata = {
  title: "最新情報",
  description: "ZEPHYROSの最新ニュース・お知らせ一覧です。",
};

export const revalidate = 60;

const PER_PAGE = 10;

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function NewsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page ?? "1", 10));
  const offset = (currentPage - 1) * PER_PAGE;

  const { contents, totalCount } = await getNewsList(PER_PAGE, offset).catch(() => ({
    contents: [],
    totalCount: 0,
  }));

  const totalPages = Math.ceil(totalCount / PER_PAGE);

  return (
    <main>
      <section className="bg-gray-900 py-24 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight">ニュース</h1>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          {contents.length === 0 ? (
            <p className="text-gray-500">記事はまだありません。</p>
          ) : (
            <>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {contents.map((article) => (
                  <li key={article.id}>
                    <Link
                      href={`/news/${article.id}`}
                      className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 shadow-sm transition hover:shadow-md"
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                        {article.thumbnail ? (
                          <Image
                            src={article.thumbnail.url}
                            alt={article.title}
                            fill
                            className="object-cover transition group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col gap-2 p-4">
                        <time className="text-xs text-gray-400">
                          {new Date(article.publishedAt).toLocaleDateString("ja-JP")}
                        </time>
                        <span className="text-sm font-medium leading-snug text-gray-900 group-hover:text-gray-600">
                          {article.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              {totalPages > 1 && (
                <nav className="mt-12 flex items-center justify-center gap-2">
                  {currentPage > 1 && (
                    <Link
                      href={`/news?page=${currentPage - 1}`}
                      className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      ← 前へ
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={`/news?page=${p}`}
                      className={`rounded-lg border px-4 py-2 text-sm transition ${
                        p === currentPage
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {p}
                    </Link>
                  ))}
                  {currentPage < totalPages && (
                    <Link
                      href={`/news?page=${currentPage + 1}`}
                      className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      次へ →
                    </Link>
                  )}
                </nav>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}
