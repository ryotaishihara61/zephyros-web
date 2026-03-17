export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const SERVICE_LINKS: NavLink[] = [
  { label: "ビジネス英語研修", href: "https://www.languagehouse.jp/ja/", external: true },
  { label: "グローバル管理職研修", href: "/services/ead" },
  { label: "屋外型リーダーシップ研修", href: "/services/aji-leadership" },
  // { label: "海外投資家コミュニケーション研修", href: "https://lp.zephyros.jp/eebc", external: true }, // TODO: ページ完成後に再表示
];

export const NAV_LINKS: NavLink[] = [
  { label: "会社概要", href: "/about" },
  { label: "ニュース", href: "/news" },
  { label: "お問い合わせ", href: "/contact" },
];
