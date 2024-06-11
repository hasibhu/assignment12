import React from 'react';

const BecomeADonor = () => {
    return (
        <div className="container mx-auto lg:w-[1000px] px-4 py-8 pt-28">
            <h1 className="text-3xl font-bold mb-4 text-center">Become a valuable Donor</h1>

            <h2 className="text-2xl font-semibold mb-3">Why Donate Blood?</h2>
            <p className="text-lg leading-relaxed mb-4">
                Blood donation is a simple, safe way to save lives. Each time you donate blood, you can save up to three lives. Donors can be male or female and must be aged 17 to 65. Healthy individuals who meet the criteria are encouraged to donate blood regularly.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Eligibility Criteria</h2>
            <ul className="list-disc list-inside mb-4">
                <li className="text-lg leading-relaxed">Must be between 17 and 65 years of age.</li>
                <li className="text-lg leading-relaxed">Must weigh at least 110 pounds (50 kg).</li>
                <li className="text-lg leading-relaxed">Must be in good general health.</li>
                <li className="text-lg leading-relaxed">Must not have donated blood in the past 8 weeks.</li>
                <li className="text-lg leading-relaxed">Must pass a health screening and mini-physical.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">Donation Process</h2>
            <p className="text-lg leading-relaxed mb-4">
                To become a donor, you will need to complete a donor registration form, pass a health screening, and undergo a mini-physical. The actual donation process takes about 10 minutes, and most people feel fine afterwards. Here's a brief overview of the steps:
            </p>
            <ol className="list-decimal list-inside mb-4">
                <li className="text-lg leading-relaxed">Fill out the registration form with your details.</li>
                <li className="text-lg leading-relaxed">Undergo a health screening and mini-physical to ensure eligibility.</li>
                <li className="text-lg leading-relaxed">Relax in the donation chair while a trained professional collects your blood. This takes about 10 minutes.</li>
                <li className="text-lg leading-relaxed">Enjoy some refreshments and rest for a few minutes after donating.</li>
            </ol>

            <h2 className="text-2xl font-semibold mb-3">After Donation Care</h2>
            <p className="text-lg leading-relaxed mb-4">
                After donating blood, it's important to take care of yourself to ensure a quick recovery. Follow these tips:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li className="text-lg leading-relaxed">Drink plenty of fluids to stay hydrated.</li>
                <li className="text-lg leading-relaxed">Avoid strenuous physical activity for the rest of the day.</li>
                <li className="text-lg leading-relaxed">Eat a healthy meal to replenish your energy levels.</li>
                <li className="text-lg leading-relaxed">If you feel lightheaded or dizzy, sit or lie down until you feel better.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">Join Us in Making a Difference!</h2>
            <p className="text-lg leading-relaxed">
                Blood donation is a powerful way to make a positive impact on the lives of others. Join us in making a difference and helping those in need. Your generosity and support can save lives and create a healthier, happier community.
            </p>
        </div>
    );
};

export default BecomeADonor;
