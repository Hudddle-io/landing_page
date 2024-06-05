import { FC } from "react";
import { HeadingProps } from "../../@types/Heading";

export const Heading: FC<HeadingProps> = ({
    variant,
    children,
    bold,
    capitalize,
    className,
}) => {
    return (
        <>
            {variant === "heading" ? (
                <h1
                    className={`${
                        className && className
                    } text-[37px] lg:text-[50px] font-bold leading-[50px] lg:leading-[60px] ${
                        bold ? "text-[#262626]" : "text-[#474747]"
                    } ${capitalize ? "capitalize" : ""}`}
                >
                    {children}
                </h1>
            ) : variant === "sub-heading" ? (
                <h2
                    className={`${
                        className && className
                    } text-[29px] lg:text-[36px] font-semibold leading-[36px] lg:leading-[43.5px] ${
                        bold ? "text-[#262626]" : "text-[#474747]"
                    } ${bold ? "text-[#262626]" : "text-[#474747]"} ${
                        capitalize ? "capitalize" : ""
                    }`}
                >
                    {children}
                </h2>
            ) : variant === "title" ? (
                <h3
                    className={`${
                        className && className
                    } text-[21px] lg:text-[24px] font-semibold leading-[24px] lg:leading-[29.05px] ${
                        bold ? "text-[#262626]" : "text-[#474747]"
                    } ${bold ? "text-[#262626]" : "text-[#474747]"} ${
                        capitalize ? "capitalize" : ""
                    }`}
                >
                    {children}
                </h3>
            ) : variant === "introduction" ? (
                <h3 className="px-[10px] py-[10px] rounded-lg bg-[#C340A11A] text-[#F178B6] text-[20px] leading-[24px] font-medium w-fit text-center mx-auto lg:mx-0">
                    {children}
                </h3>
            ) : null}
        </>
    );
};
