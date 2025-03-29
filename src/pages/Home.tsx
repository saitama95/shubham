import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import myPhoto from "../assets/shubham.png";
const Home = () => (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 bg-white opacity-10 rounded-full blur-3xl top-10 left-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div 
          className="absolute w-80 h-80 bg-white opacity-10 rounded-full blur-3xl bottom-20 right-20"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
      </div>
      
      {/* Profile Image */}
      <motion.img 
        src={myPhoto} 
        alt="Shubham Maurya" 
        className="w-40 h-40 rounded-full shadow-lg border-4 border-white z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Animated Text */}
      <TypeAnimation
        sequence={["Shubham Maurya", 2000, "Fullstack Developer", 2000, "Creating Digital Experiences", 2000]}
        wrapper="h1"
        speed={50}
        repeat={Infinity}
        className="text-4xl font-extrabold mt-4 drop-shadow-lg z-10"
      />
    </div>
  );
export default Home;