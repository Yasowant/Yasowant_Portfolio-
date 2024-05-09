import React from 'react';
import './Techstacks.css';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiHtml5,
  SiTailwindcss,
  SiNetlify,
  SiJava,
  SiNextdotjs,
  SiExpress,
} from 'react-icons/si';
import { DiCss3, DiMongodb } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';

import { BsBootstrap, BsWordpress } from 'react-icons/bs';

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>

          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>

          <div>
            <SiExpress />
            <h5>expressJs</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwindcss</h5>
          </div>
          <div>
            <SiJava />
            <h5>Java</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>Next.js</h5>
          </div>
        </div>
      </div>
    </>
  );
};
