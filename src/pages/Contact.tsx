import {  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gray-900 text-white p-6">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">Contact Me</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg w-full max-w-4xl">
    <div className="flex flex-col space-y-6">
      <div className="flex items-center space-x-4">
        <FaEnvelope className="text-blue-400 text-3xl" />
        <a href="mailto:shubhamsm4175@gmail.com" className="hover:text-blue-400 transition">shubhamsm4175@gmail.com</a>
      </div>
      <div className="flex items-center space-x-4">
        <FaPhoneAlt className="text-green-400 text-3xl" />
        <a href="tel:+918576960431" className="hover:text-green-400 transition">+91 8576960431 (India)</a>
      </div>
    </div>
    <div className="flex flex-col space-y-6">
      <div className="flex items-center space-x-4">
        <FaPhoneAlt className="text-yellow-400 text-3xl" />
        <a href="tel:+9710542976403" className="hover:text-yellow-400 transition">+971 0542976403 (UAE)</a>
      </div>
      <div className="flex items-center space-x-4">
        <FaMapMarkerAlt className="text-red-400 text-3xl" />
        <span>India & UAE</span>
      </div>
    </div>
  </div>
</div>

  );
 export default Contact;