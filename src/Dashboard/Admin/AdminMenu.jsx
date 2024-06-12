import React from 'react';
import { FaBook, FaHistory, FaHome, FaList, FaUsers} from 'react-icons/fa';
import { MdAttachMoney } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <div>
            <li><NavLink to='/dashboard/adminHome'><FaHome className="mr-2" />Admin Home</NavLink></li>
            <li><NavLink to='/dashboard/userManagement'><FaList /> User Management</NavLink></li>
            <li><NavLink to='/dashboard/donationRequest'><BiSolidDonateHeart /> Donation Requests</NavLink></li>
            <li><NavLink to='/dashboard/contentManagement'><FaBook />Blog Management</NavLink></li>
            <li><NavLink to='/dashboard/createDonationRequest'><FaUsers /> Create Donation Request</NavLink></li>
            <li><NavLink to='/dashboard/adminPayment'><MdAttachMoney className='text-xl'/> Pay</NavLink></li>
            <li><NavLink to='/dashboard/adminPaymentHistory'><FaHistory /> Admin Payment History</NavLink></li>
            <li><NavLink to='/dashboard/allPaymentHistory'><FaUsers /> All Payment History</NavLink></li>
           
        </div>
    );
};

export default AdminMenu;

// http://localhost:5176/dashboard/adminHome