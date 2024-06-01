
import { FaGoogle } from 'react-icons/fa';

import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const SocialLogin = () => {
    const navigate = useNavigate();
    const { googleSignIn } = UseAuth()
    const axiosPublic = useAxiosPublic();


    const handleGoogleSignin = async () => {
        try {
            const result = await googleSignIn();
            console.log(result);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            };

            const { data } = await axiosPublic.post('/users', userInfo);
            console.log(data);
            if (data.message) {
                console.log(data.message); // This should log 'User is already in database'

            } else {
                navigate('/'); // Assuming you meant "navigate" instead of "mavigate"
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button onClick={handleGoogleSignin} className="btn">

            <FaGoogle></FaGoogle>
            Google Login
        </button>
    );
};

export default SocialLogin;