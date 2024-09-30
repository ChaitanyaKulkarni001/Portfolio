import React, { useState } from 'react';
import CodingAnimation from '../../Animation/Animation - 1727623884812.json';
import Lottie from 'lottie-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { RiContactsFill } from 'react-icons/ri';
import { MdDownload } from 'react-icons/md';

const Front = () => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;

    const rotateX = (y - 0.5) * 30;
    const rotateY = (x - 0.5) * 30;
    setRotation({ rotateX, rotateY });
  };

  return (
    <div className="flex flex-col lg:flex-row bg-slate-800 items-center justify-between h-screen p-4">
      {/* Name Section */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <div
          className="text-5xl ml-40 lg:text-6xl font-bold text-white transition-transform duration-300"
          style={{
            transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setRotation({ rotateX: 0, rotateY: 0 })} 
        >
          <span className="block text-lg text-white mb-2">Hey, I am</span>
          <span className="hover:scale-110 transition-transform">Chaitanya Kulkarni</span>
          <div >

          
          <div className="my-12 flex items-center gap-5">
            <a
              href="https://github.com/ChaitanyaKulkarni001" // Add your GitHub link here
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </a>
            <a
              href="www.linkedin.com/in/chaitanyaskulkarni" // Add your LinkedIn link here
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </a>
            
            <a
              href="https://leetcode.com/u/Chaitanya_Kulkarni_001/" // Add your LeetCode link here
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </a>
            <a
              href="https://x.com/chaitanyak_001" // Add your Twitter link here
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </a>
            </div>
          <div className='' >

            <div className="flex items-center gap-3">
              <a href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
                <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                  <span>Contact me</span>
                  <RiContactsFill size={16} />
                </button>
              </a>

              <a className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href="https://drive.google.com/file/d/1JifPB9ndopdlJPjhGs4FvDBD6ZpsmVMc/view" // Add your resume link here
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </a>
            </div>
                  </div>
          </div>
        </div>
      </div>

      {/* Animation Section */}
      <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
        <Lottie 
          animationData={CodingAnimation} 
          loop={true} 
          className="w-full h-auto" 
        />
      </div>
    </div>
  );
};

export default Front;
