


import { FaTrashAlt } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";
import VolunteerDonationRequestCard from "./VolunteerDonationRequestCard";


const AllVolunteerRequests = () => {

    const [donationRequests, loading, refetch] = useAllDonationRequests();
    const { user } = UseAuth();

    const loggedInUserEmail = user?.email;

    const matchingRequests = donationRequests?.filter(donationRequest => donationRequest?.email === loggedInUserEmail);
    console.log(matchingRequests);

    return (
        // <div className="mt-16 ">
        //     <h1 className="text-center text-2xl p-6">Your all donation requests: </h1>
        //     <div className=" lg:grid lg:grid-cols-3 gap-3">
        //         {
        //             matchingRequests.map((matchingRequest) => <VolunteerDonationRequestCard key={matchingRequest._id} data={matchingRequest}></VolunteerDonationRequestCard>)
        //         }
        //     </div>
        // </div>


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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}
                            {matchingRequests.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.recipientName}</td>
                                    <td>{user.email}</td>


                                   


                                    {/* status part */}
                                    <td>
                                        <button
                                            // onClick={() => handleUserStatusChange(user)}
                                            className={`btn ${user.status === 'active' ? 'btn-accent' : 'btn-danger'}`}
                                        >
                                            {user.status === 'pending' ? 'Pending' : 'InProgress'}
                                        </button>
                                    </td>




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
    );
};

export default AllVolunteerRequests;