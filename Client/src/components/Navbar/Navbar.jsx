import "./Navbar.css";
import { useState, useEffect } from "react";
import useScroll from "../../hooks/useScroll";

function Navbar() {
    const scrolled = useScroll();
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            let current = "home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;

                if (
                    window.scrollY >= sectionTop &&
                    window.scrollY < sectionTop + sectionHeight
                ) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">

            <div className="logo">
            Portfolio
            </div>

            <ul className="nav-links">
                <li>
                    <a 
                        href="#home"
                        className={activeSection === "home" ? "active" : ""}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href="#about"
                        className={activeSection === "about" ? "active" : ""}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a 
                        href="#skills"
                        className={activeSection === "skills" ? "active" : ""}
                    >
                        Skills
                    </a>
                </li>
                <li>
                    <a 
                        href="#projects"
                        className={activeSection === "projects" ? "active" : ""}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a 
                        href="#experience"
                        className={activeSection === "experience" ? "active" : ""}
                    >
                        Experience
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact"
                        className={activeSection === "contact" ? "active" : ""}
                    >
                        Contact
                    </a>
                </li>
            </ul>

        </div>
        </nav>
    );
}

export default Navbar;