import bloodScam from '../assets/bloodScam.webp'

const BloodDonationScamAlert = () => {
    return (
        <div className=' mt-8 border-t-4 rounded-xl border-yellow-500'>
            <h1 className='text-center lg:text-4xl text-red-600 font-bold text-2xl pt-10'>Beaware of Financial Scamming</h1>
            <div className='lg:flex flex-row-reverse justify-center items-center gap-6'>

                <div>
                    <img src={bloodScam} alt="" />
                </div>


                <div className="p-6 bg-red-100 text-red-900 rounded-lg shadow-lg max-w-2xl mx-auto mt-6">
                    <h2 className="text-2xl text-center font-bold mb-4">Beware of Financial Scams Related to Blood Donation</h2>
                    <p className="mb-2">
                        Blood donation is a noble cause, but unfortunately, scammers often take advantage of people's goodwill. Here are some common scams and tips to protect yourself:
                    </p>

                    <h3 className="text-xl font-semibold mt-4">Common Scams</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>Fake Donation Requests:</strong> Scammers may create fake donation campaigns claiming to need blood or money for medical emergencies.
                        </li>
                        <li>
                            <strong>Phishing Emails:</strong> You may receive emails that appear to be from legitimate blood donation organizations asking for personal and financial information.
                        </li>
                        <li>
                            <strong>Phone Scams:</strong> Scammers may call, posing as representatives from blood banks or charities, asking for immediate donations or financial help.
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4">Tips to Protect Yourself</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>
                            <strong>Verify the Source:</strong> Always verify the authenticity of the organization before making any donations. Check their official website or contact them directly.
                        </li>
                        <li>
                            <strong>Do Not Share Personal Information:</strong> Avoid sharing your personal or financial information over email or phone unless you are sure about the recipient's identity.
                        </li>
                        <li>
                            <strong>Use Trusted Platforms:</strong> Use only trusted and well-known platforms for making donations. Avoid clicking on links in unsolicited emails or messages.
                        </li>
                        <li>
                            <strong>Report Scams:</strong> If you encounter a scam, report it to local authorities or relevant regulatory bodies to help protect others.
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4">Contact Information</h3>
                    <p>If you have any doubts or need assistance, contact your local blood donation organization or charity directly using their official contact information.</p>
                </div>
            </div>
       </div>
    );
};

export default BloodDonationScamAlert;
