import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useBlogs from "../../Hooks/useBlogs";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAllUsers from "../../Hooks/useAllUsers";
import UseAuth from "../../Hooks/UseAuth";


const ContentManagement = () => {
    const [blogs, loading, refetch] = useBlogs();
    const axiosPublic = useAxiosPublic();
    const { user } = UseAuth();
    const [users, ,] = useAllUsers();
    const loggedInUserEmail = user?.email;
    const matchingUser = users?.find(user => user?.email === loggedInUserEmail);
    const userRole = matchingUser?.role;
    

    const handleDelete = async id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosPublic.delete(`/deleteBlog/${id}`);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    const remainingPosts = blogs.filter(post => post.id !== id);
                    // setMyPosts(remainingPosts);
                    refetch(remainingPosts)
                } catch (err) {
                    // toast.error(err.message)
                }
            }
        });
    };


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
                            {blogs.map((blog, index) => (
                                <tr key={blog._id}>
                                    <th>{index + 1}</th>
                                    
                                    <td>{blog.name}</td>
                                    <td>{blog.email}</td>


                                    {/* role part */}

                                    <td>
                                        {userRole}
                                    </td>


                                    {/* status part */}
                                    <td>
                                        {blog.district}
                                    </td>

                                    <td>
                                        {blog.headLine}
                                    </td>




                                    <td>
                                        <button onClick={() => handleDelete(blog?._id)}
                                            className="btn btn-ghost btn-lg"
                                        >
                                            {/* <FaEdit className="text-blue-600 mr-5"></FaEdit> */}
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