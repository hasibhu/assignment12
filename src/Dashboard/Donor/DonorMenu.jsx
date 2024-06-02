
import { FaHome, FaList, FaUtensils } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const DonorMenu = () => {
    return (
        <div>
            <li><NavLink to='/dashboard/donorHome'><FaHome className="mr-2" />Donor Home</NavLink></li>
            <li><NavLink to='/dashboard/userManagement'><FaList /> User Management</NavLink></li>
            <li><NavLink to='/dashboard/manageDonationRequest'><FaList /> Manage Donation Request</NavLink></li>
            <li><NavLink to='/dashboard/donationHistory'><FaUtensils /> Donation History</NavLink></li>
        </div>
    );
};

export default DonorMenu;