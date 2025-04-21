import React from "react";

export interface HeadingProps {
  variant: "heading" | "sub-heading" | "title" | "introduction";
  children: React.ReactNode;
  bold?: boolean;
  capitalize?: boolean;
  className?: string;
}
