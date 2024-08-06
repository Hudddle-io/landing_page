import { FC } from "react";
import { ContainerProps } from "../../@types/Container";

export const Container: FC<ContainerProps> = ({
    children,
    layout,
    gap,
    maxHeight,
    maxWidth,
    margin,
    className,
    spread,
    Align,
    Justify,
    paddingX,
    paddingY,
    sectionId,
    ...props
}) => {
    return (
        <div
            {...props}
            id={sectionId}
            className={`flex ${className ? className : null} px-[${
                paddingX ? `${paddingX}px` : ""
            }] py-${paddingY ? `[${paddingY}px]` : ""} ${
                layout === "row"
                    ? "flex-row"
                    : layout === "column"
                    ? "flex-col"
                    : ""
            } ${spread && "justify-between"} ${
                Align === "start"
                    ? "items-start"
                    : Align === "center"
                    ? "items-center"
                    : Align === "end"
                    ? "items-end"
                    : ""
            } ${
                Justify === "start"
                    ? "justify-start"
                    : Justify === "center"
                    ? "justify-center"
                    : Justify === "end"
                    ? "justify-end"
                    : ""
            } `}
            style={{
                gap: gap ? `${gap}px` : "0",
                maxHeight: maxHeight === "auto" ? "auto" : `${maxHeight}px`,
                maxWidth: maxWidth === "auto" ? "auto" : `${maxWidth}px`,
                margin: margin ? `${margin}px` : "0",
            }}
        >
            {children}
        </div>
    );
};
