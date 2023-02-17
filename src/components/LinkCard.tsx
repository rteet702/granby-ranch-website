import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    href: string;
    classes?: string;
}

export default function LinkCard({ href, classes, children, ...rest }: Props) {
    return (
        <Link
            className={`${classes} flex-1 font-thin text-white flex flex-col items-center justify-center hover:bg-slate-100 hover:text-black transition-colors h-16 hover:shadow-inner`}
            href={href}
            {...rest}
        >
            {children}
        </Link>
    );
}
