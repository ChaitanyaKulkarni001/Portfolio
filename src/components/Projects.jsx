import React from "react";
import Anime from "../lottie/code.json";
import Lottie from "lottie-react";
import img from "../svg/hero.svg";
import WhiskerWag from "../assets/WhikerWag.jpeg";
import MaskVigilance from "../assets/MaskVigillance.jpeg";
import MusicController from "../assets/image.png";
import SpotifyClone from "../assets/Spotify_clone.jpeg";

const projectData = [
  {
    title: "WhiskerWag",
    description:
      "A pet social platform where users can share posts, connect with other pet owners, and explore various pet-related content. Developed with React, Django, and Tailwind CSS.",
    image: WhiskerWag,
    link: "#",
  },
  {
    title: "Mask Vigilance",
    description:
      "A real-time mask detection system using computer vision. Helps ensure compliance with mask-wearing protocols. Developed with Python, OpenCV, and Django.",
    image: MaskVigilance,
    link: "#",
  },
  {
    title: "Spotify Clone",
    description:
      "A Spotify-inspired web app where users can browse, search, and play their favorite music. Built using React and Spotify API integration.",
    image: SpotifyClone,
    link: "#",
  },
  {
    title: "Music Controller",
    description:
      "A house party web app that lets users control music in real-time. Built with Django and React, allowing guests to vote on songs and control playback.",
    image: MusicController,
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-900  text-white py-12">
      <img src={img} alt="background" className="fixed opacity-10" />
      <div className="flex items-center justify-center my-24">
  {/* Animation on the left */}
  <div className="w-[300px] h-auto ">
    <Lottie animationData={Anime} loop={true} className="w-full" />
  </div>

  {/* "Projects" on the right */}
  <h1 className="text-9xl font-bold text-center animate-fadeIn ml-8">
    Projects
  </h1>
</div>


      <div className="grid grid-cols-1 gap-12 mx-auto max-w-6xl px-6">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            } items-center lg:justify-between mb-12 animate-slideIn`}
          >
            {/* Project Image */}
            <div className="lg:w-1/2 mb-6 lg:mb-0 transform transition duration-300 hover:scale-105 shadow-xl rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="lg:w-1/2 lg:px-10 text-left space-y-4">
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
              <a
                href={project.link}
                className="inline-block px-6 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}

        {/* Add Lottie Animation */}
        <a
                href='#'
                className="inline-block mx-auto px-6 py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View More
              </a>
      </div>

    </div>
  );
};

export default Projects;
