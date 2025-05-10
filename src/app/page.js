"use client";
import NavBar from "@/components/NavBar";
import Practice from "@/components/Practice";




export default function Home(){
    return(
        <main className="bg-white text-black/75  min-h-screen">

                <NavBar />

            <section className="p-10 flex" >
                {/*hero page */}
                <div className=" container mx-auto h-screen ">

                    <div className=" flex flex-col justify-center items-center text-center w-full h-full   ">
                        <h1 className="text-6xl  font-bold  max-w-7xl ">Chester is a <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
                        front-end developer
                        </span> and <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
                             UI/UX Designer.</span>
                        </h1>

                        <p className="text-2xl  mt-10 max-w-3xl font-semibold text-black/60">Passionate about creating clean, user-centered digital experiences.</p>
                        <p className="text-2xl  mt-4 max-w-2xl font-semibold text-black/60">Inspired by aesthetics and grounded in real-life needs.</p>
                    </div>
                </div>
            </section>

            {/*devider section */}
            <div className="flex items-center justify-center my-8">
                <hr className="w-full border-t-1 border-gray-400/50"/>
            </div>


        </main>

    )
}