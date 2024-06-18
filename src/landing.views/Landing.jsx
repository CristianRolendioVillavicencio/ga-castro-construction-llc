import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedElement from "../components/AnimatedElement";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { cls } from "../../lib/utils";
import { useState } from "react";
import useExternalScripts from "../hooks/useExternalScripts";
import { Link } from "react-router-dom";
import GoogleItems from "../landing.components/GoogleItems";
import Brands from "../landing.components/Brands";
import OurComponentSection from "../landing.components/OurComponentSection";
import faqsLanding from "./../mooks/faqs-landing.json";
import CardsCarousel from "../landing.components/CardsCarousel";

export default function Landing() {
    useExternalScripts({
        url: "https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=B5rx9uOVdIreP2QIxCFJp",
    });

    return (
        <AnimatedElement>
            <section className="relative overflow-hidden flex items-center px-[--padding] min-h-screen">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/img/22.png" className="w-full h-full object-cover object-top" />
                </div>

                <div className="relative container flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-5 pt-32 pb-16 w-full h-full">
                    <div className="flex flex-col justify-center gap-5">
                        <h3 className="font-title text-white text-3xl sm:text-5xl text-center sm:text-left text-balance max-w-[500px]">
                            Get a beautifull new roof that will last
                        </h3>
                        <p
                            className="max-w-[600px] font-content text-white text-pretty text-center sm:text-left text-lg"
                            style={{
                                textShadow: "1px 1px 1px black, -1px -1px 1px black",
                            }}
                        >
                            We are the roofing construction experts, providing expert workmanship
                            and project management to ensure a quality roof and stress-free
                            experience for you. We use only high-quality materials and provide a
                            level of profesionalism that&apos;s a cut above our competitors.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-5">
                            <a
                                className="flex justify-center items-center bg-[--color1-bg] font-bold font-title uppercase text-center text-[--color1-txt] max-w-96 px-5 py-3 rounded-full transition hover:scale-105"
                                href="#section-instant-quote"
                            >
                                Instant online roof quote
                            </a>
                            <Link
                                className="flex justify-center items-center border-2 border-[--color1-bg] font-bold font-title uppercase text-center text-white max-w-96 px-5 py-3 rounded-full transition hover:scale-105"
                                style={{
                                    textShadow: "1px 1px 1px black, -1px -1px 1px black",
                                }}
                                to="/roof-designer"
                            >
                                Visualize your new roof
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-2">
                            <div className="flex text-lg">
                                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                            </div>
                            <p
                                className="font-content text-white text-center sm:text-left text-sm sm:text-base"
                                style={{
                                    textShadow: "1px 1px 1px black, -1px -1px 1px black",
                                }}
                            >
                                300+ 5-star reviews (Google, Home, Advisor, BBB, Houz)
                            </p>
                        </div>
                    </div>
                    <p
                        className="max-w-80 font-content text-center text-white text-balance text-sm sm:text-lg opacity-8"
                        style={{
                            textShadow:
                                "1px 0 1px black, -1px 0 1px black, 0 1px 1px black, 0 -1px 1px black",
                        }}
                    >
                        Start Your Roofing Project Today! 🚀 Get Your Instant Roof Quote
                    </p>
                </div>
            </section>

            <section className="relative overflow-hidden" id="section-instant-quote">
                <div className="w-full h-full" id="roof-quote-pro-embedded" />
            </section>

            <section className="p-[--padding] ">
                <div className="container">
                    <CardsCarousel />
                </div>
            </section>

            <section className="px-[--padding] py-10">
                <div className="container ">
                    <article className="flex flex-col items-center gap-5">
                        <h3 className="w-full font-title text-4xl text-center">Customer Stories</h3>
                        <p className="font-title2 text-lg text-pretty text-center sm:px-20">
                            Ga Castro Construction is the local roofer that homeowners, homeowner
                            associations, and busi- nesses trust. Weave already replaced thousands
                            of roofs for homeowners in the Dallas area and across the United States,
                            and we&apos;d like the ooportunity to re-roof yours.
                        </p>
                    </article>
                    <GoogleItems classNameWrapper="mt-10" />
                </div>
            </section>

            <section className="px-[--padding]">
                <div className="container">
                    <Brands />
                </div>
            </section>

            <section className="pt-14">
                <OurComponentSection />
            </section>

            <section className="px-[--padding] py-10 bg-[--color4-bg]">
                <div className="container flex flex-col gap-10">
                    <h3 className="font-title text-[--color4-txt2] text-center text-3xl sm:text-5xl">
                        FAQs
                    </h3>

                    <div className="flex flex-col gap-5">
                        {faqsLanding.map((item) => (
                            <AccordionItem key={item.id} title={item.ask} text={item.answer} />
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedElement>
    );
}

function AccordionItem({ title, text }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-2 border-[--color4-txt2] rounded-3xl">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cls(
                    "flex justify-between items-center w-full px-5 py-3 opacity-90 border-b-2 border-[--color4-txt2] rounded-3xl transition-none",
                    {
                        "border-b-0 opacity-70": !isOpen,
                    }
                )}
            >
                <span className=" font-title text-[--color4-txt] text-left text-lg sm:text-xl">
                    {title}
                </span>
                <FontAwesomeIcon
                    icon={isOpen ? faMinus : faPlus}
                    className="text-[--color4-txt] text-xl"
                />
            </button>
            <div
                className={cls("w-full max-h-96 overflow-hidden transition-all", {
                    "max-h-0": !isOpen,
                })}
            >
                <p className="p-5 font-content text-[--color4-txt] sm:text-lg opacity-70">{text}</p>
            </div>
        </div>
    );
}
