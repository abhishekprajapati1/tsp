import { useQuery } from "@tanstack/react-query";
import api from "../api";
import useAuthStore from "../../store/useAuthStore";


const useStaffs = () => {
    const token = useAuthStore(state => state.token);

    const user = useQuery({
        queryKey: ["teams/staffs"],
        queryFn: async () => {
            const res = await api.get("users", { headers: { 'Authorization': token } });
            return res.data?.data;
        }
    });
    return user;
}

export default useStaffs;