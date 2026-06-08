import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";
import { benefits } from "../constants/content";

const BenefitSection = () => {
    useGSAP(() => {
        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".benefit-section",
                start: "top 60%",
                end: "top top",
                scrub: 1.5,
            },
        });

        revealTl
            .to(".benefit-section .first-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.out",
            })
            .to(".benefit-section .second-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.out",
            })
            .to(".benefit-section .third-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.out",
            })
            .to(".benefit-section .fourth-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.out",
            });
    });

    return (
        <section className="benefit-section" id="benefits">
            <div className="container mx-auto pt-20">
                <div className="col-center">
                    <p className="whitespace-pre-line">{benefits.heading}</p>

                    <div className="mt-20 col-center">
                        <ClipPathTitle
                            title={benefits.titles[0]}
                            color={"#050507"}
                            bg={"#E63946"}
                            className={"first-title"}
                            borderColor={"#E63946"}
                        />
                        <ClipPathTitle
                            title={benefits.titles[1]}
                            color={"#050507"}
                            bg={"#A855F7"}
                            className={"second-title"}
                            borderColor={"#A855F7"}
                        />
                        <ClipPathTitle
                            title={benefits.titles[2]}
                            color={"#050507"}
                            bg={"#F8BBD0"}
                            className={"third-title"}
                            borderColor={"#F8BBD0"}
                        />
                        <ClipPathTitle
                            title={benefits.titles[3]}
                            color={"#050507"}
                            bg={"#D6A84F"}
                            className={"fourth-title"}
                            borderColor={"#D6A84F"}
                        />
                    </div>

                    <div className="md:mt-0 mt-10">
                        <p>{benefits.more}</p>
                    </div>
                </div>
            </div>

            <div className="relative overlay-box">
                <VideoPinSection />
            </div>
        </section>
    );
};

export default BenefitSection;