import { useQuery } from "@tanstack/react-query";
import api from "../api";
import useAuthStore from "../../store/useAuthStore";


const useUserDetails = () => {
    const token = useAuthStore(state => state.token);
    const setRole = useAuthStore(state => state.setRole);

    const user = useQuery({
        queryKey: ["auth/user"],
        queryFn: async () => {
            const res = await api.get("auth/details", { headers: { 'Authorization': token } });
            if (res?.data?.data) {
                let { role } = res.data.data;
                let roleTitle = typeof role === 'string' ? role : role?.title;

                console.log("see this", roleTitle)
                setRole(roleTitle)
            }
            return res.data?.data;
        },
    });
    return user;
}

export default useUserDetails;