
// import { FaTrashAlt, FaUsers } from 'react-icons/fa';
// import useAllusers from '../../Hooks/useAllUsers';
// import Swal from 'sweetalert2';
// import useAxiosPublic from '../../Hooks/useAxiosPublic';

// const UserManagement = () => {

//     const [users, refetch] = useAllusers();
//     const axiosPublic = useAxiosPublic()






//     // make admin button 
//     const handleChangeRole = async (user, newRole) => {
//         try {
//             // const { data } = await axiosSecure.patch(`/users/admin/${user._id}`);
//             const { data } = await axiosPublic.post(`/users/role/${user._id}`, { role: newRole } );

//             if (data.modifiedCount > 0) {
//                 refetch(); //to update the the data without useEffect!!!!

//                 Swal.fire({
//                     title: "Role Changed!",
//                     text: "Your file has been updated.",
//                     icon: "success"
//                 });
//             }
//         } catch (error) {
//             Swal.fire({
//                 title: "Error!",
//                 text: "Something went wrong. Please try again later.",
//                 icon: "error"
//             });
//             console.error("Error deleting the item:", error);
//         }
//     }






//     return (
//         <div>
//             <h1> All User will be here {users.length}</h1>
//             <div>
//                 <div className="flex justify-evenly my-4">
//                     <h2 className="text-3xl ">All Users</h2>
//                     <h2 className="text-3xl ">Total Users {users.length}</h2>
//                 </div>
//                 <div>
//                     <div className="overflow-x-auto">
//                         <table className="table table-zebra w-full">
//                             {/* head */}
//                             <thead>
//                                 <tr>
//                                     <th></th>
//                                     <th>Name</th>
//                                     <th>Email</th>
//                                     <th>Role</th>
//                                     <th>Status</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {/* row 1 */}
//                                 {
//                                     users.map((user, index) => < tr key={user._id} >
//                                         <th>{index + 1}</th>
//                                         <td>{user.name}</td>
//                                         <td>{user.email}</td>
//                                         {/* <td>
//                                             {user.role === 'admin' ? 'Admin'
//                                                 :
//                                                 <button
//                                                     // onClick={() => handleChangeRole(user)}
//                                                     className="btn btn-ghost btn-lg bg-orange-500">
//                                                     <FaUsers className="text-white"></FaUsers>
//                                                 </button>}
//                                         </td> */}
                                        // <td>
                                        //     <select
                                        //         value={user.role || "volunteer"}
                                        //         onChange={(e) => handleChangeRole(user, e.target.value)}
                                        //         className="select select-bordered"
                                        //     >
                                        //         <option value="admin">Admin</option>
                                        //         <option value="donor">Donor</option>
                                        //         <option value="volunteer">Volunteer</option>
                                        //     </select>
                                        // </td>


//                                         <td>
//                                             <button className='btn'>Active</button>
//                                         </td>
//                                         <td>  <button
//                                             // onClick={() => handleDeleteUser(user)}
//                                             className="btn btn-ghost btn-lg">
//                                             <FaTrashAlt className="text-red-600"></FaTrashAlt>
//                                         </button>
//                                         </td>
//                                         <td></td>
//                                     </tr>)
//                                 }


//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserManagement;


// UserManagement.jsx



import { FaTrashAlt } from 'react-icons/fa';
import useAllusers from '../../Hooks/useAllUsers';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const UserManagement = () => {
    const [users, loading, refetch] = useAllusers();
    const axiosPublic = useAxiosPublic();

    const handleChangeRole = async (user, newRole) => {
        try {
            const { data } = await axiosPublic.patch(`/users/role/${user.email}`, { role: newRole });

            if (data.modifiedCount > 0) {
                refetch(); // to update the data without useEffect!!!!

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


    // make active/block button 
    const handleMakeAdmin = async user => {
        try {
            const { data } = await axiosSecure.patch(`/users/admin/${user._id}`);

            if (data.modifiedCount > 0) {
                refetch(); //to update the the data without useEffect!!!!

                Swal.fire({
                    title: "Role Changed!",
                    text: "Your file has been updated.",
                    icon: "success"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again later.",
                icon: "error"
            });
            console.error("Error deleting the item:", error);
        }
    }


    return (
        <div>
            <h1> All Users will be here {users.length}</h1>
            <div>
                <div className="flex justify-evenly my-4">
                    <h2 className="text-3xl">All Users</h2>
                    <h2 className="text-3xl">Total Users {users.length}</h2>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* rows */}
                                {users.map((user, index) => (
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
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
                                            {user.status === 'active' ? 'Active'
                                                :
                                                <button
                                                    onClick={() => handleStatusChange(user)}
                                                    className="btn btn-accent">
                                                    <h1>Active</h1>
                                                </button>}
                                        </td>

                                        {/* <td>
                                            <button className='btn'>Active</button>
                                        </td> */}


                                        <td>
                                            <button
                                                className="btn btn-ghost btn-lg"
                                            >
                                                <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                            </button>
                                        </td>
                                        <td></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;
