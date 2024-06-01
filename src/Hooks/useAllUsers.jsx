import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllusers = () => {
    const axiosPublic = useAxiosPublic();


    // using tanstack query 

    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['location'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/users');
            return data;
        }
    });



    return [users, loading, refetch]
}

export default useAllusers;