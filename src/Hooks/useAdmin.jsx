import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
    const { user, loading } = UseAuth();
    const axiosPublic = useAxiosPublic();

    const { data: isAdmin, isLoading: isAdminLoading, error } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email && !loading,
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/admin/${user.email}`);
            return res.data?.admin;
        }
    });

    console.log('useAdmin', { isAdmin, isAdminLoading, error });

    return [isAdmin, isAdminLoading];
};

export default useAdmin;

