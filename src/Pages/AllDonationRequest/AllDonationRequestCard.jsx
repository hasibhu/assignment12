import React from 'react';
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import useAllusers from "../../Hooks/useAllUsers";

const AllDonationRequestCard = ({ data, searchQuery }) => {
    const { user } = UseAuth();
    const [users, loading, refetch] = useAllusers();
    const loggedInUserEmail = user.email;
    const currentUser = users.find(user => user.email === loggedInUserEmail);

    const highlightText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
                <mark key={index}>{part}</mark>
            ) : (
                part
            )
        );
    };

    return (
      
            <div className="text-center border border-red-400 rounded-xl p-4">
                <h1>Requested By: {currentUser.role}</h1>
                <img className="w-32 h-32 mx-auto" src={data.image} alt="" />

                <h2>Date: {highlightText(data.date, searchQuery)}</h2>
                <h2>Hospital Name: {highlightText(data.hospital, searchQuery)}</h2>
                <h2>District: {highlightText(data.district, searchQuery)}</h2>
                <h3>Blood Group: {highlightText(data.bloodGroup, searchQuery)}</h3>
                <Link to={`/donationPosts/${data._id}`}><button className='btn btn-accent'>View</button></Link>
            </div>
    
    );
};

export default AllDonationRequestCard;







