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