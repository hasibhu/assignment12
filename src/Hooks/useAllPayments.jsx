



import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllPayments = () => {
    const axiosPublic = useAxiosPublic();


    // using tanstack query 

    const { data: payments = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['location'],
        queryFn: async () => {
            // await new Promise(resolve => setTimeout(resolve, 1500));
            const { data } = await axiosPublic.get('/payments');
            return data;
        }
    });



    return [payments, loading, refetch];
}

export default useAllPayments;