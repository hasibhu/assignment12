
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
                element: <DonationRequestDetails></DonationRequestDetails>,
                loader: ({ params }) => fetch(`http://localhost:3004/donationRequests/${params.id}`)
            }, 
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/postBlog',
                element: <PostYourBlog></PostYourBlog>
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
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
    //         //donor user route
            {
                path: 'donorHome',
                element: <DonorHome></DonorHome>
            },
            {
                path: 'createDonationRequest',
                element: <CreateDonationRequest></CreateDonationRequest>
            },
            {
                path: 'donorPayment',
                element: <PaymentDonor></PaymentDonor>
            },
            {
                path: 'donorPaymentHistory',
                element: <DonorPaymentHistory></DonorPaymentHistory>
            },
   
    //         //admin routes
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>

            },
            {
                path: 'userManagement',
                element: <UserManagement></UserManagement>
            },
            {
                path: 'donationRequest',
                element: <DonationRequest></DonationRequest>
            },
            {
                path: 'contentManagement',
                element: <ContentManagement></ContentManagement>
            },
            {
                path: 'adminPayment',
                element: <PaymentAdmin></PaymentAdmin>
            },
           
            // Vlunteer routes
            {
                path: 'VolunteerHome',
                element: <VolunteerHome></VolunteerHome>

            },
            {
                path: 'createDonationRequestByVolunteer',
                element: <CreateDonationRequest></CreateDonationRequest>

            },

    
            
        ]
    }
]);

