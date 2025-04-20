"use client";
import item from "./team.json";

function Product({title,description, price, image }){
    return(
        <div className="flex flex-row items-center gap-6 p-6 bg-white/90 rounded-lg 
        shadow-md w-full max-w-4xl text-gray-700 ">
            <img src={image} alt={title} className="w-72 h-72 rounded-xl object-cover"/>
            <div className="flex flex-col gap-2 items-start justify-center  ">
                <h1 className="font-bold text-xl">{title}</h1>
                <h3 className="line-clamp-3">{description}</h3>
                <p className="hover:font-bold cursor-pointer text-green-800 font-medium">{price}</p>
            </div>

        </div>
    )
}

export default function Card(){
    return(
        <div className="flex flex-col gap-4">
            {item.map((item, index) => (
                <div key={index} className="flex justify-center w-full p-4 ">
                    <Product 
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    image={item.image} />
                    
                </div>
            ))}
            <div className="flex justify-center w-full p-2 ">
                <button className="bg-gradient-to-bl from-violet-500 
                to-indigo-400 w-72 rounded-full hover:scale-105 transition-all duration-300 font-semibold p-2">Continue
                </button>
            </div>
        </div>
    );

}