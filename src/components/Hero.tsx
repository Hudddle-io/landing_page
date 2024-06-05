import { useEffect } from "react";
import gsap from "gsap";
import Man from "../assets/man-portrait.svg";
import bullet1 from "../assets/bullet1.svg";
import bullet2 from "../assets/bullet2.svg";
import bullet3 from "../assets/bullet3.svg";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Wrapper } from "./HelperComponents/Wrapper";
import { Container } from "./HelperComponents/Container";
import { Heading } from "./HelperComponents/Heading";
import { Text } from "./HelperComponents/Text";
import { Layout } from "./HelperComponents/Layout";
import {
    heroData,
    heroTitleAfterSpan,
    heroTitleBeforeSpan,
} from "../data/heroData";
import { Detail } from "./ui/Detail";
import { HeadingContainer } from "./micro-components/HeadingContainer";

const Hero = () => {
    // Timeline animations
    const introTl = gsap.timeline({ delay: 0.02 });

    useEffect(() => {
        const introCard = document.querySelectorAll(".introCard");
        const inputContainer = document.querySelector(".input");
        const inputElement = inputContainer?.querySelector("input");

        introTl.to(".man", {
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "power1.in",
        });
        introTl.to(".imgtask", {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.3,
            ease: "power1.in",
        });
        introTl.to(".text", {
            opacity: 1,
            y: 0,
            delay: 0.02,
            duration: 0.1,
            stagger: 0.02,
            ease: "power4.in",
        });
        introTl.to(".prd", {
            opacity: 1,
            y: 0,
            delay: 0.1,
            duration: 0.29,
            ease: "power2.in",
        });
        introTl.to(".prdTwo", {
            opacity: 1,
            duration: 0.2,
            delay: 0.1,
            ease: "power2.in",
        });
        introTl.to(".prd", {
            x: "120%",
            delay: 0.1,
            duration: 0.5,
            ease: "power2.out",
        });
        introTl.to(".heroTwo", {
            y: 0,
            opacity: 1,
            delay: 0.05,
            duration: 0.2,
            ease: "power2.inOut",
        });
        introCard.forEach((child) => {
            introTl.to(child.firstChild, {
                scale: 1,
                duration: 0.3,
                stagger: 0.01,
                ease: "bounce.inOut(0.15)",
            });
            introTl.to(child.lastChild, {
                x: 0,
                opacity: 1,
                stagger: 0.01,
                ease: "power2.in",
            });
        });

        if (inputContainer) {
            // bring it up
            introTl.to(inputContainer, {
                width: "fit-content",
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power2.in",
            });
            // expand
        }
        introTl.to(inputContainer, {
            width: "100%",
            maxWidth: "552px",
            delay: 0.2,
            duration: 1,
            ease: "power2.out",
        });
        if (inputElement) {
            introTl.to(inputElement, {
                display: "flex",
                duration: 0.5,
                ease: "power2.in",
            });
        }
    });

    return (
        <Container
            sectionId="home"
            className={`mt-10 lg:mt-0 bg-[url(/assets/svgs/hero-background.svg)] bg-cover bg-no-repeat bg-center bg-fixed min-h-screen`}
            Justify="start"
            layout="row"
        >
            <Wrapper className="min-h-screen flex items-center overflow-hidden">
                <Container
                    className="pt-14 max-sm:flex-col"
                    maxHeight={"auto"}
                    maxWidth={700}
                    layout="column"
                    Align="start"
                    gap={24}
                >
                    <Heading
                        className="overflow-hidden flex gap-2 flex-wrap"
                        variant="heading"
                    >
                        {heroTitleBeforeSpan.map((el) => (
                            <HeadingContainer list={el} />
                        ))}
                        <span className="relative overflow-hidden bg-gradient-to-tr from-[#4B9BD0] to-[#54C6A4] text-transparent bg-clip-text">
                            <div className="prd absolute translate-y-10 opacity-0 bg-gradient-to-tr from-[#4B9BD0] to-[#54C6A4] w-full h-full left-0 right-0"></div>
                            {""}{" "}
                            <div className="prdTwo opacity-0">productivity</div>
                        </span>{" "}
                        {heroTitleAfterSpan.map((el) => (
                            <HeadingContainer list={el} />
                        ))}
                    </Heading>
                    <Text
                        className="lg:pr-14 heroTwo opacity-0 translate-y-10"
                        color="dark-3"
                        variant="text-1"
                    >
                        Huddle.io targets small and medium-sized businesses
                        (SMBs) with remote or hybrid workforces.
                    </Text>
                    <Layout
                        className=""
                        array={heroData}
                        direction="column"
                        gap={16}
                        element={Detail}
                    />
                    <Input
                        className="input opacity-0"
                        type="email"
                        placeholder="Enter your email address"
                    >
                        <Button
                            className="w-full lg:w-fit  ml-auto h-full lg:relative absolute bottom-0 left-0 translate-y-[150%] lg:translate-y-[0%]"
                            progressText="processing"
                        >
                            Join The Waitlist
                        </Button>
                    </Input>
                </Container>
                <div className="hidden lg:flex h-[450px] w-[805px] absolute right-0 bottom-0">
                    <img
                        src={bullet3}
                        alt=""
                        className="w-[306px] h-[68px] absolute -top-[15%] right-[20%] translate-x-20 opacity-0 z-20 blur-xs imgtask"
                    />
                    <img
                        src={bullet2}
                        alt=""
                        className="w-[250px] h-[66px] absolute top-[50%] left-[10%] z-20 -translate-x-20 opacity-0 blur-xs imgtask"
                    />
                    <img
                        src={bullet1}
                        alt=""
                        className="w-[250px] h-[66px] absolute top-[80%] right-[20%] translate-x-20 opacity-0 z-20 blur-xs imgtask"
                    />
                    <img
                        src={Man}
                        alt="Man Portrait"
                        className="man scale-0 translate-y-[100%] h-full w-full object-fit"
                    />
                </div>
            </Wrapper>
        </Container>
    );
};

export default Hero;
