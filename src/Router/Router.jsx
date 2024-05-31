
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../SharedPages/Home";

import Login from "../User/Login";
import Register from "../User/Register";






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
    // {
    //     path: 'dashboard',
    //     element: <UserDashBoard></UserDashBoard>,
    //     children: [
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
    //         {
    //             path: 'adminHome',
    //             element: <AdminHome></AdminHome>

    //         },
    //         {
    //             path: 'users',
    //             element: <AllUsers></AllUsers>
    //         },
    //         {
    //             path: 'addItems',
    //             element: <AdminRoute><AddItem></AddItem></AdminRoute>
    //         },
    //         {
    //             path: 'manageItems',
    //             element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
    //         },
    //         {
    //             path: 'updateItem/:id',
    //             element: <UpdateItem></UpdateItem>,
    //             loader: ({ params }) => fetch(`http://localhost:3001/menu/${params.id}`)
    //         },
    //         {
    //             path: 'manageBooking',
    //             element: <AdminRoute><ManageBooking></ManageBooking></AdminRoute>
    //         }
    //     ]
    // }
]);

