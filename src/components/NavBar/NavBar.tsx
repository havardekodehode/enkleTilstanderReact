import { useEffect, useState } from "react";
import styles from "./navBar.module.css";

export function NavBar() {
    const [activeSection, setActiveSection] = useState("");
    const [thirdSection, setThirdSection] = useState(false);

        function handleScroll() {
            const sections = document.querySelectorAll("section");

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const sectionId = section.id;
                const windowHeight = window.innerHeight;

                if (
                    rect.top <= windowHeight / 2 &&
                    rect.bottom >= windowHeight / 2
                ) {
                    setActiveSection(sectionId);
                }
            });
        }

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { label: "Home", sectionId: "section1" },
        { label: "Counter", sectionId: "section2" },
        { label: "Carousel", sectionId: "section3" },
    ];

    return (
        <>
            <div
                className={styles.navContainer}
                style={{ backgroundColor: thirdSection ? "gray" : "" }}
            >
                <ul>
                    {navLinks.map(({ label, sectionId }) => (
                        <li
                            key={sectionId}
                            className={`${styles.navLi} ${
                                activeSection === sectionId ? styles.active : ""
                            }`}
                        >
                            <a href={`#${sectionId}`}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
