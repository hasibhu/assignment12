

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
            <h1 className='text-center'>3 recent donation requests will be shown here those are made by this donor </h1>
            <div className="grid grid-cols-3">
                {
                    matchingRequests.slice(0, 3).map((matchingRequest, index) => <AdminDonationRequestCard key={index + 1} data={matchingRequest}></AdminDonationRequestCard>)
                }
           </div>
        </div>
    );
};

export default AdminDonationRequest;