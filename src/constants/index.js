/**
 * Structural data for the sliders / lists.
 * Visual keys (color, rotation, src, img) are unchanged; only the human-facing
 * copy is localised to Japanese. `en` keeps the original name readable.
 */

const flavorlists = [
    {
        name: "チョコレートミルク",
        en: "Chocolate Milk",
        desc: "濃厚カカオの王道。",
        color: "brown",
        rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
        name: "ストロベリーミルク",
        en: "Strawberry Milk",
        desc: "甘酸っぱい果実が弾ける。",
        color: "red",
        rotation: "md:rotate-[8deg] rotate-0",
    },
    {
        name: "クッキー＆クリーム",
        en: "Cookies & Cream",
        desc: "ザクザク食感の贅沢。",
        color: "blue",
        rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
        name: "ピーナッツバターチョコ",
        en: "Peanut Butter Chocolate",
        desc: "香ばしさとコクの饗宴。",
        color: "orange",
        rotation: "md:rotate-[8deg] rotate-0",
    },
    {
        name: "バニラミルクシェイク",
        en: "Vanilla Milkshake",
        desc: "なめらかな甘い余韻。",
        color: "white",
        rotation: "md:rotate-[-8deg] rotate-0",
    },
    {
        name: "マックスチョコミルク",
        en: "Max Chocolate Milk",
        desc: "漆黒の濃密チョコ。",
        color: "black",
        rotation: "md:rotate-[8deg] rotate-0",
    },
];

const nutrientLists = [
    { label: "カリウム", amount: "245mg" },
    { label: "カルシウム", amount: "500mg" },
    { label: "ビタミンA", amount: "176mcg" },
    { label: "ビタミンD", amount: "5mcg" },
    { label: "鉄分", amount: "1mg" },
];

const cards = [
    {
        src: "/videos/f1.mp4",
        rotation: "rotate-z-[-10deg]",
        name: "マディソン",
        img: "/images/p1.png",
        translation: "translate-y-[-5%]",
    },
    {
        src: "/videos/f2.mp4",
        rotation: "rotate-z-[4deg]",
        name: "アレクサンダー",
        img: "/images/p2.png",
    },
    {
        src: "/videos/f3.mp4",
        rotation: "rotate-z-[-4deg]",
        name: "アンドリュー",
        img: "/images/p3.png",
        translation: "translate-y-[-5%]",
    },
    {
        src: "/videos/f4.mp4",
        rotation: "rotate-z-[4deg]",
        name: "ブライアン",
        img: "/images/p4.png",
        translation: "translate-y-[5%]",
    },
    {
        src: "/videos/f5.mp4",
        rotation: "rotate-z-[-10deg]",
        name: "クリス",
        img: "/images/p5.png",
    },
    {
        src: "/videos/f6.mp4",
        rotation: "rotate-z-[4deg]",
        name: "デヴァンテ",
        img: "/images/p6.png",
        translation: "translate-y-[5%]",
    },
    {
        src: "/videos/f7.mp4",
        rotation: "rotate-z-[-3deg]",
        name: "メリッサ",
        img: "/images/p7.png",
        translation: "translate-y-[10%]",
    },
];

export { flavorlists, nutrientLists, cards };
