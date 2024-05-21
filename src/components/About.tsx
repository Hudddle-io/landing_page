import icon1 from "../assets/Icon1.svg";
import icon2 from "../assets/Icon2.svg";
import icon3 from "../assets/Icon3.svg";
import icon4 from "../assets/Icon4.svg";
import icon5 from "../assets/Icon5.svg";
import icon6 from "../assets/Icon6.svg";

const AboutUs = () => {
    return (
      <div className="mt-10 py-12">
        <div className="w-[75%] flex flex-col justify-center items-center mx-auto gap-6 mb-8">
          <h2 className="bg-[#c340a04d] text-[#F178B6] px-4 py-2 text-[20px] rounded-md">
            Our Services
          </h2>
          <p className="text-[42px] font-semibold">About Us</p>
          <p className="w-[55rem] text-center text-[20px] text-gray-500">
            The rise of remote work has created challenges for managing teams
            effectively. Employers worry about productivity and accountability,
            while employees can feel isolated and stressed by constant monitoring.
          </p>
        </div>
        <div className="flex gap-8 justify-center">
          <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
            <img src={icon1} alt="" />
            <p className="text-xs text-gray-500 font-semibold">Team Chat</p>
          </div>
  
          <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
            <img src={icon2} alt="" />
            <p className="text-xs text-gray-500 font-semibold">Time Tracking</p>
          </div>
  
          <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
            <img src={icon3} alt="" />
            <p className="text-xs text-gray-500 font-semibold">Items Search</p>
          </div>
  
          <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
            <img src={icon4} alt="" />
            <p className="text-xs text-gray-500 font-semibold">Attandance</p>
          </div>
  
          <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
            <img src={icon5} alt="" />
            <p className="text-xs text-gray-500 font-semibold">KPIs</p>
          </div>
  
          <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
            <img src={icon6} alt="" />
            <p className="text-xs text-gray-500 font-semibold">Delivery</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  