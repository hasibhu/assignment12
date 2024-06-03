
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLocations = () => {
    const axiosPublic = useAxiosPublic();

    const { data: locations = [], isLoading: locationLoading } = useQuery({
        queryKey: ['locations'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/locations');
            return data;
        }
    });

    return [locations, locationLoading];
};

export default useLocations;
