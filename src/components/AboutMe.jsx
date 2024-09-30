// @flow strict

import React from 'react';
import myPhoto from '../assets/myprofile-bg.png'; // Replace with the path to your photo

const AboutMe = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center h-screen justify-between  p-8 bg-gray-800 rounded-lg shadow-lg">
      {/* Left Side - Information */}
      <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-lg text-gray-300 mb-6">
          Hi, I’m Chaitanya Kulkarni, a passionate software developer with a love for creating innovative solutions. I have experience in various technologies, including React, Django, and Tailwind CSS. My goal is to build user-friendly applications that enhance the user experience.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          I enjoy collaborating with others and continuously learning new skills. Outside of coding, I love spending time with my pet elephant, Eephan, and exploring the outdoors. I'm always open to new opportunities and connections, so feel free to reach out!
        </p>
        <a 
          href="#contact" 
          className="mt-4 inline-block px-6 py-2 bg-violet-500 text-white font-semibold rounded-md transition duration-300 hover:bg-violet-600"
        >
          Contact Me
        </a>
      </div>

      {/* Right Side - Photo */}
      <div className="lg:w-1/2 flex justify-center">
        <img 
          src={myPhoto} 
          alt="Chaitanya Kulkarni" 
          className="w-3/4 h-auto rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AboutMe;
