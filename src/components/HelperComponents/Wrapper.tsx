import React, { FC } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Wrapper: FC<Props> = ({ children, className }) => {
    return (
        <main
            className={`${className} w-full bg-none mx-auto max-w-[1440px] py-[30px] px-[70px] lg:py-[24px] lg:px-[120px]`}
        >
            {children}
        </main>
    );
};
