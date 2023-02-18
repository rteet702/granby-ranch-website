"use client";

import { FormEvent } from "react";
import GoldButton from "./GoldButton";

export default function EmailForm() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your email"
                className="p-3 focus:outline-none border-2"
            />
            <GoldButton href="#">SUBMIT</GoldButton>
        </form>
    );
}
