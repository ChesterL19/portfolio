"use client";

export default function Footer(){
    return(
        <footer className="bg-gray-100 py-8 mt-16 scroll-fade-in">
            <div className="container mx-auto px-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 scroll-slide-left">
                        <h3 className="text-xl font-semibold text-black/75">Chester Laraya</h3>
                        <p className="text-black/60">Frontend Developer & UI/UX Designer</p>
                    </div>
                    <div className="flex flex-col items-center md:items-end scroll-slide-right">
                        <p className="text-black/60 mb-2">Get in touch</p>
                        <div className="flex gap-4">
                            <a 
                                href="mailto:chester.laraya@example.com" 
                                className="text-black/60 hover:text-black/80 transition-colors interactive-hover"
                            >
                                Email
                            </a>
                            <a 
                                href="https://linkedin.com/in/chester-laraya" 
                                className="text-black/60 hover:text-black/80 transition-colors interactive-hover"
                            >
                                LinkedIn
                            </a>
                            <a 
                                href="https://github.com/chester-laraya" 
                                className="text-black/60 hover:text-black/80 transition-colors interactive-hover"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-300/30 text-center scroll-fade-in">
                    <p className="text-black/50 text-sm">© 2024 Chester Laraya. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}