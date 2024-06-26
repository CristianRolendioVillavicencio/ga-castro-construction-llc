import info from "../mooks/info.json";

export default function TeamItemCard({ name, rol, description = "", photo, social, type = 1 }) {
    if (type == 1)
        return (
            <div className="bg-[#eaecf8] hover:shadow-2xl hover:bg-white font-bold">
                <div className="flex flex-col gap-3 items-center justify_center pb-5">
                    <div className="relative flex flex-col justify-center items-center w-full h-48">
                        <img src="/img/card-team.jpg" className="w-full h-full object-cover" />

                        <div className="absolute bottom-2 rounded-full overflow-hidden flex max-w-28 w-full items-center justify-center aspect-square">
                            <img src={photo} className="w-fill h-full object-contain" />
                        </div>
                    </div>
                    <div className="flex flex-col px-5 items-center gap-4 ">
                        <div className="flex flex-col text-center gap-1">
                            <h2 className="text-base font-link">{name}</h2>
                            <h3 className="text-sm opacity-60">{rol}</h3>
                        </div>
                        <p className="text-sm font-normal text-center opacity-85">{description}</p>
                    </div>
                    <div className="w-full h-0.5 bg-gray-200 my-2"></div>
                    <div className="flex items-center justify-center gap-4">
                        {social.map(({ id, url, color, icon }) => (
                            <a key={id} href={url}>
                                <div
                                    dangerouslySetInnerHTML={{ __html: icon }}
                                    className="icon h-5"
                                    style={{ fill: color }}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );

    if (type == 2)
        return (
            <div className="relative font-bold rounded-2xl h-56 flex justify-center">
                <div className="group/team flex flex-col gap-3 items-center justify_center pb-5 relative w-full rounded-2xl transition-all h-full max-w-52">
                    <img
                        src={photo}
                        className="group-hover/team:opacity-60 group-hover/team:-rotate-12 absolute w-full h-full  rounded-2xl object-cover transition-all"
                    />
                    <div className=" w-full h-full absolute opacity-0 rounded-2xl overflow-hidden bg-[rgba(0,0,0,0.2)] backdrop-blur-[3px]	group-hover/team:opacity-100 shadow-xl group-hover/team:rotate-6 transition-all delay-75 group-hover/team:delay-150 flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center justify-center gap-4 pt-10 p-5 text-white text-center">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl leading-5">{name}</h2>
                                <span className="opacity-75 text-nowrap tracking-tight">{rol}</span>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-100/25 my-2" />
                        <div className="flex items-center justify-center gap-4 pt-2">
                            {social.map(({ id, url, color, icon }) => (
                                <a
                                    key={id}
                                    href={url}
                                    className={`fill-white hover:fill-[var(--hover-color)]`}
                                    style={{ "--hover-color": color }}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{ __html: icon }}
                                        className={`icon h-5`}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );

    if (type == 3)
        return (
            <div className="relative group/card bg-white text-black font-content flex flex-col  pb-5 mt-10 hover:mt-0 items-center rounded-lg transition-all ">
                <img
                    src={photo}
                    className="absolute bg-[--color1-bg] -top-1 max-w-50 aspect-square -translate-y-10 rounded-md shadow-xl group-hover/card:max-w-76 transition-all duration-200"
                />
                <div className="flex flex-col items-center pt-80 group-hover/card:pt-25 transition-all">
                    <h2 className="font-title2 text-2xl">{name}</h2>
                    <span className="text-lg opacity-80 -translate-y-1">{rol}</span>
                </div>
                <div className="flex flex-col gap-3 items-center  max-h-0 group-hover/card:max-h-48  group-hover/card:px-5 overflow-hidden transition-all duration-200">
                    <div className="flex flex-row gap-2">
                        <Item num={info.posts} text="Posts" />
                        <Item num={info.followers} text="Followers" />
                        <Item num={info.likes} text="Likes" />
                    </div>
                    <div className="flex flex-row gap-5 mb-5 mt-4"> {/* Ajusté mb-1 a mb-5 para más espacio inferior */}
                        <Button
                            text="Follow"
                            className="bg-[--color1-bg] text-white p-9" // Agregué padding para más espacio interno
                            href={info.facebook_url}
                            target="_blank"
                            rel="noreferer"
                        />
                        <Button
                            text="Message"
                            className="bg-white border-solid border border-gray-500 p-3" // Agregué padding para más espacio interno
                            href={info.facebook_url}
                            target="_blank"
                            rel="noreferer"
                        />
                    </div>
                </div>
            </div>
        );

    return "The type is not declared";
}

function Button({ text, className, ...props }) {
    return (
        <a
            className={
                " py-1 px-4 rounded-md hover:scale-105 transition-all  shadow-sm " + className
            }
            {...props}
        >
            <span className="font-title2 opacity-85 text-lg">{text}</span>
        </a>
    );
}

function Item({ num, text }) {
    return (
        <div className="flex flex-col items-center">
            <h3 className="font-title2 text-lg">{num}</h3>
            <span className="text-base opacity-90">{text}</span>
        </div>
    );
}
