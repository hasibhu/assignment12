


import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";
import VolunteerDonationRequestCard from "./VolunteerDonationRequestCard";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const AllVolunteerRequests = () => {

    const [donationRequests, loading, refetch] = useAllDonationRequests();
    const { user } = UseAuth();

    const loggedInUserEmail = user?.email;

    const matchingRequests = donationRequests?.filter(donationRequest => donationRequest?.email === loggedInUserEmail);
    // console.log(matchingRequests);

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
            <h1 className="text-center text-3xl p-10">Summary of all post will be here.</h1>

            {
                donationRequests < 1 ? <> <h1 className="text-center text-2xl pt-28 text-red-600">You haven't make any request.</h1></>
                    :
                    <>
                        <div>

                            <div className="overflow-x-auto">
                                <table className="table table-zebra w-full">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>

                                            <th>Status</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* rows */}
                                        {matchingRequests.map((data, index) => (
                                            <tr key={user._id}>
                                                <th>{index + 1}</th>
                                                <td>{data.recipientName}</td>
                                                <td>{data.email}</td>

                                                {/* status part */}
                                                <td>
                                                    <button
                                                        // onClick={() => handleUserStatusChange(user)}
                                                        className={`btn ${data.status === 'active' ? 'btn-accent' : 'btn-danger'}`}
                                                    >
                                                        {user.status === 'pending' ? 'Pending' : 'InProgress'}
                                                    </button>
                                                </td>

                                                <td className="text-center">
                                                    <Link to={`/dashboard/donationRequests/update/${data?._id}`} >
                                                        <button
                                                            className="btn btn-ghost btn-lg"
                                                        >
                                                            <FaEdit className="text-green-600"></FaEdit>
                                                        </button>

                                                    </Link>





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
                    </>
            }
          
        </div>
    );
};

export default AllVolunteerRequests;




