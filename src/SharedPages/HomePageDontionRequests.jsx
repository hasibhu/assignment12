
import useAllDonationRequests from "../Hooks/useAllDonationRequests";
import HomePageDontionRequestCard from "./HomePageDontionRequestCard";



const HomePageDontionRequests = () => {

    const [donationRequests, loading, refetch] = useAllDonationRequests();
   
    return (
        <div className="mt-16">
            <h1 className='text-center'>3 recent donation requests will be shown here those are made by this donor </h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    donationRequests.slice(-6).map((matchingRequest, index) => <HomePageDontionRequestCard key={index + 1} data={matchingRequest}></HomePageDontionRequestCard>)
                }
            </div>
        </div>
    );
};

export default HomePageDontionRequests;