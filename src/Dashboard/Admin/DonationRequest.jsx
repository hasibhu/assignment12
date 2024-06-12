import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const DonationRequest = () => {

    const [donationRequests, loading, refetch] = useAllDonationRequests();
    const axiosPublic = useAxiosPublic();

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
                    await axiosPublic.delete(`/deleteDonationRequest/${id}`);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    const remainingPosts = donationRequests.filter(post => post.id !== id);
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
            <h1 className="text-center text-3xl font-bold p-10">Summary of all requests {donationRequests.length}</h1>
            

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
                                <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* rows */}
                                {donationRequests.map((data, index) => (
                                    <tr key={data._id}>
                                        <th>{index + 1}</th>
                                        <td>{data.recipientName}</td>
                                        <td>{data.email}</td>


                                        {/* role part */}

                                        <td>
                                            <select
                                                value={data.role || "volunteer"}
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
                                            <button
                                                // onClick={() => handleUserStatusChange(user)}
                                                className={`btn ${data.status === 'active' ? 'btn-accent' : 'btn-danger'}`}
                                            >
                                                {data.status === 'pending' ? 'Pending' : 'InProgress'}
                                            </button>
                                        </td>

                                       


                                        <td className="text-center">
                                            {/* update button  */}
                                            <Link to={`/dashboard/donationRequests/update/${data?._id}`} >
                                                <button
                                                    className="btn btn-ghost btn-lg"
                                                >
                                                    <FaEdit className="text-green-600"></FaEdit>
                                                </button>

                                            </Link>

                                            
                                            {/* delete button  */}
                                            <button
                                                onClick={() => handleDelete(data?._id)}
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
        
    );
};

export default DonationRequest;