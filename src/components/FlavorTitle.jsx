import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { flavorTitle } from "../constants/content";
import { useMediaQuery } from "react-responsive";

const FlavorTitle = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

    useGSAP(() => {
        const firstTextSplit = SplitText.create(".first-text-split h1", {
            type: "chars",
        });
        const secondTextSplit = SplitText.create(".second-text-split h1", {
            type: "chars",
        });

        // On mobile/tablet the section is not pinned, so use a single
        // "enters viewport" trigger for all three title elements.
        const triggerStart = isMobile ? "top 80%" : "top 30%";

        gsap.from(firstTextSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".flavor-section",
                start: triggerStart,
            },
        });

        gsap.to(".flavor-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                trigger: ".flavor-section",
                start: triggerStart,
            },
        });

        gsap.from(secondTextSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
            delay: 0.3,
            scrollTrigger: {
                trigger: ".flavor-section",
                start: triggerStart,
            },
        });
    }, [isMobile]);

    return (
        <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
            <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
                <h1>{flavorTitle.first}</h1>
            </div>

            <div
                style={{
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                }}
                className="flavor-text-scroll"
            >
                <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
                    <h2 className="text-milk">{flavorTitle.highlight}</h2>
                </div>
            </div>

            <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
                <h1>{flavorTitle.second}</h1>
            </div>
        </div>
    );
};

export default FlavorTitle;