import { FC } from "react"
import { ThemeTernaryProp } from "./prop"
import { useTheme } from "./ThemeContext";

export const ThemeTernary: FC<ThemeTernaryProp> = ({ forLight, forDark }) => {
    const { theme } = useTheme();
    if (theme === "light") {
        return forLight;
    } else if (theme === "dark") {
        return forDark;
    }

    //  Usage example
    // <p className={`${ThemeTernary({ forLight: "text-red-600", forDark: "text-white" })} `}>
    //    Hello There!
    // </p>
}