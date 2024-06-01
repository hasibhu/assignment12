
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
    //         {
    //             path: 'userHome',
    //             element: <UserHome></UserHome>
    //         },
    //         {
    //             path: 'cart',
    //             element: <Cart></Cart>
    //         },
    //         {
    //             path: 'payment',
    //             element: <Payment></Payment>
    //         },
    //         {
    //             path: 'paymentHistory',
    //             element: <PaymentHistory></PaymentHistory>
    //         },
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
                path: 'donantionRequest',
                element: <DonationRequest></DonationRequest>
            },
            {
                path: 'contentManagement',
                element: <ContentManagement></ContentManagement>
            },
    //         {
    //             path: 'updateItem/:id',
    //             element: <UpdateItem></UpdateItem>,
    //             loader: ({ params }) => fetch(`http://localhost:3001/menu/${params.id}`)
    //         },
    //         {
    //             path: 'manageBooking',
    //             element: <AdminRoute><ManageBooking></ManageBooking></AdminRoute>
    //         }
            
        ]
    }
]);

