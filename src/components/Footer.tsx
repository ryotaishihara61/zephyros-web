import Link from "next/link";
import { SERVICE_LINKS } from "@/lib/links";

const companyLinks = [
  { label: "会社概要", href: "/about" },
  { label: "ニュース", href: "/news" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "利用規約", href: "/terms" },
  { label: "プライバシーポリシー", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* サービス */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              サービス
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {SERVICE_LINKS.map((link) =>
                link.external ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-gray-900">
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Company
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Zephyros. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
