import gsap from "gsap";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import { Container } from "./HelperComponents/Container";
import { Heading } from "./HelperComponents/Heading";
import { Text } from "./HelperComponents/Text";
import { Wrapper } from "./HelperComponents/Wrapper";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
interface CardProps {
    image: string;
    title: string;
    description: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({
    image,
    title,
    description,
    className,
}) => (
    <Container
        layout="column"
        gap={4}
        Align="start"
        className={`${className} lg:h-[347px] justify-evenly h-[242px] px-[40px] py-[24px] lg:w-[360px] w-full border border-gradient rounded-lg`}
    >
        <img className="w-[3rem]" src={image} alt="" />
        <Heading variant="title">{title}</Heading>
        <Text variant="text-3" color="dark-1">
            {description}
        </Text>
    </Container>
);

const Ourdrive: React.FC = () => {
    useGSAP(() => {
        gsap.to(".collab", {
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.2,
            ease: "power2.in",
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".ourDrive",
                start: "top 35%",
            },
        });
    });
    return (
        <Wrapper className="ourDrive lg:py-[50px] py-[30px] min-h-screen">
            <Container
                sectionId="what-drives-us"
                layout="column"
                gap={40}
                Align="start"
            >
                <Container layout="column" gap={40} Align="start">
                    <Heading
                        variant="introduction"
                        className="self-center lg:self-start text-center lg:text-left"
                    >
                        The Challenge
                    </Heading>

                    <Heading
                        variant="sub-heading"
                        className="self-center text-center lg:text-left lg:self-start"
                    >
                        What Drives Us
                    </Heading>

                    <Text variant="text-1" className="text-center lg:text-left">
                        The Imposed lockdowns during the COVID-19 pandemic
                        impacted the living and working habits of millions in
                        several industries. Working remotely has become a
                        prominent solution to continued employment. The
                        transition to remote work has several prospects for
                        adaptability and international cooperation, but it also
                        presents distinct difficulties for both employees and
                        managers.
                    </Text>
                </Container>
                <Container
                    layout="row"
                    spread
                    gap={40}
                    className="w-full flex-col lg:flex-row "
                >
                    <Card
                        image={Image1}
                        title="Collaboration"
                        className="collab translate-x-[60%] translate-y-44 scale-0"
                        description=" Working remotely reduces communication, collaboration between teams & management, making team development and trust building difficult"
                    />
                    <Card
                        image={Image2}
                        className="collab translate-y-44 scale-0 "
                        title="Accountability"
                        description="collab Employers worry about productivity and accountability, while employees can feel isolated and stressed by constant monitoring."
                    />
                    <Card
                        image={Image3}
                        title="Time Tracking"
                        className="collab -translate-x-[60%] translate-y-44 scale-0"
                        description="collab Companies need to track their remote teams to know what's being done per time, improving trust and confidence in the budding remote space."
                    />
                </Container>
            </Container>
        </Wrapper>
    );
};

export default Ourdrive;
