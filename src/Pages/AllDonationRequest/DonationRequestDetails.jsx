import { Link, useLoaderData } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { TbAddressBook } from "react-icons/tb";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";


const DonationRequestDetails = () => {
    const { user } = UseAuth();
    const data = useLoaderData();
    const {_id, requestorName, email, recipientName, district, upazila, bloodGroup, image, date, time, address, hospital, requestMessage, status } = data;
    const axiosPublic = useAxiosPublic();
    const [donationRequests, loading, refetch] = useAllDonationRequests();


    const handleUserStatusChange = async () => {
        const newStatus = status === 'pending' ? 'inProgress' : 'pending';
        try {
            const { data } = await axiosPublic.patch(`/donationRequests/status/${_id}`, { status: newStatus });

            if (data.modifiedCount > 0) {
                window.location.reload(); // to update the data without useEffect!!!!

                Swal.fire({
                    title: "Status Changed!",
                    text: `User status has been changed to ${newStatus}.`,
                    icon: "success",
                    timer: '1500'
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again later.",
                icon: "error"
            });
            console.error("Error changing the status:", error);
        }
    };
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-lg mx-auto pt-28'>

                {/* Job Details */}
                <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
                    <div className='flex items-center justify-center'>
                        <span className='text-xl font-bold  text-red-700 bg-gray-400  rounded-xl '>
                            {/* Deadline: {deadline} */}
                            <h2>Donation Date: { date}</h2>
                        </span>
                       
                    </div>

                    <div>
                        <h1 className=' text-3xl text-center mt-8  font-semibold text-gray-800 '>
                            {/* Position Title: {position_title} */}
                        </h1>
                        {/* <img className="m-auto " src={thumbnail} alt="" /> */}
                        <p className="text-xl text-center  mt-6">Details of the Donation Request</p>
                        <img className="mx-auto" src={image} alt="" />
                        <p className='mt-2 text-lg lg:w-[650px] text-center m-auto text-gray-600 '> Blood Group: {bloodGroup} </p>
                        <p className='mt-6  font-bold text-center text-gray-600 '>
                            Requestor Details:
                        </p>
                        <div className='flex flex-col items-center gap-5'>
                            <div>
                                {/* <p className='mt-2 text-sm  text-gray-600 text-center '>Requested by: {user?.displayName}</p> */}
                                <p className='mt-2 text-sm  text-gray-600 text-center'>Requested for: {recipientName}</p>

                                <p className='mt-2 text-sm  text-gray-600 text-center '>
                                    Email: {email}
                                </p>
                                <p className="text-center ">Time: {time} </p>
                                <p className="text-center ">Hospital Name: {hospital} </p>
                                <p className="text-center ">Address: {address} </p>
                                <p className="text-center ">Location: {upazila}, {district}, </p>
                                {/* <p className="text-center ">Location: {district}</p> */}
                                {/* <p>Number of Positions: {!numberOfVolunteer ? 'Application is Closed' : `${numberOfVolunteer}`} </p> */}
                            </div>

                            <div>
                                {requestMessage}
                            </div>

                            <h1 className="text-2xl">Current Status: <span > {data.status}</span></h1>

                        </div>


                        <div className="flex justify-center items-center mt-5">
                            <button
                                onClick={() => handleUserStatusChange()}
                                className={` btn ${status === 'inProgress' ? 'hidden' : 'btn-primary'}`}
                            >
                                {data.status === 'pending' ? 'Make a Request' : 'InProgress'}
                            </button>
                        </div>
                    </div>
                </div>


                
            </div>




            <div className="flex justify-center items-center mt-10">
                <Link to='/donationRequestPosts'> <button className="btn btn-outline">Go Back</button></Link>
           </div>
       </div>
    );
};

export default DonationRequestDetails;