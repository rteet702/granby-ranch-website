"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-white.png";
import NavModal from "./NavModal";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [fade, setFade] = useState(false);

    const listenScrollEvent = (event: Event) => {
        if (window.scrollY > 0) {
            setFade(true);
        } else {
            setFade(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <nav
            className={`fixed z-20 px-4 lg:px-16 py-4 flex items-center justify-between w-full transition-colors duration-500 ${
                fade ? "bg-slate-700" : "bg-transparent"
            }`}
        >
            <Link href="/">
                <Image src={logo} alt="Granby Ranch" />
            </Link>
            <NavModal />
        </nav>
    );
}
