import { useQuery } from "@tanstack/react-query"
import api from "../api"
import useAuthStore from "../../store/useAuthStore";

const useItems = () => {
    const token = useAuthStore(state => state.token);
    const items = useQuery({
        queryKey: ["items"],
        queryFn: async () => {
            const res = await api.get("items", { headers: { Authorization: token } });
            return res.data?.data;
        }
    });
    return items;
}


export default useItems;