
// import { FaBook, FaEnvelope, FaHome, FaList, FaSearch,  FaUsers, FaUtensils } from 'react-icons/fa';
// import { NavLink, Outlet } from 'react-router-dom';
// import useAdmin from '../Hooks/useAdmin';
// import useDonor from '../Hooks/useDonor';
// import useVolunteer from '../Hooks/useVolunteer';

// const Dashboard = () => {

//    const [isAdmin,  isAdminLoading] = useAdmin();
//     const [isDonor, isDonorLoading] = useDonor();
//     const [isVolunteer, isVolunteerLoading] = useVolunteer();


//     console.log(typeof isAdmin);

//     return (
//         <div className="flex mt-8 border-t-4 border-yellow-500 rounded-xl pt-3">
//             <div className="w-64 min-h-full bg-orange-400">
//                 <ul className="menu p-7">

//                     {isAdmin && (
                        
//                         <>
//                             <li><NavLink to='/dashboard/adminHome'><FaHome className="mr-2" />Admin Home</NavLink></li>
//                             <li><NavLink to='/dashboard/userManagement'><FaList /> User Management</NavLink></li>
//                             <li><NavLink to='/dashboard/donantionRequest'><FaUtensils /> Donation Requests</NavLink></li>
//                             <li><NavLink to='/dashboard/contentManagement'><FaBook />Content Management</NavLink></li>
//                             <li><NavLink to='/dashboard/users'><FaUsers /> Create Donation Request</NavLink></li>
//                         </>
//                     )}

//                     {/* Donor part */}
//                     {isDonor && (
//                         <>
//                             <li><NavLink to='/dashboard/donorHome'><FaHome className="mr-2" />Donor Home</NavLink></li>
//                             <li><NavLink to='/dashboard/manageDonationRequest'><FaList /> Manage Donation Request</NavLink></li>
//                             <li><NavLink to='/dashboard/donationHistory'><FaUtensils /> Donation History</NavLink></li>
//                         </>
//                     )}

//                     {/* Volunteer part */}
//                     {isVolunteer && (
//                         <>
//                             <li><NavLink to='/dashboard/volunteerHome'><FaHome className="mr-2" />Volunteer Home</NavLink></li>
//                             <li><NavLink to='/dashboard/myDonationHistory'><FaList /> My Donation History</NavLink></li>
//                             <li><NavLink to='/dashboard/bloodDonationHistory'><FaUtensils /> Blood Donation History</NavLink></li>
//                         </>
//                     )}



//                 {/* all user area  */}
//                     <div className="divider"></div>
//                     <li><NavLink to='/'><FaHome className="mr-2" /> Home</NavLink></li>
//                     <li><NavLink to='/donationRequestPosts'><FaSearch className="mr-2" /> Donation</NavLink></li>
//                     <li><NavLink to='/order/contact'><FaEnvelope /> Contact</NavLink></li>
//                 </ul>

//             </div>

//             <div className="flex-1">
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import { FaBook, FaEnvelope, FaHome, FaList, FaSearch, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useDonor from '../Hooks/useDonor';
import useVolunteer from '../Hooks/useVolunteer';

const Dashboard = () => {
    // const [isAdmin, isAdminLoading] = useAdmin();
    // const [isDonor, isDonorLoading] = useDonor();
    // const [isVolunteer, isVolunteerLoading] = useVolunteer();

    // if (isAdminLoading || isDonorLoading || isVolunteerLoading) {
    //     return <div>Loading...</div>;
    // }

    // console.log('isAdmin:', isAdmin);

    return (
        <div className="flex mt-8 border-t-4 border-yellow-500 rounded-xl pt-3">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu p-7">
                    {/* {isAdmin && ( */}
                        <>
                            <li><NavLink to='/dashboard/adminHome'><FaHome className="mr-2" />Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/userManagement'><FaList /> User Management</NavLink></li>
                            <li><NavLink to='/dashboard/donationRequest'><FaUtensils /> Donation Requests</NavLink></li>
                            <li><NavLink to='/dashboard/contentManagement'><FaBook />Content Management</NavLink></li>
                            <li><NavLink to='/dashboard/users'><FaUsers /> Create Donation Request</NavLink></li>
                        </>
                    {/* )} */}
                    {/* {isDonor && (
                        <>
                            <li><NavLink to='/dashboard/donorHome'><FaHome className="mr-2" />Donor Home</NavLink></li>
                            <li><NavLink to='/dashboard/manageDonationRequest'><FaList /> Manage Donation Request</NavLink></li>
                            <li><NavLink to='/dashboard/donationHistory'><FaUtensils /> Donation History</NavLink></li>
                        </>
                    )}
                    {isVolunteer && (
                        <>
                            <li><NavLink to='/dashboard/volunteerHome'><FaHome className="mr-2" />Volunteer Home</NavLink></li>
                            <li><NavLink to='/dashboard/myDonationHistory'><FaList /> My Donation History</NavLink></li>
                            <li><NavLink to='/dashboard/bloodDonationHistory'><FaUtensils /> Blood Donation History</NavLink></li>
                        </>
                    )} */}


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
