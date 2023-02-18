"use client";

import { useAtom } from "jotai";
import { FormEvent, useState } from "react";
import closeButton from "../../public/x.svg";
import Image from "next/image";

export default function NavModal() {
    const [show, setShow] = useState(false);

    const handleToggle = (
        event: FormEvent<HTMLButtonElement | HTMLDivElement>
    ) => {
        event.preventDefault();
        setShow((prev) => !prev);
    };

    if (!show)
        return (
            <button
                onClick={handleToggle}
                className="p-3 bg-slate-700 hover:bg-slate-200 fill-white hover:fill-black transition-colors"
            >
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </button>
        );

    return (
        <>
            <div
                onClick={handleToggle}
                className="absolute top-0 right-0 left-0 h-screen bg-black bg-opacity-40 z-[100] cursor-pointer"
            ></div>
            <div className="absolute top-0 right-0 h-screen px-32 py-16 w-full lg:w-1/3 flex flex-col gap-16 bg-slate-700 bg-opacity-90 backdrop-blur-sm z-[300] text-neutral-300">
                <button onClick={handleToggle}>
                    <Image
                        src={closeButton}
                        alt="x"
                        className="w-8 h-8 absolute top-8 left-8"
                    />
                </button>
                <div className="flex items-start justify-between gap-6">
                    <ul className="flex flex-col text-right gap-1 text-xl">
                        <h2 className="text-4xl text-white">Plan</h2>
                        <li>Tickets and Passes</li>
                        <li>Indy Pass</li>
                        <li>Rentals</li>
                        <li>Lessons</li>
                        <li>Weddings</li>
                        <li>Groups</li>
                        <li>Families</li>
                    </ul>
                    <ul className="flex flex-col text-right gap-1 text-xl">
                        <h2 className="text-4xl text-white">Play</h2>
                        <li>Events</li>
                        <li>Ski</li>
                        <li>Dining</li>
                        <li>Golf</li>
                        <li>Bike</li>
                        <li>Fly Fish</li>
                        <li>Ski and Stay</li>
                    </ul>
                </div>
                <div className="flex items-start justify-between gap-6">
                    <ul className="flex flex-col text-right gap-1 text-xl">
                        <h2 className="text-4xl text-white">Moutnain Info</h2>
                        <li>Live Camera</li>
                        <li>Ski Report and Weather</li>
                        <li>Tickets and Passes</li>
                        <li>Directions</li>
                        <li>Uphill Policy</li>
                        <li>Accessibility</li>
                    </ul>
                    <ul className="flex flex-col text-right gap-1 text-xl">
                        <h2 className="text-4xl text-white">Community</h2>
                        <li>Careers</li>
                        <li>News</li>
                        <li>Live at Granby Ranch</li>
                    </ul>
                </div>
                <div className="text-right">
                    <p className="text-cyan-600">#GranyRanchRising</p>
                    <p className="text-yellow-600">QUESTIONS? CALL US TODAY!</p>
                    <p className="text-white">888.850.4615</p>
                </div>
            </div>
        </>
    );
}
