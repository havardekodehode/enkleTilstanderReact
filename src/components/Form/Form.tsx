import { useEffect, useRef, useState } from "react";
import styles from "./form.module.css";

export function Form() {
    const [userName, setUserName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const userNameInputRef = useRef();

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
        setSubmitted(true);
        e.preventDefault();
        setUserName(userNameInputRef.current.value);
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
                        ref={userNameInputRef}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </section>
        </>
    );
}
