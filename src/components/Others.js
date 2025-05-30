"use client";

import Link from "next/link";
import { useState } from "react";

function Abilities ({skills}){

    return(
        <section className=" p-10 bg-black w-lg h-96 text-white mx- rounded-2xl">
            <h1 className="font-bold text-3xl">Others</h1>
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

const Others = () => {

    const OthersSkills = ["Music", "fashion", "Time Management"]

    return(
        <div>
            <Abilities skills={OthersSkills} />
        </div>
    );

}

export default Others;