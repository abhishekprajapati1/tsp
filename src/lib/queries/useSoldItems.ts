import { useQuery } from "@tanstack/react-query";
import api from "../api";
import useAuthStore from "../../store/useAuthStore";


const useSoldItems = () => {
    const token = useAuthStore(state => state.token);

    const user = useQuery({
        queryKey: ["auth/user"],
        queryFn: async () => {
            const res = await api.get("sales", { headers: { 'Authorization': token } });
            return res.data?.data;
        }
    });
    return user;
}

export default useSoldItems;