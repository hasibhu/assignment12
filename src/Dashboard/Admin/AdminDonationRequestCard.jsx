import React from 'react';

const AdminDonationRequestCard = ({ data }) => {
    console.log(data);
    return (
        <div className='card border border-blue-300'>
            <div>
                <img className='w-36 h-36 text-center' src={data.image} alt="" />
            </div>
            <h1>{ data.hospital}</h1>
        </div>
    );
};

export default AdminDonationRequestCard;