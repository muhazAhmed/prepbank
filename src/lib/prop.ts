export type ThemeProp = {
    className?: string;
}

export type CustomTooltipProp = {
    className?: string;
    title: string;
    children: any
    position?: string;
    offset?: number;
    delay?: number;
    transition?: string;
    style?: React.CSSProperties;
}