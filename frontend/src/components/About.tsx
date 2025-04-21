import gsap from "gsap";

import { Container } from "./HelperComponents/Container";
import { Heading } from "./HelperComponents/Heading";
import { Text } from "./HelperComponents/Text";
import { Wrapper } from "./HelperComponents/Wrapper";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Layout } from "./HelperComponents/Layout";
import { aboutCardData } from "../data/aboutData";

gsap.registerPlugin(ScrollTrigger);
interface IconCardProps {
    icon: string;
    text: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, text }) => (
    <div className="iconCard translate-y-20 scale-0 flex flex-col justify-center items-center w-[100px] h-[100px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg backdrop-blur-md">
        <img src={icon} alt="" />
        <p className="text-xs text-gray-500 font-semibold">{text}</p>
    </div>
);

const AboutUs = () => {
    // about timeline

    useGSAP(() => {
        gsap.to(".about-intro", {
            y: -110,
            duration: 2,
            ease: "power2.in",
            delay: 0.5,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".about",
                start: "top 40%",
                end: "top top",
            },
        });
        gsap.to(".iconCard", {
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.in",
            delay: 0.5,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".about",
                start: "top 40%",
                end: "top top",
            },
        });
    });

    return (
        <Wrapper>
            <Container
                sectionId="about-us"
                className="h-screen about"
                layout="column"
                Justify="center"
                gap={80}
            >
                <Container layout="column" gap={40} Align="center">
                    <Heading overflow-hidden variant="introduction">
                        Our Services
                    </Heading>

                    <Heading className="" variant="sub-heading">
                        <div className="w-full h-full relative overflow-hidden">
                            <div className="about-intro absolute left-0 top-0 w-full h-full z-20 bg-white"></div>
                            About Us
                        </div>
                    </Heading>
                    <Text
                        variant="text-1"
                        className=" text-center"
                        color="dark-1"
                    >
                        <div className="w-full h-full relative overflow-hidden">
                            <div className="about-intro absolute left-0 top-0 w-full h-full z-20 bg-white"></div>
                            The rise of remote work has created challenges for
                            managing teams effectively. Employers worry about
                            productivity and accountability, while employees can
                            feel isolated and stressed by constant monitoring.
                        </div>
                    </Text>
                </Container>

                <Container layout="row" Justify="center" className=" relative">
                    <div className="absolute bg-gradient-to-tr from-[#0000] blur-sm 80% to-white w-[100px] h-full -right-0 z-20 top-0"></div>
                    <div className="overflow-x-scroll no-scrollbar flex">
                        {" "}
                        <Layout
                            array={aboutCardData}
                            element={IconCard}
                            direction="row"
                            className="mx-auto h-auto"
                            gap={40}
                        />
                    </div>
                </Container>
            </Container>
        </Wrapper>
    );
};

export default AboutUs;
