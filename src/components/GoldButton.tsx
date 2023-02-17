import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    href: string;
}

export default function GoldButton({ href, children, ...rest }: Props) {
    return (
        <Link
            href={href}
            {...rest}
            className="bg-yellow-500 text-white px-5 py-3 border-yellow-500 border-2 hover:bg-cyan-600 hover:border-white transition-colors"
        >
            {children}
        </Link>
    );
}
