import React from "react";

export interface ContainerProps {
    children: React.ReactNode;
    maxWidth?: number | "auto";
    maxHeight?: number | "auto";
    gap?: number;
    layout: "row" | "column";
    margin?: number;
    className?: string;
    spread?: boolean;
    Justify?: "center" | "end" | "start";
    Align?: "center" | "end" | "start";
    paddingX?: number;
    paddingY?: number;
    sectionId?: string;
}
