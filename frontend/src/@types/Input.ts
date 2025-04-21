import React, { HTMLInputTypeAttribute } from "react";

// import { ChangeHandler } from "react-hook-form";

export interface InputProps {
    placeholder?: string;
    type: HTMLInputTypeAttribute;
    name?: string;
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    ref?: React.RefCallback<HTMLInputElement>;
    min?: string | number;
    max?: string | number;
    step?: string | number;
    disabled?: boolean;
    value?: string | number;
    className?: string;
    props?: React.InputHTMLAttributes<HTMLInputElement>;
    children?: React.ReactNode;
}
