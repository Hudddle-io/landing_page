import AboutUs from "../components/About";
import Hero from "../components/Hero";
import HudddleFeatures from "../components/Huddlefeatures";
import Ourdrive from "../components/Ourdrive";
import Roadmap from "../components/Roadmap";
import { features } from "../data/data";

const Waitlist = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Ourdrive />
      <HudddleFeatures features={features} />
      <Roadmap />
    </>
  );
};

export default Waitlist;
