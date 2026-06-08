import { useMediaQuery } from "react-responsive";
import { footer, marquee } from "../constants/content";
import VerticalText from "../components/VerticalText";
import Marquee from "../components/Marquee";

const FooterSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    return (
        <section className="footer-section" id="contact">
            <img
                src="/images/footer-dip.png"
                alt=""
                aria-hidden="true"
                className="w-full object-cover -translate-y-1"
            />

            <Marquee items={marquee} />

            <div className="2xl:min-h-[110dvh] relative md:pt-[20vh] pt-[10vh] flex flex-col">
                {/* Rising-sun glow + vertical accent */}
                <div className="rising-sun size-[40vw] top-[6vh] left-1/2 -translate-x-1/2" />
                <VerticalText
                    text={footer.vertical}
                    className="hidden md:block absolute right-8 top-24 text-[#e63946]/70 text-2xl z-10"
                />

                <div className="overflow-hidden z-10 relative">
                    <h1 className="general-title text-center text-milk py-5">
                        {footer.hashtag}
                    </h1>
                </div>

                {isMobile ? (
                    <img
                        src="/images/footer-drink.png"
                        alt="SPYLTのドリンク"
                        className="absolute top-0 object-contain"
                    />
                ) : (
                    <video
                        src="/videos/splash.mp4"
                        autoPlay
                        playsInline
                        muted
                        aria-hidden="true"
                        className="absolute top-0 object-contain mix-blend-lighten"
                    />
                )}

                <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
                    {footer.social.map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            className="social-btn"
                            aria-label={item.label}
                        >
                            <img src={item.src} alt="" aria-hidden="true" />
                        </a>
                    ))}
                </div>

                <div className="md:mt-40 mt-24 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
                    <div className="flex items-start md:gap-16 gap-5">
                        {footer.columns.map((col, i) => (
                            <div key={i}>
                                {col.map((line) => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="md:max-w-lg">
                        <p>{footer.newsletter}</p>
                        <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
                            <label htmlFor="footer-email" className="sr-only">
                                {footer.emailAria}
                            </label>
                            <input
                                id="footer-email"
                                type="email"
                                placeholder={footer.emailPlaceholder}
                                className="w-full placeholder:font-paragraph placeholder:text-[#999999]"
                            />
                            <button type="submit" aria-label={footer.submitAria}>
                                <img src="/images/arrow.svg" alt="" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="copyright-box">
                    <p>{footer.copyright}</p>
                    <div className="flex items-center gap-7">
                        {footer.legal.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="legal-link"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;
