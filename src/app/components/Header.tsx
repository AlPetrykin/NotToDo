

import { auth0 } from "@/lib/auth0";
import Image from "next/image";

export default async function Header() {
    const session = await auth0.getSession();



    return (
        <div className="flex z-10 fixed shadow-lg flex-row justify-between bg-(--background) w-full p-4">
            <Image width={140} height={120} src="/images/no-to-do-hor.png" alt="logo" />
            <div className=" flex flex-row content-end justify-end">
                {!session ? (
                    <div className="flex flex-row gap-4 items-center">
                        <a href="/auth/login" className="text-(--primary)  cursor-pointer hover:scale-[1.1] hover:text-(--accent) transition duration-200 py-3 px-6 font-bold rounded-md">Sign In</a>
                        <a href="/auth/login?screen_hint=signup" className="h-fit shadow-lg text-white bg-(--primary) cursor-pointer hover:scale-[1.1] hover:bg-(--accent) transition duration-200 py-3 px-6 font-bold rounded-md">Sign Up</a>
                    </div>
                ) : (
                    <a href="/auth/logout" className="shadow-lg h-fit text-(--white) bg-(--primary)  cursor-pointer hover:scale-[1.1] hover:bg-(--accent) transition duration-200 py-3 px-6 font-bold rounded-md">Logout</a>
                )}
            </div>
        </div>

    );
}