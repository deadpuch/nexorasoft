import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

const Nav = () => {
  const container = useRef(null);
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.from("nav", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: container });

  const handleScroll = (id: string) => {
    setIsOpen(false);
    if (lenis) {
      lenis.scrollTo(id === '#home' ? 0 : id, { duration: 1.5 });
    } else {
      if (id === '#home') {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div ref={container} className="fixed top-0 left-0 w-full z-50">
      <nav className="flex w-full justify-between items-center px-5 lg:px-10 py-4 bg-white/90 backdrop-blur-md shadow-sm relative z-50">
        <div className="font-bold text-xl cursor-pointer" onClick={() => handleScroll('#home')}>Logo</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <button onClick={() => handleScroll('#home')} className="hover:text-gray-600 transition-colors cursor-pointer">Home</button>
          <button onClick={() => handleScroll('#project')} className="hover:text-gray-600 transition-colors cursor-pointer">Project</button>
          <button onClick={() => handleScroll('#about')} className="hover:text-gray-600 transition-colors cursor-pointer">About</button>
          <button onClick={() => handleScroll('#contact')} className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors cursor-pointer ml-4">Contact us</button>
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 cursor-pointer focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg flex flex-col items-center py-6 gap-6 border-t border-gray-100 transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <button onClick={() => handleScroll('#home')} className="text-lg font-medium hover:text-gray-600 transition-colors w-full py-2">Home</button>
        <button onClick={() => handleScroll('#project')} className="text-lg font-medium hover:text-gray-600 transition-colors w-full py-2">Project</button>
        <button onClick={() => handleScroll('#about')} className="text-lg font-medium hover:text-gray-600 transition-colors w-full py-2">About</button>
        <button onClick={() => handleScroll('#contact')} className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors w-3/4 mt-2">Contact us</button>
      </div>
    </div>
  );
};

export default Nav;
