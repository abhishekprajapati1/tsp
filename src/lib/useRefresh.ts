import { useQueryClient } from "@tanstack/react-query"

const useRefresh = () => {
    const queryClient = useQueryClient();
    const refresh = (key: string) => {
        console.log(key);

        queryClient.invalidateQueries({ queryKey: [key] })
    }
    return refresh;
}

export default useRefresh;