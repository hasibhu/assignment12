import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosPublic from "./useAxiosPublic";


const useVolunteer= () => {
    const { user, loading } = UseAuth();
    const axiosPublic = useAxiosPublic()

    

    // Query for Volunteer role
    const { data: isVolunteer, isPending: isVolunteerLoading } = useQuery({
        queryKey: [user?.email, 'isVolunteer'],
        enabled: !loading,
        queryFn: async () => {
            console.log('Checking if user is volunteer', user)
            const res = await axiosPublic.get(`/users/volunteer/${user.email}`);
            console.log(res);
            return res.data?.volunteer;
        }
    });

    return [ isVolunteer,  isVolunteerLoading];
};

export default useVolunteer;
