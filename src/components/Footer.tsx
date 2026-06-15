import React, { useState } from "react";

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <div className="bg-[url('/footer.png')] w-full bg-cover min-h-[300px] py-16">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold">Logo</div>
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col justify-start border-b border-gray-300 md:border-none pb-4 md:pb-0">
            <h2 
              className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer md:cursor-auto"
              onClick={() => toggleSection('links')}
            >
              Quick Links
              <span className="md:hidden text-2xl font-light">
                {openSection === 'links' ? '−' : '+'}
              </span>
            </h2>
            <div className={`flex-col gap-3 ${openSection === 'links' ? 'flex' : 'hidden'} md:flex`}>
              <button className="text-left text-gray-700 hover:text-black transition-colors">Home</button>
              <button className="text-left text-gray-700 hover:text-black transition-colors">Project</button>
              <button className="text-left text-gray-700 hover:text-black transition-colors">About</button>
              <button className="text-left text-gray-700 hover:text-black transition-colors">Contact</button>
            </div>
          </div>

          {/* Contact us */}
          <div className="flex flex-col border-b border-gray-300 md:border-none pb-4 md:pb-0">
            <h2 
              className="text-xl font-semibold mb-4 flex justify-between items-center cursor-pointer md:cursor-auto"
              onClick={() => toggleSection('contact')}
            >
              Contact us
              <span className="md:hidden text-2xl font-light">
                {openSection === 'contact' ? '−' : '+'}
              </span>
            </h2>
            <div className={`flex-col gap-3 ${openSection === 'contact' ? 'flex' : 'hidden'} md:flex`}>
              <p className="text-gray-700">+91 987456123</p>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">demo@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#0847AA] flex w-full justify-center items-center text-white py-4 px-5 text-center text-sm">
        © 2026 Nexorasoft. All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
