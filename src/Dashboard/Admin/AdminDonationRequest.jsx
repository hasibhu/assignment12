

import UseAuth from "../../Hooks/UseAuth";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";
import AdminDonationRequestCard from "./AdminDonationRequestCard";


const AdminDonationRequest = () => {

    const [donationRequests, loading, refetch] = useAllDonationRequests();
    const { user } = UseAuth();

    const loggedInUserEmail = user?.email;

    const matchingRequests = donationRequests?.filter(donationRequest => donationRequest?.email === loggedInUserEmail);
    console.log(matchingRequests);

    return (
        <div className="mt-16">
            <h1 className='text-center text-2xl font-bold p-6'>Your 3 recent donation requests. </h1>
            <div className="grid grid-cols-3">
                {
                    matchingRequests.slice(0, 3).map((matchingRequest, index) => <AdminDonationRequestCard key={index + 1} data={matchingRequest}></AdminDonationRequestCard>)
                }
           </div>
        </div>
    );
};

export default AdminDonationRequest;