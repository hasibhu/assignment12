import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useBlogs from "../../Hooks/useBlogs";


const ContentManagement = () => {
    const [blogs, loading, refetch] = useBlogs();
    return (
        <div>
            <h1>All Blog Post willbe here.... {blogs.length}</h1>
            

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
                                <th>District</th>
                                <th>Headline</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}
                            {blogs.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>


                                    {/* role part */}

                                    <td>
                                        <select
                                            value={user.role || "volunteer"}
                                            // onChange={(e) => handleChangeRole(user, e.target.value)}
                                            className="select select-bordered"
                                        >
                                            <option value="admin">Admin</option>
                                            <option value="donor">Donor</option>
                                            <option value="volunteer">Volunteer</option>
                                        </select>
                                    </td>


                                    {/* status part */}
                                    <td>
                                        {user.district}
                                    </td>

                                    <td>
                                        {user.headLine}
                                    </td>




                                    <td>
                                        <button
                                            className="btn btn-ghost btn-lg"
                                        >
                                            <FaEdit className="text-blue-600 mr-5"></FaEdit>
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
        
    );
};

export default ContentManagement;