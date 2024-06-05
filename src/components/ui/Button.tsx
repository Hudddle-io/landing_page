import { FC, useRef, useState, useEffect } from "react";
import { ButtonProps } from "../../@types/Button";
import gsap from "gsap";
import { Loader2 } from "lucide-react";

export const Button: FC<ButtonProps> = ({
    children,
    progressText,
    className,
    onClick,
}) => {
    const [processing, setProcessing] = useState(false);
    const effectRef = useRef<HTMLDivElement | null>(null);
    const buttonTitmeline = gsap.timeline();
    buttonTitmeline.pause();

    useEffect(() => {
        const elements = effectRef.current?.querySelectorAll(".effect");

        if (elements) {
            elements.forEach((element) => {
                buttonTitmeline.to(element, {
                    scale: 10,
                    x: 70,
                    duration: 0.2,
                    ease: "power.out(0.15)",
                    stagger: {
                        amount: 0.2,
                        axis: "x",
                        ease: "elastic.out",
                        yoyo: true,
                    },
                });
            });
        }
    });

    const clickTl = gsap.timeline();
    clickTl.pause();

    clickTl.to(".loading", {
        display: "block",
        scale: 1,
    });

    const handleClick = () => {
        onClick;
        setProcessing(!processing);
        clickTl.play();
        setTimeout(() => {
            clickTl.reverse();
            setProcessing(false);
            buttonTitmeline.reverse();
        }, 5000);
    };

    return (
        <button
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onMouseEnter={() => buttonTitmeline.play()}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onMouseLeave={() => buttonTitmeline.reverse()}
            onClick={handleClick}
            className={`${className}  w-auto flex items-center justify-center gap-2 disabled:bg-slate-500 disabled:cursor-not-allowed overflow-hidden bg-[#5C5CE9] text-white h-[52px] mt-2 lg:mt-0 px-4 py-2  rounded-lg`}
        >
            <div ref={effectRef} className="relative">
                <div className="effect absolute w-[20%] h-[40%] -translate-x-[120%] translate-y-1/2 bg-slate-50 top-0 left-0 rounded-lg opacity-15"></div>
                <div className="effect absolute w-[20%] h-[40%] -translate-x-[120%] translate-y-1/2 bg-slate-50 top-0 left-0 rounded-lg opacity-25"></div>
            </div>
            {processing ? progressText : children}
            {processing ? (
                <Loader2 className="transition animate-spin w-4 h-4" />
            ) : null}
        </button>
    );
};
