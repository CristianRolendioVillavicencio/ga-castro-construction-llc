import AnimatedElement from "../components/AnimatedElement";
import ReactCompareImage from "react-compare-image";
import SectionContact from "../landing.components/SectionContact";
import BannerItem from "../landing.components/BannerItem";
import GoogleItems from "../landing.components/GoogleItems";

import roofing_challenges from "../mooks/roofing_challenges.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BBB from "../landing.components/bbb";
export default function ServiceRoofing() {
    const fairfieldCountyCities = [
        "Bridgeport",
        "Stamford",
        "Norwalk",
        "Danbury",
        "Fairfield",
        "Greenwich",
        "Westport",
        "Shelton",
        "Trumbull",
        "Stratford",
        "Ridgefield",
        "Bethel",
        "Brookfield",
        "Darien",
        "Easton",
        "Monroe",
        "New Canaan",
        "New Fairfield",
        "Newtown",
        "Redding",
        "Weston",
        "Wilton",
    ];

    const newHavenCountyCities = [
        "New Haven",
        "Waterbury",
        "Meriden",
        "Milford",
        "West Haven",
        "East Haven",
        "Wallingford",
        "Hamden",
        "Cheshire",
        "Branford",
        "Derby",
        "Guilford",
        "Madison",
        "Middlebury",
        "Naugatuck",
        "North Branford",
        "North Haven",
        "Orange",
        "Oxford",
        "Prospect",
        "Seymour",
        "Southbury",
        "Wolcott",
        "Woodbridge",
    ];

    const services = [
        "Roofing",
        "Roof Repair",
        "Roof Installation",
        "Roof Replacement",
        "Roof Maintenance",
        "Emergency Roof Repair",
        "Commercial Roofing",
        "Residential Roofing",
        "Roof Inspection",
        "Roof Leak Repair",
        "Flat Roofing",
        "Shingle Roofing",
        "Metal Roofing",
        "Tile Roofing",
        "Slate Roofing",
        "Roof Waterproofing",
        "Roof Ventilation",
        "Green Roofing",
        "Solar Roofing",
        "Roofing Contractors",
    ];

    return (
        <AnimatedElement>
            <section style={{ marginTop: "80px" }}>
                <div className="container">
                    <BannerItem
                        title="Roofing Services"
                        title2="in Fairfield and New haven County, CT"
                        subtitle="Maximize your coverage with our expert help"
                        imgSrc="/image/Banner 3.jpg"
                        imgText="Roof replacement paid for by insurance"
                    />
                    {/* SEO hidden text */}
                    <div style={{ display: "none" }}>
                        {[...fairfieldCountyCities, ...newHavenCountyCities].map((city) =>
                            services.map((service) => (
                                <div key={`${city}-${service}`}>
                                    {/* Palabras clave con "CT" */}
                                    <p>
                                        {service} in {city}, CT.
                                    </p>
                                    {/* Palabras clave sin "CT" */}
                                    <p>
                                        {service} in {city}.
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                {/* boton bbb */}
                <div>
                    {/* Otro contenido de la página */}
                    <BBB />
                </div>
            </section>

            <section className="relative">
                <div className="absolute inset-0 -z-1 flex flex-col">
                    <div className="relative h-[550px] sm:h-[600px]">
                        <img
                            src="/image/4 Servicios Roofing - 1 Banner.jpg"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
                        <svg
                            viewBox="0 0 1440 320"
                            className="absolute left-0 right-0 bottom-0  sm:-bottom-10 xl:-bottom-20 fill-[#fc8811]"
                        >
                            <path d="M0,224L34.3,218.7C68.6,213,137,203,206,165.3C274.3,128,343,64,411,64C480,64,549,128,617,133.3C685.7,139,754,85,823,58.7C891.4,32,960,32,1029,74.7C1097.1,117,1166,203,1234,213.3C1302.9,224,1371,160,1406,128L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                        </svg>
                    </div>
                    <div
                        className="relative flex h-auto bg-[#fc8811] flex-1"
                        style={{
                            boxShadow: "inset -10px 0px 20px 20px #fc8811",
                        }}
                    >
                        <div
                            className="absolute top-[50%] translate-y-[-50%] w-full bg-[#fc8811]"
                            style={{ height: "calc(100% + 10px)" }}
                        />
                    </div>
                </div>
                <div className="container relative z-10 py-10 font-title2">
                    <div className=" flex flex-col w-full gap-14  items-center overflow-hidden rounded-md">
                        <h3
                            className="text-4xl p-10 text-[--color1-txt1] text-center"
                            style={{ textShadow: "0 0 10px #000" }}
                        >
                            PROJECT CHALLENGES IN ROOFING
                        </h3>
                        <Banner />
                    </div>
                </div>
                <div className="container relative z-10 font-title2 p-[--padding] pb-0">
                    <div className="flex w-full pt-20 sm:pt-40 ">
                        <div className="grid w-full gap-5 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-2 ">
                            <div className="flex flex-col w-full items-center gap-3">
                                <div className="w-full max-w-96 rounded-lg overflow-hidden shadow-2xl">
                                    <ReactCompareImage
                                        leftImage="/new/Roof beforew.jpg"
                                        rightImage="/new/Roof.jpg"
                                        className="w-full h-full [&:hover>img]:scale-110"
                                        leftImageLabel="Before"
                                        rightImageLabel="After"
                                    />
                                </div>
                                <span className="text-lg font-content">
                                    Project done for a family in Norwalk, CT
                                </span>
                            </div>
                            <div className="flex flex-col w-full items-center gap-3">
                                <div className="w-full max-w-96 rounded-lg overflow-hidden shadow-2xl">
                                    <ReactCompareImage
                                        leftImage="/new/roof befor.jpg"
                                        rightImage="/new/Roof2.jpg"
                                        className="w-full h-full [&:hover>img]:scale-110"
                                        leftImageLabel="Before"
                                        rightImageLabel="After"
                                    />
                                </div>
                                <span className="text-lg font-content">
                                    Project done for a family in Stamford CT
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative bg-[#0b0c1e]  pb-20">
                <div className="h-20 ">
                    <svg
                        viewBox="0 0 1440 320"
                        className="absolute left-0 right-0 -top-0 fill-[#fc8811] bg-[#0b0c1e]  "
                    >
                        <path d="M0,320L40,298.7C80,277,160,235,240,234.7C320,235,400,277,480,266.7C560,256,640,192,720,144C800,96,880,64,960,58.7C1040,53,1120,75,1200,96C1280,117,1360,139,1400,149.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                    </svg>
                </div>
                <div className="container pt-24 md:pt-40 lg:pt-52">
                    <GoogleItems />
                </div>
            </section>

            <section className="p-[var(--padding)]">
                <div className="container w-full md:pt-20">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}

function Banner() {
    return (
        <div className="swipper-roofing-component-container flex w-full">
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation={true}
                autoplay={{ delay: 5000 }}
                speed={1500}
                slidesPerView={3}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 3 },
                }}
                spaceBetween={0}
                loop={true}
                grabCursor={true}
                className="flex items-center w-full px-1 sm:px-5 py-3 gap-2 mx-5 md:mx-20 lg:mx-40 rounded-2xl bg-[#171640]/60 text-[var(--color1-txt1)] shadow-xl"
            >
                {roofing_challenges.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ItemBanner {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

function ItemBanner({ name, icon }) {
    return (
        <div className="flex flex-col  content-center items-center py-1  sm:px-5 rounded-xl sm:gap-2 shadow-3xl">
            {/* <FontAwesomeIcon className="text-4xl md:text-6xl" icon={icon} /> */}
            <div dangerouslySetInnerHTML={{ __html: icon }} className="icon h-16 fill-white" />
            <h3 className="text-center text-balance text-lg md:text-xl sm:max-w-36">{name}</h3>
        </div>
    );
}
