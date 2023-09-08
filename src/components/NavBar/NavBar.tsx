import { useEffect, useState } from "react";
import styles from "./navBar.module.css";

export function NavBar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        // Function to handle scroll events
        function handleScroll() {
            const sections = document.querySelectorAll("section");

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const sectionId = section.id;

                if (rect.top <= 50 && rect.bottom >= 50) {
                    // The section is currently in the viewport
                    setActiveSection(sectionId);
                }
            });
        }

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Initial check for active section on mount
        handleScroll();

        // Cleanup on unmount
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
            <div className={styles.navContainer}>
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
