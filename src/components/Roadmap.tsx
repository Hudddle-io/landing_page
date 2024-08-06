import { useRef, useEffect, useState } from "react";
import { Circle, Group, Layer, Line, Stage } from "react-konva";
import Konva from "konva";
import { Container } from "./HelperComponents/Container";
import { Heading } from "./HelperComponents/Heading";
import { Wrapper } from "./HelperComponents/Wrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
    const circleRef = useRef<Konva.Circle>(null);
    const blurRef = useRef<HTMLDivElement>(null);
    const circleGroupRef = useRef<Konva.Group>(null);
    const stageRef = useRef<Konva.Stage>(null);
    const controlsRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [wrapperWidth, setWrapperWidth] = useState<number>(0);

    useEffect(() => {
        const updateWrapperWidth = () => {
            if (wrapperRef.current) {
                setWrapperWidth(wrapperRef.current.clientWidth);
            }
        };

        updateWrapperWidth();
        window.addEventListener("resize", updateWrapperWidth);

        return () => {
            window.removeEventListener("resize", updateWrapperWidth);
        };
    }, []);

    const startDate = new Date("2024-04-30");
    const endDate = new Date("2024-08-31");
    const currentDate = new Date();

    const totalDuration = (endDate.getTime() - startDate.getTime()) / 1000; // Total duration in seconds
    const elapsedTime = (currentDate.getTime() - startDate.getTime()) / 1000; // Elapsed time in seconds
    const remainingTime = Math.max(totalDuration - elapsedTime, 0); // Remaining time in seconds

    const calculatePosition = (date: Date) => {
        const totalDays =
            (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
        const currentDays =
            (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
        const positionPercentage = (currentDays / totalDays) * 100;
        return positionPercentage;
    };

    const initialPositionPercentage = calculatePosition(currentDate);
    const finalPositionPercentage = 50; // The position percentage at the end date

    useEffect(() => {
        const initialPositionX =
            (wrapperWidth * initialPositionPercentage) / 100;
        const finalPositionX = (wrapperWidth * finalPositionPercentage) / 100;
        console.log(
            "init-p-x " + initialPositionX,
            "final-p-x " + finalPositionX
        );

        // Move to initial position based on the current date
        gsap.to(circleGroupRef.current, {
            x: finalPositionX,
            duration: 10,
            ease: "power2.inOut",
            onComplete: () => {
                // After reaching the initial position, start continuous update
                gsap.to(circleGroupRef.current, {
                    x: finalPositionX,
                    duration: remainingTime,
                    ease: "linear",
                    scrollTrigger: {
                        trigger: "#stage",
                        start: "top center",
                        end: "bottom top",
                    },
                });
            },
        });
        console.log(wrapperWidth);
    }, [
        initialPositionPercentage,
        finalPositionPercentage,
        remainingTime,
        wrapperWidth,
    ]);

    useGSAP(() => {
        const layer = circleRef.current?.getLayer();
        if (!layer) {
            console.error("Layer is not available.");
            return;
        }

        const anim = new Konva.Animation((frame) => {
            if (frame && circleRef.current) {
                const blur = 20 + 10 * Math.sin(frame.time * 0.005); // Adjust the speed and range of the pulsing effect
                circleRef.current.shadowBlur(blur);
            }
        }, layer);

        anim.start();

        // Return a cleanup function to stop the animation
        return () => anim.stop();
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!blurRef.current) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const rectX = e.clientX - rect.left;
        const rectY = e.clientY - rect.top;

        gsap.to(blurRef.current, {
            left: rectX,
            top: rectY,
            ease: "power2.out",
            delay: 0.5,
            duration: 1,
        });
    };

    const handleMouseEnter = () => {
        gsap.killTweensOf(blurRef.current);
    };

    const handleMouseLeave = () => {
        gsap.to(blurRef.current, {
            left: Math.random() * window.innerWidth,
            top: Math.random() * window.innerHeight,
            ease: "power2.inOut",
            duration: 1,
        });
    };

    const milestones = [
        { title: "Milestone 1: Huddle Starts", date: new Date("2024-04-30") },
        {
            title: "Milestone 2: Waitlist Community",
            date: new Date("2024-08-07"),
        },
        { title: "Milestone 3: MVP Launch", date: new Date("2024-08-31") },
    ];

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="bg-[#000000] min-h-screen w-full relative overflow-hidden ring-1 ring-indigo-500"
        >
            <Wrapper
                ref={wrapperRef}
                className="overflow-x-hidden p-8 rounded-lg relative z-30"
            >
                <Container sectionId="product-roadmap" layout="column" gap={50}>
                    <Container layout="column" gap={40}>
                        <Heading variant="introduction">Our Project</Heading>
                        <Heading variant="sub-heading">
                            Project Timeline
                        </Heading>
                    </Container>
                </Container>
                <Stage
                    ref={stageRef}
                    id="stage"
                    width={wrapperWidth}
                    height={600}
                    className="bg-transparent mt-[80px]"
                >
                    <Layer>
                        <Line
                            points={[20, 50, wrapperWidth - 20, 50]} // [x1, y1, x2, y2]
                            strokeLinearGradientStartPoint={{ x: 0, y: 0 }}
                            strokeLinearGradientEndPoint={{
                                x: wrapperWidth,
                                y: 0,
                            }}
                            strokeLinearGradientColorStops={[
                                0,
                                "white",
                                0.5,
                                "#956FD6",
                                1,
                                "white",
                            ]}
                            strokeWidth={1}
                            y={-10}
                        />
                        <Group ref={circleGroupRef}>
                            <Circle
                                ref={circleRef}
                                shadowColor="#956FD6"
                                shadowOffsetX={0}
                                shadowOffsetY={5}
                                shadowOpacity={0.9}
                                shadowBlur={20}
                                x={40}
                                y={40}
                                fill={"#fff"}
                                width={24}
                                height={24}
                            />
                            <Circle
                                shadowColor="#956FD6"
                                shadowOffsetX={0}
                                shadowOffsetY={0}
                                shadowOpacity={0.9}
                                shadowBlur={30}
                                x={40}
                                y={40}
                                fill={"#fff"}
                                width={24}
                                height={24}
                            />
                            <Circle
                                shadowColor="#956FD6"
                                shadowOffsetX={0}
                                shadowOffsetY={0}
                                shadowOpacity={0.9}
                                shadowBlur={30}
                                x={40}
                                y={40}
                                fill={"#fff"}
                                width={24}
                                height={24}
                            />
                        </Group>
                    </Layer>
                </Stage>
                {/* controls */}
                <div
                    ref={controlsRef}
                    className="controls py-[30px] px-[20px] lg:py-[24px] lg:px-[120px] text-white absolute bottom-[70%] left-0 w-full flex items-center justify-between"
                >
                    <button className="bg-none outline-none border-none p-2">
                        <ChevronLeft className="text-white" />
                    </button>
                    <button className="bg-none outline-none border-none p-2">
                        <ChevronRight className="text-white" />
                    </button>
                </div>
                {/* dates */}
                <div className="dates py-[30px] px-[20px] lg:py-[24px] lg:px-[120px] absolute bottom-[35%] left-0 w-full flex justify-between items-start pt-24">
                    {milestones.map((milestone, index) => {
                        const isPast = currentDate >= milestone.date;
                        return (
                            <div
                                key={index}
                                className={`date font-bold text-3xl flex flex-col gap-24 items-start ${
                                    isPast ? "text-white" : "opacity-30"
                                }`}
                            >
                                <span>
                                    <Heading variant="title">
                                        {milestone.title}
                                    </Heading>
                                </span>
                                <Heading variant="title">
                                    {milestone.date.toDateString()}
                                </Heading>
                            </div>
                        );
                    })}
                </div>
            </Wrapper>
            {/* Layer div */}
            <div className="w-full h-full absolute top-0 left-0 backdrop-blur-2xl z-20"></div>
            {/* floating div */}
            <div
                ref={blurRef}
                className="w-[180px] h-[180px] lg:w-[400px] lg:h-[400px] rounded-full bg-[#94bfff3b] shadow-2xl shadow-[#94bfff] absolute top-52 left-52 animate-spin-slow"
            ></div>
        </div>
    );
};

export default Roadmap;
