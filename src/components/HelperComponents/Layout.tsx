import { FC } from "react";
import { LayoutProps } from "../../@types/Layout";

export const Layout: FC<LayoutProps> = ({
    element: Element,
    array,
    direction,
    gap,
    className,
    layoutRef,
}) => {
    return (
        <div
            ref={layoutRef}
            className={`${className} flex items-center h-fit`}
            style={{
                flexDirection: direction === "row" ? "row" : "column",
                gap: gap ? `${gap}px` : "0",
            }}
        >
            {array.map((item, i) => {
                return <Element key={i} {...item} />;
            })}
        </div>
    );
};
