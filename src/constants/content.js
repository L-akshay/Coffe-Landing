/**
 * Centralised Japanese copy (locale: ja).
 *
 * Single source of truth for every visible string on the site so that no copy
 * is hardcoded inside components. Written as polished, modern marketing
 * Japanese — not literal translation.
 *
 * @typedef {Object} NavLink
 * @property {string} label  Visible Japanese label.
 * @property {string} en     Romaji / English helper (shown small, optional).
 * @property {string} href   In-page anchor.
 */

/** @type {{ lang: string, meta: { title: string, description: string } }} */
export const site = {
  lang: "ja",
  meta: {
    title: "SPYLT｜静寂と光のプロテインミルク ― Neo Japan Digital Atelier",
    description:
      "静けさと光が出会う場所で。プロテインとカフェインを研ぎ澄ました、没入型のひと口。ネオンと墨が交わる、新世代のミルク体験。",
  },
};

/** Decorative katakana/text marquee strip. */
export const marquee = [
  "プロテイン",
  "カフェイン",
  "ネオン東京",
  "没入体験",
  "SPYLT",
  "静寂と光",
  "大胆不敵",
];

/** Japanese seal/stamp logo mark glyph. */
export const seal = "飲";

/** @type {NavLink[]} */
export const nav = [
  { label: "ホーム", en: "HOME", href: "#hero" },
  { label: "フレーバー", en: "FLAVOURS", href: "#flavors" },
  { label: "栄養", en: "NUTRITION", href: "#nutrition" },
  { label: "体験", en: "BENEFITS", href: "#benefits" },
  { label: "私たちについて", en: "ABOUT", href: "#/about" },
  { label: "お問い合わせ", en: "CONTACT", href: "#/contact" },
];

export const hero = {
  vertical: "大胆不敵", // vertical accent down the side of the hero
  title: "静寂と、刺激。",
  subtitle: "プロテイン ＋ カフェイン",
  description:
    "静けさと光が出会う場所で、ひと口の没入体験を。プロテインとカフェインを、研ぎ澄まされた一杯に。",
  button: "ぐいっと一杯",
  buttonAria: "SPYLTを今すぐ味わう",
};

export const message = {
  first: "眠っていた大胆さを、",
  highlight: "満タン", // "Fuel Up"
  second: "呼び覚ませ。完全プロテインのひと口で、未来を満たせ。",
  paragraph:
    "反骨の魂を奮い立たせ、人生という冒険を満たそう。SPYLTなら、ひと口で胸躍るノスタルジアと、怖いもの知らずの楽しさへ。",
  divider: "波",
};

export const flavorTitle = {
  first: "6つの",
  highlight: "ぶっ飛ぶ", // "freaking"
  second: "旨さのフレーバー",
};

export const nutrition = {
  vertical: "滋養",
  title: "からだに、ちゃんと効く。",
  highlight: "良いこと", // "Body Good"
  paragraph:
    "ミルクにはビタミン・ミネラル・タンパク質など、豊富な栄養がぎっしり。しかも、うれしい乳糖フリー。",
  upTo: "最大",
};

export const benefits = {
  heading: "アドバンテージを、解き放て。\nSPYLTを選ぶ、確かな理由。",
  more: "ほかにも、まだまだ。",
  // titles map 1:1 to the four ClipPathTitle bars (order preserved).
  titles: ["常温保存OK", "プロテイン＋カフェイン", "無限にリサイクル", "乳糖フリー"],
  playAria: "ブランドムービーを再生",
};

export const testimonials = {
  // Three sliding display words: reads "いま / みんなが / 夢中".
  lines: ["いま", "みんなが", "夢中"],
  cardAria: (name) => `${name}さんの声を再生`,
};

export const footer = {
  vertical: "全力",
  hashtag: "#飲むなら全力で", // #CHUGRESPONSIBLY
  columns: [
    ["SPYLTフレーバー"],
    ["チャグクラブ", "学生マーケティング", "乳業パートナー"],
    ["会社情報", "お問い合わせ", "うまい話"],
  ],
  newsletter: "限定先行アクセスをゲット。新商品・イベント情報を、いち早くお届け！",
  emailPlaceholder: "メールアドレスを入力",
  emailAria: "メールアドレス",
  submitAria: "登録する",
  copyright: "© 2025 SPYLT ― 無断複製・転載を禁じます",
  legal: [
    { label: "プライバシーポリシー", href: "#/privacy" },
    { label: "利用規約", href: "#/terms" },
  ],
  social: [
    { src: "/images/yt.svg", label: "YouTube" },
    { src: "/images/insta.svg", label: "Instagram" },
    { src: "/images/tiktok.svg", label: "TikTok" },
  ],
};

export const common = {
  scroll: "スクロール",
  logoAria: "SPYLT ― ホームへ戻る",
};

export default {
  site,
  nav,
  hero,
  message,
  flavorTitle,
  nutrition,
  benefits,
  testimonials,
  footer,
  common,
};
