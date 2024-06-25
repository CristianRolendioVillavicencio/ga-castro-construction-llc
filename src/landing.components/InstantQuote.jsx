import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InstantQuote() {
    return (
        <div className=" flex flex-col w-full items-center py-10  gap-14 ">
            <h2 className="font-title text-5xl text-center  tracking-wider">
            Are you looking for prices for your roof change?
            </h2>
            <div className="flex flex-col lg:flex-row w-full ">
                <div className="flex flex-1 items-center justify-center">
                    <img src="img/16.png" alt="" />
                </div>
                <div className="flex flex-1 flex-col items-center justify-center gap-5 ">
                    <h3 className="font-title text-3xl text-center text-balance tracking-wider">
                        With our express system you can see access to a free quote!
                    </h3>
                    <div className="flex flex-col gap-2 sm:ml-16">
                        <Item title="Enter the quote system" icon={faCheck} />
                        <Item title="Register your home location" icon={faCheck} />
                        <Item title="Select roofs to repair" icon={faCheck} />
                        <Item title="Fill out the contact information form" icon={faCheck} />
                        <Item
                            title="Ready, our system Will give you the exact quote and an assistant Will contact you"
                            icon={faCheck}
                        />
                    </div>
                    <div className="flex w-full items-center justify-center pr-7 lg:pr-11 xl:pr-0 gap-2 ">
                        <span className="max-w-96 w-full sm:font-title text-center text-sm sm:text-xl text-white px-5 sm:px-10 py-3 rounded-bl-3xl rounded-tr-3xl  tracking-wider  bg-[#028bdb]">
                            If you want a free quote click on the side button
                        </span>

                        <div className="w-full max-w-60">
                            <svg viewBox="0 0 150.94 54.11">
                                <path
                                    className=""
                                    d="m17.17,30c.13.23.48.46.11.78-1.4,1.25-2.86,2.43-3.62,4.26-.32.77-1.15,1.32-1.59,2.06-.96,1.62-1.9,3.25-2.55,5.03-.26.71-.58,1.39-.8,2.11-.18.6-.65,1.03-.76,1.71-.07.43-.34,1.52-1.41,1.14-.03.14-.1.28-.07.41.02.09.16.21.25.22.54.03-.21.92.54.79-.16.29-.26.64-.49.86-.35.34-.01.56.04.82-.08.08-.16.16-.24.24.13.04.26.07.39.11.89.63-.35,1.25-.02,1.88-.13.04-.26.07-.39.1-.46.11-1.14.45-1.34.27-.36-.33-.68-.34-1.07-.34-.13,0-.26.05-.4.08.09.15.16.39.28.42.31.06.76-.27.84.34.03.21.06.56-.04.62-.23.13-.55.13-.83.18.4-.9-.3-.66-.81-.66-.03.01.03-.01.08-.03-.07-.08-.13-.17-.22-.22-.03-.01-.12.1-.18.15.08.04.17.09.33.1-.27.67-.28.67-.62.24-.19-.24-.25-1.18-.68-.11-.03.07-.46.08-.6-.02-1.14-.81-1.53-2.55-1.18-4.2.61-2.84,1.57-5.55,2.63-8.24,1.04-2.66,2.56-5.04,4.13-7.38,1.33-1.98,2.91-3.76,4.55-5.52,1.23-1.32,2.48-2.63,3.86-3.77,1.17-.97,2.45-1.86,3.71-2.74,2.07-1.45,4.44-2.15,6.64-3.26,1.63-.82,3.44-1.04,5.17-1.53,3.14-.88,8.52-.75,11.14-.28,1.62.29,3.17.94,4.74,1.46,1.82.6,3.66,1.27,5.22,2.36,1.99,1.38,4.14,2.52,6.13,3.9,1.6,1.12,3.27,2.11,4.9,3.19.93.62,1.68,1.45,2.7,1.97,2.02,1.04,3.84,2.4,5.89,3.42,2.06,1.03,4.19,1.87,6.34,2.65,2.69.97,5.5,1.54,8.38,1.55,2.05,0,4.06-.23,6.09-.67,2.1-.45,3.9-1.51,5.85-2.25.88-.33,1.78-.66,2.58-1.15,1.72-1.06,3.55-1.96,5.05-3.34.57-.52,1.36-.64,1.92-1.3.55-.65,1.56-.9,2.22-1.49.61-.54,1.48-.79,1.85-1.6,2-.75,3.4-2.39,5.09-3.59,1.56-1.1,3.31-2.03,4.57-3.55,1.35-.44,2.3-1.49,3.35-2.34,1.92-1.54,3.92-2.99,5.9-4.45,1.89-1.4,3.58-3.07,5.6-4.3.24-.14.38-.44.58-.65.12-.13.26-.24.39-.35-.22-.1-.46-.31-.65-.27-1.87.37-3.72-.1-5.58-.09-3.78.01-7.55-.1-11.32-.38-1.28-.09-2.57-.23-3.83-.48-.45-.09-1.05-.48-1.2-.87-.19-.5,0-1.14.07-1.72.02-.11.32-.16.44-.29.34-.36.86.03,1.24-.35.29-.29.7-.47,1.07-.66,1.03-.52,2.17-.52,3.29-.63,2.43-.23,4.88-.02,7.3-.32.51-.06,1.04.08,1.57.12,1.51.11,3.02,0,4.53,0,1.44,0,2.91.21,4.35-.15.42-.11.92.11,1.39.15,2.03.18,4.07-.22,6.1.16.4.08.82.12,1.22.19.52.1.66.51.66.96,0,1.02.43,1.95.58,2.95.03.18.15.35.37.75-.03.08-.17-.04-.32-.16,0,.16-.05.35.01.49.09.2.26.36.39.54.02-.2.04-.4-.09-.86-.1-.43-.03-.63-.01-.83.01-.22-.03-.44-.05-.65.14.19.38.36.41.56.17,1.04.3,2.08.41,3.12.41,4.11.62,8.23,1,12.34.17,1.82.57,3.71.06,5.56.4,1.15-.86,1.66-1.01,2.6-.12-.03-.29-.02-.35-.1-.11-.14-.14-.35-.24-.51-.18-.27-.39-.51-.59-.77.08.29.26.6.2.86-.13.54-.33,1.09-.6,1.57-.13.23-.47.39-.75.45-.1.02-.29-.33-.43-.51-.07-.09-.14-.19-.21-.28-.06.11-.14.21-.17.33-.09.35-.13.71-.24,1.05-.32.93-.56,1.03-1.54.72-.31-.1-.49-.23-.5-.63-.04-.99-.16-1.97-.28-2.95,0-.06-.22-.15-.34-.14-.09,0-.25.15-.24.22.04.81.02,1.64.19,2.43.11.49.04.86-.26,1.16-.25.24-1.37-.19-1.58-.62-.53-1.09-1-2.19-1.04-3.45-.08-2.72-.22-5.45-.27-8.17-.06-2.72.03-5.45-.23-8.17-.02-.22-.09-.43-.13-.64-.13.15-.24.33-.4.45-2.08,1.6-4.12,3.24-6.02,5.07-.65.63-1.42,1.21-2.16,1.78-.7.54-1.35,1.12-2.02,1.68-.71.6-1.4,1.3-2.15,1.79-1.7,1.1-2.96,2.66-4.54,3.87-1.71,1.31-3.34,2.74-5.01,4.12-.99.82-1.96,1.66-2.99,2.43-1.18.89-2.46,1.65-3.62,2.57-.78.62-1.68,1.05-2.4,1.79-.55.58-1.62.55-2.07,1.39-1.36.3-2.28,1.38-3.49,1.97-1.09.53-2.29.8-3.2,1.74-.37.39-1.06.73-1.87.6-.53-.08-1.15.39-1.71.63-.92.4-1.84.81-2.76,1.21-1.02-.5-1.75.92-2.77.42-3.74,1.33-7.62,1.06-11.46.88-2.55-.12-5.09-.48-7.52-1.38-.67-.25-1.39-.37-2.1-.54-.61-.14-1-.83-1.72-.67-1.95-1.19-4.04-2.1-6.01-3.27-2.09-1.24-4.01-2.72-6.05-4.01-1.03-.65-1.93-1.51-2.9-2.24-3.32-2.51-6.61-5.06-10.16-7.24-2.8-1.71-5.77-3.04-9.17-3.16-1.09-.04-2.08.31-3.13.38-1.96.13-3.64,1.13-5.33,1.98-1.24.63-2.3,1.63-3.43,2.48-.61.46-1.19.94-1.79,1.42-.23.18-.54.32-.67.55-.5.85-1.33,1.19-2.26,1.56-.03.01.03-.01.08-.03-.07-.08-.13-.17-.22-.22-.03-.01-.12.1-.18.15.08.04.17.09.33.1Zm132.2-14.79c0,.32,0,.46.02.6.02.11.09.22.14.32.08-.13.23-.27.22-.39-.01-.14-.17-.26-.02.67-.14-.08-.25-.15-.37-.21-.03.11-.11.24-.07.31.07.14.21.25.32.37.03-.14.07-.28-.25-1.67ZM5.66,48.91c0,.32,0,.46.02.6.02.11.09.22.14.32.08-.13.23-.27.22-.39-.01-.14-.17-.26-.02.67-.14-.08-.25-.15-.37-.21-.03.11-.11.24-.07.31.07.14.21.25.32.37.03-.14.07-.28-.25-1.67ZM149.27,10.89c.59-.45-.09-.79-.11-1.19.59-.45-.09-.79-.11-1.19.59-.45-.09-.79-.27-2.11,0,.32,0,.46.02.6.02.11.09.22.14.32.08-.13.23-.27.22-.39-.01-.14-.17-.26-.22.39-.59.45.09.79.11,1.19-.59.45.09.79.11,1.19-.59.45.09.79.32,1.47-.14-.08-.25-.15-.37-.21-.03.11-.11.24-.07.31.07.14.21.25.32.37.03-.14.07-.28-.09-.75Zm-6.6,9.57c.22.19.38.34.55.49-.01-.17-.05-.35-.03-.52.02-.18.17-.36.14-.52-.28-1.32-.2-2.65-.18-3.98.02-1.32-.02-2.66-.18-3.97-.17-1.39.04-2.77-.09-4.15-.01-.16-.13-.31-.19-.47-.13.15-.24.38-.4.43-.58.2-.24.53-.21.87.14,1.78.38,3.58.28,5.35-.11,1.8.44,3.58.07,5.37-.02.1.35.24.38.39.04.21-.07.44-.13.7ZM1.59,51.72c.24.23.41.38.57.53.09-.23.26-.46.25-.69-.03-.8-.15-1.6-.17-2.4,0-.33.37-.69-.15-.93-.09.31-.18.62-.27.93-.08.29-.2.57-.22.86-.04.57-.01,1.14-.01,1.69Zm8-11.05c-.13-.09-.25-.21-.29-.19-.15.08-.27.2-.4.31.08.06.18.18.23.16.15-.06.29-.17.47-.28Zm-5.36,10.1c-.17-.03-.32-.1-.39-.06-.14.08-.24.23-.36.35.11.02.25.09.33.05.15-.07.26-.21.42-.34ZM147.66,9.48c-.03.17-.1.32-.06.39.08.14.23.24.35.36.02-.11.09-.25.05-.33-.07-.15-.21-.26-.34-.42Zm1.95,3.3c-.06-.2-.08-.37-.16-.52-.02-.05-.18-.03-.27-.04.03.17.04.34.09.5.02.04.18.03.34.05Zm-2.81-11.37c.07.05.15.11.22.17.02-.06.08-.14.06-.16-.05-.07-.14-.12-.21-.18-.02.06-.04.11-.07.18Zm.53,3.06c.07.05.15.11.22.17.02-.06.08-.14.06-.16-.05-.07-.14-.12-.21-.18-.02.06-.04.11-.07.18Zm.03.66c-.02.06-.08.14-.06.16.05.07.14.12.21.18.02-.06.08-.14.06-.16-.05-.07-.14-.12-.21-.18Zm.51,3.83c.03-.07.05-.12.07-.18-.09,0-.19-.02-.28,0-.03,0-.04.1-.07.16.09,0,.19.02.28.02Zm1.53,4.68c.05-.07.11-.15.17-.22-.06-.02-.14-.08-.16-.06-.07.05-.12.14-.18.21.06.02.11.04.18.07Zm.21,1.14c.03-.07.05-.12.07-.18-.09,0-.19-.02-.28,0-.03,0-.04.1-.07.16.09,0,.19.02.28.02Zm.04,4.3c.07.05.15.11.22.17.02-.06.08-.14.06-.16-.05-.07-.14-.12-.21-.18l-.07.18Zm-6.04,5.25c-.07-.05-.15-.11-.22-.17-.02.06-.08.14-.06.16.05.07.14.12.21.18.02-.06.04-.11.07-.18Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Item({ title, icon }) {
    return (
        <div className="flex w-full items-center gap-1 md:gap-5 ">
            <div className="flex justify-center items-center sm:w-8 aspect-square border-2 sm:border-[3px] border-solid border-black rounded-md ">
                <FontAwesomeIcon icon={icon} className="text-xl sm:text-2xl text-green-500" />
            </div>
            <span className="flex w-full font-title md:text-xl text-balance text-start tracking-wider">
                {title}
            </span>
        </div>
    );
}
