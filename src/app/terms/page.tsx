export default function TermsPage() {
  return (
    <main>
      <section className="bg-gray-900 py-24 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight">利用規約</h1>
      </section>

      <section className="bg-white mx-auto max-w-3xl px-6 py-20">
        <p className="mb-10 text-gray-600 leading-relaxed">
          本利用規約（以下「本規約」といいます。）は、株式会社Zephyros（以下「当社」といいます。）が提供するウェブサイトおよびサービス（以下「本サービス」といいます。）の利用条件を定めるものです。ユーザーは本規約に従ってサービスを利用する必要があります。
        </p>

        <div className="space-y-10 text-gray-700">
          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900">第1条（適用）</h2>
            <p className="leading-relaxed">
              本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900">第2条（禁止事項）</h2>
            <p className="mb-3 leading-relaxed">ユーザーは以下の行為を行ってはなりません。</p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービス運営を妨害する行為</li>
              <li>他のユーザーの個人情報を収集または蓄積する行為</li>
              <li>反社会的勢力に対して直接または間接に利益を供与する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900">第3条（本サービスの提供の停止等）</h2>
            <p className="mb-3 leading-relaxed">
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
              <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、理由を問わず一切の責任を負わないものとします。
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900">第4条（著作権）</h2>
            <p className="leading-relaxed">
              本サービスに掲載されている文章、画像、コンテンツ等の著作権は、当社または正当な権利を有する第三者に帰属します。無断転載・複製・改変等は禁止します。
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900">第5条（免責事項）</h2>
            <p className="mb-3 leading-relaxed">
              当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性等を含む）がないことを明示的にも黙示的にも保証しておりません。
            </p>
            <p className="leading-relaxed">
              当社は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-gray-900">第6条（規約の変更）</h2>
            <p className="leading-relaxed">
              当社は、必要と判断した場合には、ユーザーへの通知なくいつでも本規約を変更することができるものとします。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
