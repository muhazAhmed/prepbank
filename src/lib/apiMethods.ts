import { UserToken, useToast } from "./common";
import { APIProps } from "./prop";
import axios from "axios"
const ENV = import.meta.env

const APIErrorResponse = (error: any) => {
    if (error?.status === 400 || error.status === 403) {
        return useToast({ type: "error", message: error?.response?.data?.message })
    } else if (error?.code === "ERR_NETWORK")
        return useToast({ type: "error", message: "Server Under Maintenance" })
    else {
        console.log(error)
        return useToast({ type: "error", message: "Something went wrong" })
    }
}

export const PostMethodAPI = async ({ variable, payload, loading }: APIProps) => {
    try {
        loading(true)
        const url = `${ENV.VITE_API_URL}${variable}`;
        const token = UserToken();
        const headers = token ? { "x-api-key": token } : {};
        const response = await axios.post(url, payload, {
            headers
        })
        if (response.status === 200 || 201) {
            useToast({ type: "success", message: response.data.message })
            return response.data
        }
    } catch (error: any) {
        APIErrorResponse(error)
    } finally {
        loading(false);
    }
}