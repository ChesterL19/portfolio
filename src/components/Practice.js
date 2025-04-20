"use client";

export default function Practice({name,image,link }){
    return(
      <a href={link} className="block w-80 transition-transform duration-300 
       hover:z-50 hover:scale-125">
        <div className={` flex flex-col text-center gap-2 overflow-hidden shadow-lg rounded-lg `}>
          <img src={image} alt={name} className="object-cover w-full h-48"/>
          <h1 className="font-bold">{name}</h1>
        </div>
      </a>
    );
  }