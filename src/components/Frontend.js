"use client";

import Link from "next/link";
import { useState } from "react";

function Abilities ({skills}){

    return(
        <section className=" p-10 bg-gradient-to-t from-sky-300 to-sky-600 w-lg h-96 text-white bg-opacity-70 backdrop-blur-lg shadow-lg rounded-2xl">
            <h1 className="font-bold text-3xl">Frontend</h1>
            <div className="flex items-center justify-center my-8">
                <hr className="w-full border-t-1 border-white"/>
                
            </div>
            <div className="w-full h-full" >
                <ul className=" w-full grid grid-cols-3  space-y-3 pl-4 pt-10" >
                    {skills.map((skill,index) =>(
                        <li key={index} className="text-xl">{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    )

}

const Frontend = () => {

    const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]

    return(
        <div>
            <Abilities skills={frontendSkills} />
        </div>
    );

}

export default Frontend;