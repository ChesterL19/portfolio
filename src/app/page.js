"use client";
import { useEffect } from "react";
import { initAnimations } from "@/utils/animations";
import NavBar from "@/components/NavBar";
import Skill from "@/components/Skill";
import Frontend from "@/components/Frontend";
import Backend from "@/components/Backend";
import Tools from "@/components/Tools";
import Others from "@/components/Others";
import Footer from "@/components/Footer";

export default function Home(){
    useEffect(() => {
        initAnimations();
    }, []);

    return(
        <main className="bg-white text-black/75">
            <NavBar />

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center" id="home">
                <div className="container mx-auto px-10">
                    <div className="flex flex-col justify-center items-center text-center w-full">
                        <h1 className="text-6xl font-bold max-w-7xl fade-in-up interactive-hover">
                            Chester is a <span className="gradient-text-animate">
                            front-end developer
                            </span> and <span className="gradient-text-animate">
                                 UI/UX Designer.
                            </span>
                        </h1>
                        <p className="text-2xl mt-10 max-w-3xl font-semibold text-black/60 fade-in-up interactive-hover">
                            Passionate about creating clean, user-centered digital experiences.
                        </p>
                        <p className="text-2xl mt-4 max-w-2xl font-semibold text-black/60 fade-in-up interactive-hover">
                            Inspired by aesthetics and grounded in real-life needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="py-16">
                <hr className="w-full border-t border-gray-400/50 divider-animate"/>
            </div>

            {/* About Section */}
            <section className="min-h-screen flex items-center" id="about">
                <div className="container mx-auto px-10">
                    <div className="flex items-center justify-between w-full">
                        <div className="scroll-slide-left">
                            <hr className="mb-4 border-t border-gray-500/50"/>
                            <h1 className="text-9xl font-extrabold text-black/75 interactive-hover">
                                Chester
                            </h1>
                            <hr className="mb-4 border-t border-gray-500/50"/>
                            <h1 className="text-9xl font-bold text-black/75 interactive-hover">
                                Laraya
                            </h1>
                            <hr className="mb-4 border-t border-gray-500/50"/>
                        </div>
                        <div className="scroll-scale-in hover-lift">
                            <img src="/pro2.JPG" alt="pro" className="w-72 h-96 object-cover rounded-2xl opacity-80"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="py-16">
                <hr className="w-full border-t border-gray-400/50 divider-animate"/>
            </div>
            
            {/* Info Section */}
            <section className="min-h-screen flex items-center" id="info">
                <div className="container mx-auto px-10">
                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-gray-400 to-white/90 bg-clip-text text-transparent cursor-pointer scroll-fade-in interactive-hover mb-16">
                        Info
                    </h1>
                    <div className="flex justify-between items-center gap-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="scroll-fade-in hover-lift hover-rotate">
                                <img
                                src="/cow.jpg"
                                alt="cow"
                                className="w-56 h-80 object-cover rounded-2xl opacity-80"
                                />
                            </div>
                            
                            <img 
                                src="/sky.jpg" 
                                alt="sky" 
                                className="w-52 h-96 object-cover rounded-2xl scroll-fade-in hover-lift"
                            />
                            
                            <div className="scroll-fade-in hover-lift hover-rotate">
                                <img 
                                src="/tree.jpg" 
                                alt="tree" 
                                className="w-56 h-80 object-cover rounded-2xl opacity-80"
                                />
                            </div>
                        </div>
                        <div className="space-y-8 max-w-lg text-xl scroll-slide-right">
                            <p className="font-semibold interactive-hover">
                                I&#39;m a UX designer and Front-end developer with background in software development.
                            </p>
                            <p className="font-semibold interactive-hover">
                                My journey into design started with a love for aesthetics, especially in fashion, photography, architecture,
                                and a curiosity about why things are made the way they are. When I discovered user-centered design, everything clicked. 
                                I realized I could build digital experiences that not only look great but also <span className="bg-yellow-300 text-gray-800/80 px-2 interactive-hover">
                                    help people stay connected and not get left behind by technology.
                                </span>
                            </p>
                            <p className="font-semibold interactive-hover">
                            I enjoy playing with my ideas and turning them into digital experiences that people can actually use and enjoy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="py-16">
                <hr className="w-full border-t border-gray-400/50 divider-animate"/>
            </div>

            {/* Skills Section */}
            <section className="min-h-screen flex items-center" id="skills">
                <div className="container mx-auto px-10">
                    <Skill />
                </div>
            </section>

            {/* Divider */}
            <div className="py-16">
                <hr className="w-full border-t border-gray-400/50 divider-animate"/>
            </div>

            {/* Education Section */}
            <section className="min-h-screen flex items-center" id="education">
                <div className="container mx-auto px-10">
                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent cursor-pointer scroll-fade-in interactive-hover mb-16">
                        Education
                    </h1>
                    <div className="flex justify-between items-center w-full">
                        <div className="scroll-slide-left interactive-hover">
                            <p className="font-bold text-2xl">Southern Alberta Institute of Technology</p>
                            <p className="font-semibold text-xl">Calgary, Alberta</p>
                            <p>2023-2025</p>
                            <div className="mt-8">
                                <p className="font-extrabold">Diploma in Software Development</p>
                            </div>
                        </div>
                        <div className="scroll-slide-right interactive-hover">
                            <p className="font-bold text-2xl">Coursera</p>
                            <p>2025-2025</p>
                            <div className="mt-8">
                                <p className="font-extrabold">Google UX Design Certificate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="py-16">
                <hr className="w-full border-t border-gray-400/50 divider-animate"/>
            </div>

            {/* Footer */}
            <Footer />
        </main>
    )
}