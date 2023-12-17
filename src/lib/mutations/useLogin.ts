import { useMutation } from "@tanstack/react-query"
import api, { RequestError } from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuthStore from "../../store/useAuthStore";

const useLogin = () => {
    const setToken = useAuthStore(state => state.setToken);
    const login = useMutation({
        mutationFn: async (data) => {
            const res = await api.post("auth/login", data);
            return res.data;
        },
        onSuccess: data => {
            console.log("see this", data);
            if (data?.token) {
                AsyncStorage.setItem("auth_token", data.token);
                setToken(data?.token);
            }
        },
        onError: (err: RequestError) => {
            console.log("see this", err?.response?.data?.message);
        }
    });

    return login;
}

export default useLogin;