"use client";

export default function NavBar(){
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div className="flex gap-4 min-h-full items-center font-semibold text-black/50 h-20 justify-end px-10">
            <div className="flex items-start w-full">
                <h3 className="flex items-start min-h-full">Chester Laraya</h3>
            </div>
            <div className="flex flex-row gap-4">
                <button onClick={() => scrollToSection('home')}>
                    <h3>Home</h3>
                </button>
                <button onClick={() => scrollToSection('about')}>
                    <h3>About</h3>
                </button>
                <button onClick={() => scrollToSection('skills')}>
                    <h3>Skills</h3>
                </button>
                <button onClick={() => scrollToSection('education')}>
                    <h3>Education</h3>
                </button>
            </div>
        </div>
    );
}

