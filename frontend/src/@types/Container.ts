import { HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    maxWidth?: number | "auto";
    maxHeight?: number | "auto";
    gap?: number;
    layout: "row" | "column";
    margin?: number;
    spread?: boolean;
    Justify?: "center" | "end" | "start";
    Align?: "center" | "end" | "start";
    paddingX?: number;
    paddingY?: number;
    sectionId?: string;
}
