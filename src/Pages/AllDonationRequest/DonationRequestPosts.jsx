// import React, { useState, useEffect } from 'react';
// import useAllDonationRequests from "../../Hooks/useAllDonationRequests";
// import SmoothScroll from "../../SmoothScrooll/SmoothScroll";
// import AllDonationRequestCard from "./AllDonationRequestCard";

// const DonationRequestPosts = () => {
//     const [donationRequests, loading, refetch] = useAllDonationRequests();
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [searchPerformed, setSearchPerformed] = useState(false);

//     useEffect(() => {
//         // Initially set searchResults to all donation requests
//         setSearchResults(donationRequests);
//     }, [donationRequests, refetch]);

//     const handleInputChange = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     const handleSearch = () => {
//         const results = donationRequests.filter((request) =>
//             request.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             request.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             request.bloodGroup.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setSearchResults(results);
//         setSearchPerformed(true);
//     };

//     const clearSearch = () => {
//         setSearchQuery('');
//         setSearchResults(donationRequests);
//         setSearchPerformed(false);
//     };

//     return (
//         <div className='pt-28'>
//             <h1 className="text-center text-2xl font-bold p-10">
//                 All donation request posts will be here {donationRequests.length}
//             </h1>

//             <div className="flex mb-4 justify-center">
//                 <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={handleInputChange}
//                     placeholder="Search..."
//                     className="p-2 border border-gray-300 rounded-xl"
//                 />
//                 <button
//                     onClick={handleSearch}
//                     className="ml-2 p-2 bg-blue-500 text-white rounded-xl"
//                 >
//                     Search
//                 </button>
//                 {searchQuery && (
//                     <button onClick={clearSearch} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl ml-2">
//                         Clear
//                     </button>
//                 )}
//             </div>

//             {searchPerformed && (
//                 <div className="text-center text-lg font-semibold mb-4">
//                     {searchResults.length === 0
//                         ? 'There is no match with your search'
//                         : `Total ${searchResults.length} found`}
//                 </div>
//             )}

//             <div className="grid lg:grid-cols-4 grid-cols-2 mx-auto gap-3 p-4">
//                 {searchResults.map((donationRequest) => (
//                     <AllDonationRequestCard key={donationRequest._id} data={donationRequest} searchQuery={searchQuery} />
//                 ))}
//             </div>

//             <SmoothScroll />
//         </div>
//     );
// };

// export default DonationRequestPosts;



import React, { useState, useEffect } from 'react';
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";
import SmoothScroll from "../../SmoothScrooll/SmoothScroll";
import AllDonationRequestCard from "./AllDonationRequestCard";
import { Helmet } from 'react-helmet-async';

const DonationRequestPosts = () => {
    const [donationRequests, loading, refetch] = useAllDonationRequests();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [visibleCount, setVisibleCount] = useState(8);

    useEffect(() => {
        // Initially set searchResults to all donation requests
        setSearchResults(donationRequests);
    }, [donationRequests, refetch]);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        const results = donationRequests.filter((request) =>
            request.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
            request.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
            request.bloodGroup.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
        setSearchPerformed(true);
        setVisibleCount(8); // Reset visible count when a new search is performed
    };

    const clearSearch = () => {
        setSearchQuery('');
        setSearchResults(donationRequests);
        setSearchPerformed(false);
        setVisibleCount(8); // Reset visible count when search is cleared
    };

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 4);
    };



    return (
        <div className='pt-28'>
            <Helmet>
                <title>Nexas | Donation Request </title>
            </Helmet>
            <h1 className="text-center text-2xl font-bold p-10">
                Total {donationRequests.length} Donation Requests Are Available.
            </h1>
            

            <div className="flex mb-4 justify-center">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    className="p-2 border border-gray-300 rounded-xl"
                />
                <button
                    onClick={handleSearch}
                    className="ml-2 p-2 bg-blue-500 text-white rounded-xl"
                >
                    Search
                </button>
                {searchQuery && (
                    <button onClick={clearSearch} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl ml-2">
                        Clear
                    </button>
                )}
            </div>

            {searchPerformed && (
                <div className="text-center text-lg font-semibold mb-4">
                    {searchResults.length === 0
                        ? 'There is no match with your search'
                        : `Total ${searchResults.length} found`}
                </div>
            )}

            {
                loading ? <>
                    {/* <h1 className='flex justify-center items-center text-4xl'> <span className="loading loading-spinner text-4xl text-error"></span> </h1> */}
                    <h1 className='flex justify-center items-center text-red-600 text-4xl'> <span className="loading loading-spinner loading-lg"></span> </h1>
                    
                </>
                    :
                    <>
                        <div className="grid lg:grid-cols-4 grid-cols-2 mx-auto gap-3 p-4">
                            {searchResults.slice(0, visibleCount).map((donationRequest) => (
                                <AllDonationRequestCard key={donationRequest._id} data={donationRequest} searchQuery={searchQuery} />
                            ))}
                        </div>
                    
                    </>
            }
            

            {visibleCount < searchResults.length && (
                <div className="flex justify-center mt-4">
                    <button onClick={loadMore} className="p-2 bg-green-500 text-white rounded-xl">
                        See More
                    </button>
                </div>
            )}

            <SmoothScroll />
        </div>
    );
};

export default DonationRequestPosts;



