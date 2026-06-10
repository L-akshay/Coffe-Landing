import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { benefits } from "../constants/content";

const VideoPinSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    useGSAP(() => {
        if (!isMobile) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".vd-pin-section",
                    start: "-15% top",
                    end: "200% top",
                    scrub: 1.5,
                    pin: true,
                },
            });

            tl.to(".video-box", {
                clipPath: "circle(100% at 50% 50%)",
                ease: "power1.inOut",
            });
        }
    });

    return (
        <section className="vd-pin-section">
            <div
                style={{
                    clipPath: isMobile
                        ? "circle(100% at 50% 50%)"
                        : "circle(6% at 50% 50%)",
                }}
                className="size-full video-box"
            >
                <video
                    src="/videos/pin-video.mp4"
                    playsInline
                    muted
                    loop
                    autoPlay
                    aria-hidden="true"
                />

                <div className="abs-center" style={{ transform: isMobile ? "scale(1)" : "scale(1)" }}>
                    <img
                        src="/images/circle-text.svg"
                        alt=""
                        aria-hidden="true"
                        className="spin-circle md:w-[15vw] w-24"
                    />
                    <button
                        type="button"
                        className="play-btn"
                        aria-label={benefits.playAria}
                    >
                        <img
                            src="/images/play.svg"
                            alt=""
                            aria-hidden="true"
                            className="md:size-[3vw] size-6 md:ml-[.5vw] ml-0.5"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoPinSection;