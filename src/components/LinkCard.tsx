import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    href: string;
    classes?: string;
}

export default function LinkCard({ href, classes, children, ...rest }: Props) {
    return (
        <Link
            className={`${classes} flex-1 h-full font-thin text-white flex flex-col items-center justify-end hover:bg-slate-100 hover:text-black transition-colors pb-3 hover:shadow-inner`}
            href={href}
            {...rest}
        >
            {children}
        </Link>
    );
}
