export default function PrivacyPage() {
  return (
    <main>
      <section className="bg-gray-900 py-24 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight">プライバシーポリシー</h1>
      </section>

      <section className="bg-white mx-auto max-w-3xl px-6 py-20">
        <p className="mb-10 text-gray-600 leading-relaxed">
          株式会社Zephyros（以下「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
        </p>

        <div className="space-y-10 text-gray-700">
          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900">第1条（個人情報の収集方法）</h2>
            <p className="leading-relaxed">
              当社は、ユーザーが問い合わせフォームを利用する際、氏名、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、取引先との間でなされたユーザーの取引に関する記録や決済に関する情報を、当社の提携先から収集することがあります。
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900">第2条（個人情報を収集・利用する目的）</h2>
            <p className="mb-3 leading-relaxed">当社が個人情報を収集・利用する目的は以下のとおりです。</p>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
              <li>当社サービスの提供・運営のため</li>
              <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
              <li>新機能、更新情報、キャンペーン等のご案内をお送りするため</li>
              <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
              <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
              <li>ユーザーにご自身の登録情報の閲覧や変更、削除をしていただくため</li>
              <li>上記の利用目的に付随する目的</li>
            </ol>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900">第3条（個人情報の第三者提供）</h2>
            <p className="leading-relaxed">
              当社は、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900">第4条（個人情報の外部送信・Cookieについて）</h2>
            <p className="leading-relaxed">
              当社は、Google Analytics等の外部ツールを使用し、Cookieによりユーザーの利用情報を収集する場合があります。ユーザーはブラウザの設定によりCookieを無効化することが可能です。
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900">第5条（個人情報の開示・訂正・利用停止等）</h2>
            <p className="leading-relaxed">
              当社は、本人確認を行ったうえで、個人情報の開示・訂正・削除・利用停止等のご請求に対し、迅速に対応いたします。
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900">第6条（お問い合わせ窓口）</h2>
            <p className="mb-2 leading-relaxed">本ポリシーに関するお問い合わせは、下記までご連絡ください。</p>
            <div className="text-sm leading-relaxed">
              <p>運営主体：株式会社Zephyros</p>
              <p>メールアドレス：website@languagehouse.jp</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
