import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
      <div className="flex-shrink-0">
        <img
          src="me.jpg"
          alt="My portrait"
          className="w-72 h-72 object-contain rounded-full shadow-[0_0_30px_rgba(0,0,0,0.7)] border-4 border-purple-500"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4 text-blue-400">
          Hi, I’m Muhammad Jalal Khan — Front-End Web Developer
        </h1>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
          <li>Good at ReactJS</li>
          <li>Proficient in TailwindCSS</li>
          <li>Responsive Web Design</li>
          <li>JavaScript & Modern ES6+</li>
        </ul>
      </div>
    </div>
  );
}
