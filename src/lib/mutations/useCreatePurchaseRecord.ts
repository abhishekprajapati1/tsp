import { useMutation, useQueryClient } from "@tanstack/react-query"
import api from "../api";
import useAuthStore from "../../store/useAuthStore";

const useCreatePurchaseRecord = ({ redirectOnSuccess }: { redirectOnSuccess: () => void }) => {
    const token = useAuthStore(store => store.token);
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: async (data) => {
            const res = await api.post('purchases', data, { headers: { Authorization: token } });
            return res.data;
        },
        onSuccess: async data => {
            await queryClient.invalidateQueries({ queryKey: ["purchases"] });
            redirectOnSuccess();
        },
        onError: error => {
            console.log("see error", error);
        }
    });
    return mutate;
}

export default useCreatePurchaseRecord;