
"use client"

import Image from "next/image";
import { useIsVisible } from "../utils/useIsVisible";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {


    const ref = useRef(null)
    const isVisible1 = useIsVisible(ref);

    const listOfRef = useRef(null)
    const listOfVisible = useIsVisible(listOfRef);

    return (
        <div className="flex flex-col py-30 items-center gap-20 relative overflow-hidden">
            <Image width={246} height={246} alt="logo" src="/images/logo-short.png" className="w-[65vw] animate-spin animate-infinite animate-alternate animate-ease-in-out animate-duration-[4000ms] filter blur-[120px] hidden md:block absolute left-0 -translate-x-1/2 md:-translate-x-1/4 bottom-0 translate-y-16 md:translate-y-24" />
            <Image width={246} height={246} alt="logo" src="/images/logo-short.png" className="w-[70vw] animate-spin animate-infinite animate-alternate animate-ease-in-out animate-duration-[4000ms] animate-delay-1000 filter blur-[120px] hidden md:block absolute -right-[30vw] top-0 translate-x-24 -translate-y-16 md:translate-x-8 md:-translate-y-32 2xl:-translate-y-44" />
            <div className="flex flex-col text-center w-full relative justify-center">


                <h1 className="text-6xl font-bold text-[#323a45] tracking-tight mb-6 animate-delay-100 animation-duration-400 animate-fade-right">Progress begins with refusal</h1>
                <div className="mt-4 text-lg text-[#3f6184] mx-auto max-w-2xl text-center animate-delay-200 animation-duration-400 animate-fade-right">Every great habit starts with dropping a bad one. Log your NotToDos and stay intentional.</div>
                <div className="mt-6 animate-delay-300 animate-fade-right animation-duration-400">
                    <Link href="/auth/login" className="hover:scale-[1.1] inline-block px-6 py-3 bg-[#6cc2d2] text-white font-semibold rounded-lg hover:bg-(--text) transition">
                        Log your first NotToDo
                    </Link>
                </div>
                <Image width={512} height={512} src="/images/not-to-do-logo.png" alt="logo" className="bg-transparent mx-auto animate-delay-400 animate-fade-right animation-duration-400" />

            </div>
            <div ref={listOfRef} className="flex flex-col gap-4 justify-center w-full items-center">
                <h1 className="text-6xl text-center font-bold text-[#323a45] tracking-tight mb-6 animate-delay-100 animation-duration-400 animate-fade-right">What you&apos;re can do?</h1>
                <div className="grid w-fit md:grid-cols-2 grid-cols-1 gap-6 max-w-6xl">
                    <div className="flex flex-col gap-2">
                        <Image width={452} height={452} src="/images/first-time-example.jpg" alt="logo" className={`bg-transparent rounded-2xl animate-delay-400  animation-duration-400 ${listOfVisible ? "opacity-100 animate-fade-right" : "opacity-0"}`} />
                        <div className={`text-2xs text-[#3f6184] tracking-tight mb-6 animate-delay-100 animation-duration-400  ${listOfVisible ? "opacity-100 animate-fade-right" : "opacity-0"}`}><b className="">Mindful Refusal.</b>Track what you choose not to do — and why.
                            Build focus by letting go with intention.</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image width={452} height={452} src="/images/first-time-example.jpg" alt="logo" className={`bg-transparent rounded-2xl animate-delay-400 animation-duration-400 ${listOfVisible ? "opacity-100 animate-fade-left" : "opacity-0"}`} />
                        <div className={`text-2xs text-[#3f6184] tracking-tight mb-6 animate-delay-100 animation-duration-400  ${listOfVisible ? "opacity-100 animate-fade-left" : "opacity-0"}`}><b className="">Declutter Habits.</b>Remove habits, distractions, or toxic routines.
                            Create space for what truly matters.</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image width={452} height={452} src="/images/first-time-example.jpg" alt="logo" className={`bg-transparent rounded-2xl animate-delay-400  animation-duration-400 ${listOfVisible ? "opacity-100 animate-fade-right" : "opacity-0"}`} />
                        <div className={`text-2xs text-[#3f6184] tracking-tight mb-6 animate-delay-100 animation-duration-400 ${listOfVisible ? "opacity-100 animate-fade-right" : "opacity-0"}`}><b className="">Simple Logging.</b>Just one click to log what you won’t do.
                            Fast, honest, and always in your control.</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image width={452} height={452} src="/images/first-time-example.jpg" alt="logo" className={`bg-transparent rounded-2xl animate-delay-400 animation-duration-400 ${listOfVisible ? "opacity-100 animate-fade-left" : "opacity-0"}`} />
                        <div className={`text-2xs text-[#3f6184] tracking-tight mb-6 animate-delay-100 animation-duration-400 ${listOfVisible ? "opacity-100 animate-fade-left" : "opacity-0"}`}><b className="">Reflect & Grow.</b>Look back on your NotToDos to see progress.
                            Less noise. More clarity.</div>
                    </div>
                </div>
            </div>
            <div ref={ref} className={`flex flex-col gap-4`}>
                <h1 className={`text-6xl font-bold text-[#323a45] tracking-tight  animate-delay-600 animation-duration-400 ${isVisible1 ? "opacity-100 animate-fade-up" : "opacity-0"}`}>Look at your statistic</h1>
                <div className={`mb-6 text-lg text-[#3f6184] mx-auto max-w-2xl text-center animate-delay-200 animation-duration-400  ${isVisible1 ? "opacity-100 animate-fade-left" : "opacity-0"}`}>Each logged NotToDo adds to your personal progress map.
                    Understand your habits, recognize triggers, and celebrate self-control.</div>
                <Image width={600} height={816} src="/images/statistic-example.jpg" alt="logo" className={`bg-transparent rounded-2xl mx-auto animate-delay-600 animation-duration-400 ${isVisible1 ? "opacity-100 animate-fade-down" : "opacity-0"}`} />
            </div>
        </div>
    );
}
