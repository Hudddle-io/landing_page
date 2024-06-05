import { ComponentType } from "react";

export interface LayoutProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: ComponentType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  array: any[];
  direction?: "row" | "column";
  gap?: number;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layoutRef?: React.RefObject<HTMLDivElement>;
}
