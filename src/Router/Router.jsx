
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../SharedPages/Home";

import Register from '../User/Register'
import Login from '../User/Login'
import Dashboard from "../Dashboard/Dashboard";
import AdminHome from "../Dashboard/Admin/AdminHome";
import UserManagement from '../Dashboard/Admin/UserManagement'
import DonationRequest from '../Dashboard/Admin/DonationRequest'
import ContentManagement from '../Dashboard/Admin/ContentManagement'
import DonationRequestPosts from "../Pages/AllDonationRequest/DonationRequestPosts";
import Blogs from "../Pages/Blogs/Blogs";
import DonorHome from "../Dashboard/Donor/DonorHome";
import DonorPaymentHistory from "../Dashboard/Donor/DonorPaymentHistory";
import CreateDonationRequest from "../Dashboard/CreateDonationRequest";
import PostYourBlog from "../Pages/Blogs/PostYourBlog";
import UpdateProfile from "../User/UpdateProfile";
import PaymentDonor from "../Dashboard/Donor/PaymentDonor";
import PaymentAdmin from "../Dashboard/Admin/PaymentAdmin";
import DonationRequestDetails from "../Pages/AllDonationRequest/DonationRequestDetails";
import VolunteerHome from "../Dashboard/Volunteer/VolunteerHome";
import AllPaymentHistory from "../Dashboard/Admin/AllPaymentHistory";
import AdminPaymenHistory from "../Dashboard/Admin/AdminPaymenHistory";
import Payment from "../Dashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import PrivateAdminRoute from "./PrivateAdminRoute";
import PrivateVolunteerRoute from "./PrivateVolunteerRoute";
import PrivateDonorRoute from "./PrivateDonorRoute";
import VolunteerPaymentHistory from "../Dashboard/Volunteer/VolunteerPaymentHistory";
import AboutUs from "../Pages/AboutUs";
import BecomeADonor from "../SharedPages/HeropartComponent/BecomeADonor";
import BenefitsOfBloodDonation from "../SharedPages/HeropartComponent/BenefitsOfBloodDonation";
import HowYourDonationHelps from "../SharedPages/HeropartComponent/HowYourDonationHelps";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import Imprint from "../SharedPages/Imprint";
import AllVolunteerRequests from "../Dashboard/Volunteer/AllVolunteerRequests";
import UpdateDonationRequest from "../Dashboard/UpdateDonationRequest";
import ManageDonationRequestDonor from "../Dashboard/Donor/ManageDonationRequestDonor";
import Contact from "../Dashboard/Contact";






export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/donationRequestPosts',
                element: <DonationRequestPosts></DonationRequestPosts>
            },
            {
                path: '/donationPosts/:id',
                element: <PrivateRoute><DonationRequestDetails></DonationRequestDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-weld-six.vercel.app/donationRequests/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://server-weld-six.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/postBlog',
                element: <PrivateRoute><PostYourBlog></PostYourBlog></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/updateProfile',
                element: <PrivateRoute> <UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: "/become-a-donor",
                element: < BecomeADonor />
            },
            {
                path: "/benefits-of-blood-donation",
                element: <BenefitsOfBloodDonation />
            },
            {
                path: "/how-your-donation-helps",
                element: <HowYourDonationHelps />
            },
            {
                path: '/imprint',
                element: <Imprint></Imprint>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'payment',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>

            },
    //         //donor user route
            {
                path: 'donorHome',
                element: <PrivateDonorRoute><DonorHome></DonorHome></PrivateDonorRoute>
            },
            {
                path: 'createDonationRequest',
                element: <PrivateRoute><CreateDonationRequest></CreateDonationRequest></PrivateRoute>
            },
            {
                path: 'manageDonationRequestDonor',
                element: <PrivateDonorRoute><ManageDonationRequestDonor></ManageDonationRequestDonor></PrivateDonorRoute>
            },
            {
                path: 'donorPayment',
                element: <PrivateDonorRoute><PaymentDonor></PaymentDonor></PrivateDonorRoute>
            },
            {
                path: 'donorPaymentHistory',
                element: <PrivateDonorRoute><DonorPaymentHistory></DonorPaymentHistory></PrivateDonorRoute>
            },
   
    //         //admin routes
            {
                path: 'adminHome',
                element: <PrivateAdminRoute><AdminHome></AdminHome></PrivateAdminRoute>

            },
            {
                path: 'userManagement',
                element: <PrivateRoute><UserManagement></UserManagement></PrivateRoute>
            },
            {
                path: 'donationRequest',
                element: <PrivateAdminRoute><DonationRequest></DonationRequest></PrivateAdminRoute>
            },
            {
                path: 'contentManagement', //blog route
                element: <PrivateAdminRoute><ContentManagement></ContentManagement></PrivateAdminRoute>
            },
            {
                path: 'adminPayment',
                element: <PrivateAdminRoute><Payment></Payment></PrivateAdminRoute>
            },
            {
                path: 'adminPaymentHistory',
                element: <PrivateAdminRoute><AdminPaymenHistory></AdminPaymenHistory></PrivateAdminRoute>
            },
            {
                path: 'allPaymentHistory',
                element: <PrivateAdminRoute><AllPaymentHistory></AllPaymentHistory></PrivateAdminRoute>
            },


           
            // Vlunteer routes
            {
                path: 'VolunteerHome',
                element: <PrivateVolunteerRoute><VolunteerHome></VolunteerHome></PrivateVolunteerRoute>

            },
            {
                path: 'userManagementByVolunteer',
                element: <PrivateVolunteerRoute><UserManagement></UserManagement></PrivateVolunteerRoute>
            },
            {
                path: 'allVolunteerDonationRequests',
                element: <PrivateVolunteerRoute><AllVolunteerRequests></AllVolunteerRequests></PrivateVolunteerRoute>
            },
            {
                path: 'createDonationRequestByVolunteer',
                element: <PrivateRoute><CreateDonationRequest></CreateDonationRequest></PrivateRoute>

            },
            {
                path: 'donationRequests/update/:id',
                element: <PrivateRoute><UpdateDonationRequest></UpdateDonationRequest></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-weld-six.vercel.app/donationRequests/${params.id}`)

            },
            {
                path: 'volunteerPayment',
                element: <PrivateVolunteerRoute><Payment></Payment></PrivateVolunteerRoute>
            },
            {
                path: 'volunteerPaymentHostory',
                element: <PrivateVolunteerRoute>
                    <VolunteerPaymentHistory></VolunteerPaymentHistory>
                    </PrivateVolunteerRoute>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }

    
            
        ]
    }
]);

