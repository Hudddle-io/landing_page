import { forwardRef, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Wrapper = forwardRef<HTMLDivElement, Props>(
    ({ children, className, ...props }, ref) => {
        return (
            <main
                {...props}
                ref={ref}
                className={`${className} w-full bg-none mx-auto max-w-[1440px] py-[30px] px-[20px] lg:py-[24px] lg:px-[120px]`}
            >
                {children}
            </main>
        );
    }
);
