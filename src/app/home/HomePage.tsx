
"use client"

import Image from "next/image";
import { useIsVisible } from "../utils/useIsVisible";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
type Feature = {
    title: string;
    description: string;
};

export default function Home() {


    const ref = useRef(null)
    const isVisible1 = useIsVisible(ref);

    const listOfRef = useRef(null)
    const listOfVisible = useIsVisible(listOfRef);

    const futureFeatures = useRef(null);
    const futureFeaturesVisible = useIsVisible(futureFeatures);

    const [features, setFeatures] = useState<Feature[]>([]);

    useEffect(() => {
        fetch("/data/future-features.json")
            .then((res) => res.json())
            .then((data) => setFeatures(data));
    }, []);

    return (
        <div className="flex flex-col items-center gap-20 pb-30 relative overflow-hidden">
            <Image width={246} height={246} alt="logo" src="/images/logo-svg.svg" className="w-[65vw] animate-spin animate-infinite animate-alternate animate-ease-in-out animate-duration-[4000ms] filter blur-[120px] hidden md:block absolute left-0 -translate-x-1/2 md:-translate-x-1/4 bottom-0 translate-y-16 md:translate-y-24" />
            <Image width={246} height={246} alt="logo" src="/images/logo-svg.svg" className="w-[70vw] animate-spin animate-infinite animate-alternate animate-ease-in-out animate-duration-[4000ms] animate-delay-1000 filter blur-[120px] hidden md:block absolute -right-[30vw] top-0 translate-x-24 -translate-y-16 md:translate-x-8 md:-translate-y-32 2xl:-translate-y-44" />
            <div className="min-h-screen flex flex-col text-center w-full relative gap-8 justify-center px-26">

                <div className="flex flex-col justify-center gap-8 pt-20">
                    <h1 className="text-6xl font-bold text-(--accent) tracking-tight mb-6 animate-delay-100 animation-duration-400 animate-fade-right">Progress begins with refusal</h1>
                    <div className="mt-4 text-lg text-(--text) mx-auto max-w-2xl text-center animate-delay-200 animation-duration-400 animate-fade-right">Every great habit starts with dropping a bad one. Log your NotToDos and stay intentional.</div>
                    <div className="mt-4 text-lg text-(--text) mx-auto max-w-2xl text-center animate-delay-200 animation-duration-400 animate-fade-right">Choose your path</div>
                    <div className="flex flex-row gap-16 justify-center">
                        <Link href="https://www.google.com/" className="cursor-pointer group flex flex-col ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                width={160}
                                height={160}
                                className="group-hover:scale-y-[1.1] group-hover:scale-x-[-1.1] scale-x-[-1] transition drop-shadow-none group-hover:drop-shadow-[0_4px_6px_var(--blue)] bg-transparent animate-delay-400 animate-fade-right animation-duration-400"
                            >
                                <path
                                    d="M8.79623 6.64075C7.73459 5.57912 7.73459 3.85786 8.79623 2.79623C9.85786 1.73459 11.5791 1.73459 12.6408 2.79623L15.2038 5.35925C16.2654 6.42088 16.2654 8.14214 15.2038 9.20377C14.1421 10.2654 12.4209 10.2654 11.3592 9.20377L8.79623 6.64075Z"
                                    stroke="var(--blue)"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M14 4C14 4 13.7749 5.16765 12.4712 6.47139C11.1674 7.77513 10 8 10 8"
                                    stroke="var(--blue)"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M4 21.3884H6.25993C7.27079 21.3884 8.29253 21.4937 9.27633 21.6964C11.0166 22.0549 12.8488 22.0983 14.6069 21.8138M13.6764 18.5172C13.7962 18.5033 13.911 18.4874 14.0206 18.4699C14.932 18.3245 15.697 17.8375 16.3974 17.3084L18.2046 15.9433C18.8417 15.462 19.7873 15.4619 20.4245 15.943C20.9982 16.3762 21.1736 17.0894 20.8109 17.6707C20.388 18.3487 19.7921 19.216 19.2199 19.7459M13.6764 18.5172C13.6403 18.5214 13.6038 18.5254 13.5668 18.5292M13.6764 18.5172C13.8222 18.486 13.9669 18.396 14.1028 18.2775C14.746 17.7161 14.7866 16.77 14.2285 16.1431C14.0991 15.9977 13.9475 15.8764 13.7791 15.7759C10.9817 14.1074 6.62942 15.3782 4 17.2429M13.6764 18.5172C13.6399 18.525 13.6033 18.5292 13.5668 18.5292M13.5668 18.5292C13.0434 18.5829 12.4312 18.5968 11.7518 18.5326"
                                    stroke="var(--blue)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="text-lg opacity-0 group-hover:opacity-100 transition text-[var(--blue)] py-3 drop-shadow-[0_4px_6px_var(--blue)] animation-duration-300 group-hover:animate-fade-down">
                                Do nothing
                            </span>
                        </Link>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            width={160}
                            height={160}
                            className=""
                        >
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="var(--blue, #4caeff)" />
                                    <stop offset="100%" stopColor="var(--red, #ff4c4c)" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M5.65681 7.75728C5.26629 7.36675 4.63312 7.36675 4.2426 7.75728L1.41426 10.5857C0.633215 11.3667 0.633121 12.6331 1.41417 13.4141L4.24269 16.2425C4.63321 16.633 5.26638 16.633 5.6569 16.2425C6.04743 15.852 6.04743 15.2188 5.6569 14.8283L3.82849 12.9999L17.9998 12.9999L18.0015 12.9999H20.1714L18.3429 14.8283C17.9524 15.2188 17.9524 15.852 18.3429 16.2425C18.7335 16.633 19.3666 16.633 19.7572 16.2425L22.5856 13.4141C23.3666 12.633 23.3668 11.3667 22.5857 10.5857L19.7573 7.75725C19.3668 7.36672 18.7336 7.36672 18.3431 7.75725C17.9526 8.14777 17.9526 8.78094 18.3431 9.17146L20.1715 10.9999L3.82842 10.9999L5.65681 9.17149C6.04734 8.78097 6.04734 8.1478 5.65681 7.75728Z"
                                fill="url(#gradient)"
                            />
                        </svg>
                        <Link href="/nottodos" className="cursor-pointer flex flex-col gap-4 group">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                width={160}
                                height={160}
                                className="group-hover:scale-110 bg-transparent animate-delay-400 animate-fade-right animation-duration-400 group-hover:drop-shadow-[0_4px_6px_var(--red)] transition filter-(--accent)"
                            >
                                <path
                                    d="M8.79623 6.64075C7.73459 5.57912 7.73459 3.85786 8.79623 2.79623C9.85786 1.73459 11.5791 1.73459 12.6408 2.79623L15.2038 5.35925C16.2654 6.42088 16.2654 8.14214 15.2038 9.20377C14.1421 10.2654 12.4209 10.2654 11.3592 9.20377L8.79623 6.64075Z"
                                    stroke="var(--red)"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M14 4C14 4 13.7749 5.16765 12.4712 6.47139C11.1674 7.77513 10 8 10 8"
                                    stroke="var(--red)"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M4 21.3884H6.25993C7.27079 21.3884 8.29253 21.4937 9.27633 21.6964C11.0166 22.0549 12.8488 22.0983 14.6069 21.8138M13.6764 18.5172C13.7962 18.5033 13.911 18.4874 14.0206 18.4699C14.932 18.3245 15.697 17.8375 16.3974 17.3084L18.2046 15.9433C18.8417 15.462 19.7873 15.4619 20.4245 15.943C20.9982 16.3762 21.1736 17.0894 20.8109 17.6707C20.388 18.3487 19.7921 19.216 19.2199 19.7459M13.6764 18.5172C13.6403 18.5214 13.6038 18.5254 13.5668 18.5292M13.6764 18.5172C13.8222 18.486 13.9669 18.396 14.1028 18.2775C14.746 17.7161 14.7866 16.77 14.2285 16.1431C14.0991 15.9977 13.9475 15.8764 13.7791 15.7759C10.9817 14.1074 6.62942 15.3782 4 17.2429M13.6764 18.5172C13.6399 18.525 13.6033 18.5292 13.5668 18.5292M13.5668 18.5292C13.0434 18.5829 12.4312 18.5968 11.7518 18.5326"
                                    stroke="var(--red)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="text-lg text-(--red) drop-shadow-[0_4px_6px_var(--red)] opacity-0 group-hover:opacity-100 animation-duration-300 group-hover:animate-fade-down">Start changing</span>
                        </Link>
                    </div>
                    {/* <div className="mt-6 animate-delay-300 animate-fade-right animation-duration-400">
                        <Link href="/nottodos" className="hover:scale-[1.1] inline-block px-6 py-3 bg-(--accent) text-(--background) font-semibold rounded-lg hover:bg-(--primary) transition">
                            Log your first NotToDo
                        </Link>
                    </div> */}
                </div>

                <Image width={500} height={193} src="/images/logo-svg.svg" alt="logo" className="mx-auto aspect-[433/193] bg-transparent animate-delay-400 animate-fade-right animation-duration-400" />

            </div>

            <div ref={listOfRef} className="flex flex-col gap-4 justify-center w-full items-center">
                <h1 className="text-6xl text-center font-bold text-(--foreground) tracking-tight mb-6 animate-delay-100 animation-duration-400 animate-fade-right">What you&apos;re can do?</h1>
                <div className="grid w-fit md:grid-cols-2 grid-cols-1 gap-6 max-w-6xl">
                    <div className="flex flex-col gap-2">
                        <div className={`text-2xs text-(--text) tracking-tight mb-6 animate-delay-100 animation-duration-400  ${listOfVisible ? "opacity-100 animate-fade-right" : "opacity-0"}`}><b className="">Mindful Refusal.</b>Track what you choose not to do — and why.
                            Build focus by letting go with intention.</div>
                        <Image width={452} height={452} src="/images/first-time-example.jpg" alt="logo" className={`bg-transparent rounded-2xl animate-delay-400  animation-duration-400 ${listOfVisible ? "opacity-100 animate-fade-right" : "opacity-0"}`} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className={`text-2xs text-(--text) tracking-tight mb-6 animate-delay-100 animation-duration-400  ${listOfVisible ? "opacity-100 animate-fade-left" : "opacity-0"}`}><b className="">Declutter Habits.</b>Remove habits, distractions, or toxic routines.
                            Create space for what truly matters.</div>
                        <Image width={452} height={452} src="/images/first-time-example.jpg" alt="logo" className={`bg-transparent rounded-2xl animate-delay-400 animation-duration-400 ${listOfVisible ? "opacity-100 animate-fade-left" : "opacity-0"}`} />

                    </div>
                    <div className="flex flex-col gap-2">
                        <div className={`text-2xs text-(--text) tracking-tight mb-6 animate-delay-100 animation-duration-400 ${listOfVisible ? "opacity-100 animate-fade-right" : "opacity-0"}`}><b className="">Simple Logging.</b>Just one click to log what you won’t do.
                            Fast, honest, and always in your control.</div>
                        <Image width={452} height={452} src="/images/first-time-example.jpg" alt="logo" className={`bg-transparent rounded-2xl animate-delay-400  animation-duration-400 ${listOfVisible ? "opacity-100 animate-fade-right" : "opacity-0"}`} />

                    </div>
                    <div className="flex flex-col gap-2">
                        <div className={`text-2xs text-(--text) tracking-tight mb-6 animate-delay-100 animation-duration-400 ${listOfVisible ? "opacity-100 animate-fade-left" : "opacity-0"}`}><b className="">Reflect & Grow.</b>Look back on your NotToDos to see progress.
                            Less noise. More clarity.</div>
                        <Image width={452} height={452} src="/images/first-time-example.jpg" alt="logo" className={`bg-transparent rounded-2xl animate-delay-400 animation-duration-400 ${listOfVisible ? "opacity-100 animate-fade-left" : "opacity-0"}`} />
                    </div>
                </div>
            </div>
            <div ref={ref} className={`flex flex-col gap-4`}>
                <h1 className={`text-6xl font-bold text-(--foreground) tracking-tight  animate-delay-600 animation-duration-400 ${isVisible1 ? "opacity-100 animate-fade-up" : "opacity-0"}`}>Look at your statistic</h1>
                <div className={`mb-6 text-lg text-(--text) mx-auto max-w-2xl text-center animate-delay-200 animation-duration-400  ${isVisible1 ? "opacity-100 animate-fade-left" : "opacity-0"}`}>Each logged NotToDo adds to your personal progress map.
                    Understand your habits, recognize triggers, and celebrate self-control.</div>
                <Image width={600} height={816} src="/images/statistic-example.jpg" alt="logo" className={`bg-transparent rounded-2xl mx-auto animate-delay-600 animation-duration-400 ${isVisible1 ? "opacity-100 animate-fade-down" : "opacity-0"}`} />
            </div>
            <section ref={futureFeatures} className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Future Features</h2>
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} 
                        style={{ animationDelay: `${index * 200}ms` }}
                        className={`border p-4 rounded-md shadow-sm animation-duration-400 bg-white/5 ${futureFeaturesVisible ? "opacity-100 animate-fade-left" : "opacity-0"}`}>
                            <h3 className="font-semibold text-lg">{feature.title}</h3>
                            <p className="text-sm text-gray-300">{feature.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
