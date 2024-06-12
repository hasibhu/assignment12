
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";

import { Link } from "react-router-dom";


const ManageDonationRequestDonor = () => {

    const [donationRequests, loading, refetch] = useAllDonationRequests();
    const { user } = UseAuth();

    const loggedInUserEmail = user?.email;

    const matchingRequests = donationRequests?.filter(donationRequest => donationRequest?.email === loggedInUserEmail);
    console.log(matchingRequests);

    return (


        <div>
            <h1 className="text-center">Summary of all post will be here {matchingRequests.length}</h1>


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

export default ManageDonationRequestDonor;