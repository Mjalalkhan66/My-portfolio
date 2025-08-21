import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-screen py-10 flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Get in Touch , Get Your Project Made
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <ul className="space-y-5 text-lg">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-2xl text-blue-500" />
              <a href="mailto:jk3434048@gmail.com" className="hover:underline">
                jk3434048@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-2xl text-blue-500" />
              <span>03159035669</span>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-2xl text-green-600" />
              <a
                href="https://wa.me/923159035669"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-2xl text-blue-700" />
              <a
                href="https://www.linkedin.com/in/muhammad-jalal-khan-999950321/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>

          {/* Right Side Illustration */}
          <div className="flex justify-center items-center">
            <img
              src="contt.png"
              alt="Contact"
              className="w-52 h-52 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
