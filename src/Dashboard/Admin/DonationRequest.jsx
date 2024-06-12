import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";
import { Link } from "react-router-dom";


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

export default DonationRequest;