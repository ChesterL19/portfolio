"use client";
import { useState, useEffect } from "react";

export default function NavBar(){
    const [activeSection, setActiveSection] = useState('home');
    
    const sections = [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'info', name: 'Info' },
        { id: 'skills', name: 'Skills' },
        { id: 'education', name: 'Education' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 fade-in-left">
            <div className="flex flex-col items-center space-y-6">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        className="flex items-center group"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Section Name */}
                        <span className="absolute left-8 text-sm font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap nav-label">
                            {section.name}
                        </span>
                        
                        {/* Dot Indicator */}
                        <button
                            onClick={() => scrollToSection(section.id)}
                            className={`relative w-3 h-3 rounded-full transition-all duration-300 nav-dot ${
                                activeSection === section.id 
                                    ? 'active' 
                                    : 'bg-gray-400 hover:bg-gray-600'
                            }`}
                        >
                            {/* Active indicator ring */}
                            {activeSection === section.id && (
                                <div className="absolute inset-0 rounded-full border-2 border-blue-500 scale-in" />
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

