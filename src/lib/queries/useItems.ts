import { useQuery } from "@tanstack/react-query"
import api from "../api"
import useAuthStore from "../../store/useAuthStore";

const useItems = () => {
    const token = useAuthStore(state => state.token);

    const items = useQuery({
        queryKey: ["item"],
        queryFn: async () => {
            const res = await api.get("/api/items", { headers: { Authorization: "Bearer " + token } });
            console.log("response", res.data);
            return res.data;
        }
    });
    return items;
}


export default useItems;