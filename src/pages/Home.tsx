import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import myPhoto from "../assets/shubham.png";
import { Link } from "react-router-dom";
import { FaNodeJs, FaDocker, FaPhp, FaReact, FaLaravel} from "react-icons/fa";
import { SiExpress, SiMongodb, SiIonic ,SiAngular,SiJavascript,SiTailwindcss ,SiGit, SiGithub, SiMysql} from "react-icons/si";
const Home = () => (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl top-10 left-5 md:left-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div 
        className="absolute w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-3xl bottom-20 right-5 md:right-20"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
    </div>
    
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 items-center">
      {/* Intro Section */}
      <div className="flex flex-col justify-center text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold">Hello, I'm</h1>
        <TypeAnimation
          sequence={["Shubham Maurya", 2000, "Fullstack Developer", 2000, "Building Digital Experiences", 2000]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-3xl md:text-4xl font-extrabold text-blue-400"
        />
        <p className="mt-4 text-base md:text-lg text-gray-300">
          I specialize in creating modern web and mobile applications using Php, laravel, Mysql , Angular,React and Ionic.
        </p>
        <div className="mt-6">
        <Link
            to="/projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 text-center"
          >
            View My Work
          </Link>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="flex justify-center lg:justify-end">
        <motion.img 
          src={myPhoto} 
          alt="Shubham Maurya" 
          className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full border-4 border-blue-400 shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>

     {/* Skills Section */}
     <div className="mt-12 text-center bg-gray-800 p-8 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-blue-400 mb-6 relative inline-block">
        My Skills
        {/* <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span> */}
      </h2>
      <div className="flex flex-wrap justify-center gap-6 text-white">
        <FaNodeJs className="text-6xl text-green-500 hover:scale-110 transition" />
        <SiExpress className="text-6xl text-gray-500 hover:scale-110 transition" />
        <SiMongodb className="text-6xl text-green-400 hover:scale-110 transition" />
        <FaDocker className="text-6xl text-blue-500 hover:scale-110 transition" />
        <FaPhp className="text-6xl text-indigo-500 hover:scale-110 transition" />
        <FaReact className="text-6xl text-blue-400 hover:scale-110 transition" />
        <SiIonic className="text-6xl text-blue-600 hover:scale-110 transition" />
        <SiAngular className="text-6xl text-red-500 hover:scale-110 transition" />
        <SiJavascript className="text-6xl text-yellow-400 hover:scale-110 transition" />
        <FaLaravel className="text-6xl text-red-600 hover:scale-110 transition" />
        <SiTailwindcss className="text-6xl text-blue-500 hover:scale-110 transition" />
        <SiGit className="text-6xl text-red-500 hover:scale-110 transition" />
        <SiGithub className="text-6xl text-white hover:scale-110 transition bg-black rounded-full p-1" />
        <SiMysql className="text-6xl text-[#00758F] hover:scale-110 transition" />
      </div>
    </div>

  </div>
  );
export default Home;