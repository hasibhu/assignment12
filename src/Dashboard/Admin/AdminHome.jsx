
import { FaUsers } from 'react-icons/fa';
import UseAuth from '../../Hooks/UseAuth';
import useAllDonationRequests from '../../Hooks/useAllDonationRequests';
import useAllPayments from '../../Hooks/useAllPayments';
import useAllUsers from '../../Hooks/useAllUsers';
import DonorDonationRequest from '../Donor/DonorDonationRequest';
import AdminDonationRequest from './AdminDonationRequest';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { FaSackDollar } from 'react-icons/fa6';

const AdminHome = () => {
    const { user } = UseAuth();
    const [users, loading, refetch] = useAllUsers();
    const [donationRequests, , ] = useAllDonationRequests();
    const [payments, , ] = useAllPayments();

    const totalDonation = payments?.reduce((total, payment) => total + parseFloat(payment.price), 0);

    // const numberOfDonor = users?.filter(user => user?.role === 'donor');

    return (
        <div className='border-4 border-yellow-300 m-4'>
            <h1 className='text-5xl text-center'> Hello, {user?.displayName}</h1>
            <h1 className='text-3xl text-center p-10'> Welcome to Admin Pannel</h1>

            <div className='divider '> </div>
            <div className='border-4 border-red-300 m-4 p-5'>
                <div className='grid grid-cols-2 gap-4 m-6'>
                    <div className='border-2 border-blue-500 flex flex-col justify-center items-center '>
                        <h1 className='text-2xl font-bold'>Total Users </h1>
                        <FaUsers className='text-4xl' />
                        <h1 className=' font-bold text-7xl'>{users.length}</h1>
                    </div>
                    <div className='border-2 border-blue-500 flex flex-col justify-center items-center '>
                        <h1 className='text-2xl font-bold'>Current Total Donation Requests </h1>
                        <BiSolidDonateHeart className='text-4xl' />
                        <h1 className=' text-7xl font-bold'>{donationRequests.length}</h1>
                    </div>


                </div>
                <div className='flex justify-center items-center '>
                    <div className='border-2 border-blue-500 flex flex-col justify-center items-center w-[560px]'>
                        <h1 className='text-2xl font-bold'> Total Funding Received </h1>
                        <FaSackDollar className='text-4xl' />
                        <h1 className='text-7xl font-bold'>${totalDonation}</h1>
                    </div>
                </div>
            </div>


            <AdminDonationRequest></AdminDonationRequest>
        </div>
    );
};

export default AdminHome;