import { useMutation, useQueryClient } from "@tanstack/react-query"
import api, { RequestError } from "../api";
import useAuthStore from "../../store/useAuthStore";

const useCreateSaleRecord = ({ redirectOnSuccess }: { redirectOnSuccess: () => void }) => {
    const token = useAuthStore(store => store.token);
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: async (data) => {
            const res = await api.post('sales', data, { headers: { Authorization: token } });
            return res.data;
        },
        onSuccess: async data => {
            await queryClient.invalidateQueries({ queryKey: ["sales"] });
            redirectOnSuccess();
        },
        onError: (error: RequestError) => {
            console.log("see error", error?.response?.data?.message);
        }
    });
    return mutate;
}

export default useCreateSaleRecord;