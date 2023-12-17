import { useMutation } from "@tanstack/react-query"
import api, { RequestError } from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useLogin = () => {
    const login = useMutation({
        mutationFn: async (data) => {
            const res = await api.post("auth/login", data);
            return res.data;
        },
        onSuccess: data => {
            if (data?.token) {
                AsyncStorage.setItem("auth_token", data.token);
            }
        }
    });

    return login;
}

export default useLogin;