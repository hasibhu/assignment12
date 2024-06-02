
import { FaHome, FaList, FaUtensils } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const VolunteerMenu = () => {
    return (
        <div>
            <li><NavLink to='/dashboard/volunteerHome'><FaHome className="mr-2" />Volunteer Home</NavLink></li>
            <li><NavLink to='/dashboard/myDonationHistory'><FaList /> My Donation History</NavLink></li>
            <li><NavLink to='/dashboard/bloodDonationHistory'><FaUtensils /> Blood Donation History</NavLink></li>
            
        </div>
    );
};

export default VolunteerMenu;