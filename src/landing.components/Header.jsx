import React, { useRef, useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import tinycolor from "tinycolor2";
import FormConsult from "./Formconsult";
import socials from "./../mooks/social.json";
import { InfoContext } from "../context/info";

// Styled components

// Top header component with styles
const TopHeader = styled.div`
    background-color: #dc2626;
    color: #ffffff;
    text-align: center;
    padding: 0.5rem 0;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 50;
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.isVisible ? "translateY(0)" : "translateY(-100%)")};
    display: none;
`;

// **Desktop Version Components**
// Main header component with styles
const MainHeader = styled.div`
    position: fixed;
    top: ${(props) => (props.isTopHeaderVisible ? "1rem" : "0.5rem")};
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    width: 90%;
    max-width: 1400px;
    padding: 2.25rem 1rem;
    height: 3rem;
    background: ${(props) => (props.isTop ? "rgba(0, 0, 0, 0.5)" : "#000000")};
    color: ${(props) => (props.isTop ? props.textColor : "white")};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.3s, color 0.3s, top 0.3s, height 0.3s;
`;

// Logo wrapper component with styles
const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
`;

// Logo image component with styles
const Logo = styled.img`
    width: auto;
    height: 100%;
    max-height: 5rem;
    object-fit: contain;

    @media (min-width: 768px) {
        max-height: 6rem;
    }
`;

// Navigation link component with styles
const NavLink = styled(Link)`
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Arial", sans-serif;
    transition: all 0.2s;
    color: ${(props) => (props.isTop ? props.textColor : "white")};
    text-shadow: ${(props) => (props.isTop ? "1px 1px 2px black" : "none")};
    ${(props) =>
        props.active
            ? `
        color: #f8a61f;
        background-color: #3a3a3a;
        border-radius: 1.5rem;
      `
            : `
        &:hover {
          color: #f8a61f;
        }
      `}
`;

// Free estimate button component with styles
const FreeEstimateButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #dc2626;
    color: white;
    border-radius: 0.75rem;
    font-size: 1rem;
    font-family: "Arial", sans-serif;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    &:hover {
        background-color: #dc8500;
        transform: scale(1.05);
    }
    @media (max-width: 767px) {
        margin: 0 auto;
    }
`;

// Submenu container component with styles
const SubMenuContainer = styled.div`
    position: relative;
`;

// Submenu component with styles
const SubMenu = styled.div`
    display: flex;
    background-color: #1f2937;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1rem;
    width: ${(props) => (props.isHelp ? "250px" : "500px")};
    z-index: 48;
    padding: 1rem;
    visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
    opacity: ${(props) => (props.isVisible ? "1" : "0")};
    transition: visibility 0.3s, opacity 0.3s;
    border-radius: 1rem;
`;

// Submenu column component with styles
const SubMenuColumn = styled.div`
    flex: 1;
    padding: 0 1rem;
`;

// Submenu title component with styles
const SubMenuTitle = styled.div`
    font-weight: 600;
    font-family: "Arial", sans-serif;
    padding: 0.5rem 0;
    text-transform: uppercase;
    font-size: 1rem;
    color: white;
    text-align: center;
    margin-bottom: 0.5rem;
`;

// Submenu link component with styles
const SubMenuLink = styled(Link)`
    padding: 0.25rem 0;
    color: #f8f8f8;
    text-transform: capitalize;
    display: block;
    font-family: "Arial", sans-serif;
    font-weight: 300;
    padding-left: 1.5rem;
    &:hover {
        color: #f8a61f;
    }
`;

// Divider component
const Divider = styled.div`
    width: 1px;
    background-color: #ffffff;
    margin: 0 1rem;
`;

// **Mobile Version Components**
// Mobile header component with styles
const MobileHeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

const MobileMenu = styled.div`
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #1f2937;
    padding: 1rem;
    color: #ffffff;
    position: fixed;
    top: 4rem; /* Ajusta el top para que esté debajo del header */
    left: 0;
    width: 100%;
    height: calc(100% - 4rem); /* Ajusta la altura para que no cubra el header */
    z-index: 49;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
    overflow-y: auto;
`;

const MobileNavLink = styled(Link)`
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Arial", sans-serif;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        background-color: #374151;
    }
`;

const MobileSubMenuTitle = styled.div`
    padding: 0.5rem 1rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Arial", sans-serif;
    width: 100%;
    padding-left: 2rem;
`;

const MobileSubMenuLink = styled(Link)`
    padding: 0.5rem 1rem;
    color: #ffffff;
    text-transform: capitalize;
    display: block;
    font-family: "Arial", sans-serif;
    padding-left: 3rem;
    &:hover {
        background-color: #4b5563;
    }
`;

const MobileSubMenuToggle = styled.div`
    padding: 0.5rem 1rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Arial", sans-serif;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #374151;
    }
`;

const SeeMore = styled.span`
    font-style: italic;
    color: gray;
    font-size: 0.8rem;
`;

// Join our community section
const CommunitySection = styled.div`
    text-align: center;
    padding: 1rem;
    margin-top: auto; /* Push to the bottom of the mobile menu */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    svg {
        width: 2rem; /* Tamaño más grande */
        height: 2rem; /* Tamaño más grande */
    }
`;

export default function Header({
    withSliderIn = [],
    isVisibleModalFormConsult,
    setIsVisibleModalFormConsult,
}) {
    const closeElement = useRef(null);
    const { pathname } = useLocation();
    const isSliderIn = withSliderIn.find((path) => path.includes(pathname)) ? true : false;

    const [isOpen, setIsOpen] = useState(false); // State for mobile menu
    const [isTopHeaderVisible, setIsTopHeaderVisible] = useState(true); // State for top header visibility
    const [activeSubMenu, setActiveSubMenu] = useState(null); // State for active submenu
    const [isTop, setIsTop] = useState(true); // State for tracking if the header is at the top
    const [textColor, setTextColor] = useState("white"); // State for the text color

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setIsTopHeaderVisible(true); // Show top header when at the top
            setIsTop(true); // Set header to top state
        } else {
            setIsTopHeaderVisible(false); // Hide top header when scrolling down
            setIsTop(false); // Unset header from top state
        }
    };

    useEffect(() => {
        const determineTextColor = () => {
            const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
            const color = tinycolor(backgroundColor);
            const brightness = color.getBrightness();
            setTextColor(brightness > 125 ? "black" : "white");
        };
        determineTextColor();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleSubMenu = (menu) => {
        setActiveSubMenu(activeSubMenu === menu ? null : menu); // Toggle submenu visibility
    };

    if (closeElement.current) {
        closeElement.current.addEventListener("click", () => setIsOpen(false)); // Close mobile menu
    }

    return (
        <>
            <TopHeader isVisible={isTopHeaderVisible}>
                <span>
                    Sign up for 20% off your first order. <Link to="/subscribe">Subscribe.</Link>
                </span>
            </TopHeader>

            {/* Desktop Header */}
            <div className="hidden lg:block">
                <MainHeader
                    isTopHeaderVisible={isTopHeaderVisible}
                    isTop={isTop}
                    textColor={textColor}
                >
                    <LogoWrapper to="/">
                        <Logo src="/img/logo.png" alt="Logo" />
                    </LogoWrapper>

                    <div className="hidden lg:flex items-center space-x-4">
                        <Option name="Home" to="/" isTop={isTop} textColor={textColor} />
                        <SubMenuContainer
                            onMouseEnter={() => toggleSubMenu("services")}
                            onMouseLeave={() => toggleSubMenu(null)}
                        >
                            <NavLink to="#" isTop={isTop} textColor={textColor}>
                                Services <FontAwesomeIcon icon={faAngleDown} />
                            </NavLink>
                            <SubMenu isVisible={activeSubMenu === "services"} isHelp={false}>
                                <SubMenuColumn>
                                    <SubMenuTitle>Home Improvement</SubMenuTitle>
                                    <SubMenuLink to="/services/roofing">Roofing</SubMenuLink>
                                    <SubMenuLink to="/services/siding">Siding</SubMenuLink>
                                    <SubMenuLink to="/services/gutter">Gutter</SubMenuLink>
                                    <SubMenuLink to="/services/carpentry">Carpentry</SubMenuLink>
                                    <SubMenuLink to="/services/paint">Painting</SubMenuLink>
                                </SubMenuColumn>
                                <Divider />
                                <SubMenuColumn>
                                    <SubMenuTitle>Restoration</SubMenuTitle>
                                    <SubMenuLink to="/restoration/wind-damage">
                                        Wind Damage
                                    </SubMenuLink>
                                    <SubMenuLink to="/restoration/water-damage">
                                        Water Damage
                                    </SubMenuLink>
                                    <SubMenuLink to="/restoration/tree-damage">
                                        Tree Damage
                                    </SubMenuLink>
                                </SubMenuColumn>
                            </SubMenu>
                        </SubMenuContainer>
                        <Option
                            name="Financing"
                            to="/financing"
                            isTop={isTop}
                            textColor={textColor}
                        />
                        <Option name="Gallery" to="/gallery" isTop={isTop} textColor={textColor} />
                        <Option name="Areas" to="/work-areas" isTop={isTop} textColor={textColor} />
                        <SubMenuContainer
                            onMouseEnter={() => toggleSubMenu("help")}
                            onMouseLeave={() => toggleSubMenu(null)}
                        >
                            <NavLink to="#" isTop={isTop} textColor={textColor}>
                                Help <FontAwesomeIcon icon={faAngleDown} />
                            </NavLink>
                            <SubMenu isVisible={activeSubMenu === "help"} isHelp={true}>
                                <SubMenuColumn>
                                    <SubMenuTitle>Help</SubMenuTitle>
                                    <SubMenuLink to="/about-us">About Us</SubMenuLink>
                                    <SubMenuLink to="/contact-us">Contact Us</SubMenuLink>
                                    <SubMenuLink to="/work-with-us">Work With Us</SubMenuLink>
                                    <SubMenuLink to="/faq">Faq</SubMenuLink>
                                </SubMenuColumn>
                            </SubMenu>
                        </SubMenuContainer>
                        <Option
                            name="Roof Designer"
                            to="/roof-designer"
                            isTop={isTop}
                            textColor={textColor}
                        />
                    </div>

                    <FreeEstimateButton onClick={() => setIsVisibleModalFormConsult(true)}>
                        Free Estimates
                    </FreeEstimateButton>
                </MainHeader>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden">
                <MobileHeaderWrapper>
                    <Link to="/">
                        <img src="/img/logo.png" alt="Logo" className="h-10" />
                    </Link>
                    <FreeEstimateButton onClick={() => setIsVisibleModalFormConsult(true)}>
                        Free Estimates
                    </FreeEstimateButton>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        <FontAwesomeIcon icon={faBars} className="text-2xl" />
                    </button>
                </MobileHeaderWrapper>

                <MobileMenu isOpen={isOpen}>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="self-end text-white text-3xl mb-4"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
                        Home
                    </MobileNavLink>
                    <MobileSubMenuToggle onClick={() => toggleSubMenu("services")}>
                        Services
                        <SeeMore>{activeSubMenu === "services" ? "See Less" : "See More"}</SeeMore>
                    </MobileSubMenuToggle>
                    {activeSubMenu === "services" && (
                        <>
                            <MobileSubMenuTitle>Home Improvement</MobileSubMenuTitle>
                            <MobileSubMenuLink
                                to="/services/roofing"
                                onClick={() => setIsOpen(false)}
                            >
                                Roofing
                            </MobileSubMenuLink>
                            <MobileSubMenuLink
                                to="/services/siding"
                                onClick={() => setIsOpen(false)}
                            >
                                Siding
                            </MobileSubMenuLink>
                            <MobileSubMenuLink
                                to="/services/gutter"
                                onClick={() => setIsOpen(false)}
                            >
                                Gutter
                            </MobileSubMenuLink>
                            <MobileSubMenuLink
                                to="/services/carpentry"
                                onClick={() => setIsOpen(false)}
                            >
                                Carpentry
                            </MobileSubMenuLink>
                            <MobileSubMenuLink
                                to="/services/paint"
                                onClick={() => setIsOpen(false)}
                            >
                                Painting
                            </MobileSubMenuLink>
                            <MobileSubMenuTitle>Restoration</MobileSubMenuTitle>
                            <MobileSubMenuLink
                                to="/restoration/wind-damage"
                                onClick={() => setIsOpen(false)}
                            >
                                Wind Damage
                            </MobileSubMenuLink>
                            <MobileSubMenuLink
                                to="/restoration/water-damage"
                                onClick={() => setIsOpen(false)}
                            >
                                Water Damage
                            </MobileSubMenuLink>
                            <MobileSubMenuLink
                                to="/restoration/tree-damage"
                                onClick={() => setIsOpen(false)}
                            >
                                Tree Damage
                            </MobileSubMenuLink>
                        </>
                    )}
                    <MobileNavLink to="/financing" onClick={() => setIsOpen(false)}>
                        Financing
                    </MobileNavLink>
                    <MobileNavLink to="/gallery" onClick={() => setIsOpen(false)}>
                        Gallery
                    </MobileNavLink>
                    <MobileNavLink to="/work-areas" onClick={() => setIsOpen(false)}>
                        Service Areas
                    </MobileNavLink>
                    <MobileSubMenuToggle onClick={() => toggleSubMenu("help")}>
                        Help
                        <SeeMore>{activeSubMenu === "help" ? "See Less" : "See More"}</SeeMore>
                    </MobileSubMenuToggle>
                    {activeSubMenu === "help" && (
                        <>
                            <MobileSubMenuLink to="/work-with-us" onClick={() => setIsOpen(false)}>
                                Work With Us
                            </MobileSubMenuLink>
                            <MobileSubMenuLink to="/contact-us" onClick={() => setIsOpen(false)}>
                                Contact Us
                            </MobileSubMenuLink>
                            <MobileSubMenuLink to="/about-us" onClick={() => setIsOpen(false)}>
                                About Us
                            </MobileSubMenuLink>
                            <MobileSubMenuLink to="/faq" onClick={() => setIsOpen(false)}>
                                FAQ's
                            </MobileSubMenuLink>
                        </>
                    )}
                    <MobileNavLink to="/roof-designer" onClick={() => setIsOpen(false)}>
                        Roof Designer
                    </MobileNavLink>
                    {/* Community Section */}
                    <CommunitySection>
                        <span className="opacity-70">Join our community</span>
                        <SocialIcons>
                            {socials.map((social) => (
                                <SocialItem key={social.id} {...social} />
                            ))}
                        </SocialIcons>
                    </CommunitySection>
                </MobileMenu>
            </div>

            <ModalFormConsult
                isVisible={isVisibleModalFormConsult}
                onClose={() => setIsVisibleModalFormConsult(false)}
            />
        </>
    );
}

function Option({ children, name, to, isTop, textColor, onClick, ...props }) {
    const { pathname } = useLocation();
    const isLocation = pathname === to;

    return (
        <div className="relative group flex items-center">
            <NavLink
                to={to}
                active={isLocation}
                isTop={isTop}
                textColor={textColor}
                onClick={onClick}
                {...props}
            >
                {name}
                {children && (
                    <FontAwesomeIcon icon={faAngleDown} className="ml-1 group-hover:hidden" />
                )}
                {children && (
                    <FontAwesomeIcon icon={faAngleUp} className="ml-1 hidden group-hover:block" />
                )}
            </NavLink>
            {children && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md hidden group-hover:block">
                    {children}
                </div>
            )}
        </div>
    );
}

function ModalFormConsult({ isVisible = false, onClose = null }) {
    const _window = useRef();
    if (_window.current) {
        _window.current.onclick = (e) => {
            if (e.target === _window.current) onClose();
        };
    }
    window.onkeydown = (e) => (e.key === "Escape" ? onClose() : null);
    return (
        <div className={"fixed inset-0 z-50 " + (isVisible ? "flex" : "hidden")}>
            <div
                ref={_window}
                className="fixed inset-0 bg-black/20 backdrop-blur-md cursor-pointer"
            />
            <button
                className="fixed top-3 right-3 z-20 w-10 aspect-square rounded-full bg-white/50"
                onClick={onClose}
            >
                <FontAwesomeIcon icon={faTimes} className="text-black" />
            </button>
            <div className="z-10 m-auto flex flex-col justify-center items-center">
                <FormConsult className="h-screen max-h-[800px] overflow-y-auto" />
                <p className="text-center text-black text-lg font-bold">
                    Press <b>ESC</b> or <b>click outside</b> the image to close
                </p>
            </div>
        </div>
    );
}

function SocialItem({ url, icon }) {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <div
                dangerouslySetInnerHTML={{ __html: icon }}
                className="icon w-8 aspect-square fill-white"
            />
        </a>
    );
}
