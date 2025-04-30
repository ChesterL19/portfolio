"use client";
import { text } from "os";
import NavBar from "./nav-bar";
import { use, useState } from "react";
import { type } from "os";

const Detail = ({proPic, name, picture, caption}) => {
    const [like, setLike] = useState(false);
    const [showComment,setShowComment] = useState(false);
    const [commentInput, setCommentInput] = useState("");
    const [comments, setComments]= useState([
        {id:1, name: "Sakura", text: "Rock Lee!😭", pic:"https://w0.peakpx.com/wallpaper/430/51/HD-wallpaper-haruno-sakura-narut-pink.jpg"},
        {id:2, name: "Pain_Sama", text:"Nice pic 💀", pic:"https://w0.peakpx.com/wallpaper/379/892/HD-wallpaper-pain-rinnegan-akatsuki-boruto-itachi-madara-naruto-pain-rinnegan-sasuke-sharingan-uchiha.jpg"},
        {id:3, name: "MightygUy", text:" My student! 😭", pic:"https://w0.peakpx.com/wallpaper/745/702/HD-wallpaper-anime-naruto-might-guy-eight-gates-naruto.jpg"}
    ]);
 
    return(   
        <div className="flex  justify-center mt-10 text-white ">
            <div className="bg-gradient-to-b from-black/85 to-gray-950 rounded-2xl p-6 h-max">

                {/* Profile pic & name */}
                <div className="flex  items-center  justify-between w-full ">
                    <div className="flex flex-row items-center  justify-between gap-4">
                        <img src={proPic} alt={name} className=" rounded-full w-16 h-16 object-cover "/>
                        <h5 >{name}</h5>
                    </div>
                    <div>
                        <p className="font-bold text-2xl text-black/80 flex pb-4">...</p>
                    </div>

                    
                </div>



                {/* Picture*/}
                <div className="py-8 flex flex-col items-center">
                    <img src={picture} alt="Post" className="w-96 h-96 object-contain mb-2"/>
                
                {/* like*/}
                    <div className="w-80 flex items-start gap-2">
                        <button type="button" onClick={()=>
                        setLike(!like)}>{like ? "❤️": "🤍"}</button>
                        <button type="button" 
                        onClick={()=> setShowComment(!showComment)}>💬</button>
                        <p>➤</p>
                    </div >
                    <div className="w-80 flex items-start mt-1">
                        <p className="text-xs">Liked by <span className="font-bold">Itachi12</span> and <span className="font-bold">others</span></p>
                    </div>
                </div>



                {/* caption &name*/}
                <div className="flex  items-center gap-2 w-full ">
                    <h5 className="font-semibold">{name}</h5>
                    <p className="block min-w-">{caption}</p>
                </div>
                <div>
                    <p className="text-xs text-black/50 mt-2">1 minute ago</p>
                </div>

                {/* Comment Section */}
                {showComment && (
                    <div className="w-80 mt-4">
                        {/* Show existing comments */}
                        <div className="space-y-4 mb-3 text-white/80">
                            {comments.map((c)=>(
                                <div key={c.id} className="flex flex-row gap-2">
                                    <img src={c.pic} alt={c.name} className="rounded-full w-10 h-10 object-cover"/>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-semibold">{c.name}</p>
                                        <p className="text-sm">{c.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Comment input + post */}
                        <div className="w-full flex justify-center ml-24 mt-9 ">
                                <div className="flex items-center gap-2 w-80 ">
                                    <input
                                    type="text"
                                    value={commentInput}
                                    onChange={(e) => setCommentInput(e.target.value)}
                                    placeholder=" Add a comment for RockLee"
                                    className="flex-1 p-1 border border-gray-500/50 rounded-full text-sm"
                                    />
                                    <button
                                    onClick={() => {
                                        if (commentInput.trim() === "") return;
                                        const newComment = {
                                        id: Date.now(),
                                        pic:"https://w0.peakpx.com/wallpaper/597/443/HD-wallpaper-itachi-itachi-madara-naruto-shippuden-sasuke-uchiha.jpg",
                                        name: "Trendsetter",
                                        text: commentInput,
                                        };
                                        setComments([...comments, newComment]);
                                        setCommentInput("");
                                    }}
                                    className="text-sm text-black "
                                    >
                                    ⬆️
                                    </button>
                                </div>
                            </div>
                    </div>
                )}
                
            </div>
        </div>
    );

}

export default function Instagram() {

    return (
        <div>
            <div >
                < NavBar />
            </div>
            <div className="min-h-screen bg-white text-black">
                <Detail
                proPic="https://wallpapers.com/images/high/chibi-half-face-rock-lee-vkzxb29ssbhvtwxk.webp"
                name= "RockLee"
                picture="https://wallpapers.com/images/high/rock-lee-in-the-forest-n6x0c97a8podtpar.webp"
                caption="Feeling Great!"
                />
            </div>
        </div>


    );
}
