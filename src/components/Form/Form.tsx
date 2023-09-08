import { useEffect, useRef, useState } from "react";
import styles from "./form.module.css";

export function Form() {
    const [userName, setUserName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (submitted) {
            const section2 = document.getElementById("section2");
            if (section2) {
                setTimeout(() => {
                    section2.scrollIntoView({ behavior: "smooth" });
                }, 800);
            }
        }
    }, [submitted]);

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        setSubmitted(true);
    }

    return (
        <>
            <section className={styles.formContainer} id="section1">
                <h3 className={styles.block}>
                    {submitted ? `Welcome ${userName}!` : ""}
                </h3>
                <form action="submit" onSubmit={handleSubmit}>
                    <label htmlFor="userName">First name: </label>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </section>
        </>
    );
}
