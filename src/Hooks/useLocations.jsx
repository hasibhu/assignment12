import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";




const useLocations = () => {
    const axiosPublic = useAxiosPublic();
   

    // using tanstack query 

    const { data: locations = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['location'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/locations');
            return data;
        }
    })



    return [locations, loading, refetch]
}

export default useLocations;