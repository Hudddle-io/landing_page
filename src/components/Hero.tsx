import Navbar from "./Navbar";
import Man from "../assets/man-portrait.svg";
import Checkmark from "../assets/checkmark.svg";
import bullet1 from "../assets/bullet1.svg";
import bullet2 from "../assets/bullet2.svg";
import bullet3 from "../assets/bullet3.svg";

const Hero = () => {
  return (
    <div className="bg-hero h-[650px]">
      <Navbar />
      <div className="flex justify-between px-20 py-6">
      <div className="">
        <div className="w-[60%]">
          <p
            className="font-bold text-[50px]
      "
          >
            Building trust for remote work and{" "}
            <span className="text-[#4B9BD0]">productivity</span> in remote
            workers.
          </p>
          <p className="font-normal text-[24px] w-[85%]">
            Hudddle.io targets small and medium-sized businesses (SMBs) with remote or hybrid workforces.
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-4 mt-4">
          <div className="flex items-center gap-4">
            <img src={Checkmark} alt="" />
            <p>Clear Work Objectives</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={Checkmark} alt="" />
            <p>Investment Reports Every Month</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={Checkmark} alt="" />
            <p>Saving Money For The Future </p>
          </div>
        </div>

        <div className=" flex items-center relative w-[552px] h-[60px]">
          <input
            className="w-full h-full rounded-lg relative px-4 py-2 outline-none"
            type="email"
            name=""
            placeholder="Enter your email address"
          />
          <button className="bg-[#5C5CE9] text-white h-[52px] w-[177px] absolute right-1 rounded-lg">
            Join Waitlist
          </button>
        </div>
      </div>
      </div>
      <div className="hidden lg:flex h-[450px] w-[805px] absolute right-0 bottom-0">
        <img src={bullet1} alt="" className="w-[250px] h-[66px] absolute top-40 right-0" />
        <img src={bullet2} alt="" className="w-[250px] h-[66px] absolute top-60 left-40"/>
        <img src={bullet3} alt="" className="w-[306px] h-[68px] absolute bottom-2 right-16 mr-16"/>
        <img src={Man} alt="Man Portrait" className="h-full w-full object-fit" />
      </div>
    </div>
  );
};

export default Hero;