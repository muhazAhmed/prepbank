import { FC } from "react"
import { ThemeTernaryProp, ToastProps } from "./prop"
import { useTheme } from "./ThemeContext";
import toast from "react-hot-toast";
import { useCookieManager } from "@/custom-hooks/useCookieManager";

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
    const { getCookie } = useCookieManager();
    return getCookie("userToken")
}

export const handleInputChange = (e: any, setInputs: any) => {
    setInputs((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
};

export const cookieItems = ["userInfo", "userToken"]

// Session Storage
export const newSessionStorage = (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export const deleteSessionStorage = (key: string) => {
    sessionStorage.removeItem(key);
};

export const useSessionStorage = (key: string) => {
    const items = sessionStorage.getItem(key);
    return items ? JSON.parse(items) : null;
};

// Local Storage
export const newLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const deleteLocalStorage = (key: string) => {
    localStorage.removeItem(key);
};

export const useLocalStorage = (key: string) => {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : null;
};

export function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const goBack = () => {
    window.history.back();
}

export const textEllipse = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
};

export const rectWithNewTab = (url: string) => {
    return window.open(url, "_blank");
};