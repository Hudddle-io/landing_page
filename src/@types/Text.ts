import React from "react";

export interface TextProps {
  children: React.ReactNode;
  variant: "text-1" | "text-2" | "text-3";
  color?: "dark-1" | "dark-2" | "dark-3";
  className?: string;
}
