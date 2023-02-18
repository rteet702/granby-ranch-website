"use client";

import Image from "next/image";
import { useState } from "react";
import closeButton from "../../public/x.svg";

interface IProps {
    text: string;
}

export default function Notification({ text }: IProps) {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return <></>;
    }

    return (
        <div className="fixed top-8 z-[600] w-full">
            <div className="w-fit mx-auto bg-yellow-500 p-4 flex items-center gap-10 drop-shadow-lg">
                <button className="w-8" onClick={() => setIsVisible(false)}>
                    <Image src={closeButton} alt="x" />
                </button>
                {text}
            </div>
        </div>
    );
}
