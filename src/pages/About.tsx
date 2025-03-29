import { SiExpress, SiMongodb, SiIonic, SiBootstrap, SiJquery, SiJavascript, SiCapacitor } from "react-icons/si";
import { FaNodeJs, FaDatabase, FaDocker, FaPhp, FaReact, FaBuilding, FaBriefcase } from "react-icons/fa";
const About = () => (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-8">
    <h2 className="text-4xl font-bold mb-6">Experience</h2>
    <div className="max-w-3xl mx-auto text-left">
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <FaBuilding className="text-4xl text-blue-400 mr-4" />
        <div>
          <h3 className="text-2xl font-semibold text-blue-400">MIND YOU INFOTECH</h3>
          <p className="text-lg text-gray-300">Front End Developer (Aug 2022 - Dec 2022)</p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Created responsive designs using <SiBootstrap className="inline text-blue-400" /> Bootstrap.</li>
            <li>Developed interactive features using <SiJavascript className="inline text-yellow-400" /> JavaScript & <SiJquery className="inline text-blue-500" /> jQuery.</li>
            <li>Handled asynchronous operations with AJAX and Fetch API.</li>
            <li>Debugged and optimized performance using Chrome DevTools.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start">
        <FaBriefcase className="text-4xl text-blue-400 mr-4" />
        <div>
          <h3 className="text-2xl font-semibold text-blue-400">WEB IT SOLUTION HUB</h3>
          <p className="text-lg text-gray-300">Full Stack Developer (Jan 2023 - Oct 2024)</p>
          <ul className="list-disc list-inside text-gray-400 mt-2">
            <li>Integrated third-party APIs into existing applications.</li>
            <li>Worked with <SiCapacitor className="inline text-blue-500" /> Capacitor and Cordova plugins for mobile functionality.</li>
            <li>Implemented native features like camera, geolocation, and push notifications.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
export default About;