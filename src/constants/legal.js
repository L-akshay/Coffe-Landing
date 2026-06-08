/**
 * Legal document copy (locale: ja) for the standalone Terms / Privacy pages.
 *
 * Kept separate from the marketing copy in content.js. Each document is a
 * title + intro + a list of numbered sections, rendered by LegalPage.jsx.
 *
 * @typedef {Object} LegalSection
 * @property {string} heading  Section heading.
 * @property {string} body     Section paragraph.
 *
 * @typedef {Object} LegalDoc
 * @property {string} eyebrow  Small romaji/English label above the title.
 * @property {string} title    Japanese document title.
 * @property {string} updated  Last-updated line.
 * @property {string} intro    Opening paragraph.
 * @property {LegalSection[]} sections
 */

export const legalCommon = {
  back: "ホームへ戻る",
  backEn: "BACK TO HOME",
};

/** @type {Record<string, LegalDoc>} */
export const legalDocs = {
  terms: {
    eyebrow: "TERMS OF SERVICE",
    title: "利用規約",
    updated: "最終更新日：2025年1月1日",
    intro:
      "本利用規約（以下「本規約」）は、SPYLT（以下「当社」）が提供するウェブサイトおよび関連サービス（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用いただくことで、利用者は本規約に同意したものとみなされます。",
    sections: [
      {
        heading: "第1条（適用）",
        body: "本規約は、利用者と当社との間の本サービスの利用に関わる一切の関係に適用されます。当社が別途定めるガイドライン等は、本規約の一部を構成するものとします。",
      },
      {
        heading: "第2条（利用登録）",
        body: "本サービスの一部機能は、利用者が当社の定める方法によって登録を申請し、当社がこれを承認することで利用可能となります。当社は、登録申請者に一定の事由があると判断した場合、登録を拒否することがあります。",
      },
      {
        heading: "第3条（禁止事項）",
        body: "利用者は、法令または公序良俗に違反する行為、当社や第三者の権利を侵害する行為、本サービスの運営を妨げる行為を行ってはなりません。当社は、違反があったと判断した場合、利用を制限することがあります。",
      },
      {
        heading: "第4条（知的財産権）",
        body: "本サービスに含まれるテキスト、画像、ロゴ、デザインその他のコンテンツに関する著作権およびその他の知的財産権は、当社または正当な権利者に帰属します。無断での複製・転載・改変を禁じます。",
      },
      {
        heading: "第5条（免責事項）",
        body: "当社は、本サービスに事実上または法律上の瑕疵がないことを明示的にも黙示的にも保証していません。本サービスの利用により利用者に生じた損害について、当社は法令で許容される範囲で責任を負わないものとします。",
      },
      {
        heading: "第6条（規約の変更）",
        body: "当社は、必要と判断した場合には、利用者への事前の通知なく本規約を変更できるものとします。変更後の本規約は、本サービス上に掲載した時点から効力を生じます。",
      },
      {
        heading: "第7条（準拠法・裁判管轄）",
        body: "本規約の解釈にあたっては日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。",
      },
    ],
  },

  privacy: {
    eyebrow: "PRIVACY POLICY",
    title: "プライバシーポリシー",
    updated: "最終更新日：2025年1月1日",
    intro:
      "当社は、利用者の個人情報の保護を重要な責務と認識し、個人情報の保護に関する法律およびその他の関連法令を遵守します。本ポリシーは、当社が取得する個人情報の取り扱いについて定めるものです。",
    sections: [
      {
        heading: "1. 取得する情報",
        body: "当社は、氏名・メールアドレス等の利用者が入力した情報のほか、Cookie、アクセスログ、端末情報、閲覧履歴などを自動的に取得する場合があります。",
      },
      {
        heading: "2. 利用目的",
        body: "取得した情報は、本サービスの提供・改善、新商品やイベントのご案内、お問い合わせへの対応、利用状況の分析のために利用します。これらの目的の範囲を超えて利用することはありません。",
      },
      {
        heading: "3. 第三者提供",
        body: "当社は、法令に基づく場合を除き、利用者の同意なく個人情報を第三者に提供しません。業務委託先に提供する場合は、適切な監督を行います。",
      },
      {
        heading: "4. Cookieの利用",
        body: "当社は、利便性の向上やアクセス解析のためにCookieを使用します。利用者はブラウザの設定によりCookieを無効化できますが、その場合一部機能が利用できないことがあります。",
      },
      {
        heading: "5. 安全管理",
        body: "当社は、個人情報の漏えい・滅失・毀損を防止するため、適切な技術的・組織的安全管理措置を講じます。",
      },
      {
        heading: "6. 開示・訂正・削除",
        body: "利用者は、当社が保有する自己の個人情報について、開示・訂正・利用停止・削除を求めることができます。ご請求は下記のお問い合わせ窓口までご連絡ください。",
      },
      {
        heading: "7. お問い合わせ窓口",
        body: "本ポリシーに関するお問い合わせは、privacy@spylt.example までご連絡ください。内容を確認のうえ、合理的な期間内に対応いたします。",
      },
    ],
  },
};
