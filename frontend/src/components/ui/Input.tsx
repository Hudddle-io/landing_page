import { FC } from "react";
import { InputProps } from "../../@types/Input";
import { UseFormRegisterReturn } from "react-hook-form";

export const Input: FC<InputProps & { register?: UseFormRegisterReturn }> = ({
    placeholder,
    type,
    name,
    label,
    className,
    props,
    children,
    max,
    min,
    step,
    register,
}) => {
    return (
        <div className="relative flex flex-col w-full h-fit gap-2 mb-2">
            <label htmlFor={name} className="text-[#626F86]">
                {label}
            </label>
            <input
                min={min}
                max={max}
                step={step}
                {...props}
                {...register} // Spread the register prop here
                type={type}
                id={name}
                name={name} // Set the name attribute here
                placeholder={placeholder}
                className={`${className} border-[1px] border-[#091E4224] effect placeholder:text-[#626f8687] rounded-md w-full h-[3rem] px-2 py-2 outline-none`}
            />
            {children && children}
        </div>
    );
};
