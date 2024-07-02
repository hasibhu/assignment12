import  { useState } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { IoMdArrowDropdown } from "react-icons/io";

const ManageDonationRequestDonor = () => {
    const [donationRequests, loading, refetch] = useAllDonationRequests();
    const { user } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const loggedInUserEmail = user?.email;
    const matchingRequests = donationRequests?.filter(donationRequest => donationRequest?.email === loggedInUserEmail);

    const handleDelete = async id => {
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
                    refetch();
                } catch (err) {
                    // handle error
                }
            }
        });
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
        setDropdownVisible(false);
    };

    const filteredRequests = matchingRequests?.filter(donationRequest => {
        if (selectedStatus === 'all') return true;
        return donationRequest.status === selectedStatus;
    });

    return (
        <div>
            <h1 className="text-center">Summary of all post will be here {filteredRequests?.length}</h1>

            <div className="overflow-x-auto relative p-8">
                <table className="table table-zebra w-full">
                    <thead className='bg-lime-200'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th style={{ cursor: 'pointer', position: 'relative' }}>
                                <div onClick={toggleDropdown} className="flex items-center justify-center">
                                    Status <IoMdArrowDropdown className='text-2xl ' />
                                </div>
                                {dropdownVisible && (
                                    <div className='lg:ml-52 lg:mt-16 mt-96' style={{
                                        position: 'fixed',
                                        background: 'white',
                                        zIndex: 1000,
                                        top: '50px',  // Adjust as needed to position it correctly relative to the header
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                        padding: '10px',
                                        borderRadius: '5px'
                                    }}>
                                        <div className='h-8 w-24 bg-orange-300 border border-blue-400 rounded text-center cursor-pointer' onClick={() => handleStatusChange('pending')}>Pending</div>
                                        <div className='h-8 w-24 bg-orange-300 border border-blue-400 rounded text-center cursor-pointer m-1' onClick={() => handleStatusChange('inProgress')}>InProgress</div>
                                        <div className='h-8 w-24 bg-orange-300 border border-blue-400 rounded text-center cursor-pointer m-1' onClick={() => handleStatusChange('done')}>Done</div>
                                        <div className='h-8 w-24 bg-orange-300 border border-blue-400 rounded text-center cursor-pointer m-1' onClick={() => handleStatusChange('canceled')}>Canceled</div>
                                    </div>
                                )}
                            </th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {filteredRequests?.map((data, index) => (
                            <tr  key={data._id}>
                                <th>{index + 1}</th>
                                <td>{data.recipientName}</td>
                                <td>{data.email}</td>
                                <td className='text-center'>
                                    <h1 className={` ${data.status === 'active' ? 'btn-accent' : 'btn-danger'}`}>
                                        {typeof data.status === 'string' ? data.status.charAt(0).toUpperCase() + data.status.slice(1) : 'Unknown'}
                                    </h1>
                                </td>
                                <td className="text-center">
                                    <Link to={`/dashboard/donationRequests/update/${data?._id}`}>
                                        <button className="btn btn-ghost btn-lg">
                                            <FaEdit className="text-green-600" />
                                        </button>
                                    </Link>
                                    <button onClick={() => handleDelete(data?._id)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600" />
                                    </button>
                                </td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDonationRequestDonor;
