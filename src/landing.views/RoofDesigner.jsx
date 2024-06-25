import AnimatedElement from "../components/AnimatedElement";
import brands from "../mooks/brands.json";
import BBB from "../landing.components/bbb";

export default function RoofDesigner() {
    return (
        <AnimatedElement>
            {/* Se ha agregado un margen superior adicional para acomodar la barra del menú */}
            <section
                className="px-[--padding] mt-[calc(20px+var(--menu-bar-height))]"
                style={{
                    "--menu-bar-height": "80px",
                }}
            >
                <div className="container" style={{ marginBottom: "40px" }}>
                    {" "}
                    {/* marginBottom añade un margen inferior */}
                    <h1 className="text-2xl sm:text-5xl text-center font-title">
                        DESIGN YOUR
                        <span className="text-[--color1-bg]"> HOME</span>
                    </h1>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
                        {brands.map((brand) => (
                            <Item key={brand.id} href={brand.url} src={brand.src} />
                        ))}
                    </div>
                </div>

                {/* Botón BBB */}
                <div>
                    {/* Otro contenido de la página */}
                    <BBB />
                </div>
            </section>
        </AnimatedElement>
    );
}

function Item({ href, src }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
                relative aspect-square p-4 sm:p-10 rounded-lg overflow-hidden shadow-xl transition hover:scale-[1.02] 
                sm:rounded-md md:rounded-lg lg:rounded-xl
            "
        >
            <img className="w-full h-full object-contain" src={src} alt="" />
        </a>
    );
}
