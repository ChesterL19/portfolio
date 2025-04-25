"use client";
import NavBar from "@/components/NavBar";
import Task from "./task.json";
import Practice from "@/components/Practice";




export default function Home(){
    return(
        <main className="bg-white text-black/80 min-h-screen">

                <NavBar />

            <section className="p-10 flex" >
                {/*hero page */}
                <div className=" container mx-auto h-screen mt-16 ">

                    <div className=" flex justify-start items-end w-full h-full ">
                        <h1 className="text-4xl  font-semibold mb-72 block max-w-2xl leading-10">Chester is a <span className="text-5xl text-neutral-500">
                            UX designer</span> and <span className="gradient-full">front-end developer</span>, 
                            passionate about creating clean, 
                            user-centered digital experiences that are inspired by aesthetics and grounded in 
                            real-life needs.
                        </h1>
                    </div>
                </div>
            </section>

            {/*devider section */}
            <div className="flex items-center justify-center my-8">
                <hr className="w-full border-t-1 border-gray-400/50"/>
            </div>

            {/*project section */}
            <section>
            <h1 className="p-2 m-2 text-2xl font-semibold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">Welcome to my World!</h1>
                 <div className="flex flex-col gap-2 items-center container mx-auto px-8 mt-32">
                
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full relative hover:z-50">
                      {/*grid of cards*/}
                      {Task.map((exercise, index) => (
                      <div key={index}>
                        <Practice
                          image={exercise.image}
                          name={exercise.name}
                          link={exercise.link}/>
                      </div>
                      ))}
                    </div>
                  </div>
            </section>
        </main>

    )
}