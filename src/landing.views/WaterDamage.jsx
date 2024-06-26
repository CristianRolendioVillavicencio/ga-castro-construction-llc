import AnimatedElement from "../components/AnimatedElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Button from "../landing.components/Button";
import BannerItem from "../landing.components/BannerItem";
import GoogleItems from "../landing.components/GoogleItems";
import SectionContact from "../landing.components/SectionContact";
import BBB from "../landing.components/bbb";
export default function WaterDamage({ setIsVisibleModalFormConsult }) {
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
        "Water Damage Restoration",
        "Flood Restoration",
        "Storm Damage Restoration",
        "Emergency Water Damage Restoration",
        "Water Extraction",
        "Dehumidification",
        "Mold Remediation",
        "Sewage Cleanup",
        "Basement Flooding Cleanup",
        "Residential Water Damage Restoration",
        "Commercial Water Damage Restoration",
        "Water Damage Inspection",
        "Water Damage Repair",
        "Water Damage Cleanup",
        "Water Damage Drying",
    ];

    return (
        <AnimatedElement>
            <section className="relative overflow-hidden p-[--padding] ">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/img/4.jpg" className="w-full h-full object-cover" />
                </div>
                {/* boton bbb */}
                <div>
                    {/* Otro contenido de la página */}
                    <BBB />
                </div>
                <div className="relative z-10 flex flex-col pb-64 gap-5 pt-48 container text-[--color1-txt2] items-center">
                    <h3 className="font-title text-4xl sm:text-6xl text-center">
                        Expert 24/7 Water Damage Restoration Services
                    </h3>
                    <h3 className="font-title text-4xl sm:text-6xl text-center">
                        in Fairfield and New Haven County, CT and Surrounding Areas
                    </h3>
                </div>
            </section>
            <section className="relative">
                <div className="container flex flex-col items-center gap-10 pt-10 pb-20 sm:pb-48 md:px-20 px-[--padding] sm:translate-y-20">
                    <h3 className="font-title text-4xl sm:text-6xl text-center">
                        Fast, Professional, and Exceptional Service In The Fairfield County Area You
                        Can Count On
                    </h3>
                    <div className="flex">
                        <Button
                            to="/contact-us"
                            style="3"
                            type="2"
                            className="mt-2 mr-auto sm:gap-3 py-5 px-5 items-center"
                        >
                            <span className=" sm:text-xl font-title2">Contact us now</span>{" "}
                            <FontAwesomeIcon className=" sm:text-xl " icon={faRightLong} />
                        </Button>
                    </div>

                    <BannerItem
                        title="What to do When"
                        title2="Water Damage Happens"
                        imgText="Example of water leaks"
                        imgSrc="/img/6.png"
                        buttonText="Free Estimate"
                        buttonType="1"
                        buttonProps={{
                            onClick: () => setIsVisibleModalFormConsult(true),
                        }}
                    />
                </div>
                <svg viewBox="0 0 1440 320" className="absolute -z-10 bottom-0 translate-y-1">
                    <path
                        fill="#f8a61f"
                        d="M0,288L80,266.7C160,245,320,203,480,192C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>
            </section>
            <section className="relative bg-[#f8a61f]">
                <div className=" container p-[--padding] sm:pb-24">
                    <GoogleItems classNameWrapper="relative z-20" />
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="absolute -bottom-0 md:-bottom-5 translate-y-1 "
                >
                    <path
                        fill="#0b0c1e"
                        d="M0,288L40,277.3C80,267,160,245,240,240C320,235,400,245,480,234.7C560,224,640,192,720,197.3C800,203,880,245,960,250.7C1040,256,1120,224,1200,181.3C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                </svg>
            </section>
            <section className="relative bg-[#0b0c1e]">
                <div className="relative z-10 container p-[--padding]">
                    <BannerItem
                        title="Removing Water Damage"
                        title2="& Restoring Your Property"
                        titleClassName="text-white"
                        imgSrc="/img/5.png"
                        imgText="Example of water leaks"
                        imgTextClassName="text-white"
                        buttonText="Free Estimate"
                        buttonType="1"
                        buttonProps={{
                            onClick: () => setIsVisibleModalFormConsult(true),
                        }}
                    />
                </div>
            </section>
            <section className="relative">
                <div className="absolute md:-top-20 left-0 right-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        className="fill-[#0b0c1e] -translate-y-1"
                    >
                        <path d="M0,288L48,277.3C96,267,192,245,288,224C384,203,480,181,576,176C672,171,768,181,864,181.3C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                </div>
                <div className="container w-full p-[var(--padding)] pt-20 sm:pt-32">
                    <SectionContact />
                </div>
            </section>
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
        </AnimatedElement>
    );
}
