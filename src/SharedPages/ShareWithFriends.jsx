import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ShareWithFriends = () => {
    const [email, setEmail] = useState('');

    const handleShare = (event) => {
        event.preventDefault();
        if (email) {
            // Here you can add the logic to handle the email sharing (e.g., send it to your backend)
            Swal.fire({
                title: 'Success!',
                text: 'An email has been sent!! Thank You for extending our network.',
                icon: 'success',
                confirmButtonText: 'Great!'
            });
            setEmail(''); // Clear the input field
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter a valid email address.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        }
    };

    return (
        <section className="share-with-friends py-12 bg-gray-100 mt-10 border-t-4 border-b-4 border-yellow-500 rounded-xl">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Share with Friends and Family</h2>
                <form onSubmit={handleShare} className="max-w-lg mx-auto">
                    <input
                        type="email"
                        className="w-full p-3 border rounded mb-4"
                        placeholder="Enter your friend's email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-500 text-white rounded-full hover:bg-green-700 transition duration-300"
                    >
                        Share
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ShareWithFriends;
