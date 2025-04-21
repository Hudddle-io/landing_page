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
            className={` flex items-center ${
                direction === "row" ? "flex-row" : "flex-col"
            } h-fit ${className}`}
            style={{
                gap: gap ? `${gap}px` : "0",
            }}
        >
            {array.map((item, i) => {
                return <Element key={i} {...item} />;
            })}
        </div>
    );
};
