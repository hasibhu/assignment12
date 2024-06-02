
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
import DonationRequestPosts from "../Pages/DonationRequestPosts";
import Blogs from "../Pages/Blogs";
import DonorHome from "../Dashboard/Donor/DonorHome";
import DonorPaymentHistory from "../Dashboard/Donor/DonorPaymentHistory";
import CreateDonationRequest from "../Dashboard/CreateDonationRequest";






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
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
            {
                path: '/signup',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
    //         //normal user route
            {
                path: 'donorHome',
                element: <DonorHome></DonorHome>
            },
            {
                path: 'createDonationRequest',
                element: <CreateDonationRequest></CreateDonationRequest>
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

    
            
        ]
    }
]);

