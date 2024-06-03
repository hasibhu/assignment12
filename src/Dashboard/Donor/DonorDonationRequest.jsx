import UseAuth from "../../Hooks/UseAuth";
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";


const DonorDonationRequest = () => {
    
    const [donationRequests, loading, refetch] = useAllDonationRequests();
    const { user } = UseAuth();



    const loggedInUserEmail = user?.email;



    const matchingRequests = donationRequests?.filter(donationRequest => donationRequest?.email === loggedInUserEmail);
    console.log(matchingRequests);

    return (
        <div className="mt-16">
            <h1 className='text-center'>3 recent donation requests will be shown here those are made by this donor </h1>
        </div>
    );
};

export default DonorDonationRequest;