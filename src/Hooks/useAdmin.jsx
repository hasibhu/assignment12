import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
// import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = UseAuth();
    // const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure

    const { data: isAdmin, isLoading: isAdminLoading, error } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email && !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        }
    });

    console.log('useAdmin', { isAdmin, isAdminLoading, error });

    return [isAdmin, isAdminLoading];
};

export default useAdmin;

