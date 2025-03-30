import  { useState } from "react";
import Slider from "react-slick";
import {  FaExternalLinkAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    IIALogo,
    iiImage1,
    iiImage2,
    iiImage3,
    iiImage4,
    
    madhlogo,
    madh1,
    madh2,
    madh3,
    
    astrologo,
    astro1,
    // astro2,

    conLogo,
    con1,
    // con2
} from "../image"
const Projects = () => {
    const projects = [
        { type: "app", name: "IIA", logo: IIALogo, images: [iiImage1, iiImage2, iiImage3, iiImage4], description: "An innovative Android app.", link: "https://play.google.com/store/apps/details?id=com.iia.myapplication&hl=en" },
        { type: "app", name: "Madhurima", logo: madhlogo, images: [madh1, madh2, madh3], description: "A feature-rich Android application.", link: "https://play.google.com/store/search?q=madhurima&c=apps&hl=en" },
        { type: "website", name: "Astrourja", logo: astrologo, image: astro1, description: "A modern and responsive website.", link: "https://astrourja.in/" },
        { type: "website", name: "Mycounsellor", logo: conLogo, image: con1, description: "A dynamic and interactive web solution.", link: "https://mycounsellor.co.in/" },
      ];

    const [filter, setFilter] = useState("all");
    
    const filteredProjects = filter === "all" ? projects : projects.filter(p => p.type === filter);
  
    return (
      <div className="w-full min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">My Projects</h2>
        <div className="flex space-x-4 mb-6">
          <button onClick={() => setFilter("all")} className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-500" : "bg-gray-700"}`}>All</button>
          <button onClick={() => setFilter("app")} className={`px-4 py-2 rounded ${filter === "app" ? "bg-blue-500" : "bg-gray-700"}`}>Apps</button>
          <button onClick={() => setFilter("website")} className={`px-4 py-2 rounded ${filter === "website" ? "bg-blue-500" : "bg-gray-700"}`}>Websites</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img src={project.logo} alt={project.name} className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold text-blue-400">{project.name}</h3>
              {project.type === "app" ? (
                <Slider className="w-full h-40 my-4" dots infinite autoplay>
                  {project.images.map((img, i) => (
                    <img key={i} src={img} alt={`${project.name} screenshot`} className="w-full h-40 object-contain rounded" />
                  ))}
                </Slider>
              ) : (
                <img src={project.image} alt={project.name} className="w-full h-40 object-contain my-4 rounded" />
              )}
              <p className="text-gray-300 mb-4 text-center">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 flex items-center space-x-2 hover:text-blue-300">
                <span>View Project</span>
                <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Projects;