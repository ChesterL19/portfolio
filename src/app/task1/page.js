"use client";
import { useState } from "react";
import Login from"./login";

export default function Page() {
    const [isDark,setisDark] = useState(false);

    return(
        <main className={isDark ? "bg-gradient-to-bl from-blue-400 to-gray-800 text-white min-h-screen":"bg-gradient-to-b from-blue-400 to-gray-400 text-black min-h-screen"}>
            <div className="flex justify-center items-center">
                <div className="flex flex-col w-50 justify-center items-center">
                    <button onClick={() => setisDark(!isDark)} className=" p-2 m-5 rounded-4xl text-sm font-semibold bg-gray-400 hover:bg-gray-900 
                    focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                        {isDark ? "☀️" : "🌙"}
                    
                    </button>
                </div>
            </div>
            <Login />
        </main>
    )

}
