

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


 

    const handleUserStatusChange = async (user) => {
        const newStatus = user.status === 'active' ? 'block' : 'active';
        try {
            const { data } = await axiosPublic.patch(`/users/status/${user._id}`, { status: newStatus });

            if (data.modifiedCount > 0) {
                refetch(); // to update the data without useEffect!!!!

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
                                            <button
                                                onClick={() => handleUserStatusChange(user)}
                                                className={`btn ${user.status === 'active' ? 'btn-accent' : 'btn-danger'}`}
                                            >
                                                {user.status === 'active' ? 'Active' : 'Blocked'}
                                            </button>
                                        </td>

                                        {/* <td>
                                            {user.status === 'block' ? 'Blocked' :
                                                <button
                                                    onClick={() => handleUserStatusChange(user)}
                                                    className="btn btn-accent"
                                                >
                                                    <h1>Active</h1>
                                                </button>
                                            }
                                        </td> */}

                                        {/* <td>
                                            {user.status === 'block' ? 'Blocked'
                                                :
                                                <button
                                                    onClick={() => handleUserStatusChange(user)}
                                                    className="btn btn-accent">
                                                    <h1>Active</h1>
                                                </button>}
                                        </td> */}

                                        
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
