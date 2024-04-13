import Profile from "../assets/male_avatar.svg";
import Plane from "../assets/send-plane-fill.svg";

const Home = () => {
  return (
    <section id="Home" className="h-screen flex items-center justify-center pb-[13rem] pt-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-14 border-[1px] p-8 rounded-2xl shadow-md">
        <figure className="flex justify-center">
          <img className="w-3/4 lg:w-[300px] " src={Profile} alt="" />
        </figure>
        <div className="flex flex-col lg:text-start text-center">
            <h1 className="text-4xl lg:text-6xl font-bold">Hi!</h1>
            <h1 className="text-4xl lg:text-6xl pb-4 font-bold"> I'm <span className="text-blue-500">Ryan Campos</span></h1>
            <h2 className="text-lg lg:text-2xl text-blue-500 font-semibold pb-12">Front-end Developer</h2>
            
            
            <div className="flex justify-center lg:justify-start">
                <a href="mailto:rclyde.campos@gmail.com" className="flex items-center justify-center bg-blue-600 w-36 p-2 rounded-lg text-blue-200">Contact Me <span className=""><svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 24 24" fill="currentColor"><path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path></svg>
</span></a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
