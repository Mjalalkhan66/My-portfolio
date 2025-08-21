import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";

export default function Services({ darkMode }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className={`p-6 rounded-xl shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-purple-900"}`}>
        <FaLaptopCode className="text-4xl mb-4 text-cyan-400" />
        <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
        <p>I build responsive, fast, and interactive websites using ReactJS, HTML, CSS, and JavaScript.</p>
      </div>
      <div className={`p-6 rounded-xl shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-purple-900"}`}>
        <FaMobileAlt className="text-4xl mb-4 text-cyan-400" />
        <h3 className="text-xl font-semibold mb-2">Single Page Websites</h3>
        <p>I create clean and modern single-page websites that are responsive and user-friendly.</p>
      </div>
      <div className={`p-6 rounded-xl shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-purple-900"}`}>
        <FaPalette className="text-4xl mb-4 text-cyan-400" />
        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
        <p>I design visually appealing and intuitive interfaces for websites and applications.</p>
      </div>
    </div>
  );
}
