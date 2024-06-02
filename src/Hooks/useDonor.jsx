import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosPublic from "./useAxiosPublic";


const useDonor = () => {
    const { user, loading } = UseAuth();
    const axiosPublic = useAxiosPublic()

 

    // Query for Donor role
    const { data: isDonor, isPending: isDonorLoading } = useQuery({
        queryKey: [user?.email, 'isDonor'],
        enabled: !loading,
        queryFn: async () => {
            console.log('Checking if user is donor', user)
            const res = await axiosPublic.get(`/users/donor/${user.email}`);
            console.log(res);
            return res.data?.donor;
        }
    });

   

    return [ isDonor,  isDonorLoading];
};

export default useDonor;
