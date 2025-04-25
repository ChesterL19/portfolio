"use client";

import Link from "next/link";
import { useState } from "react";
import Backend from "./Backend";
import Others from "./Others";
import Frontend from "./Frontend";
import Tools from "./Tools";


const Skill = () =>{

    return(
        <div className="flex flex-row justify-center gap-4 ">
            <div>
                <Frontend />
            </div>

            <div>
                <Tools />
            </div>

            <div>
                <Backend />
            </div>
        </div>
    )

} 

export default Skill;