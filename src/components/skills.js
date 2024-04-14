import html from "../assets/icons8-html-5.svg";
import css from "../assets/icons8-css.svg";
import js from "../assets/icons8-javascript.svg";
import php from "../assets/icons8-php-logo.svg";
import mysql from "../assets/icons8-mysql.svg";
import git from "../assets/icons8-git.svg";
import react from "../assets/icons8-react.svg";

const Skills = () => {
  return (
    <section id="Skills" className="h-screen pt-40 lg:pt-56">
      <header className="flex flex-col justify-center items-center pb-12">
        <h1 className="text-4xl font-semibold">Skills</h1>
        <span>My Tech Stacks</span>
      </header>
      <div className="lg:w-3/6 mx-auto" data-aos="zoom-in-down">
        <div className="flex gap-4 lg:gap-16 flex-wrap justify-center">
          <div className="mini-card flex flex-col justify-center items-center hover:scale-110 transition duration-500 ease-in-out">
            <figure>
              <img className="w-[70px]" src={html} alt="" />
            </figure>
            <div>
              <span className="font-semibold">HTML</span>
            </div>
          </div>

          <div className="mini-card flex flex-col justify-center items-center hover:scale-110 transition duration-500 ease-in-out">
            <figure>
              <img className="w-[70px]" src={css} alt="" />
            </figure>
            <div>
              <span className="font-semibold">CSS</span>
            </div>
          </div>

          <div className="mini-card flex flex-col justify-center items-center hover:scale-110 transition duration-500 ease-in-out">
            <figure>
              <img className="w-[70px]" src={js} alt="" />
            </figure>
            <div>
              <span className="font-semibold">JavaScript</span>
            </div>
          </div>

          <div className="mini-card flex flex-col justify-center items-center hover:scale-110 transition duration-500 ease-in-out">
            <figure>
              <img className="w-[70px]" src={react} alt="" />
            </figure>
            <div>
              <span className="font-semibold">ReactJS</span>
            </div>
          </div>

          <div className="mini-card flex flex-col justify-center items-center hover:scale-110 transition duration-500 ease-in-out">
            <figure>
              <img className="w-[70px]" src={php} alt="" />
            </figure>
            <div>
              <span className="font-semibold">PHP</span>
            </div>
          </div>

          <div className="mini-card flex flex-col justify-center items-center hover:scale-110 transition duration-500 ease-in-out">
            <figure>
              <img className="w-[70px]" src={mysql} alt="" />
            </figure>
            <div>
              <span className="font-semibold">MySQL</span>
            </div>
          </div>

          <div className="mini-card flex flex-col justify-center items-center hover:scale-110 transition duration-500 ease-in-out">
            <figure>
              <img className="w-[70px]" src={git} alt="" />
            </figure>
            <div>
              <span className="font-semibold">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
