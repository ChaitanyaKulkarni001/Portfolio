import React, { useEffect } from 'react';
import lottieFile from '../lottie/study.json'; // Adjust the path to your Lottie file
import Lottie from 'lottie-react';
import { BsPersonWorkspace } from 'react-icons/bs';
import '../css/Glow.scss';

const Education = () => {
  // Education data manually added
  const educations = [
    {
      id: 1,
      title: "B.Tech in Computer Science",
      institution: "SKN Sinhgad College of Engineering, Korti, Pandharpur",
      duration: "2022 - 2026"
    },
    {
      id: 2,
      title: "Higher Secondary Certificate",
      institution: "New English School & Jr. College, Sangola",
      duration: "2021 - 2022"
    },
    {
      id: 3,
      title: "Secondary School Certificate",
      institution: "Kawathekar Prashala Pandharpur",
      duration: "2019 - 2020"
    },
  ];

  // GlowCard logic moved inside Education component
  useEffect(() => {
    const identifier = 'education';
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', 1);
        } else {
          CARD.style.setProperty('--active', CONFIG.opacity);
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty('--start', ANGLE + 90);
      }
    };

    document.body.addEventListener('pointermove', UPDATE);

    const RESTYLE = () => {
      CONTAINER.style.setProperty('--gap', CONFIG.gap);
      CONTAINER.style.setProperty('--blur', CONFIG.blur);
      CONTAINER.style.setProperty('--spread', CONFIG.spread);
      CONTAINER.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      );
    };

    RESTYLE();
    UPDATE();

    // Cleanup event listener
    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, []);

  return (
    <div id="education" className="relative z-50 border-t mb-12 lg:mb-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <Lottie animationData={lottieFile} loop={true} />
            </div>
          </div>

          <div className="flex flex-col gap-6 glow-container-education glow-container">
            {educations.map((education) => (
              <div key={education.id} className={`glow-container-education glow-container`}>
                <article className={`glow-card glow-card-education h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
                  <div className="glows"></div>
                  <div className="p-3 relative text-white">
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">{education.duration}</p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">{education.institution}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
