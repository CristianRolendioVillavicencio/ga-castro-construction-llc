import AnimatedElement from "../components/AnimatedElement";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import teams from "./../mooks/team.json";
import SectionContact from "../landing.components/SectionContact";
import TeamItemCard from "../landing.components/TeamItemCard";
import GoogleItems from "../landing.components/GoogleItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faCheck, faEye, faHouseCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { InfoContext } from "../context/info";
import BBB from "../landing.components/bbb";

export default function AboutUs() {
    const { info } = useContext(InfoContext);
    return (
        <AnimatedElement>
            {/* Header Section */}

            <section className="relative overflow-hidden p-[--padding]">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/image/ciudad.jpg" className="w-full h-full object-cover" />
                </div>
                {/* boton bbb */}
                <div>
                    {/* Otro contenido de la página */}
                    <BBB />
                </div>

                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent" />
                <div className="relative z-10 flex flex-col pb-64 pt-32 container text-[--color1-txt1] items-center">
                    <div className="flex flex-col p-5 gap-5 bg-black/50 font-title text-3xl sm:text-5xl rounded-2xl">
                        <h3 className="text-center">
                            Roofing is our
                            <span className="text-[--color1-bg]"> heritage</span>
                            {","}
                        </h3>
                        <h3 className="text-center">
                            Quality is our
                            <span className="text-[--color1-bg]"> tradition</span>{" "}
                        </h3>
                    </div>
                </div>
            </section>

            {/* Concepts Section */}
            <section className="p-[--padding] pt-0">
                <div className="container flex justify-center text-[--color1-txt1] font-title">
                    <ConcepsSection
                        mision={info.mission}
                        vision={info.vision}
                        trustedServices={info.trusted_services}
                    />
                </div>
            </section>

            {/* Experience Section */}
            <section className="relative sm:py-28 xl:py-0">
                <div className="md:absolute w-full">
                    <div className="relative z-10 container flex flex-col md:flex-row w-full font-title gap-10 lg:gap-32 justify-center items-center">
                        <div className="max-w-96 w-full h-full flex border-solid border-4 border-[--color1-bg] rounded-md">
                            <img src="./team/2.png" className="bg-white" />
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col">
                                    <h1 className="text-8xl">+ 25</h1>
                                    <h1 className="text-6xl">YEARS</h1>
                                </div>
                                <h3 className="text-3xl sm:text-5xl text-[--color1-bg]">
                                    EXPERIENCE
                                </h3>
                                <h3 className="text-4xl sm:text-6xl text-[--color1-bg]">COMPANY</h3>
                            </div>
                            <div className="flex flex-col gap-2 md:text-[--color1-txt1]">
                                <Item title="Residential Roofing" icon={faCheck} />
                                <Item title="Commercial Roofing" icon={faCheck} />
                                <Item title="Insurance Claim Estimates" icon={faCheck} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Swiper Section */}
            <section>
                {" "}
                {/* Añadí mt-10 y mb-10 para más espacio superior e inferior */}
                <div className="fill-[var(--color2-bg)] text-[var(--color2-txt1)]">
                    <svg viewBox="0 0 1440 220" className="translate-y-1">
                        <path d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,154.7C672,149,768,139,864,138.7C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                    <div className="bg-[var(--color2-bg)] p-16 md:pt-52">
                        <div className="container flex flex-col justify-center">
                            <div className="min-h-[380px] mt-50 mb-">
                                {" "}
                                {/* Añadí mt-10 y mb-10 para más espacio superior e inferior */}
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
                                    style={{ paddingTop: "70px", paddingBottom: "5px" }}
                                >
                                    {teams.map((team) => (
                                        <SwiperSlide key={team.id}>
                                            <TeamItemCard {...team} type="3" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            {/* Eliminado el botón de la sección de equipos */}
                            {/* 
                            <Button to="/about-us" style="4" type="2" className="mx-auto mt-12">
                                <span>learn more about us</span> <span>&rarr;</span>
                            </Button>
                            */}
                            <div className="p-5 m-1"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <div className="relative bg-[#f8a61f] mt-25 sm:mt-35 w-full">
                {/* Testimonials Section */}
                <section className="relative px-[var(--padding)] pt-20 pb-20">
                    <h2
                        className="text-4xl font-bold mb-8 text-center"
                        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
                    >
                        WHAT OUR CUSTOMERS SAY ABOUT US
                    </h2>
                    <p
                        className="text-center sm:text-2xl font-content opacity-90 tracking-wide text-[var(--color2-txt)] mt-5"
                        style={{ lineHeight: "1.8" }}
                    >
                        Discover the experiences of our satisfied clients and see why they choose
                        us.
                    </p>
                    <GoogleItems classNameWrapper="relative z-20 mt-7" />
                </section>
            </div>

            {/* Sección de "Contact" */}
            <section className="relative px-[--padding] mt-10 mb-10">
                <h2 className="text-3xl sm:text-5xl text-center font-title text-black">
                    {/* Añadí text-black para cambiar el color del texto a negro */}
                    Contact Form
                </h2>
                <p className="text-center sm:text-2xl font-content opacity-90 tracking-wide text-black mt-9">
                    {/* Añadí text-black para cambiar el color del texto a negro */}
                    Join countless homeowners who trust GA CASTRO CONSTRUCTION to transform homes
                    with efficiency and expertise in roofing and siding.
                </p>
                <div className="relative z-10 container pt-20 sm:pt-30 lg:pt-50">
                    {/* Aumenté pt-14 a pt-20, sm:pt-24 a sm:pt-30, y lg:pt-40 a lg:pt-50 para bajar la sección */}
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}

function Item({ title, icon }) {
    return (
        <div className="flex items-center gap-1 md:gap-5">
            <div className="flex justify-center items-center w-8 md:w-10 aspect-square border-2 md:border-4 border-solid border-black md:border-white rounded-lg">
                <FontAwesomeIcon icon={icon} className="text-2xl text-green-500" />
            </div>
            <span className="text-xl md:text-2xl">{title}</span>
        </div>
    );
}

function ConcepsSection({ mision, vision, trustedServices }) {
    const [selected, setSelected] = useState(mision);
    return (
        <div className="-translate-y-14 flex flex-col max-w-[900px] items-center rounded-3xl p-10 pt-5 gap-5 sm:gap-14 bg-[--color1-bg] shadow-[0_3px_15px_2px_var(--color2-bg1)]">
            <p className="text-xl sm:text-3xl text-center">{selected}</p>
            <div className="flex flex-col sm:flex-row sm:gap-10 lg:gap-32">
                <button
                    onClick={() => setSelected(mision)}
                    className="flex flex-col items-center gap-2"
                >
                    <FontAwesomeIcon icon={faBullseye} className=" text-7xl lg:text-9xl " />
                    <h3 className="text-xl lg:text-3xl text-center">MISSION</h3>
                </button>
                <button
                    onClick={() => setSelected(vision)}
                    className="flex flex-col items-center gap-2"
                >
                    <FontAwesomeIcon icon={faEye} className="text-7xl lg:text-9xl " />
                    <h3 className="text-xl lg:text-3xl text-center">VISION</h3>
                </button>
                <button
                    onClick={() => setSelected(trustedServices)}
                    className="flex flex-col items-center gap-2"
                >
                    <FontAwesomeIcon icon={faHouseCircleCheck} className="text-7xl lg:text-9xl " />
                    <h3 className="flex text-xl lg:text-3xl text-center max-w-24 lg:max-w-40 ">
                        TRUSTED SERVICES
                    </h3>
                </button>
            </div>
        </div>
    );
}
