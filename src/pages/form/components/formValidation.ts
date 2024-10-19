import { useToast } from "@/lib/common";
import { hasSpecialChar, validEmail, validPassword } from "@/lib/validation";

export const formValidation = (payload: any, setShowPasswordHint: any) => {
    if (!payload?.name) {
        useToast({ message: "Name is required", type: "error" });
        return false;
    }
    if (!payload?.email) {
        useToast({ message: "Email is required", type: "error" });
        return false;
    }
    if (!validEmail(payload?.email)) {
        useToast({ message: "Invalid email", type: "error" });
        return false;
    }
    if (!payload?.password) {
        useToast({ message: "Password is required", type: "error" });
        return false;
    }
    if (hasSpecialChar(payload?.name)) {
        useToast({
            message: "Name cannot have special characters",
            type: "error",
        });
        return false;
    }
    if (!validPassword(payload?.password)) {
        setShowPasswordHint(true);
        useToast({ message: "Invalid password", type: "error" });
        return false;
    }
    return true
};