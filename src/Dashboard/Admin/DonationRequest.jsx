import { FaTrashAlt } from "react-icons/fa";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";


const DonationRequest = () => {

    const [donationRequests, loading, refetch] = useAllDonationRequests();

    return (
        <div>
            <h1 className="text-center">Summary of all post will be here {donationRequests.length}</h1>
            

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
                                {donationRequests.map((user, index) => (
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.recipientName}</td>
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

export default DonationRequest;