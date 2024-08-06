import { useEffect, useRef } from "react";
import gsap from "gsap";
import trophies from "../assets/tropies.svg";
import Torus from "../assets/Torus.svg";
import MetalTorus from "../assets/MetalTorus.png";
import bullet1 from "../assets/bullet1.svg";
import bullet2 from "../assets/bullet2.svg";
import bullet3 from "../assets/bullet3.svg";
import { Button } from "./ui/Button";
import { Wrapper } from "./HelperComponents/Wrapper";
import { Container } from "./HelperComponents/Container";
import { Heading } from "./HelperComponents/Heading";
import { Text } from "./HelperComponents/Text";
import { Layout } from "./HelperComponents/Layout";
import { heroData, heroTitleBeforeSpan } from "../data/heroData";
import { Detail } from "./ui/Detail";
import { HeadingContainer } from "./micro-components/HeadingContainer";
import { useFloatAnimation } from "../hooks/useFloatAnimation";
import { NavLink } from "react-router-dom";

const Hero = () => {
    const blurRef = useRef<HTMLImageElement>(null);

    useFloatAnimation(
        blurRef.current,
        [24, 23, 32, 33],
        [74, 84, 34, 25],
        [63, 23, 24, 54],
        [34, 34, 34, 23]
    );

    const animateBlurRef = () => {
        const container = blurRef.current?.parentElement;
        if (!container || !blurRef.current) return;

        let containerWidth = container.offsetWidth;
        let containerHeight = container.offsetHeight;

        if (containerWidth > 1400) containerWidth = 1400;
        if (containerHeight > 1400) containerHeight = 1400;

        gsap.to(blurRef.current, {
            left: Math.round(Math.random() * containerWidth),
            top: Math.round(Math.random() * containerHeight),
            ease: "power3.in",
            duration: 10,
            onComplete: animateBlurRef,
        });
    };

    useEffect(() => {
        const introCard = document.querySelectorAll(".introCard");

        animateBlurRef();

        const introTl = gsap.timeline({ delay: 0.02 });
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
        introTl.to(".hero-btn", {
            opacity: 1,
        });
    });

    return (
        <Container
            sectionId="home"
            className="relative lg:mt-0 min-h-screen overflow-hidden "
            Justify="start"
            layout="row"
        >
            <img
                ref={blurRef}
                src={MetalTorus}
                alt=""
                className="mtt w-[583px] h-[583px] absolute top-[7%] right-[35%] translate-x-10 opacity-0 z-10 blur-xs imgtask animate-spin-slow"
            />
            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-xl z-20"></div>
            <Wrapper className="min-h-screen h-[1000px] md:h-fit flex lg:items-center lg:justify-start items-start overflow-hidden z-30 w-full">
                <Container
                    className="pt-14 max-sm:flex-col w-full max-w-[700px] justify-start "
                    maxHeight={"auto"}
                    layout="column"
                    Align="start"
                    gap={24}
                >
                    <Heading
                        className="overflow-hidden inline-flex gap-2 flex-wrap"
                        variant="heading"
                    >
                        {heroTitleBeforeSpan.map((el) => (
                            <HeadingContainer list={el} />
                        ))}
                        <span className="relative overflow-hidden bg-[#956FD6] text-transparent bg-clip-text">
                            <div className="prd absolute translate-y-10 opacity-0 bg-[#956FD6] w-full h-full left-0 right-0"></div>
                            {""}
                            <div className="prdTwo opacity-0">
                                The future of work is play.
                            </div>
                        </span>{" "}
                    </Heading>
                    <Text
                        className="lg:pr-14 heroTwo opacity-0 translate-y-10"
                        color="dark-3"
                        variant="text-1"
                    >
                        We’re building a remote work tool that helps remote
                        teams build collaboration using gamified task tracking
                        and social comparison. We’re making work fun.
                    </Text>
                    <Layout
                        className=""
                        array={heroData}
                        direction="column"
                        gap={16}
                        element={Detail}
                    />
                    <NavLink to={"/register"} className="w-full md:w-fit z-20">
                        <Button
                            className="hero-btn lg:w-fit opacity-0 ml-auto h-full "
                            progressText="processing"
                        >
                            Join The Waitlist
                        </Button>
                    </NavLink>
                </Container>
                <div className="flex h-[450px] w-[805px] absolute right-0 bottom-0">
                    <img
                        src={bullet3}
                        alt=""
                        className="hidden md:flex w-[306px] h-[68px] absolute -top-[15%] right-[20%] translate-x-20 opacity-0 z-30 blur-xs imgtask"
                    />
                    <img
                        src={bullet2}
                        alt=""
                        className="hidden md:flex w-[250px] h-[66px] absolute top-[50%] left-[10%] z-30 -translate-x-20 opacity-0 blur-xs imgtask"
                    />
                    <img
                        src={bullet1}
                        alt=""
                        className="hidden md:flex w-[250px] h-[66px] absolute top-[80%] right-[20%] translate-x-20 opacity-0 z-30 blur-xs imgtask"
                    />
                    <img
                        src={trophies}
                        alt=""
                        className="animate-float-One w-[389px] h-[389px] lg:w-[635px] lg:h-[634px] absolute -bottom-[15%] -right-[5%] translate-x-20 opacity-0 z-20 blur-xs imgtask"
                    />
                    <img
                        src={Torus}
                        alt=""
                        className="hidden md:flex animate-float-Two w-[583px] h-[583px] absolute -top-[35%] right-[10%] translate-x-10 opacity-0 z-10 blur-xs imgtask"
                    />
                </div>
            </Wrapper>
        </Container>
    );
};

export default Hero;
