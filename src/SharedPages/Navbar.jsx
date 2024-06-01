import { Link, useLocation } from "react-router-dom";
import { FcDonate } from "react-icons/fc";
import logo from '../assets/images/logo.png'
import UseAuth from "../Hooks/UseAuth";

// import useCart from "../Hooks/useCart";
// import { Background } from "react-parallax";
// import useAdmin from "../Hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = UseAuth();
    // console.log(user);
    // const [cart] = useCart();

    // const [isAdmin] = useAdmin();
    // console.log(isAdmin);

    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? { color: 'red', Background: 'yellow' } : {};
    };

    const handleLogOut = () => [
        logOut()
    ]

    const navOptions = <>
        <li><Link to="/" style={isActive("/")}><button>Home</button></Link></li>
        <li><Link to="/donationRequest" style={isActive("/donationRequest")}>Donation Requests</Link></li>
        <li><Link to="/blog" style={isActive("/blog")}>blog</Link></li>
        {/* <li><Link to="/login" style={isActive("/login")}>Login</Link></li> */}
{/* 
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome" style={isActive("/secret")}>Secret</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome" style={isActive("/secret")}>Secret</Link></li>
        } */}


 
        <li>
            {
                user ?'' : <>
                    <Link to="/login">Login</Link>
                </>
            }
        </li>



    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white"><img className="w-16 h-16
                     rounded-full" src={logo} alt="" /></a>
                </div>

                <div className="navbar-center hidden lg:flex mr-52 text-white">
                    <ul className="menu menu-horizontal px-1 text-2xl ">
                        {navOptions}
                    </ul>
                </div>

                <div className="text-white">
                    <ul className="menu menu-horizontal px-1">
                       
                        {
                            user ? <li>
                                <details>
                                    <summary>
                                        <img className="w-10 h-10 rounded-full" src='https://i.ibb.co/LrsdP5F/daniel-lincoln-NR705be-N-CU-unsplash.jpg' alt="" />
                                    </summary>
                                    <ul className="p-2 bg-base-100 rounded-t-none text-black">
                                        <Link to='/dashboard/adminHome'><li><a>Admin Home</a></li></Link>
                                        <li><a>Update Profile</a></li>
                                        <li><a onClick={handleLogOut} > LogOut</a></li>
                                      
                                    </ul>
                                </details>
                            </li> : ''
                       }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className=" flex flex-row justify-center items-center bg-slate-400 w-32">
                        <FcDonate className="text-3xl" />
                        <div className="badge badge-secondary">0</div>
                    </a>
                </div>
                {/* {
                    user ?
                        <Link to="/dashboard/cart">
                            <button className="btn mr-16">
                                <FaShoppingCart className="mr-2"></FaShoppingCart>
                                <div className="badge badge-secondary">{cart.length}</div>
                            </button>
                        </Link>
                        :
                        <Link to="/dashboard/cart">
                            <button className="btn mr-16">
                                <FaShoppingCart className="mr-2"></FaShoppingCart>
                                <div className="badge badge-secondary">0</div>
                            </button>
                        </Link>

                } */}

            </div>
        </>
    );
};

export default Navbar;




