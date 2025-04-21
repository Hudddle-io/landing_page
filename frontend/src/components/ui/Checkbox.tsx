import React, { FC, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  className?: string;
  register?: UseFormRegisterReturn;
}

export const Checkbox: FC<CheckboxProps> = ({ 
  children, 
  className, 
  register,
  ...props 
}) => {
  return (
    <div
      className={`${
        className ? className : ""
      } flex flex-row justify-start gap-2 w-full items-center mb-2`}
    >
      <input
        type="checkbox"
        className="accent-[#5c5ce9] effect"
        {...register}
        {...props}
      />
      <p>{children}</p>
    </div>
  );
};
