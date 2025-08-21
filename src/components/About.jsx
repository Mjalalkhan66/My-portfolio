import React from "react";

export default function About() {
  const textColor = "text-blue-600";
  const containerBg = "bg-purple-100";

  return (
    <div className={`${containerBg} w-full rounded-3xl p-6 md:p-8 shadow-lg`}>
      <div className="flex flex-col md:flex-row items-center md:gap-12">
        {/* Text */}
        <div className="w-full md:w-7/12 text-center md:text-left">
          <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>About Me</h2>
          <p className={`${textColor} mb-4`}>
            I’m a passionate web developer who loves creating interactive,
            user-friendly, and visually appealing applications. I enjoy solving
            problems, exploring new technologies, and continuously improving my
            skills.
          </p>
          <h3 className={`text-2xl font-semibold mb-2 ${textColor}`}>
            Technical Skills
          </h3>
          <ul className={`${textColor} list-disc list-inside space-y-1`}>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Tailwind CSS</li>
            <li>GitHub & Version Control</li>
            <li>AI Tools & Problem-Solving</li>
          </ul>
        </div>

        {/* Image */}
        <div className="w-full md:w-5/12 flex justify-center mt-6 md:mt-0">
          <img
            src="me.jpg"
            alt="Profile"
            className="w-full max-w-xs md:max-w-sm object-contain rounded-2xl shadow-lg
                       max-h-[42vh] md:max-h-[48vh]"
          />
        </div>
      </div>
    </div>
  );
}
