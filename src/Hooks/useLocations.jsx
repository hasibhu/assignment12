// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";

// const useLocations = () => {
//     const axiosPublic = useAxiosPublic();
   

//     // using tanstack query 

//     const { data: locations = [], isLoading: loading } = useQuery({
//         queryKey: ['location'],
//         queryFn: async () => {
//             const { data } = await axiosPublic.get('/locations');
//             return data;
//         }
//     })



//     return [locations, loading]
// }

// export default useLocations;

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
