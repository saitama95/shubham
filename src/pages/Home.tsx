import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import myPhoto from "../assets/shubham.png";
import {  FaLaravel, FaAngular, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { FaNodeJs, FaDatabase, FaDocker, FaPhp, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiIonic } from "react-icons/si";
const Home = () => (
    <div className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl top-10 left-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div 
        className="absolute w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl bottom-20 right-20"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
    </div>
    
    <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
      {/* Intro Section */}
      <div className="flex flex-col justify-center text-left">
        <h1 className="text-5xl font-bold">Hello, I'm</h1>
        <TypeAnimation
          sequence={["Shubham Maurya", 2000, "Fullstack Developer", 2000, "Building Digital Experiences", 2000]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-4xl font-extrabold text-blue-400"
        />
        <p className="mt-4 text-lg text-gray-300">I specialize in creating modern web and mobile applications using React, Angular, and Laravel.</p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
            View My Work
          </button>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="flex justify-center md:justify-end">
        <motion.img 
          src={myPhoto} 
          alt="Shubham Maurya" 
          className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-blue-400 shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>

     {/* Open to Work Section */}
     {/* <div className="w-full mt-12 px-8 py-6 bg-blue-900 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">🚀 Open to Work!</h2>
      <p className="text-lg mb-4">I'm actively seeking new opportunities in Fullstack Development. If you're looking for a passionate developer to join your team, let's connect!</p>
      <a href="mailto:shubham@example.com" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
        Contact Me
      </a>
    </div> */}

    {/* Skills Section */}
    <div className="w-full mt-12 px-8 py-6 bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Skills & Technologies</h2>
      <div className="flex justify-center gap-8 text-5xl text-blue-400">
        <FaReact title="React" className="hover:text-blue-500 transition" />
        <FaAngular title="Angular" className="hover:text-red-500 transition" />
        <FaLaravel title="Laravel" className="hover:text-red-600 transition" />
        <FaNodeJs title="Node.js" className="hover:text-green-500 transition" />
        <FaHtml5 title="HTML5" className="hover:text-orange-500 transition" />
        <FaCss3Alt title="CSS3" className="hover:text-blue-500 transition" />
        <SiExpress title="Express.js" className="hover:text-gray-500 transition" />
        <SiMongodb title="MongoDB" className="hover:text-green-700 transition" />
        <FaDocker title="Docker" className="hover:text-blue-500 transition" />
        <FaPhp title="PHP" className="hover:text-indigo-500 transition" />
        <SiIonic title="Ionic" className="hover:text-blue-400 transition" />
      </div>
    </div>

     
  </div>
  );
export default Home;