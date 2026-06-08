import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { message } from "../constants/content";
import SectionDivider from "../components/SectionDivider";

const MessageSection = () => {
    useGSAP(() => {
        // Japanese has no word spaces — split by character for a clean reveal.
        const firstMsgSplit = SplitText.create(".first-message", {
            type: "chars",
        });
        const secMsgSplit = SplitText.create(".second-message", {
            type: "chars",
        });
        const paragraphSplit = SplitText.create(".message-content p", {
            type: "chars, lines",
            linesClass: "paragraph-line",
        });

        gsap.to(firstMsgSplit.chars, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".message-content",
                start: "top center",
                end: "30% center",
                scrub: true,
            },
        });
        gsap.to(secMsgSplit.chars, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".second-message",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        });

        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".msg-text-scroll",
                start: "top 60%",
            },
        });
        revealTl.to(".msg-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
        });

        const paragraphTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".message-content p",
                start: "top center",
            },
        });
        paragraphTl.from(paragraphSplit.chars, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1,
            stagger: 0.01,
        });
    });

    return (
        <section className="message-content" id="message">
            <SectionDivider mark={message.divider} className="absolute top-0 left-0" />
            <div className="container mx-auto flex-center py-28 relative">
                <div className="w-full h-full">
                    <div className="msg-wrapper">
                        <h1 className="first-message">{message.first}</h1>

                        <div
                            style={{
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                            }}
                            className="msg-text-scroll"
                        >
                            <div className="bg-light-brown md:pb-5 pb-3 px-5">
                                <h2 className="text-red-brown">{message.highlight}</h2>
                            </div>
                        </div>

                        <h1 className="second-message">{message.second}</h1>
                    </div>

                    <div className="flex-center md:mt-20 mt-10">
                        <div className="max-w-md px-10 flex-center overflow-hidden">
                            <p>{message.paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessageSection;