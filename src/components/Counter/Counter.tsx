import { useState } from "react";
import styles from "./counter.module.css";

export function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    function reset() {
        setCount(0);
    }

    return (
        <>
            <section className={styles.counterContainer} id="section2">
                <button
                    onClick={increment}
                    className={styles.button}
                    type="button"
                >
                    Increment
                </button>
                <div className={styles.container}>
                    <h1>{count}</h1>
                    <button onClick={reset} type="button">
                        Reset
                    </button>{" "}
                </div>
                <button
                    onClick={decrement}
                    className={styles.button}
                    type="button"
                >
                    Decrement
                </button>
            </section>
        </>
    );
}
