/**
 * Copy for the standalone marketing pages (locale: ja): About (私たちについて)
 * and Contact (お問い合わせ).
 *
 * `aboutDoc` reuses the same shape as the legal documents in legal.js so it can
 * be rendered by the shared LegalPage layout. `contact` drives the dedicated
 * ContactPage (details + front-end enquiry form).
 */

/** @type {import("./legal.js").LegalDoc} */
export const aboutDoc = {
  eyebrow: "ABOUT US",
  title: "私たちについて",
  intro:
    "SPYLTは、静けさと刺激が交わる場所から生まれました。プロテインとカフェインを研ぎ澄まし、ネオンと墨が溶け合う新世代のミルク体験を、ひと口にこめてお届けします。",
  sections: [
    {
      heading: "ブランドストーリー",
      body: "「飲むなら、全力で。」— 私たちは、忙しい毎日のなかでも妥協しない一杯を追い求めてきました。栄養と没入感を両立させたSPYLTは、東京の夜から着想を得た、大胆不敵なプロテインミルクです。",
    },
    {
      heading: "私たちの使命",
      body: "からだに、ちゃんと効く。心に、火を灯す。ビタミン・ミネラル・タンパク質をぎっしり詰め込みながら、乳糖フリーで誰もが楽しめる設計に。おいしさと機能性の境界を、私たちは溶かし続けます。",
    },
    {
      heading: "こだわり",
      body: "常温保存OK、無限にリサイクル可能なパッケージ、そして6つのぶっ飛ぶ旨さのフレーバー。サステナビリティと体験価値を両立させ、次の世代に胸を張れるものづくりを目指しています。",
    },
    {
      heading: "これからのSPYLT",
      body: "私たちの冒険はまだ始まったばかり。新フレーバー、限定イベント、そしてチャグクラブのコミュニティとともに、静寂と光のあいだで、未来を満たしていきます。",
    },
  ],
};

export const contact = {
  eyebrow: "CONTACT",
  title: "お問い合わせ",
  intro:
    "ご質問・取材・パートナーシップのご相談など、お気軽にお寄せください。内容を確認のうえ、担当者より2〜3営業日以内にご返信いたします。",
  methods: [
    { label: "一般のお問い合わせ", value: "hello@spylt.example" },
    { label: "報道・取材", value: "press@spylt.example" },
    { label: "受付時間", value: "平日 10:00 – 18:00（JST）" },
  ],
  form: {
    name: "お名前",
    namePlaceholder: "山田 太郎",
    email: "メールアドレス",
    emailPlaceholder: "you@example.com",
    message: "メッセージ",
    messagePlaceholder: "ご用件をご記入ください",
    submit: "送信する",
    success: "送信ありがとうございます。担当者より折り返しご連絡いたします。",
  },
};
