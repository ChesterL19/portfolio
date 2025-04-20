"use client";

import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return(
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen">

            <div className="bg-transparent rounded-2xl shadow-2xl w-100 p-6 max-w-sm mx-auto px-4">

                <div className="flex flex-col items-stretch gap-4">

                    <div className="text-sm  mb-4 text-center">
                        <h2 className="text-xl md:text-2xl font-bold ">Tracer</h2>
                        <p>Find the vibe. Trace the night</p>
                    </div>
                    
                    <div className="text-sm">
                        
                        <input // email
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 my-1  py-2 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-amber-50 bg-gray-100/40"/>

                        <input type={showPassword ? "text" : "password"} //password
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 my-1  py-2 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-amber-50 bg-gray-100/40"/>

                        <div className="flex justify-between items-center">
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-lg mt-1 self-end hover:opacity-80 transition">
                                {showPassword ? "👁️" : "🙈"}
                            </button>

                            <button className="text-xs">forgot password</button>
                        </div>

                    </div>

                    <div className="flex items-center gap-2">
                        <button className="w-full px-4 my-1  py-2 bg-teal-400 rounded-3xl hover:bg-teal-600">Continue</button>
                    </div>
                    <div className="flex items-center gap-2 my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="text-gray-500 text-sm">or </span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <div className="flex flex-col md:flex-wrap gap-2">
                        <button className="w-full px-4 my-1 py-2 bg-gray-300/40 rounded-4xl hover:bg-blue-400 "  >Continue with Gmail</button>
                        <button className="w-full px-4 my-1 py-2 bg-gray-300/40 rounded-4xl hover:bg-blue-400"  >Continue with Apple</button>
                    </div>


                </div>   
            </div>
        </div>

    )
}