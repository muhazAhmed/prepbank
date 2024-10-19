import { FC } from "react"
import { ThemeTernaryProp, ToastProps } from "./prop"
import { useTheme } from "./ThemeContext";
import toast from "react-hot-toast";

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

export const useToast = ({ type, message, duration = 3000 }: ToastProps): void => {
    toast[type](message, {
        duration: duration
    })
}

export const UserToken = () => {
    return null
}

export const handleInputChange = (e: any, setInputs: any) => {
    setInputs((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
};

export const cookieItems = ["userInfo", "userToken"]