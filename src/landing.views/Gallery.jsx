import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import AnimatedElement from "../components/AnimatedElement";
import Button from "../landing.components/Button";
import SectionContact from "../landing.components/SectionContact";
import GallerySection from "../landing.components/GallerySection";
import images from "../mooks/gallery.json";
import works from "../mooks/works.json";
import { InfoContext } from "../context/info";
import BBB from "../landing.components/bbb";
import BannerItem from "../landing.components/BannerItem";
import ReactCompareImage from "react-compare-image";

export default function Gallery() {
    const { info } = useContext(InfoContext);
    const { gallery } = info;
    const [filter, setFilter] = useState("all");
    const [filterImages, setFilterImages] = useState([]);

    useEffect(() => {
        if (filter === "all") setFilterImages(null);
        else setFilterImages(images.filter((img) => img.tags.includes(filter)));
    }, [filter]);

    return (
        <AnimatedElement>
            {/* Sección de la cabecera */}
            <section className="relative overflow-hidden p-[--padding]" id="header">
                <div className="flex w-full justify-center">{/* Contenido de la cabecera */}</div>
            </section>

            {/* SECCIÓN PARA ESCRITORIO */}
            {/* ===================== */}
            <section className="hidden sm:block p-[--padding]">
                {/* Botón BBB */}
                <div>
                    <BBB />
                </div>
                <div className="container">
                    {/* Filtros */}
                    <div className="grid grid-cols-3 place-items-center sm:flex sm:flex-row w-full justify-center gap-2 lg:gap-10 bg-white py-4">
                        <ItemButton
                            text="All"
                            value="all"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Roofing"
                            value="roofing"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Siding"
                            value="siding"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Gutter"
                            value="gutter"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Carpentry"
                            value="carpentry"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Paint"
                            value="paint"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                    </div>

                    {/* Galería de imágenes */}
                    <div className="flex flex-col py-9" id="photos">
                        <GallerySection images={filterImages || images} />
                    </div>
                </div>
            </section>

            {/* SECCIÓN PARA MÓVIL */}
            {/* ================== */}
            <section className="block sm:hidden p-[--padding]">
                {/* Botón BBB */}
                <div>
                    <BBB />
                </div>
                <div className="container mt-4">
                    {/* Filtros */}
                    <div className="grid grid-cols-3 place-items-center w-full justify-center gap-4 bg-white py-12 mt-4">
                        <ItemButton
                            text="All"
                            value="all"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Roofing"
                            value="roofing"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Siding"
                            value="siding"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Gutter"
                            value="gutter"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Carpentry"
                            value="carpentry"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                        <ItemButton
                            text="Paint"
                            value="paint"
                            valueSelected={filter}
                            onClick={setFilter}
                        />
                    </div>
                    {/* Galería de imágenes */}
                    <div className="flex flex-col py-0.5 mt-1" id="photos">
                        <GallerySection images={filterImages || images} />
                    </div>
                </div>
            </section>

            {/* Sección Before & After para escritorio */}
            <section className="hidden sm:block p-[--padding]">
                <div className="container relative z-10 font-title2 pb-0">
                    <div className="flex flex-col items-center gap-1">
                    
                    <h1 className="font-title text-3xl sm:text-6xl max-w-[600px] text-center" >
                        
                        <span className="text-[--color1-bg]"> BEFORE & AFTER WORKS </span>
                    </h1>
                        <p
                            className="text-center text-xl font-content opacity-90 tracking-wide text-[var(--color1-txt)] mt-1"
                            style={{ lineHeight: "1.8" }}
                        >
                            See the stunning transformations by GA Castro Construction. Explore our
                            Before & After images and contact us today for a free inspection.
                        </p>
                    </div>
                    <div className="flex w-full pt-20 sm:pt-12">
                        <div className="grid w-full gap-5 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-2">
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

            {/* Sección Before & After para móvil */}
            <section className="block sm:hidden p-[--padding]">
                <div className="container relative z-10 font-title2 pb-0">
                    <div className="flex flex-col items-center gap-10">
                        <h1 className="font-title text-3xl text-center">
                            <span className="text-[--color1-bg]"> BEFORE & AFTER WORKS</span>
                        </h1>
                        <p className="font-title text-2xl text-center">
                        Discover stunning transformations. View our Before & After images and contact us for a free inspection.
                        </p>
                    </div>
                    <div className="flex w-full pt-10">
                        <div className="grid w-full gap-5 grid-cols-1 place-items-center">
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

            {/* Sección de proyectos */}
            <section className="p-[--padding]">
                <div className="container flex flex-col items-center">
                    <div className="flex flex-col items-center gap-10">
                        <h1 className="font-title text-3xl sm:text-6xl max-w-[600px] text-center" >
                        
                            <span className="text-[--color1-bg]"> OUR PROJECTS</span>
                        </h1>
                        <p className="font-title text-2xl sm:text-4xl text-center md:px-32">
                            Select one of the projects we have worked on to have more information
                            and see the process.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full py-20 gap-5 lg:gap-10">
                        {/* Listado de proyectos */}
                        {works.map((item) => (
                            <Item
                                key={item.id}
                                title={item.title}
                                subtitle={item.address}
                                alt={"work done in " + item.address}
                                src={item.src}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Sección de contacto */}
            <section>
                <div className="container w-full">
                    <SectionContact />
                </div>
            </section>
        </AnimatedElement>
    );
}

// Componentes adicionales

function Letter({ letter, src = "", delay = 0.5 }) {
    return (
        <motion.b
            initial={{
                opacity: 0,
                y: (window.innerHeight / 2) * -1,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay,
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 10,
            }}
            className="font-title3 text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] bg-clip-text text-transparent bg-cover bg-center mx-0 sm:mx-2"
            style={{ backgroundImage: `url(${src})` }}
        >
            {letter}
        </motion.b>
    );
}

function ItemButton({ text, value, valueSelected, onClick }) {
    const handleClick = () => {
        onClick(value);
    };
    const isSelected = valueSelected === value;
    return (
        <button
            onClick={handleClick}
            className={`
                flex justify-center max-w-32 w-full p-1 font-bold shadow-[0_3px_15px_2px_var(--color2-bg1)] bg-[--color1-bg] rounded-full transition-all duration-300 
                hover:text-[--color2-txt] hover:opacity-100 
                ${isSelected ? "text-[--color2-txt]" : "text-[var(--color2-bg)]"} 
                ${isSelected ? "opacity-100" : "opacity-70"} 
            `}
        >
            <span className="sm:text-xl font-title">{text}</span>
        </button>
    );
}

function Item({ title, subtitle, src, alt }) {
    return (
        <div className="group/item relative flex justify-center w-full px-10 pb-20 pt-36 rounded-2xl overflow-hidden font-bold shadow-[0_3px_15px_2px_var(--color2-bg1)] hover:scale-105 transition-all duration-300">
            <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 group-hover:item:backdrop-blur-sm" />
            <div className="opacity-0 relative z-10 flex flex-col items-center py-2 px-5 gap-5 rounded-lg text-[--color1-txt1] bg-[#f8a61f]/70 group-hover/item:opacity-100 transition-all duration-300">
                <h3 className="sm:text-3xl font-title opacity-80">{title}</h3>
                <span className="text-center sm:text-xl font-title opacity-80">{subtitle}</span>
            </div>
        </div>
    );
}
