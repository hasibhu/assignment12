
import { FaHistory, FaHome, FaList, FaUtensils } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const VolunteerMenu = () => {
    return (
        <div>
            <li><NavLink to='/dashboard/volunteerHome'><FaHome className="mr-2" />Volunteer Home</NavLink></li>
            <li><NavLink to='/dashboard/myDonationHistory'><FaList /> My Donation History</NavLink></li>
            <li><NavLink to='/dashboard/createDonationRequestByVolunteer'><FaUtensils /> Create Request</NavLink></li>
            <li><NavLink to='/dashboard/volunteerPayment'><FaUtensils /> Pay</NavLink></li>
            <li><NavLink to='/dashboard/bloodDonationHistory'><FaHistory /> Payment History</NavLink></li>
            
        </div>
    );
};

export default VolunteerMenu;