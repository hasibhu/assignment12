

import UseAuth from "../../Hooks/UseAuth";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";
import VolunteerDonationRequestCard from "./VolunteerDonationRequestCard";


const VolunteerDonationRequest = () => {

    const [donationRequests, loading, refetch] = useAllDonationRequests();
    const { user } = UseAuth();

    const loggedInUserEmail = user?.email;

    const matchingRequests = donationRequests?.filter(donationRequest => donationRequest?.email === loggedInUserEmail);
    console.log(matchingRequests);

    return (
        <div className="mt-16 ">
            <h1 className="text-center text-2xl p-6">Your latest donation requests: </h1>
           

            {
                matchingRequests < 1 ? <> <h1 className="text-center text-2xl pt-28 text-red-600">You haven't make any request.</h1></> 
                    :
                    <>
                        <div className=" lg:grid lg:grid-cols-3 gap-3">
                            {
                                matchingRequests.slice(-3).map((matchingRequest) => <VolunteerDonationRequestCard key={matchingRequest._id} data={matchingRequest}></VolunteerDonationRequestCard>)
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default VolunteerDonationRequest;