
import { FaEdit, FaHistory, FaHome, FaList, FaUtensils } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import useAllUsers from '../../Hooks/useAllUsers';

const VolunteerMenu = () => {

    const { user } = UseAuth();

    const [users, loading, refetch] = useAllUsers();

    const matchedUser = users.find(u => u.email === user.email)
    const matchedUserStatus = matchedUser.status;
    return (
        <div>
            <li><NavLink to='/dashboard/volunteerHome'><FaHome className="mr-2" />Volunteer Home</NavLink></li>
            {
                matchedUserStatus === 'active' && <li><NavLink to='/dashboard/userManagementByVolunteer'><FaList /> User Management</NavLink></li>
            }
            <li><NavLink to='/dashboard/allVolunteerDonationRequests'><FaList /> Donation Requests</NavLink></li>
            {
                matchedUserStatus==='active' && <li><NavLink to='/dashboard/createDonationRequestByVolunteer'><FaEdit /> Create Donation Request</NavLink></li>
            }
            <li><NavLink to='/dashboard/volunteerPayment'><MdAttachMoney className='text-2xl' /> Pay</NavLink></li>
            <li><NavLink to='/dashboard/volunteerPaymentHostory'><FaHistory /> Payment History</NavLink></li>
            
        </div>
    );
};

export default VolunteerMenu;