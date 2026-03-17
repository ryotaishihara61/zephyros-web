import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type NewsArticle = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  content: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
};

export async function getNewsList(limit = 10, offset = 0) {
  return client.getList<NewsArticle>({
    endpoint: "news",
    queries: { limit, offset, orders: "-publishedAt" },
  });
}

export async function getNewsDetail(id: string) {
  return client.getListDetail<NewsArticle>({
    endpoint: "news",
    contentId: id,
  });
}
