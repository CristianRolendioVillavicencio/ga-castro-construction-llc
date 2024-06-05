import brands from "../mooks/brands.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Brands() {
    return (
        <div className="brands-section w-full mb-10">
            <h2
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)" }}
                className="text-center text-5xl font-bold mb-6"
            >
                QUALITY YOU CAN TRUST
            </h2>
            {/* Cambié la clase de text-lg a text-2xl para hacer el texto más grande */}
            <p className="text-center text-2xl mb-10">
                These are the brands we work with and they support us
            </p>
            <div className="w-full h-auto">
                <Swiper
                    slidesPerView={5}
                    modules={[Autoplay]}
                    autoplay={{ delay: 1000 }}
                    speed={1500}
                    loop={true}
                    grabCursor={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="swiper-landing-component w-full max-h-52 mb-10"
                >
                    {brands.map((brand) => (
                        <SwiperSlide key={brand.id} className="h-full">
                            <a
                                className="flex justify-center items-center h-full transition hover:scale-[1.08]"
                                href={brand.url}
                            >
                                <img
                                    src={brand.src}
                                    className="max-w-36 sm:w-full w-20 aspect-square object-contain rounded-md overflow-hidden"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
