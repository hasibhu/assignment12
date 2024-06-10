
import accordianPhoto from '../assets/accordianPhoto.png'


const Accordian = () => {
    return (
        <div>
            
            <h1 className='text-center text-3xl font-bold p-10'>Frequently Asked Questions About Blood Donation</h1>

            <div className='lg:flex'>
                <div className='w-1/3'>
                    <img src={accordianPhoto} alt="" />
                </div>

                <div className='w-3/4'>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Who can donate blood?
                        </div>
                        <div className="collapse-content">
                            <p>Most healthy adults can donate blood. Generally, donors must be at least 17 years old (or 16 with parental consent in some areas), weigh at least 110 pounds, and be in good health. Specific eligibility criteria may vary based on the type of donation and local regulations. Donors are screened for health conditions and risk factors that could affect the safety of the blood supply. This includes recent travel to certain countries, medication use, and overall health status. It’s important for potential donors to provide accurate information to ensure their blood is safe for transfusion.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Why is donating blood important?
                        </div>
                        <div className="collapse-content">
                            <p>Donating blood is crucial because it helps save lives. Blood donations are used in a variety of medical situations, including surgeries, cancer treatments, chronic illnesses, and traumatic injuries. Every donation can potentially save up to three lives. Blood is needed every two seconds, and there is a constant demand for different blood types. By donating blood, you are providing a vital resource that hospitals and clinics rely on to treat patients. Additionally, donating blood is a simple and quick process that can have a significant impact on the health and well-being of others in your community.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How often can I donate blood?
                        </div>
                        <div className="collapse-content">
                            <p>The frequency with which you can donate blood depends on the type of donation. Whole blood donations can typically be made every 56 days, or about eight weeks. Platelet donations can be made more frequently, up to 24 times a year, because platelets are replenished quickly by the body. Double red cell donations, which involve collecting twice the amount of red blood cells as a whole blood donation, can be made every 112 days. It's important to follow these guidelines to ensure your body has enough time to recover and replenish the donated blood components.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What should I do before donating blood?
                        </div>
                        <div className="collapse-content">
                            <p>Before donating blood, it’s important to prepare to ensure a successful donation. Start by eating a healthy meal and staying hydrated. Avoid fatty foods, as they can affect the blood tests performed on your donation. Drink plenty of water before the donation to stay hydrated. Get a good night’s sleep the night before. Bring a list of any medications you are taking and be ready to provide personal identification. Wearing a shirt with sleeves that can be easily rolled up is also helpful. Following these steps can help make your donation experience smooth and efficient.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What happens during the blood donation process?
                        </div>
                        <div className="collapse-content">
                            <p>The blood donation process typically takes about an hour from start to finish, with the actual blood draw taking around 10 minutes. When you arrive, you will register and provide some basic information. Next, a staff member will conduct a brief health screening, including checking your blood pressure, pulse, and hemoglobin levels. Once you pass the screening, you will be seated comfortably while a sterile needle is used to collect about a pint of blood. After the donation, you will rest for a few minutes and enjoy refreshments to help replenish your fluids and energy</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What should I do after donating blood?
                        </div>
                        <div className="collapse-content">
                            <p>
                                After donating blood, it’s important to take care of yourself to help your body recover. Drink plenty of fluids, such as water or juice, to stay hydrated. Avoid strenuous physical activities for the rest of the day. Eat a healthy meal to restore your energy levels. If you feel lightheaded or dizzy, sit or lie down until you feel better. Keep the bandage on your arm for a few hours and avoid heavy lifting with that arm. If you experience any unusual symptoms or prolonged discomfort, contact the blood donation center for advice.</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Accordian;


