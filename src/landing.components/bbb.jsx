import { useEffect, useState } from "react";

const BBB = ({ isMenuOpen }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://seal-ct.bbb.org/inc/legacy.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const bbbContainerStylesDesktop = {
        position: "fixed",
        bottom: "10px",
        right: "100px",
        zIndex: 45,
        backgroundColor: "transparent",
    };

    const bbbContainerStylesMobile = {
        position: "fixed",
        bottom: "10px",
        left: "10px",
        zIndex: 45,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        padding: "0",
        boxShadow: "none",
    };

    const linkStyles = {
        display: "block",
    };

    if (isMobile && isMenuOpen) {
        return null;
    }

    return (
        <div style={isMobile ? bbbContainerStylesMobile : bbbContainerStylesDesktop}>
            <a
                href="https://www.bbb.org/us/ct/stamford/profile/home-improvement/g-a-castro-construction-llc-0111-110084464/#sealclick"
                target="_blank"
                rel="noreferrer"
                style={linkStyles}
            >
                <img
                    src="https://seal-ct.bbb.org/seals/blue-seal-200-65-bbb-110084464.png"
                    style={{ border: 0 }}
                    alt="G.A. Castro Construction LLC BBB Business Review"
                />
            </a>
        </div>
    );
};

export default BBB;
