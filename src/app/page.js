"use client";
import NavBar from "@/components/NavBar";
import Skill from "@/components/Skill";
import Frontend from "@/components/Frontend";
import Backend from "@/components/Backend";
import Tools from "@/components/Tools";
import Others from "@/components/Others";
import Footer from "@/components/Footer";

export default function Home(){
    return(
        <main className="bg-white text-black/75 min-h-screen">
            <NavBar />

            {/* Hero Section */}
            <section className="p-10 flex" id="home">
                <div className="container mx-auto h-screen">
                    <div className="flex flex-col justify-center items-center text-center w-full h-full">
                        <h1 className="text-6xl font-bold max-w-7xl">
                            Chester is a <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
                            front-end developer
                            </span> and <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
                                 UI/UX Designer.</span>
                        </h1>
                        <p className="text-2xl mt-10 max-w-3xl font-semibold text-black/60">Passionate about creating clean, user-centered digital experiences.</p>
                        <p className="text-2xl mt-4 max-w-2xl font-semibold text-black/60">Inspired by aesthetics and grounded in real-life needs.</p>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="flex items-center justify-center my-8">
                <hr className="w-full border-t-1 border-gray-400/50"/>
            </div>

            {/* About Section */}
            <section className="p-10 flex" id="about">
                <div className="container mx-auto min-h-screen flex items-center justify-between">
                    <div className="mb-80">
                        <hr className="mb-4 border-t4 border-gray-500/50"/>
                        <h1 className="text-9xl font-extrabold flex justify-items-start text-black/75">Chester</h1>
                        <hr className="mb-4 border-t4 border-gray-500/50"/>
                        <h1 className="text-9xl font-bold flex justify-items-start text-black/75">Laraya</h1>
                        <hr className="mb-4 border-t4 border-gray-500/50"/>
                    </div>
                    <div className="mb-64 mr-20 w-72 h-96">
                        <img src="/pro.JPG" alt="pro" className="object-cover rounded-2xl opacity-80"/>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="flex items-center justify-center my-8">
                <hr className="w-full border-t-1 border-gray-400/50"/>
            </div>
            
            {/* Info Section */}
            <section className="p-10 flex" id="info">
                <h1 className="absolute left-7 text-xl font-semibold bg-gradient-to-r from-gray-400 to-white/90 bg-clip-text text-transparent">Info</h1>
                <div className="mx-4 mt-4 pr-32 flex justify-between p-10 items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-4 mt-10">
                        <div className="relative top-1/2 -translate-y-40">
                            <img
                            src="/cow.jpg"
                            alt="cow"
                            className="w-56 h-80 object-cover rounded-2xl opacity-80 scale-90"
                            />
                        </div>
                        
                        <img 
                        src="/sky.jpg" 
                        alt="sky" 
                        className="w-52 h-96 object-cover rounded-2xl"/>
                        
                        <div className="relative top-1/2 -translate-y-40">
                            <img 
                            src="/tree.jpg" 
                            alt="tree" 
                            className="w-56 h-80 object-cover rounded-2xl opacity-80 scale-90"/>
                        </div>
                    </div>
                    <div className="space-y-10 container max-w-lg text-xl">
                        <p className="font-semibold">I&#39;m a UX designer and Front-end developer with background in software development.</p>
                        <p className="font-semibold">
                            My journey into design started with a love for aesthetics, especially in fashion, photography, architecture,
                            and a curiosity about why things are made the way they are. When I discovered user-centered design, everything clicked. 
                            I realized I could build digital experiences that not only look great but also <span className="bg-yellow-300 text-gray-800/80 px-2">help people stay connected and not get left behind by technology.</span>
                        </p>
                        <p className="font-semibold">
                        I enjoy playing with my ideas and turning them into digital experiences that people can actually use and enjoy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="flex items-center justify-center my-8">
                <hr className="w-full border-t-1 border-gray-400/50"/>   
            </div>

            {/* Skills Section */}
            <section id="skills">
                <div>
                    <Skill />
                </div>
            </section>

            {/* Divider */}
            <div className="flex items-center justify-center my-8">
                <hr className="w-full border-t-1 border-gray-400/50"/>   
            </div>

            {/* Education Section */}
            <section id="education">
                <h1 className="pl-8 mb-2 text-2xl font-semibold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">Education</h1>
                <div className="mx-4 mt-4 flex justify-between p-10 items-center w-full text-black/75">
                    <div className="flex flex-col ml-56 mt-10">
                        <p className="font-bold text-2xl">Southern Alberta Institute of Technology</p>
                        <p className="font-semibold text-xl">Calgary, Alberta</p>
                        <p>2023-2025</p>
                        <div className="mt-8">
                            <p className="font-extrabold">Diploma in Software Development</p>
                        </div>
                    </div>
                    <div className="mr-56">
                        <p className="font-bold text-2xl">Coursera</p>
                        <p>2025-2025</p>
                        <div className="mt-8">
                            <p className="font-extrabold">Google UX Design Certificate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="flex items-center justify-center my-8">
                <hr className="w-full border-t-1 border-gray-400/50"/>   
            </div>

            {/* Footer */}
            <Footer />
        </main>
    )
}