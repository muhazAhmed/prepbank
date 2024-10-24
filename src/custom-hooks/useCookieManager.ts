import { cookieItems, useToast } from "@/lib/common";
import { useCookies } from "react-cookie";

export const useCookieManager = () => {
    const [cookies, setCookie, removeCookie] = useCookies();

    const getCookie = (name: string) => {
        if (!cookieItems.includes(name)) throw new Error("Error: Invalid Cookie name");
        return cookies[name];
    };

    const newCookie = (name: string, value: any, path: string = "/") => {
        if (!cookieItems.includes(name)) {
            throw new Error("Error: Add cookie name to the cookieItems list");
        }

        if (cookies[name] != null) {
            useToast({ message: `${name} cookie already exists`, type: "error" });
            return;
        }

        return setCookie(name, value, { path });
    };

    const deleteCookie = (name: string) => {
        if (!cookieItems.includes(name)) {
            throw new Error("Error: Invalid Cookie name");
        }

        if (cookies[name] == null) {
            useToast({ message: `${name} cookie does not exist`, type: "error" });
            return;
        }

        return removeCookie(name, { path: "/" });
    };

    return { getCookie, newCookie, deleteCookie };
};
