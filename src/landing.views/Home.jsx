import AnimatedElement from "../components/AnimatedElement";
import Carousel from "../landing.components/Carousel";
import TeamItemCard from "../landing.components/TeamItemCard";
import GoogleItems from "../landing.components/GoogleItems";
import slides from "./../mooks/slider.json";
import teams from "./../mooks/team.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../landing.components/Button";
import SectionContact from "../landing.components/SectionContact";
import InstantQuote from "../landing.components/InstantQuote";
import Brands from "../landing.components/Brands";
import OurComponentSection from "../landing.components/OurComponentSection";

export default function Home({ info }) {
    return (
        <>
            <AnimatedElement>
                <div className="w-full h-screen">
                    <Carousel info={info} data={slides} withSlider={true} />
                </div>

                <div className="relative w-full">
                    <div className="absolute inset-0 ">
                        <img src="" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 container p-[var(--padding)] md:px-0 ">
                        <InstantQuote />
                    </div>
                </div>

                <OurComponentSection />

                <div className="relative bg-[#f8a61f] mt-5 sm:mt-35 w-full">
                    {/* Testimonials Section */}
                    <section className="relative px-[var(--padding)] pt-20 pb-20">
                        <h2 className="text-4xl font-bold mb-8 text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
                        WHAT OUR CUSTOMERS SAY ABOUT US 

                        </h2>
                        <p className="text-center sm:text-2xl font-content opacity-90 tracking-wide text-[var(--color2-txt)] mt-5" style={{ lineHeight: '1.8' }}>
                        Discover the experiences of our satisfied clients and see why they choose us.

                        </p>
                        
                        <GoogleItems classNameWrapper="relative z-20 mt-10" />
                    </section>
                </div>




                                
                {/* Our team Section - start */}

                <div className="flex flex-col  fill-[var(--color2-bg)] text-[var(--color2-txt1)]">
                    <div className="bg-[var(--color2-bg)] p-20">
                        <div className="container flex flex-col justify-center">
                            <h2 className="text-3xl sm:text-5xl text-center font-title">
                                Our Team
                            </h2>
                            <p className="text-center sm:text-2xl font-content opacity-90 tracking-wide text-[var(--color2-txt)] mt-5">
                                We are a team of professionals who are passionate about what we do.
                            </p>
                            <div className="min-h-[380px] mt-5">
                                <Swiper
                                    spaceBetween={80}
                                    slidesPerView={4}
                                    modules={[Autoplay]}
                                    autoplay={{ delay: 5000 }}
                                    speed={1500}
                                    loop={true}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        320: { slidesPerView: 1 },
                                        640: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                        // 1280: { slidesPerView: 4 },
                                    }}
                                    grabCursor={true}
                                    // className="pt-20 pb-5"
                                    style={{ paddingTop: "70px", paddingBottom: "5px" }}
                                >
                                    {teams.map((team) => (
                                        <SwiperSlide key={team.id}>
                                            <TeamItemCard {...team} type="3" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <Button to="/about-us" style="4" type="2" className=" mx-auto">
                                <span>learn more about us</span> <span>&rarr;</span>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Our team Section - Finish */}










                <section className="relative px-[var(--padding)]">
                    
                    <div className="relative z-10 container pt-14 sm:pt-24 lg:pt-40">
                        <SectionContact />
                    </div>
                </section>
                <section className="px-[--padding]">
                    <div className="container flex items-center justify-center">
                        <Brands />
                    </div>
                </section>
            </AnimatedElement>
        </>
    );
}
