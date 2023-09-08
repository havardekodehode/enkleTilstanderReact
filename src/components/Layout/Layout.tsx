import { ReactNode } from "react";
import { NavBar } from "../NavBar/NavBar";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}
