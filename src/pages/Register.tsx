import Navbar from "../components/Navbar";
import Checkmark from "../assets/checkmark.svg";

const Register = () => {
  return (
    <div className="bg-hero h-[fit-content] lg:h-[800px]">
      <Navbar />
      <div className="flex lg:flex-row flex-col justify-evenly gap-4 px-4 lg:px-14 py-6">
        <div className="lg:w-[60%] w-full">
          <div className="w-full">
            <p
              className="font-bold text-[2rem] lg:text-[50px] mb-3  lg:mb-0
      "
            >
              Building trust for remote work and{" "}
              <span className="text-[#4B9BD0]">productivity</span> in remote
              workers.
            </p>
            <p className="font-normal text-[1.5rem] lg:text-[24px] w-[85%]">
              Hudddle.io targets small and medium-sized businesses (SMBs) with
              remote or hybrid workforces.
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

          <div className=" flex flex-col lg:flex-row items-center relative lg:w-[552px] lg:h-[60px] w-full h-[4rem]">
            <button className="bg-[#5C5CE9] text-white h-[52px] w-[85%] px-6 py-3 mt-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-white p-8 lg:w-[38%] w-full">
          <form
            method="post"
            className="flex flex-col items-center justify-start"
          >
            <h1 className="font-semibold text-[36px] font-[inter] text-gray-700">Register</h1>
            <div className="flex flex-col w-full h-[fit-content] gap-2 mb-2">
              <label htmlFor="name" className="text-gray-500">
                First name
              </label>
              <input
                type="text"
                id="name"
                name="first-name"
                placeholder="Enter First Name"
                className="border-2 border-gray-500 rounded-md w-full h-[3rem] px-2 py-2 outline-none"
              />
            </div>
            <div className="flex flex-col w-full h-[fit-content] gap-2 mb-2">
              <label htmlFor="last-name" className="text-gray-500">
                Last name
              </label>
              <input
                type="text"
                id="name"
                name="last-name"
                placeholder="Enter Last Name"
                className="border-2 border-gray-500 rounded-md w-full h-[3rem] px-2 py-2 outline-none"
                required
              />
            </div>
            <div className="flex flex-col w-full h-[fit-content] gap-2 mb-2">
              <label htmlFor="email" className="text-gray-500">
                Email Address
              </label>
              <input
                type="text"
                id="name"
                name="email"
                placeholder="@gmail.com"
                className="border-2 border-gray-500 rounded-md w-full h-[3rem] px-2 py-2 outline-none"
                required
              />
            </div>
            <div className="flex flex-row justify-start gap-2 w-full items-center mb-2">
              <input type="checkbox" name="" id="" className="accent-[#5c5ce9]" required/>
              <p>
                I agree to the <a>terms of service</a>
              </p>
            </div>
            <div className="flex flex-row justify-start gap-2 w-full items-center mb-4">
              <input type="checkbox" name="" id="" className="accent-[#5c5ce9]" required/>
              <p>I agree to recieve marketing updates from hudddle</p>
            </div>

            <button type="submit" className="bg-[#5C5CE9] text-white h-[52px] w-[85%] px-6 py-3 mt-3 rounded-lg">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
