import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBlogs = () => {
    const axiosPublic = useAxiosPublic();


    // using tanstack query 

    const { data: blogs = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const { data } = await axiosPublic.get('/blogs');
            return data;
        }
    });



    return [blogs, loading, refetch];
}

export default useBlogs;