import React from "react";

export interface InputProps {
  value?: string;
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  name?: string;
  children?: React.ReactNode;
  onChange?: () => void;
  className?: string;
}
