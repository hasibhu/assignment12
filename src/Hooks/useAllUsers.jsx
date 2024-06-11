
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllUsers = () => {
    const axiosPublic = useAxiosPublic();

    // using tanstack query 
    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            await new Promise(resolve => setTimeout(resolve, 1500));
            const { data } = await axiosPublic.get('/users');
            return data;
        },
        staleTime: 1000 * 60 * 5, // Optional: Cache data for 5 minutes
    });

    return [users, loading, refetch];
}

export default useAllUsers;
