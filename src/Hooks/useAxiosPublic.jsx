import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://server-weld-six.vercel.app',
    

})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;