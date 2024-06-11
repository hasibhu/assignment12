import React, { useState } from 'react';
import Swal from 'sweetalert2';

const NewsletterSignUp = () => {
    const [email, setEmail] = useState('');

    const handleSignUp = (event) => {
        event.preventDefault();
        if (email) {
            // Here you can add the logic to handle the email sign-up (e.g., send it to your backend)
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully signed up for our newsletter.',
                icon: 'success',
                confirmButtonText: 'Awesome!'
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
        <section className="newsletter-signup py-12 bg-gray-100 mt-16 border-t-4 border-yellow-400 rounded-xl">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Sign Up for Our Newsletter</h2>
                <form onSubmit={handleSignUp} className="max-w-lg mx-auto">
                    <input
                        type="email"
                        className="w-full p-3 border rounded mb-4"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSignUp;
