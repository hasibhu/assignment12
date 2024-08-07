import { Navigate, useLocation } from "react-router-dom";
import useAllusers from "../Hooks/useAllUsers";
import UseAuth from "../Hooks/UseAuth";


const AdminRoute = ({ children }) => {
    const { user } = UseAuth()
    const [users, loading, refetch] = useAllusers();
    const location = useLocation();
    

    const loggedInUserEmail = user?.email;

    const matchingUser = users?.find(databaseUser => databaseUser?.email === loggedInUserEmail);

    console.log(loggedInUserEmail, users, matchingUser);

    const userRole = matchingUser?.role;

    // if (loading || isAdminLoading) return <h1>Loading....</h1>;
    if (user && userRole === 'admin') return children;
    


    if (user && userRole !== 'admin') return <Navigate to='/' state={{ from: location }} replace ></Navigate>;


    // <Navigate to='/' state={{ from: location }} replace ></Navigate>

};

export default AdminRoute;