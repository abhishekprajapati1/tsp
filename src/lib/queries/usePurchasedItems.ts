import { useQuery } from "@tanstack/react-query";
import api from "../api";
import useAuthStore from "../../store/useAuthStore";


const usePurchasedItems = () => {
    const token = useAuthStore(state => state.token);

    const user = useQuery({
        queryKey: ["purchases"],
        queryFn: async () => {
            const res = await api.get("purchases", { headers: { 'Authorization': token } });
            return res.data?.data;
        }
    });
    return user;
}

export default usePurchasedItems;