"use client";

import Link from "next/link";
import { useState } from "react";

function Abilities({skills}){
    return(
        <section className="p-10 bg-gray-100 bg-opacity-70 backdrop-blur-lg w-lg h-96 text-black rounded-3xl shadow-lg skill-card">
            <h1 className="font-bold text-3xl fade-in-down">
                Backend
            </h1>
            <div className="flex items-center justify-center my-8">
                <hr className="w-full border-t-1 border-gray-900/50 divider-animate"/>
            </div>
            <div className="w-full h-full">
                <ul className="w-full grid grid-cols-3 space-y-3 pl-4 pt-10 stagger-container">
                    {skills.map((skill,index) =>(
                        <li 
                            key={index} 
                            className="text-xl cursor-pointer skill-item stagger-item"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

const Backend = () =>{
    const backendSkills = ["Python", "C#", "Java", "Node.js", "SQL"]

    return(
        <div>
            <Abilities skills={backendSkills}/>
        </div>
    )
}

export default Backend;