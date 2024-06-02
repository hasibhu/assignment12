import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";



const asxioSecure = axios.create({
    baseURL: 'http://localhost:3001'
});

// basic code 
// const useAxiosSecure = () => {
//     return asxioSecure;
// }

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = UseAuth();


    asxioSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log(token);
        // console.log('Request stopped by the interceptor.');
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    })


    asxioSecure.interceptors.response.use(function (response) {
        return response;

    }, async (error) => {
        // const status = error.response.status;
        const status = error.response ? error.response.status : null;
        console.log('Status error in the interceptors', status);
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error)
    })

    return asxioSecure;
}

export default useAxiosSecure;

