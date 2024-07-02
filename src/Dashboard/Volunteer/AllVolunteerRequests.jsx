


// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import UseAuth from "../../Hooks/UseAuth";
// import useAllDonationRequests from "../../Hooks/useAllDonationRequests";
// import VolunteerDonationRequestCard from "./VolunteerDonationRequestCard";
// import { Link } from "react-router-dom";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import Swal from "sweetalert2";


// const AllVolunteerRequests = () => {

//     const [donationRequests, loading, refetch] = useAllDonationRequests();
//     const { user } = UseAuth();

//     // const loggedInUserEmail = user?.email;

//     // const matchingRequests = donationRequests?.filter(donationRequest => donationRequest?.email === loggedInUserEmail);
//     // console.log(matchingRequests);

//     const axiosPublic = useAxiosPublic();

//     const handleDelete = async id => {
//         console.log(id);
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then(async (result) => {
//             if (result.isConfirmed) {
//                 try {
//                     await axiosPublic.delete(`/deleteDonationRequest/${id}`);
//                     Swal.fire({
//                         title: "Deleted!",
//                         text: "Your file has been deleted.",
//                         icon: "success"
//                     });
//                     const remainingPosts = donationRequests.filter(post => post.id !== id);
//                     // setMyPosts(remainingPosts);
//                     refetch(remainingPosts)
//                 } catch (err) {
//                     // toast.error(err.message)
//                 }
//             }
//         });
//     };



//     return (
    

//         <div>
//             <h1 className="text-center text-3xl p-10">Summary of all post will be here.</h1>

//             {
//                 donationRequests < 1 ? <> <h1 className="text-center text-2xl pt-28 text-red-600">You haven't make any request.</h1></>
//                     :
//                     <>
//                         <div>

//                             <div className="overflow-x-auto">
//                                 <table className="table table-zebra w-full">
//                                     {/* head */}
//                                     <thead>
//                                         <tr>
//                                             <th>#</th>
//                                             <th>Name</th>
//                                             <th>Email</th>

//                                             <th>Status</th>
//                                             <th className="text-center">Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {/* rows */}
//                                         {donationRequests.map((data, index) => (
//                                             <tr key={user._id}>
//                                                 <th>{index + 1}</th>
//                                                 <td>{data.recipientName}</td>
//                                                 <td>{data.email}</td>

//                                                 {/* status part */}
//                                                 <td>
//                                                     <button
//                                                         // onClick={() => handleUserStatusChange(user)}
//                                                         className={`btn ${data.status === 'active' ? 'btn-accent' : 'btn-danger'}`}
//                                                     >
//                                                         {user.status === 'pending' ? 'Pending' : 'InProgress'}
//                                                     </button>
//                                                 </td>

//                                                 <td className="text-center">
//                                                     <Link to={`/dashboard/donationRequests/update/${data?._id}`} >
//                                                         <button
//                                                             className="btn btn-ghost btn-lg"
//                                                         >
//                                                             <FaEdit className="text-green-600"></FaEdit>
//                                                         </button>

//                                                     </Link>





//                                                     <button
//                                                         onClick={() => handleDelete(data?._id)}
//                                                         className="btn btn-ghost btn-lg"
//                                                     >
//                                                         <FaTrashAlt className="text-red-600"></FaTrashAlt>
//                                                     </button>
//                                                 </td>
//                                                 <td></td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </>
//             }
          
//         </div>
//     );
// };

// export default AllVolunteerRequests;





import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaExchangeAlt } from "react-icons/fa";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";

import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UseAuth from "../../Hooks/UseAuth";
import useAllUsers from "../../Hooks/useAllUsers";

const AllVolunteerRequests = () => {
    const [donationRequests, loading, refetch] = useAllDonationRequests();
    const axiosPublic = useAxiosPublic();
    const { user } = UseAuth();
    const [users] = useAllUsers(); // Fetch all users

    const [filterByRole, setFilterByRole] = useState(''); // State for role filter
    const [filterByStatus, setFilterByStatus] = useState(''); // State for status filter
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const itemsPerPage = 10; // Number of items per page

    // Function to get user role based on email
    const getUserRole = (email) => {
        const matchingUser = users.find(user => user.email === email);
        return matchingUser ? matchingUser.role : 'Unknown';
    };

    // Function to handle status change
    const handleStatusChange = async (id, newStatus) => {
        try {
            await axiosPublic.put(`/updateDonationStatus/${id}`, { status: newStatus });
            Swal.fire({
                title: "Updated!",
                text: `Status updated to ${newStatus}`,
                icon: "success"
            });
            refetch(); // Refetch donation requests after update
        } catch (err) {
            console.error("Error updating status:", err);
            Swal.fire({
                title: "Error!",
                text: "Failed to update status.",
                icon: "error"
            });
        }
    };

    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // Function to get CSS class based on status
    const getStatusColorClass = (status) => {
        const lowerCaseStatus = status.toLowerCase();

        switch (lowerCaseStatus) {
            case 'done':
                return 'bg-green-600';
            case 'canceled':
                return 'bg-red-600';
            case 'inprogress':
                return 'bg-lime-400';
            case 'pending':
                return 'bg-yellow-600';
            default:
                return '';
        }
    };

    const filteredDonationRequests = donationRequests.filter(request => {
        const creatorRole = getUserRole(request.email);
        const status = request.status.toLowerCase();
        const statusMatch = filterByStatus ? status === filterByStatus.toLowerCase() : true;
        const roleMatch = filterByRole ? creatorRole === filterByRole : true;
        return statusMatch && roleMatch;
    });

    const paginatedRequests = filteredDonationRequests.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredDonationRequests.length / itemsPerPage);

    const uniqueRoles = [...new Set(users.map(user => user.role))];
    const uniqueStatuses = ['Pending', 'InProgress', 'Done', 'Canceled'];

    return (
        loading ? <>
            {/* <h1 className='flex justify-center items-center text-4xl'> <span className="loading loading-spinner text-4xl text-error"></span> </h1> */}
            <h1 className='flex justify-center items-center text-red-600 text-4xl'> <span className="loading loading-spinner loading-lg"></span> </h1>

        </>
        :
        <div>
            <h1 className="text-center text-3xl font-bold p-10">Summary of all requests ({donationRequests.length})</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead className='bg-lime-200 h-16 font-bold text-lg'>
                        <tr className='text-center'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>
                                <select
                                    value={filterByRole}
                                    onChange={(e) => setFilterByRole(e.target.value)}
                                    className=" bg-lime-200"
                                >
                                    <option value="">All Roles</option>
                                    {uniqueRoles.map(role => (
                                        <option key={role} value={role}>{capitalizeFirstLetter(role)}</option>
                                    ))}
                                </select>
                            </th>
                            <th>
                                <select
                                    value={filterByStatus}
                                    onChange={(e) => setFilterByStatus(e.target.value)}
                                    className=" bg-lime-200"
                                >
                                    <option value="">All Statuses</option>
                                    {uniqueStatuses.map(status => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            </th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedRequests.map((data, index) => {
                            const role = capitalizeFirstLetter(getUserRole(data.email));

                            return (
                                <tr className='text-center' key={data._id}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{data.recipientName}</td>
                                    <td>{data.email}</td>
                                    <td>{role}</td>
                                    <td className={`text-center ${getStatusColorClass(data.status.toLowerCase())}`}>
                                        {capitalizeFirstLetter(data.status.toLowerCase())}
                                    </td>
                                    <td className="text-center space-x-3">
                                        <button
                                            onClick={() => {
                                                Swal.fire({
                                                    title: 'Select Status',
                                                    input: 'select',
                                                    inputOptions: {
                                                        pending: 'Pending',
                                                        inprogress: 'In Progress',
                                                        done: 'Done',
                                                        canceled: 'Canceled'
                                                    },
                                                    inputPlaceholder: 'Select a status',
                                                    showCancelButton: true,
                                                    confirmButtonText: 'Update',
                                                    inputValidator: (value) => {
                                                        if (!value) {
                                                            return 'You need to select a status';
                                                        }
                                                    }
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        const newStatus = result.value;
                                                        handleStatusChange(data._id, newStatus);
                                                    }
                                                });
                                            }}
                                            title='Change Status'
                                        >
                                            <FaExchangeAlt />
                                        </button>

                                        

                                        
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center my-4">
                <button
                    className={`px-4 py-2 mx-1 ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-lime-500 hover:bg-lime-700'}`}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="px-4 py-2 mx-1">Page {currentPage} of {totalPages}</span>
                <button
                    className={`px-4 py-2 mx-1 ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-lime-500 hover:bg-lime-700'}`}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllVolunteerRequests;



