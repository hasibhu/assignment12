
import UseAuth from '../../Hooks/UseAuth';
import useAllUsers from '../../Hooks/useAllUsers';
import DonorDonationRequest from '../Donor/DonorDonationRequest';
import AdminDonationRequest from './AdminDonationRequest';

const AdminHome = () => {
    const { user } = UseAuth();
    const [users, loading, refetch] = useAllUsers();

    return (
        <div className='border-4 border-yellow-300 m-4'>
            <h1 className='text-5xl text-center'> Hello, {user?.displayName}</h1>
            <h1 className='text-3xl text-center p-10'> Welcome to Admin Pannel</h1>

            <div className='divider '> </div>
            <div className='border-4 border-red-300 m-4 p-5'>
                <div className='grid grid-cols-2 gap-4 m-6'>
                    <div className='border-2 border-blue-500 flex flex-col justify-center items-center '>
                        <h1 className='text-2xl font-bold'>Total User </h1>
                        <h1 className=' font-bold'>{users.length}</h1>
                    </div>
                    <div className='border-2 border-blue-500 flex flex-col justify-center items-center '>
                        <h1 className='text-2xl font-bold'>Total Doner </h1>
                        <h1 className=' font-bold'>100</h1>
                    </div>


                </div>
                <div className='flex justify-center items-center '>
                    <div className='border-2 border-blue-500 flex flex-col justify-center items-center w-[560px]'>
                        <h1 className='text-2xl font-bold'>Total Blood Donation Done </h1>
                        <h1 className=' font-bold'>100</h1>
                    </div>
                </div>
            </div>


            <AdminDonationRequest></AdminDonationRequest>
        </div>
    );
};

export default AdminHome;