
import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const FlavorSlider = () => {
    const sliderRef = useRef();

    useGSAP(() => {
        ScrollTrigger.matchMedia({
            // Desktop (horizontal scroll)
            "(min-width: 1025px)": () => {
                const section = document.querySelector(".flavor-section");

                // Translate the section left by exactly its overflow width so the
                // last flavour card lands flush against the right edge — no extra
                // padding that would push cards off-screen and hide them.
                const getScrollAmount = () =>
                    Math.max(section.scrollWidth - window.innerWidth, 0);

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".flavor-section",
                        start: "top top",
                        end: () => `+=${getScrollAmount()}`,
                        scrub: true,
                        pin: true,
                        invalidateOnRefresh: true,
                    },
                });

                tl.to(".flavor-section", {
                    x: () => -getScrollAmount(),
                    ease: "none",
                });
            },

            // Tablet & Mobile (no horizontal scroll)
            "(max-width: 1024px)": () => {
                gsap.set(".flavor-section", { clearProps: "all" });
            },
        });

        // Title scroll animations (applies everywhere)
        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top top",
                end: "bottom 80%",
                scrub: true,
            },
        });

        titleTl
            .to(".first-text-split", {
                xPercent: -30,
                ease: "power1.inOut",
            })
            .to(
                ".flavor-text-scroll",
                {
                    xPercent: -22,
                    ease: "power1.inOut",
                },
                "<"
            )
            .to(
                ".second-text-split",
                {
                    xPercent: -10,
                    ease: "power1.inOut",
                },
                "<"
            );
    });

    return (
        <div ref={sliderRef} className="slider-wrapper">
            <div className="flavors">
                {flavorlists.map((flavor) => (
                    <div
                        key={flavor.name}
                        className={`relative z-30 lg:w-[50vw] w-[86vw] lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
                    >
                        <img
                            src={`/images/${flavor.color}-bg.svg`}
                            alt=""
                            aria-hidden="true"
                            className="absolute bottom-0"
                        />

                        <img
                            src={`/images/${flavor.color}-drink.webp`}
                            alt={`SPYLT ${flavor.name}`}
                            className="drinks"
                        />

                        <img
                            src={`/images/${flavor.color}-elements.webp`}
                            alt=""
                            aria-hidden="true"
                            className="elements"
                        />

                        <div className="absolute md:bottom-10 md:left-10 bottom-5 left-5 z-10">
                            <h1 className="!static">{flavor.name}</h1>
                            <p className="font-jp-sans text-milk/80 md:text-lg text-sm mt-1 tracking-wide">
                                {flavor.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlavorSlider;
