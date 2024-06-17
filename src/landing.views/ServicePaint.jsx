import AnimatedElement from "../components/AnimatedElement";
import BannerItem from "../landing.components/BannerItem";
import SectionContact from "../landing.components/SectionContact";

export default function ServicePaint() {
    // Lista de ciudades en Fairfield County
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

    // Lista de ciudades en New Haven County
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

    // Lista de servicios de pintura
    const services = [
        "Painting",
        "Interior Painting",
        "Exterior Painting",
        "Residential Painting",
        "Commercial Painting",
        "House Painting",
        "Wall Painting",
        "Room Painting",
        "Ceiling Painting",
        "Trim Painting",
        "Cabinet Painting",
        "Deck Painting",
        "Fence Painting",
        "Garage Painting",
        "Painting Contractors",
        "Painting Services",
        "Custom Painting",
        "Professional Painting",
        "Eco-Friendly Painting",
        "Painting Maintenance",
    ];

    return (
        <AnimatedElement>
            <section style={{ marginTop: "70px" }}>
                <div className="container">
                    <BannerItem
                        title="Expert Painting"
                        title2="Services"
                        subtitle="Flawless finishes and transformative results."
                        imgSrc="/image/paint-1.jpg"
                        imgText="Selection of paint to suit the client."
                    />
                    {/* Texto oculto para SEO */}
                    <div style={{ display: "none" }}>
                        {/* Iterar sobre cada ciudad en Fairfield y New Haven County */}
                        {[...fairfieldCountyCities, ...newHavenCountyCities].map((city) =>
                            /* Iterar sobre cada servicio de pintura */
                            services.map((service) => (
                                /* Usar un div para cada combinación de ciudad y servicio */
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
            <section className="relative">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/image/paint-2.png"
                />
                <div className="absolute inset-0 backdrop-blur-sm" />
                <div className="container flex w-full h-[500px] items-center justify-center font-title2">
                    <div className="relative z-10 flex items-center px-2 py-10 gap-5 mx-10 sm:mx-20 md:mx-40 rounded-2xl bg-[#171640]/50 text-[var(--color1-txt1)] shadow-2xl flex-col max-w-[550px]">
                        <h3 className="text-4xl text-center">Transform your interiors</h3>
                        <p className="text-2xl text-center">
                            Each space in your home will come to life when you choose its colors
                            correctly.
                        </p>
                    </div>
                </div>
            </section>
            <section className="p-[var(--padding)]">
                <div className="container w-full mt-10 lg:mt-20">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}
