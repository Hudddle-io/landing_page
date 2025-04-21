import React, { FC } from "react";

interface CheckboxProps {
    children?: React.ReactNode;
    className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ children, className }) => {
    return (
        <div
            className={`${
                className && className
            } flex flex-row justify-start gap-2 w-full items-center mb-2`}
        >
            <input
                type="checkbox"
                name=""
                id=""
                className="accent-[#5c5ce9] effect"
                required
            />
            <p>{children}</p>
        </div>
    );
};
