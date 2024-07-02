// import { FaEdit, FaTrashAlt, FaExchangeAlt } from "react-icons/fa";
// // import { FaEdit, FaTrashAlt,  } from "react-icons/fa";
// import useBlogs from "../../Hooks/useBlogs";
// import Swal from "sweetalert2";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import useAllUsers from "../../Hooks/useAllUsers";
// import UseAuth from "../../Hooks/UseAuth";
// import { Link } from "react-router-dom";


// const ContentManagement = () => {
//     const [blogs, loading, refetch] = useBlogs();
//     const axiosPublic = useAxiosPublic();
//     const { user } = UseAuth();
//     const [users, ,] = useAllUsers();
//     const loggedInUserEmail = user?.email;
//     const matchingUser = users?.find(user => user?.email === loggedInUserEmail);
//     const userRole = matchingUser?.role;
    
//     // Function to handle status change
//     const handleStatusChange = async (id, newStatus) => {
//         try {
//             await axiosPublic.put(`/updateBlogsStatus/${id}`, { status: newStatus });
//             Swal.fire({
//                 title: "Updated!",
//                 text: `Status updated to ${newStatus}`,
//                 icon: "success"
//             });
//             refetch(); // Refetch donation requests after update
//         } catch (err) {
//             // handle error
//             console.error("Error updating status:", err);
//             Swal.fire({
//                 title: "Error!",
//                 text: "Failed to update status.",
//                 icon: "error"
//             });
//         }
//     };

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
//                     await axiosPublic.delete(`/deleteBlog/${id}`);
//                     Swal.fire({
//                         title: "Deleted!",
//                         text: "Your file has been deleted.",
//                         icon: "success"
//                     });
//                     const remainingPosts = blogs.filter(post => post.id !== id);
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
//             <h1 className="text-3xl font-bold text-center p-6">All Blog Posts</h1>
            

//             <div>

//                 <div className="overflow-x-auto">
//                     <table className="table table-zebra w-full m-4">
//                         {/* head */}
//                         <thead className="bg-lime-300">
//                             <tr className="text-center">
//                                 <th>#</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Bloger Role</th>
//                                 <th>District</th>
//                                 <th>Headline</th>
//                                 <th>Status</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody >
//                             {/* rows */}
//                             {blogs.map((blog, index) => (
//                                 <tr className="text-center" key={blog._id}>
//                                     <th>{index + 1}</th>
                                    
//                                     <td>{blog.name}</td>
//                                     <td>{blog.email}</td>


//                                     {/* role part */}

//                                     <td>
//                                         {userRole}
//                                     </td>


//                                     {/* status part */}
//                                     <td>
//                                         {blog.district}
//                                     </td>

//                                     <td>
//                                         {blog.headLine}
//                                     </td>
//                                     <td>
//                                         {blog.status}
//                                     </td>




//                                     <td className="text-center">

//                                         <button
//                                             className="pr-3"
//                                             onClick={() => {
//                                                 Swal.fire({
//                                                     title: 'Select Status',
//                                                     input: 'select',
//                                                     inputOptions: {
//                                                         Published: 'Published',
//                                                         UnPublished: 'UnPublished',
//                                                     },
//                                                     inputPlaceholder: 'Select a status',
//                                                     showCancelButton: true,
//                                                     confirmButtonText: 'Update',
//                                                     inputValidator: (value) => {
//                                                         if (!value) {
//                                                             return 'You need to select a status';
//                                                         }
//                                                     }
//                                                 }).then((result) => {
//                                                     if (result.isConfirmed) {
//                                                         const newStatus = result.value;
//                                                         handleStatusChange(blog._id, newStatus);
//                                                     }
//                                                 });
//                                             }}
//                                             title='Change Status'
//                                         >
//                                             <FaExchangeAlt />
//                                         </button>



//                                         <Link to={`/dashboard/blogs/update/${blog._id}`}>
//                                             <button title='Update' className="pr-4 ">
//                                                 <FaEdit className="text-green-600 text-xl  " />
//                                             </button>
//                                         </Link>



