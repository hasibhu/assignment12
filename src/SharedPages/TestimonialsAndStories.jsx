// import { BsFillChatQuoteFill } from "react-icons/bs";

// const TestimonialsAndStories = () => {
//     const reviews = [
//         {
//             name: "Mr. Rahman",
//             date: "2024-06-01",
//             story: "Donating blood was a life-changing experience for me. I feel proud to help save lives. The staff was incredibly supportive and made the process seamless."
//         },
//         {
//             name: "M. Kabir",
//             date: "2024-05-15",
//             story: "My son needed a blood transfusion last year. Thanks to the donors, he is now healthy and happy. I'm grateful to all who donate blood and make a difference."
//         },
//         {
//             name: "Mohitosh M.",
//             date: "2024-04-10",
//             story: "I donate blood regularly and encourage everyone to do the same. It's a small act of kindness that has a huge impact on someone's life."
//         }
//     ];

//     return (
//         <section className="testimonials-section py-12 bg-gray-100 border-t-4 border-yellow-500 rounded-xl mt-16">
//             <div className="container mx-auto text-center">
//                 <h2 className="text-3xl font-bold mb-8">Testimonials and Stories</h2>
//                 <BsFillChatQuoteFill className="mx-auto text-9xl text-yellow-400 mb-7" />
//                 <div className="grid grid-cols-3">
//                     {reviews.map((review, index) => (
//                         <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex p-4">
//                             <div className="border border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal shadow-md">
//                                 <div className="mb-8">
//                                     <p className="text-sm text-gray-600 flex items-center mb-4">
//                                         {review.date}
//                                     </p>
//                                     <div className="text-gray-900 font-bold text-xl mb-2">{review.name}</div>
//                                     <p className="text-gray-700 text-base">{review.story}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <button
//                     onClick={() => window.location.href = '/blogs'}
//                     className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300"
//                 >
//                     Visit Our Blog
//                 </button>
//             </div>
//         </section>
//     );
// };

// export default TestimonialsAndStories;


import React, { useEffect, useState } from 'react';
import { BsFillChatQuoteFill } from "react-icons/bs";
import FlipMove from 'react-flip-move';

const TestimonialsAndStories = () => {
    const initialReviews = [
        {
            name: "Mr. Rahman",
            date: "2024-06-01",
            story: "Donating blood was a life-changing experience for me. I feel proud to help save lives. The staff was incredibly supportive and made the process seamless."
        },
        {
            name: "M. Kabir",
            date: "2024-05-15",
            story: "My son needed a blood transfusion last year. Thanks to the donors, he is now healthy and happy. I'm grateful to all who donate blood and make a difference."
        },
        {
            name: "Mohitosh M.",
            date: "2024-04-10",
            story: "I donate blood regularly and encourage everyone to do the same. It's a small act of kindness that has a huge impact on someone's life."
        }
    ];

    const [reviews, setReviews] = useState(initialReviews);

    useEffect(() => {
        const interval = setInterval(() => {
            setReviews((prevReviews) => {
                const [first, ...rest] = prevReviews;
                return [...rest, first];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonials-section py-12 bg-gray-100 border-t-4 border-yellow-500 rounded-xl mt-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Testimonials and Stories</h2>
                <BsFillChatQuoteFill className="mx-auto text-9xl text-yellow-400 mb-7" />
                <FlipMove className="grid grid-cols-3 gap-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex p-4">
                            <div className="border border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal shadow-md">
                                <div className="mb-8">
                                    <p className="text-sm text-gray-600 flex items-center mb-4">
                                        {review.date}
                                    </p>
                                    <div className="text-gray-900 font-bold text-xl mb-2">{review.name}</div>
                                    <p className="text-gray-700 text-base">{review.story}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </FlipMove>
                <button
                    onClick={() => window.location.href = '/blogs'}
                    className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300"
                >
                    Visit Our Blog
                </button>
            </div>
        </section>
    );
};

export default TestimonialsAndStories;
