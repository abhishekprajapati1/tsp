import { useMutation, useQueryClient } from "@tanstack/react-query"
import api, { RequestError } from "../api";
import useAuthStore from "../../store/useAuthStore";

export type UpdateDetailsPayload = {
    name?: string;
    email?: string;
}

const useUpdateDetails = ({ redirectOnSuccess }: { redirectOnSuccess: () => void }) => {
    const token = useAuthStore(store => store.token);
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: async (data: UpdateDetailsPayload) => {

            const res = await api.patch('auth/details', data, { headers: { Authorization: token } });
            return res.data;
        },
        onSuccess: async data => {
            await queryClient.invalidateQueries({ queryKey: ["auth/details"] })
            if (redirectOnSuccess) redirectOnSuccess();
        },
        onError: (error: RequestError) => {
            console.log("see error", error.response.data.message);
        }
    });
    return mutate;
}

export default useUpdateDetails;