//                                         <button onClick={() => handleDelete(blog?._id)}
//                                             className=""
//                                         >
//                                             {/* <FaEdit className="text-blue-600 mr-5"></FaEdit> */}
//                                             <FaTrashAlt className="text-red-600"></FaTrashAlt>
//                                         </button>

//                                     </td>
//                                     <td></td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
        
//     );
// };

// export default ContentManagement;





import { FaEdit, FaTrashAlt, FaExchangeAlt } from "react-icons/fa";
import useBlogs from "../../Hooks/useBlogs";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAllUsers from "../../Hooks/useAllUsers";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";
import { useState } from "react";

const ContentManagement = () => {
    const [blogs, loading, refetch] = useBlogs();
    const axiosPublic = useAxiosPublic();
    const { user } = UseAuth();
    const [users, ,] = useAllUsers();
    const loggedInUserEmail = user?.email;
    const matchingUser = users?.find(user => user?.email === loggedInUserEmail);
    const userRole = matchingUser?.role;

    // State for filtering
    const [filter, setFilter] = useState('All');

    // Function to handle status change
    const handleStatusChange = async (id, newStatus) => {
        try {
            await axiosPublic.put(`/updateBlogsStatus/${id}`, { status: newStatus });
            Swal.fire({
                title: "Updated!",
                text: `Status updated to ${newStatus}`,
                icon: "success"
            });
            refetch(); // Refetch donation requests after update
        } catch (err) {
            // handle error
            console.error("Error updating status:", err);
            Swal.fire({
                title: "Error!",
                text: "Failed to update status.",
                icon: "error"
            });
        }
    };

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
                    refetch(remainingPosts);
                } catch (err) {
                    // toast.error(err.message)
                }
            }
        });
    };

    // Filter blogs based on the selected filter
    const filteredBlogs = filter === 'All' ? blogs : blogs.filter(blog => blog.status === filter);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-6">All Blog Posts</h1>
            {/* <div className="flex justify-end m-4">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="All">All</option>
                    <option value="Published">Published</option>
                    <option value="UnPublished">UnPublished</option>
                </select>
            </div> */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full m-4">
                        {/* head */}
                        <thead className="bg-lime-300 ">
                            <tr className="text-center">
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Bloger Role</th>
                                <th>District</th>
                                <th>Headline</th>
                                {/* <th>Status</th> */}
                                <th className="flex justify-end ">
                                    <select
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                        className=" rounded bg-lime-300"
                                    >
                                        <option value="All">Status</option>
                                        <option value="Published">Published</option>
                                        <option value="UnPublished">UnPublished</option>
                                    </select>
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}
                            {filteredBlogs.map((blog, index) => (
                                <tr className="text-center" key={blog._id}>
                                    <th>{index + 1}</th>
                                    <td>{blog.name}</td>
                                    <td>{blog.email}</td>
                                    <td>{userRole}</td>
                                    <td>{blog.district}</td>
                                    <td>{blog.headLine}</td>
                                    <td>{blog.status}</td>
                                    <td className="text-center">
                                        <button
                                            className="pr-3"
                                            onClick={() => {
                                                Swal.fire({
                                                    title: 'Select Status',
                                                    input: 'select',
                                                    inputOptions: {
                                                        Published: 'Published',
                                                        UnPublished: 'UnPublished',
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
                                                        handleStatusChange(blog._id, newStatus);
                                                    }
                                                });
                                            }}
                                            title='Change Status'
                                        >
                                            <FaExchangeAlt />
                                        </button>
                                        <Link to={`/dashboard/blogs/update/${blog._id}`}>
                                            <button title='Update' className="pr-4 ">
                                                <FaEdit className="text-green-600 text-xl  " />
                                            </button>
                                        </Link>
                                        <button onClick={() => handleDelete(blog?._id)} className="">
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
