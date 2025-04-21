import { Footer } from "../components/Footer";
import Hero from "../components/Hero";
import HudddleFeatures from "../components/Huddlefeatures";
import Navbar from "../components/Navbar";
import Ourdrive from "../components/Ourdrive";
import Roadmap from "../components/Roadmap";
import { features } from "../data/data";

const Waitlist = () => {
    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <HudddleFeatures features={features} />
            <Ourdrive />
            <Roadmap />
            <Footer />
        </div>
    );
};

export default Waitlist;
