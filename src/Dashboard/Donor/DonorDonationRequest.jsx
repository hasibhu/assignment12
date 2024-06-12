import UseAuth from "../../Hooks/UseAuth";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";
import DonorDonationRequestCard from "./DonorDonationRequestCard";


const DonorDonationRequest = () => {
    
    const [donationRequests, loading, refetch] = useAllDonationRequests();
    const { user } = UseAuth();

    const loggedInUserEmail = user?.email;

    const matchingRequests = donationRequests?.filter(donationRequest => donationRequest?.email === loggedInUserEmail);
    console.log(matchingRequests);

    return (
        <div className="mt-16 ">
            <h1 className="text-center text-2xl p-6">Your latest 3 donation requests: </h1>
            <div className=" lg:grid lg:grid-cols-3 gap-3">
                {
                    matchingRequests.slice(-3).map((matchingRequest) => <DonorDonationRequestCard key={matchingRequest._id} data={matchingRequest}></DonorDonationRequestCard>)
                }
          </div>
        </div>
    );
};

export default DonorDonationRequest;