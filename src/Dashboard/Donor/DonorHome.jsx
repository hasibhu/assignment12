
import UseAuth from '../../Hooks/UseAuth';
import DonorDonationRequest from './DonorDonationRequest';

const DonorHome = () => {
    const { user } = UseAuth();

    return (
        <div>
            <h1 className='text-center text-3xl'>Welcome, {user?.displayName} </h1>

            <DonorDonationRequest></DonorDonationRequest>
        </div>
    );
};

export default DonorHome;