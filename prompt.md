Next.js (App Router) のメタデータ（SEO設定）を、ZEPHYROSのブランドに合わせて全面的に更新してください。

【1. 全体設定 (src/app/layout.tsx)】
- サイト名: ZEPHYROS (ゼピュロス)
- 基本タイトル: ZEPHYROS | 50年の実績、世界を動かすグローバル研修
- タイトルのテンプレート: `%s | ZEPHYROS` （各ページでタイトルを設定した際、自動でサイト名が付与されるようにしてください）
- ディスクリプション: 創業50年、受講者累計41万人。単なる英語教育ではなく、文化の壁を越え人を動かすためのグローバル・コミュニケーションとリーダーシップを教える ZEPHYROS。トヨタ、アマゾンなど世界の大手企業に選ばれる研修プロフェッショナルです。

【2. 各ページの個別設定】
- ニュース一覧ページ (src/app/news/page.tsx): 最新情報
- お問い合わせページ (src/app/contact/page.tsx): お問い合わせ
- トップページ (src/app/page.tsx): 世界で成果を出す「日本人」を創る。

【3. ニュース詳細ページの動的設定 (src/app/news/[id]/page.tsx)】
- microCMS から取得した記事のタイトル（article.title）をページタイトルに、冒頭のテキストをディスクリプションに動的に設定するように `generateMetadata` 関数を実装・修正してください。

【4. SNS・OGP設定】
- OpenGraph (OGP) 設定を追加してください。
- Twitter Card は 'summary_large_image' に設定してください。

【5. ファビコンの確認】
- public フォルダ内の favicon.ico やロゴ画像を参照するよう設定を確認してください。