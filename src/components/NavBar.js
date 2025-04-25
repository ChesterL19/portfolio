"use client";
import Link from "next/link";

export default function NavBar(){


    return(
        <div className="flex  gap-4 min-h-full items-center font-semibold text-black/50 h-20 justify-end px-10">
            <div className="flex items-start w-full">
                <h3 className="flex items-start min-h-full">Chester Laraya</h3>
            </div>
            <div className="flex flex-row gap-4">
                <Link href="/">
                <h3 >Home</h3>
                </Link>
                <Link href="/about">
                    <h3> About</h3>
                </Link>
                <h3>Contact</h3>
            </div>
        </div>

    );
}

