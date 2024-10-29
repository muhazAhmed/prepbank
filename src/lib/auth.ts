import { useCookieManager } from "@/custom-hooks/useCookieManager";
import { useNavigate } from "react-router-dom";
import { useToast } from "./common";
import { useEffect } from "react";
interface AuthGuardProps {
    children: any;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
    const navigate = useNavigate()
    const { getCookie } = useCookieManager();
    const exists = getCookie("userInfo")
    useEffect(() => {
        if (!exists) {
            useToast({ message: "Please login to continue", type: "error" });
            navigate("/form");
        }
    }, [exists, navigate]);
    return children
};

export const AdminGuard: React.FC<AuthGuardProps> = ({ children }) => {
    const navigate = useNavigate()
    const { getCookie } = useCookieManager();
    const isAdmin = getCookie("userInfo") && getCookie("userInfo").isAdmin === true;
    useEffect(() => {
        if (!isAdmin) {
            useToast({ message: "Please login to continue", type: "error" });
            navigate("/form");
        }
    }, [isAdmin, navigate]);
    return children
}