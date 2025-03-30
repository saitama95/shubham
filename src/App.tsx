import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState } from "react";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router basename="/shubham">
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <nav className="p-4 flex justify-between items-center shadow-lg relative z-50">
        <h1 className="text-2xl font-bold text-blue-400">Shubham Portfolio</h1>
        <div className="hidden md:flex space-x-6 text-white">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">Experience</Link>
          <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
        <button className="md:hidden text-white z-50" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col space-y-6 p-6 transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <button className="self-end text-white" onClick={toggleMenu}><FaTimes size={24} /></button>
          <Link to="/" className="hover:text-blue-400 transition" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition" onClick={toggleMenu}>Experience</Link>
          <Link to="/projects" className="hover:text-blue-400 transition" onClick={toggleMenu}>Projects</Link>
          <Link to="/contact" className="hover:text-blue-400 transition" onClick={toggleMenu}>Contact</Link>
        </div>
      </nav>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-grow pt-10" onClick={() => setIsOpen(false)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </div>
  </Router>
  );
};

export default App;
