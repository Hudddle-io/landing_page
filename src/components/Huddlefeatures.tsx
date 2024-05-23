import card from '../assets/card.svg';

interface Feature {
  image: string;
  title: string;
  description: string;
}

interface HudddleFeaturesProps {
  features: Feature[];
}

const HudddleFeatures: React.FC<HudddleFeaturesProps> = ({ features }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex flex-col gap-6 px-6 lg:px-20 mt-10">
        <span className="bg-[#c340a04d] text-[#F178B6] py-1 px-2 rounded-md w-fit">
          Innovation
        </span>
        <h2 className="text-[36px] font-bold text-[#474747]">Hudddle Features</h2>
        <p className="w-full text-[1.2rem] lg:w-[85%] lg:text-[24px]">
          Hudddle empowers both employers and employees to achieve peak productivity and build
          successful remote teams. We&apos;ve built a product that respects the remote work-life.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-10 px-4 lg:px-20">
        <div className="flex flex-col gap-8 py-5 px-6 lg:px-0 w-full lg:w-[40%]">
          {features.map((feature, index) => (
            <div className="flex flex-col lg:flex-row gap-6 items-center" key={index}>
              <img src={feature.image} alt="" className="w-auto lg:w-[25vw] h-auto" />
              <div className="flex flex-col items-center justify-center w-full">
                <h2 className="font-bold text-[1.35rem] mb-2 lg:mb-0 text-center lg:text-[25px] text-[#4D4D4D]">
                  {feature.title}
                </h2>
                <p className="text-[16px] w-full text-center lg:w-[25rem] text-[#596780]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img width={700} src={card} alt="" />
      </div>
    </div>
  );
};

export default HudddleFeatures;