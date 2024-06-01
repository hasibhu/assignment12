
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import useAllusers from '../../Hooks/useAllUsers';

const UserManagement = () => {

    const [users] = useAllusers();
    return (
        <div>
            <h1> All User will be here {users.length}</h1>
            <div>
                <div className="flex justify-evenly my-4">
                    <h2 className="text-3xl ">All Users</h2>
                    <h2 className="text-3xl ">Total Users {users.length}</h2>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users.map((user, index) => < tr key={user._id} >
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.role === 'admin' ? 'Admin'
                                                :
                                                <button
                                                    // onClick={() => handleMakeAdmin(user)}
                                                    className="btn btn-ghost btn-lg bg-orange-500">
                                                    <FaUsers className="text-white"></FaUsers>
                                                </button>}
                                        </td>


                                        <td>
                                            <button className='btn'>Active</button>
                                        </td>
                                        <td>  <button
                                            // onClick={() => handleDeleteUser(user)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                        </td>
                                        <td></td>
                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;