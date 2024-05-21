import file from '../assets/file.svg';
import account from '../assets/account.svg';
import books from '../assets/books.svg';
import card from '../assets/card.svg';
import track from '../assets/track.svg';


const HudddleFeatures = () => {
    return (
      <div className="flex flex-col items-center">
        <div className=" w-full flex flex-col gap-6 px-20 mt-10">
          <span className="bg-[#c340a04d] text-[#F178B6] py-1 px-2 rounded-md w-fit">
            Innovation
          </span>
          <h2 className="text-[36px] font-bold text-[#474747]">
            Hudddle Features
          </h2>
          <p className="w-[85%] text-[24px]">
            Hudddle empowers both employers and employees to achieve peak
            productivity and build successful remote teams. We’ve built a product
            that respects the remote work-life.
          </p>
        </div>
  
        <div className="flex w-full justify-center items-center gap-10 px-20">
          <div className="flex flex-col gap-8 py-5 w-[40%]">
            <div className="flex gap-6">
              <img src={file} alt="" />
              <div>
                <h2 className="font-bold text-[25px] text-[#4D4D4D]">
                  {" "}
                  Simplified Task Management:
                </h2>
                <p className="text-[16px] w-[25rem] text-[#596780]">
                  Track progress with a Kanban board and task sheets, focusing on
                  results rather than micromanagement
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <img src={account} alt="" />
              <div>
                <h2 className="font-bold text-[25px] text-[#4D4D4D]">
                  Enhanced Collaboration
                </h2>
                <p className="text-[16px] w-[25rem] text-[#596780]">
                  Facilitate real-time communication with live workspaces (similar
                  to Discord rooms) and screen sharing options.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <img src={books} alt="" />
              <div>
                <h2 className="font-bold text-[25px] text-[#4D4D4D]">
                  Per-app focused tracking
                </h2>
                <p className="text-[16px] w-[25rem] text-[#596780]">
                  Track task completion and software usage relevant to work, not
                  overall activity, promoting trust and reducing stress.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <img src={track} alt="" />
              <div>
                <h2 className="font-bold text-[25px] text-[#4D4D4D]">
                  Transparent Accountability
                </h2>
                <p className="text-[16px] w-[25rem] text-[#596780]">
                  Enable peer-reviewed work completion rates and shared task
                  updates to foster a culture of ownership
                </p>
              </div>
            </div>
          </div>
          <img width={700} src={card} alt="" />
        </div>
      </div>
    );
  };
  
  export default HudddleFeatures;
  