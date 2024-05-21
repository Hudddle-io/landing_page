import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";

const Ourdrive = () => {
    return (
      <div className="py-20"
      >
        <div className=" px-20 w-full flex flex-col mx-auto">
          <div className="">
            <span className="bg-[#c340a01c] text-[#f178b7b7] py-3 px-4 rounded-md w-fit">
              The Challenge
            </span>
            <h2 className="font-semibold text-[2rem] text-[#4D4D4D] mt-8 mb-10">
              What Drives Us
            </h2>
            <p className="text-[18px] mb-20 text-[#4D4D4D]">
              The Imposed lockdowns during the COVID-19 pandemic impacted the
              living and working habits of millions in several industries. Working
              remotely has become a prominent solution to continued employment.
              The transition to remote work has several prospects for adaptability
              and international cooperation, but it also presents distinct
              difficulties for both employees and managers.
            </p>
          </div>
        </div>
  
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-3 w-[300px] px-8 py-6 border border-gray-600 rounded-lg">
            <img className="w-[3rem]" src={Image1} alt="" />
            <h2>Collaboration</h2>
            <p className="w-[250px] text-[15px] text-gray-400">
              Working remotely reduces communication, collaboration between teams
              & management, making team development and trust building difficult
            </p>
          </div>
          <div className="flex flex-col gap-3 w-[300px] px-8 py-6 border border-gray-600 rounded-lg">
            <img className="w-[3rem]" src={Image2} alt="" />
            <h2>Accountability</h2>
            <p className="w-[250px] text-[15px] text-gray-400">
              Employers worry about productivity and accountability, while
              employees can feel isolated and stressed by constant monitoring.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-[300px] px-8 py-6 border border-gray-600 rounded-lg">
            <img className="w-[3rem]" src={Image3} alt="" />
            <h2>Time Tracking</h2>
            <p className="w-[250px] text-[15px] text-gray-400">
              Companies need to track their remote teams to know what’s being done
              per time, improving trust and confidence in the budding remote
              space.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Ourdrive;
  