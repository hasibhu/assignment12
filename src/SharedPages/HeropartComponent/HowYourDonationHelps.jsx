import React from 'react';

const HowYourDonationHelps = () => {
    return (
        <div className="container mx-auto px-4 py-8 lg:w-[1000px] pt-28">
            <h1 className="text-3xl font-bold mb-4 text-center">How Your Donation Helps</h1>

            <h2 className="text-2xl font-semibold mb-3">Critical Role in Medical Treatments</h2>
            <p className="text-lg leading-relaxed mb-4">
                Your blood donation plays a crucial role in saving lives. Donated blood is used in a variety of medical treatments, including:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li className="text-lg leading-relaxed">Surgeries: Ensuring patients have enough blood during and after surgical procedures.</li>
                <li className="text-lg leading-relaxed">Trauma care: Providing necessary blood for accident and trauma victims.</li>
                <li className="text-lg leading-relaxed">Cancer treatment: Supporting cancer patients who require blood transfusions.</li>
                <li className="text-lg leading-relaxed">Chronic illnesses: Managing conditions like anemia and sickle cell disease.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">Components of Your Blood Donation</h2>
            <p className="text-lg leading-relaxed mb-4">
                Each blood donation can provide vital blood components such as:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li className="text-lg leading-relaxed">Red cells: Used to treat patients with severe anemia or blood loss.</li>
                <li className="text-lg leading-relaxed">Plasma: Helps patients with clotting disorders and severe burns.</li>
                <li className="text-lg leading-relaxed">Platelets: Crucial for cancer patients and others undergoing intensive treatments.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">Supporting Hospitals and Clinics</h2>
            <p className="text-lg leading-relaxed mb-4">
                Hospitals and clinics rely on donated blood to ensure they have a steady supply for emergencies and routine treatments. Your donation helps to:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li className="text-lg leading-relaxed">Maintain an adequate blood supply for unforeseen emergencies.</li>
                <li className="text-lg leading-relaxed">Support patients undergoing life-saving surgeries.</li>
                <li className="text-lg leading-relaxed">Provide necessary blood components for various medical treatments.</li>
                <li className="text-lg leading-relaxed">Ensure that patients with chronic illnesses receive ongoing care.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">Making a Real Difference</h2>
            <p className="text-lg leading-relaxed mb-4">
                By donating blood, you are directly contributing to the health and recovery of patients in need. Your donation is a lifeline that makes a real difference. Every donation is a vital contribution to saving lives and improving the health of individuals in your community.
            </p>
            <p className="text-lg leading-relaxed">
                Join us in our mission to ensure that everyone who needs blood gets it. Your act of kindness and generosity can help save lives and bring hope to those in need.
            </p>
        </div>
    );
};

export default HowYourDonationHelps;
