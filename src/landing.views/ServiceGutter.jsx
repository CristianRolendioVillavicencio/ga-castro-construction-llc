import AnimatedElement from "../components/AnimatedElement";
import BannerItem from "../landing.components/BannerItem";
import Button from "../landing.components/Button";
import SectionContact from "../landing.components/SectionContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import GoogleItems from "../landing.components/GoogleItems";

export default function ServiceGutter() {
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
        "Gutter Cleaning",
        "Gutter Repair",
        "Gutter Installation",
        "Gutter Maintenance",
        "Gutter Replacement",
        "Gutter Guards Installation",
        "Seamless Gutters Installation",
        "Rain Gutters Installation",
        "Downspout Repair",
        "Leaf Guards Installation",
        "Residential Gutter Services",
        "Commercial Gutter Services",
        "Gutter Inspection",
        "Custom Gutter Solutions",
        "Emergency Gutter Repair",
        "Seasonal Gutter Cleaning",
        "Gutter Protection Systems",
        "Gutter Renovation",
        "Gutter Alignment",
        "Gutter Painting",
    ];

    return (
        <AnimatedElement>
            <section style={{ marginTop: '100px' }}>
                <div className="container">
                    <BannerItem
                        title="Top-Rated Gutter Cleaning"
                        title2="Repair, and Installation"
                        subtitle=" in Fairfield and New Haven Counties"
                        imgSrc="/image/gutter-1.jpg"
                        imgText="GUTTER CLEANING, INSTALLATION & REPAIR"
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
            </section>
            <section className="relative bg-[#0b0c1e]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320 "
                    className="absolute -top-1 md:-top-5  left-0 right-0"
                >
                    <path
                        fill="#ffffff"
                        d="M0,192L48,197.3C96,203,192,213,288,186.7C384,160,480,96,576,64C672,32,768,32,864,69.3C960,107,1056,181,1152,186.7C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    ></path>
                </svg>
                <div className="container font-title2 p-[var(--padding)] pt-36">
                    <div className="flex flex-col w-full items-center lg:px-56 gap-10 text-white">
                        <h3 className="text-5xl text-center text-balance">
                            Get advice from the best and avoid accidents in these rainy seasons.
                        </h3>
                        <div className="flex">
                            <Button
                                to="/contact-us"
                                style="3"
                                type="2"
                                className="mt-2 mr-auto bg-white font-title2 px-5  items-center"
                            >
                                <span className="text-[#171640] text-xl">Contact us now</span>{" "}
                                <FontAwesomeIcon
                                    className="text-xl text-[#171640]"
                                    icon={faRightLong}
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative bg-[#f8a61f]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="absolute -top-1   left-0 right-0"
                >
                    <path
                        fill="#0b0c1e"
                        d="M0,224L60,208C120,192,240,160,360,149.3C480,139,600,149,720,138.7C840,128,960,96,1080,74.7C1200,53,1320,43,1380,37.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    ></path>
                </svg>
                <div className="container pb-20 pt-28 ">
                    <GoogleItems />
                </div>
            </section>
            <section className="pt-[var(--padding)]">
                <div className="container w-full">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}
