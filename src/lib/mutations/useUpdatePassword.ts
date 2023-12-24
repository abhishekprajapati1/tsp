import { useMutation } from "@tanstack/react-query"
import api from "../api";
import useAuthStore from "../../store/useAuthStore";

export type UpdatePasswordPayload = {
    current_password: string;
    new_password: string;
    confirm_password?: string;
}

const useUpdatePassword = ({ redirectOnSuccess }: { redirectOnSuccess: () => void }) => {
    const token = useAuthStore(store => store.token);
    const mutate = useMutation({
        mutationFn: async (data: UpdatePasswordPayload) => {
            if (data.confirm_password) delete data.confirm_password;
            const res = await api.put('auth/change-password', data, { headers: { Authorization: token } });
            return res.data;
        },
        onSuccess: async data => {
            if (redirectOnSuccess) redirectOnSuccess();
        },
        onError: error => {
            console.log("see error", error);
        }
    });
    return mutate;
}

export default useUpdatePassword;