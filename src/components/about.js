import Coding from "../assets/coding.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const About = () => {
    const works = [{company: "Employed @ PLDT", position: "CX I", year: "2019-Present"},
    {company: "Employed @ ActivAsia", position: "IT Assistant", year: "2018"},
    {company: "Graduated @ Lorma Colleges", position: "Computer Engineering", year: "2013-2018"}
]
  return (
    <section id="About" className="h-screen w-full">
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
            
            My journey into programming began with a curiosity to understand how
            websites and applications come to life. I spend my time learning on
            technology especially Frontend Development where I consistently
            learn the concepts and tools behind and building projects around it,
            and that started my passion that continues to drive me forward in
            creating a seamless and responsive website design.
          </p>
          </div>
          <div>
          <button className=" bg-blue-600 p-2 rounded-lg flex items-center">
            <a className="flex items-center text-blue-100 gap-1" href=" " target="_blank">Download CV <span><svg width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path></svg></span></a>

          </button>
          </div>
          
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center pt-14">
      <div className="flex justify-center items-center flex-col w-3/6 pb-12">
        <h1 className="text-4xl font-semibold">Qualifications</h1>
        <span>My Educational Background & Work Experiences</span>
      </div>
        <div className="timeline w-3/6">
            <ul className="flex flex-col gap-12 ">
            {
                works.map((work) => (
                    <li className="flex flex-col   w-3/6 odd:text-end odd:pr-8 even:pl-8 even:ml-[50%]  "  key={work.company}><div className="flex flex-col bg-blue-50 px-4 py-1 rounded-lg leading-tight" data-aos="zoom-out-up" data-aos-duration="800"><span className="font-semibold text-lg">{work.company}</span><span className="text-sm">{work.position}</span><span className="text-sm">{work.year}</span></div></li>
                ) )
            }
            </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
