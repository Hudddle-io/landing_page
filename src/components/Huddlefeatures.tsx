import gsap from "gsap";
import card from "../assets/card.svg";
import { Container } from "./HelperComponents/Container";
import { Heading } from "./HelperComponents/Heading";
import { Layout } from "./HelperComponents/Layout";
import { Text } from "./HelperComponents/Text";
import { Wrapper } from "./HelperComponents/Wrapper";
import { FeaturesCard } from "./micro-components/FeaturesCard";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
    image: string;
    title: string;
    description: string;
}

interface HudddleFeaturesProps {
    features: Feature[];
}

const HudddleFeatures: React.FC<HudddleFeaturesProps> = ({ features }) => {
    useGSAP(() => {
        gsap.to(".feature-imgOne", {
            x: -10,
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".features-sectionOne",
                start: "top 50%",
                end: "top 95%",
                scrub: 4,
                markers: false,
                toggleActions: "restart none none none",
            },
        });
        // for features
        gsap.to(".features", {
            opacity: 1,
            duration: 0.3,
            stagger: 0.5,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".features-sectionOne",
                start: "top 63%",
                end: "top 95%",
                scrub: 4,
                markers: false,
                toggleActions: "restart none none none",
            },
        });
    });
    return (
        <Wrapper className="mt-10">
            <Container sectionId="huddle-features" layout="column" gap={80}>
                <Container
                    layout="row"
                    Justify="center"
                    gap={40}
                    maxWidth={1400}
                    className="w-full flex-col lg:flex-row"
                >
                    <Container
                        layout="column"
                        className="lg:w-[50%] w-full"
                        gap={40}
                    >
                        <Heading
                            className="text-left mr-auto"
                            variant="introduction"
                        >
                            Innovation
                        </Heading>
                        <Heading className="text-left" variant="sub-heading">
                            Hudddle Features
                        </Heading>
                    </Container>

                    <Text
                        className="text-left w-full"
                        variant="text-1"
                        color="dark-3"
                    >
                        We’re building a remote work tool that helps remote
                        teams build collaboration using gamified task tracking
                        and social comparison. We’re making work fun.
                    </Text>
                </Container>
                <Container
                    className="features-sectionOne"
                    layout="row"
                    gap={100}
                >
                    <div className="hidden lg:flex feature-imgOne opacity-0 scale-0 translate-x-[100%]">
                        <img width={700} src={card} alt="" />
                    </div>
                    <div className="flex flex-col gap-8 py-5 px-6 lg:px-0 w-full lg:w-[50%]">
                        {/* features */}
                        <Layout
                            direction="column"
                            gap={44}
                            array={features}
                            element={FeaturesCard}
                        />
                    </div>
                </Container>
            </Container>
        </Wrapper>
    );
};

export default HudddleFeatures;
