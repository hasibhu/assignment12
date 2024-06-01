
import { FaBook, FaEnvelope, FaHome, FaList, FaSearch, FaUser, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="flex mt-8 border-t-4 border-yellow-500 rounded-xl pt-3">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu p-7">
                    <>
                        <li><NavLink to='/dashboard/adminHome'><FaHome className="mr-2" />Admin Home</NavLink></li>

                        <li><NavLink to='/dashboard/userManagement'><FaList /> User Management</NavLink></li>

                        <li><NavLink to='/dashboard/donantionRequest'><FaUtensils /> Donation Requests</NavLink></li>

                        <li><NavLink to='/dashboard/contentManagement'><FaBook  />Content Management</NavLink></li>

                        <li><NavLink to='/dashboard/users'><FaUsers /> All Users</NavLink></li>
                    </>










                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome className="mr-2" /> Home</NavLink></li>
                    <li><NavLink to='/order/salad'><FaSearch className="mr-2" /> Donation</NavLink></li>
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