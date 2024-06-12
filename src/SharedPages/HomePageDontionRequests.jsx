
import useAllDonationRequests from "../Hooks/useAllDonationRequests";
import HomePageDontionRequestCard from "./HomePageDontionRequestCard";



const HomePageDontionRequests = () => {

    const [donationRequests, loading, refetch] = useAllDonationRequests();
   
    return (
        <div className="mt-16 p-16 border-t-4 border-yellow-500 rounded-xl">
            <h1 className='text-center text-5xl pb-10 '>Recent Donation Requests </h1>
            <div className="lg:grid lg:grid-cols-3 gap-4">
                {
                    donationRequests.slice(0, 6).map((matchingRequest, index) => <HomePageDontionRequestCard key={index + 1} data={matchingRequest}></HomePageDontionRequestCard>)
                }
            </div>
        </div>
    );
};

export default HomePageDontionRequests;