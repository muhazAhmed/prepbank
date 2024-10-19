import { ReactElement, ReactNode } from "react";

export type ThemeProp = {
    className?: string;
}

export type CustomTooltipProp = {
    className?: string;
    title: string;
    children: any
    position?: "top" | "bottom" | "left" | "right";
    offset?: number;
    delay?: number;
    transition?: string;
    style?: React.CSSProperties;
}

export type MenuItem = {
    id: number;
    label: string;
    icon: string;
    url: string;
};

export type ThemeTernaryProp = {
    forLight: string
    forDark: string
}

export type FormProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export type CustomModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: ReactNode;
    title?: string
}

export type APIProps = {
    variable: string
    payload?: any
    loading: (isLoading: boolean) => void
}

export type ToastProps = {
    type: "error" | "success"
    message: string
    duration?: number
}

export type ButtonProps = {
    label: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    loading?: boolean;
    variant?: "primary" | "ghost" | "danger" | "plain"
    style?: React.CSSProperties
    id?: any;
    initial?: any
    animate?: any
    transition?: any
    whileHover?: any
    href?: string
    Icon?: ReactElement
    iconPosition?: "left" | "right"
    iconStyles?: string
}

export type PasswordHintProp = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    password: string
}

export type RegisterFormProp = {
    name: string
    email: string
    password: string
    phone?: number
}