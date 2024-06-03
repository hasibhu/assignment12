import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllDonationRequests = () => {
    const axiosPublic = useAxiosPublic();


    // using tanstack query 

    const { data: donationRequests = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const { data } = await axiosPublic.get('/donationRequests');
            return data;
        }
    });



    return [donationRequests, loading, refetch];
}

export default useAllDonationRequests;