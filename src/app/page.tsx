import GoldButton from "@/components/GoldButton";
import { Lato } from "@next/font/google";
import Image from "next/image";
import logo from "../../public/logo-white.png";
import LinkCard from "@/components/LinkCard";
import Link from "next/link";

const lato = Lato({ weight: "900", subsets: ["latin"] });

export default function Home() {
    return (
        <main className={lato.className}>
            {/* main hero */}
            <section
                aria-label="hero main header"
                className='bg-[url("../../public/bg.jpg")] h-[100svh] text-slate-700 relative'
            >
                <div className="blur-feathered w-1/2 flex flex-col items-start justify-start p-16 gap-64">
                    <Link href="/">
                        <Image src={logo} alt="Granby Ranch" />
                    </Link>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl">
                            PLAN YOUR NEXT
                            <span className="text-6xl block">SKI VACATION</span>
                        </h1>
                        <p className="text-xl">
                            Purchase your rentals and lessons in advance.
                        </p>
                        <div className="flex gap-3">
                            <GoldButton href="/ski-snowboard-rentals">
                                Rentals
                            </GoldButton>
                            <GoldButton href="/ski-snowboard-lessons">
                                Lessons
                            </GoldButton>
                        </div>
                    </div>
                </div>
                {/* footer options */}
                <div className="bg-black absolute bottom-0 left-[32rem] right-[32rem] h-32 flex drop-shadow-2xl z-10">
                    <LinkCard classes="bg-blue-900" href="/tickets-passes">
                        <p>TICKETS & PASSES</p>
                    </LinkCard>
                    <LinkCard
                        classes="bg-cyan-700"
                        href="/ski-snowboard-rentals"
                    >
                        <p>RENTALS</p>
                    </LinkCard>
                    <LinkCard
                        classes="bg-yellow-500"
                        href="/ski-snowboard-lessons"
                    >
                        <p>LESSONS</p>
                    </LinkCard>
                    <LinkCard classes="bg-slate-700" href="/events-activities">
                        <p>EVENTS</p>
                    </LinkCard>
                </div>
            </section>
        </main>
    );
}
