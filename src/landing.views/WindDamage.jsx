import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRightLong } from "@fortawesome/free-solid-svg-icons";
import SectionContact from "../landing.components/SectionContact";

export default function WindDamage() {
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
            <section className="relative">
                <div className="absolute inset-0 w-full h-full ">
                    <img src="/img/wind-damage.jpg" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent" />
                <div className="relative z-10 flex flex-col px-[--padding] pb-32 pt-64 text-[--color1-txt1] items-center">
                    <div className="flex flex-col items-center gap-14">
                        <h3
                            className="font-title text-2xl sm:text-4xl text-center text-balance max-w-[800px] drop-shadow-md"
                            style={{
                                textShadow: "1px 0px 1px #000, -1px 0px 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                                marginBottom: "-10px"
                            }}
                        >
                            THE HIDDEN DANGERS OF
                        </h3>
                        <h3
                            className="font-title text-5xl sm:text-7xl text-center text-balance max-w-[800px] drop-shadow-md"
                            style={{
                                textShadow: "1px 0px 1px #000, -1px 0px 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                                marginBottom: "-10px"
                            }}
                        >
                            WIND DAMAGE TO YOUR HOME
                        </h3>
                        <h3
                            className="font-title text-2xl sm:text-3xl text-center text-balance max-w-[800px] drop-shadow-md"
                            style={{
                                textShadow: "1px 0px 1px #000, -1px 0px 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                            }}
                        >
                            Learn how to protect your home and what to do if you suffer wind damage.
                        </h3>



                        <Button
                            href="#section-more"
                            style="3"
                            type="3"
                            className="py-4 text-lg bg-[#17163e]"
                        >
                            Discover More
                            <FontAwesomeIcon icon={faRightLong} />
                        </Button>
                    </div>
                </div>
                
            </section>
            
            <section id="section-more" className="relative -translate-y-1">
                <img
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                    src="/img/8.png"
                    alt="Image of Roof in Wind Damage"
                />
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm -z-10" />
                

                <div className="px-[--padding] pt-24 pb-52">
                    <div className="container flex flex-col justify-center items-center gap-10">
                        <h3
                            className="font-title text-3xl sm:text-5xl text-white text-center text-balance max-w-[800px] drop-shadow-md"
                            style={{
                                textShadow:
                                    "1px 0px 1px #000, -1px 0px 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                            }}
                        >
                            What is Wind?

                        </h3>
                        <p
                            className="text-base sm:text-lg text-gray-300 text-center text-pretty font-content font-bold tracking-wider"
                            style={{
                                textShadow:
                                    "1px 0px 1px #000, -1px 0px 1px #000, 0 1px 1px #000, 0 -1px 1px #000",
                            }}
                        >
                            As National Geographic explains, if the sun heats up the Earth in an uneven pattern, it creates warm spots and cool spots. By nature, cool air rushes to the warm zone, thereby creating what we call wind.

                            There are different ranges of wind, all indicative of their strength and direction. The Beaufort Wind Force Scale outlines the various wind strengths from a calm force 0 (less than 1 mph) to a hurricane-level force 12 (73+ mph). The Beaufort scale describes force 8 to be what’s called a fresh gale of wind, blowing at 39-46 mph. This is when you’ll start to see pieces of trees breaking and blowing around. A strong gale of wind blows at 47-54 mph and becomes a bigger threat to your home, particularly the shingles on your roof. According to FEMA, your roof, along with your doors, windows and garage are the four most wind-damaged areas of a home.
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-[--padding] py-10 bg-[--color2-bg]">
                <div className="container flex flex-col items-center gap-12">
                    <h3 className="font-title text-3xl sm:text-5xl text-[--color2-txt] text-center text-balance max-w-[800px]">
                    What’s the Damage?
                    </h3>
                    <div className="flex justify-center items-center gap-3">
                        <span className="flex justify-center items-center w-9 border border-gray-400 rounded-lg p-2 aspect-square">
                            <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl" />
                        </span>
                        <span className="font-content font-bold text-[--color2-txt] text-lg tracking-wide">
                        Doors – Double-entry doors, specifically, are at risk during hurricane-speed gusts. With double-entry doors, you typically have one active door that opens and one that’s fixed. These types of doors often contain glass, which can break when winds run over 120 mph. With or without a window, doors can be pushed open and become a welcome invitation for water damage. If the storm doesn’t produce rain or flooding, wind coming into your home presses against your interior walls and roof. Like a pot of boiling water, the pressure eventually blows the top off.
                        </span>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <span className="flex justify-center items-center w-9 border border-gray-400 rounded-lg p-2 aspect-square">
                            <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl" />
                        </span>
                        <span className="font-content font-bold text-[--color2-txt] text-lg tracking-wide">
                        Windows – Windows are another entry point for your home. Should winds blow at a force 12, unsecured windows are likely to break. Shattered glass blowing through your house is dangerous enough. But, again, an exposed entryway allows wind to access the inside of your home. This not only will cause damage to your personal belongings but tests the integrity of your roof.                        </span>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <span className="flex justify-center items-center w-9 border border-gray-400 rounded-lg p-2 aspect-square">
                            <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl" />
                        </span>
                        <span className="font-content font-bold text-[--color2-txt] text-lg tracking-wide">
                        Roof – FEMA studies have shown that a home’s roof is the most vulnerable to wind damage. If even one window or door has been compromised, wind can increase the uplift forces on the roof and literally blast it off of your house. The best case scenario would be you lose a few shingles. Sometimes, roof damage isn’t as obvious as a few missing shingles, though. Be sure to also inspect exhaust pipes, overhangs and where your roof meets walls. Calling a professional to check for hidden structural damage is always a smart move.                        </span>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <span className="flex justify-center items-center w-9 border border-gray-400 rounded-lg p-2 aspect-square">
                            <FontAwesomeIcon icon={faCheck} className="text-green-500 text-xl" />
                        </span>
                        <span className="font-content font-bold text-[--color2-txt] text-lg tracking-wide">
                        Garage – You may not have considered it, but your garage is also vulnerable to hurricane-speed winds. A double-garage door is riskiest, because the larger surface area captures more wind – like a sail on a boat. Winds of 120 mph or more can pull the garage door off its tracks or cause it to collapse to the pressure.                        </span>
                    </div>
                    <Button
                        to="/contact-us"
                        style="3"
                        type="3"
                        href="#section-more"
                        className="py-4 text-lg bg-[#17163e] mb-4"
                    >
                        Discover More
                        <FontAwesomeIcon icon={faRightLong} />
                    </Button>
                </div>
            </section>
            <section className="relative px-[--padding] py-10">
                <div className="absolute left-0 bottom-full w-full h-3 bg-gradient-to-b from-transparent via-white/80 to-white" />
                <div className="container">
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
