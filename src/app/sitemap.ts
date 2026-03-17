import type { MetadataRoute } from "next";
import { getNewsList } from "@/lib/microcms";

const BASE_URL = "https://zephyros.jp";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/ead`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/aji-leadership`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/news`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const newsArticles = await getNewsList(100)
    .then((r) => r.contents)
    .catch(() => []);

  const newsRoutes: MetadataRoute.Sitemap = newsArticles.map((article) => ({
    url: `${BASE_URL}/news/${article.id}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}
