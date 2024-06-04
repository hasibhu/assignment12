
import UseAuth from '../../Hooks/UseAuth';
import DonorDonationRequest from '../Donor/DonorDonationRequest';

const AdminHome = () => {
    const { user } = UseAuth();

    return (
        <div>
            <h1 className='text-3xl text-center'> Hello, {user?.displayName}</h1>


            <div className='grid grid-cols-2 gap-4 m-6'>
                <div className='border-2 border-blue-500 flex flex-col justify-center items-center '>
                    <h1>Total User </h1>
                    <h1>100</h1>
                </div>
                <div className='border-2 border-blue-500 flex flex-col justify-center items-center '>
                    <h1>Total Doner </h1>
                    <h1>100</h1>
                </div>
               

            </div>
            <div className='flex justify-center items-center '>
                <div className='border-2 border-blue-500 flex flex-col justify-center items-center w-[560px]'>
                    <h1>Total Blood Donation Done </h1>
                    <h1>100</h1>
                </div>
            </div>


            <DonorDonationRequest></DonorDonationRequest>
        </div>
    );
};

export default AdminHome;