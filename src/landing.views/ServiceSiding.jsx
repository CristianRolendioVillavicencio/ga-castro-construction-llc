import AnimatedElement from "../components/AnimatedElement";
import BannerItem from "../landing.components/BannerItem";
import Button from "../landing.components/Button";
import SectionContact from "../landing.components/SectionContact";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleItems from "../landing.components/GoogleItems";
import BBB from "../landing.components/bbb";
export default function ServiceSiding() {
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
        "Siding",
        "Siding Installation",
        "Siding Repair",
        "Siding Replacement",
        "Vinyl Siding",
        "Fiber Cement Siding",
        "Wood Siding",
        "Metal Siding",
        "Siding Contractors",
        "Residential Siding",
        "Commercial Siding",
        "Siding Maintenance",
        "Siding Inspection",
        "Custom Siding Solutions",
        "Siding Renovation",
        "Siding Painting",
        "Siding Cleaning",
        "Energy-Efficient Siding",
        "Insulated Siding",
        "Eco-Friendly Siding",
    ];

    return (
        <AnimatedElement>
            <section className="relative shadow-xl font-title p-[--padding]">
                <div className="absolute flex inset-0 -z-1">
                    <img
                        src="/image/instalacion-siding-vinilo.jpg"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* boton bbb */}
                <div>
                    {/* Otro contenido de la página */}
                    <BBB />
                </div>
                <div className="container relative z-10 py-16 md:py-28 md:px-10">
                    <div
                        className="flex flex-col py-10 text-4xl sm:text-5xl gap-5 sm:gap-28"
                        style={{ "--textShadow": "-10px 8px 25px #000" }}
                    >
                        <span
                            className="w-full text-center md:text-start"
                            style={{ textShadow: "var(--textShadow)", lineHeight: "1.2", color: "#FAA819" }} // Añadir line-height para controlar el espacio entre las líneas y color para cambiar el color de las letras
                        >
                            Update Your Life
                        </span>
                        <span
                            className="w-full text-center md:text-start"
                            style={{ textShadow: "var(--textShadow)", lineHeight: "1.2", color: "#FAA819" }} // Añadir line-height para controlar el espacio entre las líneas y color para cambiar el color de las letras
                        >
                            Transform Your Space
                        </span>
                        <span
                            className="w-full text-center md:text-start"
                            style={{ textShadow: "var(--textShadow)", lineHeight: "1.2", color: "#FAA819" }} // Añadir line-height para controlar el espacio entre las líneas y color para cambiar el color de las letras
                        >
                            Renew Your Style
                        </span>

                    </div>
                </div>
            </section>

            <section className="relative pb-10 pt-20 ">
                <div className="absolute left-0 right-0 bottom-0 ">
                    <svg viewBox="0 0 1440 320" className="fill-[#f8a61f] translate-y-1">
                        <path d="M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,245.3C672,245,768,267,864,266.7C960,267,1056,245,1152,202.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="container relative z-10 flex flex-col w-full p-[--padding] sm:py-20 gap-5 justify-center items-center mt-0">
                    <p
                        className="text-3xl sm:text-5xl text-center font-title max-w-[700px]"
                        style={{ lineHeight: "1.3" }}
                    >
                        Discover the best siding types for your home. Professional installation and
                        guaranteed maintenance.
                    </p>
                    <div>
                        <Button
                            to="/contact-us"
                            style="3"
                            type="2"
                            className="mt-2 mr-auto font-title2 items-center py-5 px-5"
                        >
                            <span className="text-lg sm:text-2xl">Contact us now</span>{" "}
                            <FontAwesomeIcon icon={faRightLong} className="text-xl sm:text-2xl" />
                        </Button>
                    </div>
                </div>
            </section>
            <section className="relative bg-[#f8a61f]">
                <div className="relative z-10 container pb-10 sm:pb-32 lg:pb-40">
                    <BannerItem
                        title="Discover the best siding types for your home. "
                        imgSrc="/image/banner-siding-2.jpg"
                        imgText="Siding work for a home in Stamford"
                        buttonText="Free Estimate"
                        imgTextClassName="text-white"
                        titleClassName="lg:pb-28"
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
                <div className=" w-full absolute left-0 right-0 -bottom-0 xl:-bottom-20 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        className="fill-[#0b0c1e] translate-y-1"
                    >
                        <path d="M0,224L30,208C60,192,120,160,180,128C240,96,300,64,360,58.7C420,53,480,75,540,69.3C600,64,660,32,720,21.3C780,11,840,21,900,32C960,43,1020,53,1080,69.3C1140,85,1200,107,1260,106.7C1320,107,1380,85,1410,74.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                    </svg>
                </div>
            </section>
            <section className="bg-[#0b0c1e] ">
                <GoogleItems />
            </section>

            <section className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="fill-[#0b0c1e] -translate-y-1 absolute left-0 right-0 -top-0 md:-top-10 lg:-top-20 -z-10"
                >
                    <path d="M0,288L48,277.3C96,267,192,245,288,224C384,203,480,181,576,176C672,171,768,181,864,181.3C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <div className="container w-full px-[var(--padding)] pt-20 sm:pt-28 lg:pt-40">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}
