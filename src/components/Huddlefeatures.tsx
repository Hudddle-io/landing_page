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
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.3,
            stagger: 0.5,
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
        gsap.to(".features", {
            opacity: 1,
            duration: 0.3,
            stagger: 0.5,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".features-sectionOne",
                start: "top 30%",
                end: "top 95%",
                scrub: 4,
                markers: false,
                toggleActions: "restart none none none",
            },
        });
    });
    return (
        <Wrapper>
            <Container sectionId="huddle-features" layout="column" gap={80}>
                <Container layout="column" maxWidth={826} gap={40}>
                    <Heading
                        className="text-center lg:text-left"
                        variant="introduction"
                    >
                        Innovation
                    </Heading>
                    <Heading
                        className="text-center lg:text-left"
                        variant="sub-heading"
                    >
                        Hudddle Features
                    </Heading>

                    <Text
                        className="text-center lg:text-left"
                        variant="text-1"
                        color="dark-3"
                    >
                        Hudddle empowers both employers and employees to achieve
                        peak productivity and build successful remote teams.
                        We&apos;ve built a product that respects the remote
                        work-life.
                    </Text>
                </Container>
                <Container
                    className="features-sectionOne"
                    layout="row"
                    gap={100}
                >
                    <div className="flex flex-col gap-8 py-5 px-6 lg:px-0 w-full lg:w-[40%]">
                        {/* features */}
                        <Layout
                            gap={44}
                            array={features}
                            element={FeaturesCard}
                        />
                    </div>
                    <div className="hidden lg:flex feature-imgOne opacity-0 scale-0 -translate-x-[200%]">
                        <img width={700} src={card} alt="" />
                    </div>
                </Container>
            </Container>
        </Wrapper>
    );
};

export default HudddleFeatures;
