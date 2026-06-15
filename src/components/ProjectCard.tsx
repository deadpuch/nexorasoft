import { useState } from "react";

const ProjectCard = () => {
  const [showInfo, setShowInfo] = useState(false);
  const infoText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966,when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it ";

  return (
    <div className="w-full">
      <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <img
          src="./demo-img.png"
          alt="project"
          className="w-full h-full object-cover"
        />
        
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm text-white p-4 md:p-6 flex items-center justify-center transition-opacity duration-300 ${
            showInfo ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none -z-10'
          }`}
        >
          <p className="text-sm md:text-base text-center leading-relaxed">
            {infoText}
          </p>
        </div>

        <button 
          className="border rounded-full w-8 h-8 flex items-center justify-center bg-white text-black absolute top-5 right-5 shadow-sm hover:bg-gray-100 transition-colors z-10"
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
          onClick={() => setShowInfo(!showInfo)}
          aria-label="More Info"
        >
          i
        </button>
      </div>

      <div className="flex flex-col gap-2 mt-5 lg:gap-4">
        <h2 className="text-xl font-semibold">Project name</h2>
        <span className="border p-1 px-4 rounded-full w-fit text-sm">
          Category
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
