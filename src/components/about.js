import Coding from "../assets/coding.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import {useState, useRef, useEffect} from "react";

AOS.init();
const About = () => {

  

  
  const works = [
    { company: "Employed @ PLDT", position: "CX I", year: "2019-Present" },
    { company: "Employed @ ActivAsia", position: "IT Assistant", year: "2018" },
    {
      company: "Graduated @ Lorma Colleges",
      position: "Computer Engineering",
      year: "2013-2018",
    },
  ];
  
  const myServices = [{title: "Web Design", descripion: "Using my free time creating websites to translate design concepts into functioning web pages. I ensure that the website is responsive and accessible across various devices and screen sizes"},
  {title: "Network Topology Design", descripion: "I create network topology designs that outline the structure, layout, and interconnections of network components determining the placement of routers, switches and other network devies."},
  {title: "Web Design", descripion: "Using my free time creating websites to translate design concepts into functioning web pages. I ensure that the website is responsive and accessible across various devices and screen sizes"},
  
]

  return (
    <section id="About" className="h-[150vh] w-full">
      <div className="flex flex-row-reverse justify-center">
        <figure>
          <img className="w-[600px] drop-shadow-md" src={Coding} alt="" />
        </figure>
        <div className="w-3/6 flex flex-col justify-evenly">
          <header className="flex flex-col">
            <h1 className="text-4xl font-semibold">About</h1>
            <span>Personal</span>
          </header>
          <div>
            <p className="text-justify text-lg">
              My journey into programming began with a curiosity to understand
              how websites and applications come to life. I spend my time
              learning on technology especially Frontend Development where I
              consistently learn the concepts and tools behind and building
              projects around it, and that started my passion that continues to
              drive me forward in creating a seamless and responsive website
              design.
            </p>
          </div>
          <div>
            <button className=" bg-blue-600 p-2 rounded-lg flex items-center">
              <a
                className="flex items-center text-blue-100 gap-1"
                href=" "
                target="_blank"
              >
                Download CV{" "}
                <span>
                  <svg
                    width="18px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
                  </svg>
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center pt-14 pb-14">
        <div className="flex justify-center items-center flex-col w-3/6 pb-12">
          <h1 className="text-4xl font-semibold">Qualifications</h1>
          <span>My Educational Background & Work Experiences</span>
        </div>
        <div className="timeline w-3/6">
          <ul className="flex flex-col gap-12 ">
            {works.map((work) => (
              <li
                className="flex flex-col   w-3/6 odd:text-end odd:pr-8 even:pl-8 even:ml-[50%]  "
                key={work.company}
              >
                <div
                  className="flex flex-col bg-blue-50 px-4 py-1 rounded-lg leading-tight shadow-lg"
                  data-aos="zoom-out-up"
                  data-aos-duration="800"
                >
                  <span className="font-semibold text-lg">{work.company}</span>
                  <span className="text-sm">{work.position}</span>
                  <span className="text-sm">{work.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold">What I Do?</h1>
          <span>My Services</span>
        </div>
        <div>
          <div className="cardlist flex justify-evenly pt-12 gap-12">
            
              {
                
                
                myServices.map((service) =>(

                  <div className="group" data-aos="zoom-in-left">
                  <div className="card p-4 bg-blue-800 rounded-lg drop-shadow-2xl transition ease-in-out min-w-md min-h-[220px] overflow-hidden hover:scale-105 ">
                    <div className="card-header text-center pb-4">
                      <h2 className="text-2xl font-semibold text-blue-100 translate-y-[240%] group-hover:text-xl group-hover:translate-y-0 transition ease-out duration-500">{service.title}</h2>
                    </div>
                    <div className="card-body -translate-x-[105%] group-hover:-translate-x-0 transition duration-500 ease-in-out ">
                      <p className="text-justify text-blue-300 tracking-tighter" >{service.descripion}</p>
                    </div>
                  </div>
                  </div>
                  
                ))
              }
              
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
