import { FC } from "react";
import { TextProps } from "../../@types/Text";

export const Text: FC<TextProps> = ({
  variant,
  children,
  color,
  className,
}) => {
  return (
    <>
      {variant === "text-1" ? (
        <h4
          className={`text-[#${
            color === "dark-1"
              ? "596780"
              : color === "dark-2"
              ? "707070"
              : color === "dark-3"
              ? "4D4D4D"
              : ""
          }] text-[18px] lg:text-[24px] font-normal leading-[22px] lg:leading-[40px] ${
            className && className
          }`}
        >
          {children}
        </h4>
      ) : variant === "text-2" ? (
        <h5
          className={`text-[#${
            color === "dark-1"
              ? "596780"
              : color === "dark-2"
              ? "707070"
              : color === "dark-3"
              ? "4D4D4D"
              : ""
          }] text-[14px] lg:text-[18px] font-normal leading-[20px] lg:leading-[36px] ${
            className && className
          }`}
        >
          {children}
        </h5>
      ) : variant === "text-3" ? (
        <h5
          className={`text-[#${
            color === "dark-1"
              ? "596780"
              : color === "dark-2"
              ? "707070"
              : color === "dark-3"
              ? "4D4D4D"
              : ""
          }] text-[14px] lg:text-[16px] font-normal leading-[20px] lg:leading-[24px] ${
            className && className
          }`}
        >
          {children}
        </h5>
      ) : null}
    </>
  );
};
