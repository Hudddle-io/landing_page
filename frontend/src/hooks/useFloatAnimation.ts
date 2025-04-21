import gsap from "gsap";

export const useFloatAnimation = (
    target: gsap.TweenTarget,
    Top: [number, number, number, number],
    Left: [number, number, number, number],
    Right: [number, number, number, number],
    Bottom: [number, number, number, number]
) => {
    console.log(target);
    const Timeline = gsap.timeline({ delay: 0.2 });
    Timeline.pause();

    Timeline.play();
    // to move up or down
    Timeline.to(target, {
        top: Top[0],
        bottom: Bottom[0],
        left: Left[0],
        right: Right[0],
        ease: "power3.in",
    });
    // to move left or right
    Timeline.to(target, {
        top: Top[1],
        bottom: Bottom[1],
        left: Left[1],
        right: Right[1],
        ease: "power3.in",
    });
    // to move left or right
    Timeline.to(target, {
        top: Top[2],
        bottom: Bottom[2],
        left: Left[2],
        right: Right[2],
        ease: "power3.in",
    });
    // to move left or right
    Timeline.to(target, {
        top: Top[3],
        bottom: Bottom[3],
        left: Left[3],
        right: Right[3],
        ease: "power3.in",
    });
};
