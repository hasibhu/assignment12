import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import VolunteerDonationRequest from './VolunteerDonationRequest';

const VolunteerHome = () => {
    const { user } = UseAuth();

    return (
        <div>
            <h1 className='text-4xl text-center'> Welcome, {user?.displayName}. </h1>
            

            <VolunteerDonationRequest></VolunteerDonationRequest>
        </div>
    );
};

export default VolunteerHome;