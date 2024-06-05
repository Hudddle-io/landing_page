import { FC, useRef } from "react";
import { InputProps } from "../../@types/Input";

export const Input: FC<InputProps> = ({
    children,
    placeholder,
    type,
    name,
    value,
    onChange,
    className,
}) => {
    // const [error, setError] = useState(false);
    const errorRef = useRef<HTMLSpanElement | null>(null);

    return (
        <div
            className={`${
                className && className
            } group relative min-w-[177px] flex flex-col lg:flex-row translate-y-10 items-center w-fit lg:justify-between lg:h-[60px] h-[48px] z-10  px-1 py-4 lg:py-2 bg-white rounded-lg`}
        >
            <input
                className="w-2/4 bg-none peer hidden focus:text-[#5C5CE9] invalid:text-red-500 h-full relative outline-none"
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            {/* anything goes here */}
            {children && children}
            <span
                ref={errorRef}
                className={`absolute opacity-0 bottom-0 left-0 px-2 text-red-500 -translate-y-5 text-xs -z-10`}
            >
                Invalid input Type, please use an email
            </span>
        </div>
    );
};
