

// import React, { useState } from 'react';
// import { FaTrashAlt } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import useAllUsers from '../../Hooks/useAllUsers';
// import useAxiosPublic from '../../Hooks/useAxiosPublic';

// const UserManagement = () => {
//     const [users, loading, refetch] = useAllUsers();
//     const axiosPublic = useAxiosPublic();
//     const [statusFilter, setStatusFilter] = useState(''); // State for status filter
//     const [roleFilter, setRoleFilter] = useState(''); // State for role filter

//     const handleChangeRole = async (user, newRole) => {
//         try {
//             const { data } = await axiosPublic.patch(`/users/role/${user.email}`, { role: newRole });

//             if (data.modifiedCount > 0) {
//                 refetch(); // Update data without useEffect

//                 Swal.fire({
//                     title: "Role Changed!",
//                     text: "User role has been updated.",
//                     icon: "success"
//                 });
//             }
//         } catch (error) {
//             Swal.fire({
//                 title: "Error!",
//                 text: "Something went wrong. Please try again later.",
//                 icon: "error"
//             });
//             console.error("Error changing the role:", error);
//         }
//     };

//     const handleUserStatusChange = async (user) => {
//         const newStatus = user.status === 'active' ? 'block' : 'active';
//         try {
//             const { data } = await axiosPublic.patch(`/users/status/${user._id}`, { status: newStatus });

//             if (data.modifiedCount > 0) {
//                 refetch(); // Update data without useEffect

//                 Swal.fire({
//                     title: "Status Changed!",
//                     text: `User status has been changed to ${newStatus}.`,
//                     icon: "success",
//                     timer: '1500'
//                 });
//             }
//         } catch (error) {
//             Swal.fire({
//                 title: "Error!",
//                 text: "Something went wrong. Please try again later.",
//                 icon: "error"
//             });
//             console.error("Error changing the status:", error);
//         }
//     };

//     const handleDeleteUser = async (user) => {
//         const confirmed = await Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         });

//         if (confirmed.isConfirmed) {
//             try {
//                 const { data } = await axiosPublic.delete(`/deleteUser/${user._id}`);

//                 if (data.deletedCount > 0) {
//                     refetch(); // Update data without useEffect

//                     Swal.fire({
//                         title: "Deleted!",
//                         text: "User has been deleted.",
//                         icon: "success"
//                     });
//                 }
//             } catch (error) {
//                 Swal.fire({
//                     title: "Error!",
//                     text: "Something went wrong. Please try again later.",
//                     icon: "error"
//                 });
//                 console.error("Error deleting the user:", error);
//             }
//         }
//     };

//     const filteredUsers = users.filter(user => {
//         const statusMatch = !statusFilter || user.status === statusFilter;
//         const roleMatch = !roleFilter || user.role === roleFilter;
//         return statusMatch && roleMatch;
//     });

//     const uniqueRoles = [...new Set(users.map(user => user.role))];

//     return (
//         <div>
//             <h1 className='text-4xl text-center font-bold p-6'>User Management Panel</h1>
//             <div>
//                 <div className="flex justify-around my-4">
//                     <h2 className="text-3xl">All Users</h2>
//                     <h2 className="text-3xl">Total Users: {users.length}</h2>
//                 </div>
//                 <div className='p-3'>
//                     <div className="overflow-x-auto">
//                         <table className="table table-zebra w-full">
//                             <thead className='bg-lime-300 text-xl'>
//                                 <tr className='text-center'>
//                                     <th>#</th>
//                                     <th>Name</th>
//                                     <th>Avatar</th>
//                                     <th>Email</th>
//                                     <th>
//                                         <select
//                                             value={roleFilter}
//                                             onChange={(e) => setRoleFilter(e.target.value)}
//                                             className="select bg-lime-300 ml-2 text-xl"
//                                         >
//                                             <option value="">Role</option>
//                                             {uniqueRoles.map(role => (
//                                                 <option key={role} value={role}>{role}</option>
//                                             ))}
//                                         </select>
//                                     </th>
//                                     <th>
//                                         <select
//                                             value={statusFilter}
//                                             onChange={(e) => setStatusFilter(e.target.value)}
//                                             className="select bg-lime-300 ml-2 text-xl"
//                                         >
//                                             <option value="">Status</option>
//                                             <option value="active">Active</option>
//                                             <option value="block">Blocked</option>
//                                         </select>
//                                     </th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {filteredUsers.map((user, index) => (
//                                     <tr className='text-center' key={user._id}>
//                                         <td>{index + 1}</td>
//                                         <td>{user.name}</td>
//                                         <td><img className='w-10 h-10 rounded-full' src={user?.image} alt="" /></td>
//                                         <td>{user.email}</td>
//                                         <td>
//                                             <select
//                                                 value={user.role || "volunteer"}
//                                                 onChange={(e) => handleChangeRole(user, e.target.value)}
//                                                 className="select select-bordered"
//                                             >
//                                                 <option value="admin">Admin</option>
//                                                 <option value="donor">Donor</option>
//                                                 <option value="volunteer">Volunteer</option>
//                                             </select>
//                                         </td>
//                                         <td>
//                                             <button
//                                                 onClick={() => handleUserStatusChange(user)}
//                                                 className={`btn ${user.status === 'active' ? 'btn-accent' : 'btn-danger'}`}
//                                             >
//                                                 {user.status === 'active' ? 'Active' : 'Blocked'}
//                                             </button>
//                                         </td>
//                                         <td>
//                                             <button
//                                                 onClick={() => handleDeleteUser(user)}
//                                                 className="btn btn-ghost btn-lg"
//                                             >
//                                                 <FaTrashAlt className="text-red-600" />
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserManagement;


