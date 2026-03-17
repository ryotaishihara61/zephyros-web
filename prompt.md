サイトのファビコン（ブラウザのタブに表示されるアイコン）を、ZEPHYROSのロゴに正しく設定してください。

【指示】
1. プロジェクト内にあるロゴ画像（例: public/logo.png など）を探してください。
2. その画像を src/app/icon.png として配置（またはコピー）してください。
   ※Next.js (App Router) では、src/app/ 直下に icon.png を置くだけで、複数のサイズを自動生成してファビコンとして認識してくれます。
3. もし src/app/favicon.ico や public/favicon.ico にデフォルトの Next.js アイコンが残っている場合は、混乱を避けるために削除してください。
4. src/app/layout.tsx の metadata で、念のためアイコンを指定する記述があるか確認し、正しく反映されるようにしてください。