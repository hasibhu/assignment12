import React, { useState, useEffect } from 'react';
import useAllDonationRequests from "../../Hooks/useAllDonationRequests";
import SmoothScroll from "../../SmoothScrooll/SmoothScroll";
import AllDonationRequestCard from "./AllDonationRequestCard";

const DonationRequestPosts = () => {
    const [donationRequests, loading, refetch] = useAllDonationRequests();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);

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
    };

    const clearSearch = () => {
        setSearchQuery('');
        setSearchResults(donationRequests);
        setSearchPerformed(false);
    };

    return (
        <div className='pt-28'>
            <h1 className="text-center text-2xl font-bold p-10">
                All donation request posts will be here {donationRequests.length}
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

            <div className="grid grid-cols-4 mx-auto gap-3">
                {searchResults.map((donationRequest) => (
                    <AllDonationRequestCard key={donationRequest._id} data={donationRequest} searchQuery={searchQuery} />
                ))}
            </div>

            <SmoothScroll />
        </div>
    );
};

export default DonationRequestPosts;