import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAllUsers from '../../Hooks/useAllUsers';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const UserManagement = () => {
    const [users, loading, refetch] = useAllUsers();
    const axiosPublic = useAxiosPublic();
    const [statusFilter, setStatusFilter] = useState(''); // State for status filter
    const [roleFilter, setRoleFilter] = useState(''); // State for role filter
    const [displayCount, setDisplayCount] = useState(5); // State for number of users to display

    const handleChangeRole = async (user, newRole) => {
        try {
            const { data } = await axiosPublic.patch(`/users/role/${user.email}`, { role: newRole });

            if (data.modifiedCount > 0) {
                refetch(); // Update data without useEffect

                Swal.fire({
                    title: "Role Changed!",
                    text: "User role has been updated.",
                    icon: "success"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again later.",
                icon: "error"
            });
            console.error("Error changing the role:", error);
        }
    };

    const handleUserStatusChange = async (user) => {
        const newStatus = user.status === 'active' ? 'block' : 'active';
        try {
            const { data } = await axiosPublic.patch(`/users/status/${user._id}`, { status: newStatus });

            if (data.modifiedCount > 0) {
                refetch(); // Update data without useEffect

                Swal.fire({
                    title: "Status Changed!",
                    text: `User status has been changed to ${newStatus}.`,
                    icon: "success",
                    timer: '1500'
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again later.",
                icon: "error"
            });
            console.error("Error changing the status:", error);
        }
    };

    const handleDeleteUser = async (user) => {
        const confirmed = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (confirmed.isConfirmed) {
            try {
                const { data } = await axiosPublic.delete(`/deleteUser/${user._id}`);

                if (data.deletedCount > 0) {
                    refetch(); // Update data without useEffect

                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                    });
                }
            } catch (error) {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again later.",
                    icon: "error"
                });
                console.error("Error deleting the user:", error);
            }
        }
    };

    const filteredUsers = users.filter(user => {
        const statusMatch = !statusFilter || user.status === statusFilter;
        const roleMatch = !roleFilter || user.role === roleFilter;
        return statusMatch && roleMatch;
    });

    const uniqueRoles = [...new Set(users.map(user => user.role))];

    // Function to handle showing more users
    const handleShowMore = () => {
        setDisplayCount(prevCount => prevCount + 5);
    };

    return (
        <div>
            <h1 className='text-4xl text-center font-bold p-6'>User Management Panel</h1>
            <div>
                <div className="flex justify-around my-4">
                    <h2 className="text-3xl">All Users</h2>
                    <h2 className="text-3xl">Total Users: {users.length}</h2>
                </div>
                <div className='p-3'>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead className='bg-lime-300 text-xl'>
                                <tr className='text-center'>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Email</th>
                                    <th>
                                        <select
                                            value={roleFilter}
                                            onChange={(e) => setRoleFilter(e.target.value)}
                                            className="select bg-lime-300 ml-2 text-xl"
                                        >
                                            <option value="">Role</option>
                                            {uniqueRoles.map(role => (
                                                <option key={role} value={role}>{role}</option>
                                            ))}
                                        </select>
                                    </th>
                                    <th>
                                        <select
                                            value={statusFilter}
                                            onChange={(e) => setStatusFilter(e.target.value)}
                                            className="select bg-lime-300 ml-2 text-xl"
                                        >
                                            <option value="">Status</option>
                                            <option value="active">Active</option>
                                            <option value="block">Blocked</option>
                                        </select>
                                    </th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.slice(0, displayCount).map((user, index) => (
                                    <tr className='text-center' key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td><img className='w-10 h-10 rounded-full' src={user?.image} alt="" /></td>
                                        <td>{user.email}</td>
                                        <td>
                                            <select
                                                value={user.role || "volunteer"}
                                                onChange={(e) => handleChangeRole(user, e.target.value)}
                                                className="select select-bordered"
                                            >
                                                <option value="admin">Admin</option>
                                                <option value="donor">Donor</option>
                                                <option value="volunteer">Volunteer</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleUserStatusChange(user)}
                                                className={`btn ${user.status === 'active' ? 'btn-accent' : 'bg-red-600'}`}
                                            >
                                                {user.status === 'active' ? 'Active' : 'Blocked'}
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDeleteUser(user)}
                                                className="btn btn-ghost btn-lg"
                                            >
                                                <FaTrashAlt className="text-red-600" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {displayCount < filteredUsers.length && (
                            <div className="text-center mt-4">
                                <button
                                    onClick={handleShowMore}
                                    className="btn btn-primary"
                                >
                                    Show More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
