import { Link, useLocation } from "react-router-dom";
import { FcDonate } from "react-icons/fc";
import logo from '../assets/Preview.png';
import UseAuth from "../Hooks/UseAuth";
import useAllusers from "../Hooks/useAllUsers";

const Navbar = () => {
    const { user, logOut } = UseAuth();
    const location = useLocation();

    const [users, loading, refetch] = useAllusers();

    const loggedInUserEmail = user?.email;

    const matchingUser = users?.find(databaseUser => databaseUser?.email === loggedInUserEmail);

    console.log(loggedInUserEmail, users, matchingUser);

    const userRole = matchingUser?.role;

    const isActive = (path) => {
        return location.pathname === path ? { color: 'red' } : {};
    };

    const handleLogOut = () => {
        logOut();
    };

    const navOptions = (
        <>
            <li><Link to="/" style={isActive("/")}>Home</Link></li>
            <li><Link to="/donationRequestPosts" style={isActive("/donationRequestPosts")}>Donation Requests</Link></li>
            <li><Link to="/blogs" style={isActive("/blogs")}>Blogs</Link></li>
            <li><Link to="/aboutUs" style={isActive("/aboutUs")}>About Us</Link></li>
            <li>
                {user ? '' : <Link to="/login">Login</Link>}
            </li>
        </>
    );

    const getDashboardPath = () => {
        switch (userRole) {
            case 'admin':
                return '/dashboard/adminHome';
            case 'donor':
                return '/dashboard/donorHome';
            case 'volunteer':
                return '/dashboard/volunteerHome';
            default:
                return '/dashboard';
        }
    };

    const getPaymentPath = () => {
        switch (userRole) {
            case 'admin':
                return '/dashboard/adminPayment';
            case 'donor':
                return '/dashboard/donorPayment';
            case 'volunteer':
                return '/dashboard/volunteerPayment';
            default:
                return '/dashboard/payment';
        }
    };

    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className=" normal-case text-xl text-white">
                    <Link to='/'> <img className="w-20  h-20  rounded-full" src={logo} alt="Logo" /></Link>
                </a>
            </div>

            <div className="navbar-center hidden lg:flex mr-52 text-white">
                <ul className="menu menu-horizontal px-1 text-2xl">
                    {navOptions}
                </ul>
            </div>

            <div className="navbar-end text-white">
                {user && (
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>
                                    <img className="w-10 h-10 rounded-full" src='https://i.ibb.co/LrsdP5F/daniel-lincoln-NR705be-N-CU-unsplash.jpg' alt="User Profile" />
                                </summary>
                                <ul className="bg-base-100 text-black w-44">
                                    {userRole === 'admin' && <li><Link to={getDashboardPath()}>Admin Home</Link></li>}
                                    {userRole === 'donor' && <li><Link to={getDashboardPath()}>Donor Home</Link></li>}
                                    {userRole === 'volunteer' && <li><Link to={getDashboardPath()}>Volunteer Home</Link></li>}
                                    <li><Link to='/updateProfile'>Update Profile</Link></li>
                                    <li><a onClick={handleLogOut}>Log Out</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                )}
                <a className="flex flex-row justify-center items-center bg-red-600 w-16 rounded-xl">
                    <Link to={getPaymentPath()} className="flex items-center justify-center">
                        <FcDonate title="Donate Now" className="text-3xl" />
                    </Link>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
