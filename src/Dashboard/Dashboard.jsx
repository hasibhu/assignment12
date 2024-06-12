

import { FaBook, FaEnvelope, FaHome, FaList, FaSearch, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/Preview.png'
import AdminMenu from './Admin/AdminMenu';
import DonorMenu from './Donor/DonorMenu';
import VolunteerMenu from './Volunteer/VolunteerMenu';
import useAllusers from '../Hooks/useAllUsers';
import UseAuth from '../Hooks/UseAuth';

const Dashboard = () => {

    const { user } = UseAuth();
    const loggedInUserEmail = user?.email;
    console.log(loggedInUserEmail);

    const [users, loading, refetch] = useAllusers();

    const matchingUser = users?.find(user => user?.email === loggedInUserEmail);
    const userRole = matchingUser?.role;
    console.log('matchin user role is : ', userRole);
    // const isAdmin = true;

 
    return (
        <div className="lg:flex mt-8 border-t-4 border-yellow-500 rounded-xl pt-3">
            <div className="w-64 min-h-full bg-orange-400">
                <img className='mx-auto mt-5 w-36 h-22 rounded-full' src={logo} alt="" />
                <ul className="menu p-7">
                    {loading ? (
                        <span className="loading loading-ring text-red-600 loading-lg mx-auto"></span>
                    ) : (
                        <>
                            {userRole === 'admin' && <AdminMenu />}
                            {userRole === 'donor' && <DonorMenu />}
                            {userRole === 'volunteer' && <VolunteerMenu />}
                        </>
                    )}


                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome className="mr-2" /> Home</NavLink></li>
                    <li><NavLink to='/donationRequestPosts'><FaSearch className="mr-2" /> Donation</NavLink></li>
                    <li><NavLink to='/order/contact'><FaEnvelope /> Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;

