import icon1 from "../assets/Icon1.svg";
import icon2 from "../assets/Icon2.svg";
import icon3 from "../assets/Icon3.svg";
import icon4 from "../assets/Icon4.svg";
import icon5 from "../assets/Icon5.svg";
import icon6 from "../assets/Icon6.svg";

interface IconCardProps {
  icon: string;
  text: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, text }) => (
  <div className="flex flex-col justify-center items-center w-[6rem] h-[6rem] bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl rounded-lg">
    <img src={icon} alt="" />
    <p className="text-xs text-gray-500 font-semibold">{text}</p>
  </div>
);

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col mt-10 py-12">
      <div className="w-[75%] flex flex-col justify-center items-center mx-auto gap-6 mb-8">
        <h2 className="bg-[#c340a04d] text-[#F178B6] px-4 py-2 text-[20px] rounded-md">
          Our Services
        </h2>
        <p className="text-[42px] font-semibold">About Us</p>
        <p className="w-full lg:w-[55%] text-center text-[1.5rem] lg:text-[20px] text-gray-500">
          The rise of remote work has created challenges for managing teams effectively. Employers worry about productivity and accountability, while employees can feel isolated and stressed by constant monitoring.
        </p>
      </div>
      <div className="flex flex-wrap lg:flex-row gap-8 justify-center">
        <IconCard icon={icon1} text="Team Chat" />
        <IconCard icon={icon2} text="Time Tracking" />
        <IconCard icon={icon3} text="Items Search" />
        <IconCard icon={icon4} text="Attendance" />
        <IconCard icon={icon5} text="KPIs" />
        <IconCard icon={icon6} text="Delivery" />
      </div>
    </div>
  );
};

export default AboutUs;