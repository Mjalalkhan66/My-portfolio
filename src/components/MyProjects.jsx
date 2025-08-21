import React from "react";
import { FaGithub } from "react-icons/fa";

export default function MyProjects({ darkMode }) {
  const projects = [
    {
      title: "BackgroundChanger",
      description: "A Good mini project , user can choose background of his own choice upon clicking on the buttons below ",
      github: "https://github.com/Mjalalkhan66/reactjs.git",
      video: "bgchanger.mp4", 
    },
    {
      title: "Password Generator",
      description: "User can generate a random strong password , he can coose length of password of his choice , he can include characters and numbers if he wants to",
      github: "https://github.com/Mjalalkhan66/reactjs.git",
      video: "passgen.mp4",
    },
    {
      title: "Todo",
      description: "Todo app , user can store his todos here and can access later",
      github: "https://github.com/Mjalalkhan66/reactjs.git",
      video: "todo.mp4",
    },
   
  ];

  return (
    <section className="w-full min-h-screen px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
        Explore My Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-purple-900"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>

            {/* Video preview */}
            <div className="mb-4">
              <video
                src={project.video}
                controls
                autoPlay
                className="w-full h-48 rounded-xl object-cover"
              />
            </div>

            {/* GitHub link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-700"
            >
              <FaGithub className="mr-2" /> View Code on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
