
import { FaEdit, FaHome, FaList, FaUtensils } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import useAllUsers from '../../Hooks/useAllUsers';

const DonorMenu = () => {



    const { user } = UseAuth();

    const [users, loading, refetch] = useAllUsers();

    const matchedUser = users.find(u => u.email === user.email)
    const matchedUserStatus = matchedUser.status;



    return (
        <div>
            <li><NavLink to='/dashboard/donorHome'><FaHome className="mr-2" />Donor Home</NavLink></li>
            {/* <li><NavLink to='/dashboard/userManagement'><FaList /> User Management</NavLink></li> */}
            <li><NavLink to='/dashboard/manageDonationRequestDonor'><FaList /> Manage Donation Request</NavLink></li>
            {
                matchedUserStatus === 'active' && <li><NavLink to='/dashboard/createDonationRequest'><FaEdit /> Create Donation Request</NavLink></li>
            }
            <li><NavLink to='/dashboard/donorPayment'><FaUtensils />Pay</NavLink></li>
            <li><NavLink to='/dashboard/donorPaymentHistory'><FaUtensils /> Donation History</NavLink></li>
        </div>
    );
};

export default DonorMenu;