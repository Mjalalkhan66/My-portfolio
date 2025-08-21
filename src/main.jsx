import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Home from "./components/Home"; 
import MyProjects from "./components/MyProjects";

import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} /> {/* Default route */}
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="myprojects" element={<MyProjects />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
