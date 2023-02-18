import GoldButton from "@/components/GoldButton";
import { Lato } from "@next/font/google";
import Image from "next/image";
import igLogo from "../../public/ig-2.svg";
import grlogo from "../../public/grlogo.png";
import cloudIcon from "../../public/clouds.svg";
import LinkCard from "@/components/LinkCard";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import NotificationModal from "@/components/Notification";
import EmailForm from "@/components/EmailForm";

const lato = Lato({ weight: "900", subsets: ["latin"] });

interface IWeatherAPIResponse {
    message: string;
    data: {
        temperature: number;
    };
}

export default async function Home() {
    const currentWeatherData: IWeatherAPIResponse = await getWeatherData();

    return (
        <main className={lato.className}>
            {/* extra alert */}
            <NotificationModal text="Limited Availability for Walk-Up Rental Equipment. Reservations are Recommended." />
            {/* navbar */}
            <Navbar />
            <section
                aria-label="hero main header"
                className='bg-[url("../../public/bg.jpg")] h-[100svh] text-slate-700 relative'
            >
                {/* main hero */}
                <div className="blur-feathered w-full lg:w-1/2 flex flex-col text-center lg:text-left items-center lg:items-start justify-center lg:p-16 gap-3">
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
                {/* footer options */}
                <div className="bg-black absolute bottom-0 left-[32rem] right-[32rem] drop-shadow-2xl z-10 hidden 2xl:flex">
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
                {/* weather widget */}
                <div className="bg-slate-700 text-white absolute bottom-0 right-0 h-16 w-full lg:w-auto lg:min-w-[6rem] shadow-lg px-6 flex items-center justify-center gap-5">
                    {currentWeatherData ? (
                        <>
                            <Image
                                className="h-6 w-6"
                                src={cloudIcon}
                                alt="clouds"
                            />
                            <span className="block lg:hidden">
                                Current Weather:{" "}
                            </span>
                            <p>
                                {currentWeatherData.data.temperature.toFixed(0)}{" "}
                                °F
                            </p>
                        </>
                    ) : (
                        "Api is Dead"
                    )}
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-5 py-8">
                <div className="text-center">
                    <h2 className="text-4xl">Plan Your Trip</h2>
                    <p className="text-xl">
                        No matter the season, Granby Ranch has entertainment,
                        events and activities for everyone!
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <Link
                        href="/directions-granby-ranch"
                        className="flex flex-col gap-5 items-center justify-center"
                    >
                        <Image
                            height={250}
                            width={250}
                            src="/sections/wanda.jpg"
                            alt="truck"
                            className="hover:opacity-60 transition-all duration-500 cursor-pointer"
                        />
                        <p>Directions, Parking, and Hours</p>
                    </Link>
                    <Link
                        href="/"
                        className="flex flex-col gap-5 items-center justify-center"
                    >
                        <Image
                            height={250}
                            width={250}
                            src="/sections/dining.jpg"
                            alt="food"
                            className="hover:opacity-60 transition-all duration-500 cursor-pointer"
                        />
                        <p>Dining</p>
                    </Link>
                    <Link
                        href="/"
                        className="flex flex-col gap-5 items-center justify-center"
                    >
                        <Image
                            height={250}
                            width={250}
                            src="/sections/weddings.jpg"
                            alt="bride and groom"
                            className="hover:opacity-60 transition-all duration-500 cursor-pointer"
                        />
                        <p>Weddings and Groups</p>
                    </Link>
                    <Link
                        href="/"
                        className="flex flex-col gap-5 items-center justify-center"
                    >
                        <Image
                            height={250}
                            width={250}
                            src="/sections/mountain.jpg"
                            alt="snowy mountains"
                            className="hover:opacity-60 transition-all duration-500 cursor-pointer"
                        />
                        <p>Mountain Info</p>
                    </Link>
                </div>
            </section>
            <section className='bg-[url("../../public/bg-2.svg")] p-16 text-white flex justify-around items-center'>
                <div>
                    <h2 className="text-4xl">GRANBY SOCIAL</h2>
                    <p>
                        Check out the latest from posts in and around Granby
                        Ranch
                    </p>
                </div>
                <a
                    href="https://www.instagram.com/granbyranch/"
                    target="_blank"
                    className="flex gap-4"
                >
                    <p>Connect with us</p>
                    <Image src={igLogo} alt="instagram logo" />
                </a>
            </section>
            <section className="p-4 flex lg:flex-row flex-wrap gap-5 justify-center">
                <img
                    className="w-[150px] lg:w-[350px]"
                    src="https://via.placeholder.com/350"
                    alt="placeholder"
                />
                <img
                    className="w-[150px] lg:w-[350px]"
                    src="https://via.placeholder.com/350"
                    alt="placeholder"
                />
                <img
                    className="w-[150px] lg:w-[350px]"
                    src="https://via.placeholder.com/350"
                    alt="placeholder"
                />
                <img
                    className="w-[150px] lg:w-[350px]"
                    src="https://via.placeholder.com/350"
                    alt="placeholder"
                />
                <img
                    className="w-[150px] lg:w-[350px]"
                    src="https://via.placeholder.com/350"
                    alt="placeholder"
                />
            </section>
            <section className="bg-[#5996A8] p-16 text-white lg:flex gap-8 justify-around">
                <div>
                    <h2 className="text-4xl">STAY IN THE LOOP</h2>
                    <p>
                        Subscribe to receive the latest news, offers and deals
                        from Granby Ranch.
                    </p>
                </div>
                <EmailForm />
            </section>
            <section className='bg-[url("../../public/bg-2.svg")] p-16 text-white flex flex-col lg:flex-row justify-center items-start gap-16'>
                <Image src={grlogo} alt="gr in a circle" />
                <ul className="flex flex-wrap gap-4 max-w-[500px]">
                    <li>Contact Us</li>
                    <li>Directions</li>
                    <li>Careers</li>
                    <li>News</li>
                    <li>Mountain Info</li>
                    <li>Safety and Policies</li>
                    <li>Granby Ranch Rising</li>
                    <li>Live at Granby Ranch</li>
                    <li>Privacy Policy</li>
                </ul>
                <div>
                    <h2 className="text-yellow-600 text-xl">
                        HOURS OF OPERATION
                    </h2>
                    <p>Base Lodge Services – 8am-5pm</p>
                    <p>First Chair Cafe – 8am-2pm</p>
                    <p>Bluebird Bistro – 11am-8pm</p>
                    <p>8350 Lounge – Fri. and Sat. 3pm-6pm</p>
                </div>
            </section>
        </main>
    );
}

async function getWeatherData() {
    if (!process.env.API_KEY) {
        throw new Error(
            "Ensure the developer has set the API key in the environment settings."
        );
    }

    const headers = new Headers({ "x-api-key": process.env.API_KEY });
    const response = await fetch(
        "https://api.ambeedata.com/weather/latest/by-lat-lng?lat=40.043705&lng=-105.905750",
        { headers, next: { revalidate: 3600 } }
    );

    if (!response.ok) {
        console.error(response);
        throw new Error("Failed to fetch data.");
    }

    const converted = await response.json();
    return {
        message: converted.message,
        data: converted.data,
    } as IWeatherAPIResponse;
}
