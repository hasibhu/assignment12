import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UseAuth from '../Hooks/UseAuth';
import { Link } from 'react-router-dom';
import image1 from '../assets/slidePic2.webp'
import image2 from '../assets/slidePic1.webp'
import image3 from '../assets/historyPhoto.webp'
import meetTeam from '../assets/meet.jpeg'
import whatWeDo from '../assets/whatWeDo.png'
import getInvolved from '../assets/getInvolved.png'
import SmoothScroll from '../SmoothScrooll/SmoothScroll';

const AboutUs = () => {
    const { user } = UseAuth();
    useEffect(() => {
        AOS.init({
            duration: 1800,
        });
    }, []);

    return (
        <section className="about-us py-12 bg-gray-100 pt-36">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8 text-center bg-blue-500 h-16 rounded-xl" data-aos="fade-up">About Us</h1>

                <div className="container mx-auto px-4">
                    <div className="mb-12 relative" data-aos="fade-left">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
                        <div className="image-container relative overflow-hidden rounded-lg">
                            <img src={image1} alt="Mission" className="w-[250px] mx-auto h-[250px] rounded-lg" />
                            <div className="gradient-mask absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0) 50%, rgba(350, 350, 350, 1) 70%)' }}></div>
                        </div>
                        <div className="p-4">
                            <p className="text-lg leading-relaxed w-[650px] text-center mx-auto">
                                Our mission at Nexas Blood Donation Club is to save lives by connecting generous blood donors with those in need. We strive to create a community where every individual has the opportunity to contribute to the health and well-being of others through blood donation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="mb-12 relative" data-aos="fade-right">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Our Vision</h2>
                        <div className="image-container relative overflow-hidden rounded-lg">
                            <img src={image2} alt="Mission" className="w-[250px] mx-auto h-[250px] rounded-lg" />
                            <div className="gradient-mask absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to top right, rgba(255, 255, 255, 0) 50%, rgba(350, 350, 350, 1) 80%)' }}></div>
                        </div>
                        <div className="p-4">
                            <p className="text-lg leading-relaxed w-[650px] text-center mx-auto">
                                We envision a world where everyone has access to safe and sufficient blood supply. We aim to raise awareness about the importance of blood donation and to foster a culture of regular, voluntary blood donation among individuals from all walks of life.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="mb-12 relative" data-aos="fade-right">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Our History</h2>
                        <div className="image-container relative overflow-hidden rounded-lg">
                            <img src={image3} alt="Mission" className="w-[250px] mx-auto h-[250px] rounded-lg" />
                            <div className="gradient-mask absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to top left, rgba(255, 255, 255, 0) 50%, rgba(350, 350, 350, 1) 80%)' }}></div>
                        </div>
                        <div className="p-4">
                            <p className="text-lg leading-relaxed w-[650px] text-center mx-auto">
                                We envision a world where everyone has access to safe and sufficient blood supply. We aim to raise awareness about the importance of blood donation and to foster a culture of regular, voluntary blood donation among individuals from all walks of life.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="mb-12 relative" data-aos="fade-left">
                        <h2 className="text-3xl font-semibold mb-4 text-center">What We Do</h2>
                        <div className="image-container relative overflow-hidden rounded-lg">
                            <img src={whatWeDo} alt="Mission" className="w-[250px] mx-auto h-[250px] rounded-lg" />
                            <div className="gradient-mask absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0) 50%, rgba(350, 350, 350, 1) 70%)' }}></div>
                        </div>
                        <div className="p-4">
                            <p className="text-lg leading-relaxed w-[650px] text-center mx-auto">
                                Nexas Blood Donation Club  organizes regular blood donation drives, educational campaigns, and community events to promote the importance of blood donation. We work closely with hospitals, healthcare providers, and other organizations to ensure a steady supply of safe blood for those in need.
                            </p>
                            <ul className="list-disc list-inside w-[650px] text-center mx-auto">
                                <li>Coordinate blood donation drives in various locations</li>
                                <li>Provide educational resources about blood donation</li>
                                <li>Partner with local organizations and businesses</li>
                                <li>Support blood donors through the donation process</li>
                                <li>Advocate for policies that promote blood donation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="mb-12 relative" data-aos="fade-left">
                        <h2 className="text-3xl font-semibold mb-4 text-center">Get Involved</h2>
                        <div className="image-container relative overflow-hidden rounded-lg">
                            <img src={getInvolved} alt="Mission" className="w-[350px] mx-auto h-[250px] rounded-lg" />
                            <div className="gradient-mask absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0) 50%, rgba(350, 350, 350, 1) 100%)' }}></div>
                        </div>
                        <div className="p-4">
                            <p className="text-lg leading-relaxed w-[650px] text-center mx-auto">
                                There are many ways to get involved with Nexas Blood Donation Club. Whether you are a first-time donor, a regular donor, or someone looking to support our cause in other ways, we welcome you to join us.
                            </p>
                            <ul className="list-disc list-inside w-[650px] text-center mx-auto">
                                <li><strong>Donate Blood:</strong> Sign up for one of our upcoming blood donation drives.</li>
                                <li><strong>Volunteer:</strong> Help us organize events and spread awareness.</li>
                                <li><strong>Partner with Us:</strong> Collaborate with us to host blood drives or educational events.</li>
                                <li><strong>Spread the Word:</strong> Share our mission with your friends and family.</li>
                                <li><strong>Donate Funds:</strong> Support our efforts through financial contributions.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-12" data-aos="fade-up">
                   
                    <div className="container mx-auto px-4">
                        <div className="mb-12 relative" data-aos="fade-right">
                            <h2 className="text-3xl font-semibold mb-4 text-center">Meet Our Team</h2>
                            <div className="image-container relative overflow-hidden rounded-lg">
                                <img src={meetTeam} alt="Mission" className="w-[250px] mx-auto h-[250px] rounded-lg" />
                                <div className="gradient-mask absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to top right, rgba(255, 255, 255, 0) 50%, rgba(350, 350, 350, 1) 80%)' }}></div>
                            </div>
                            <div className="p-4">
                                <p className="text-lg leading-relaxed w-[650px] text-center mx-auto">
                                    Our team is comprised of passionate individuals dedicated to making a difference. From our volunteer coordinators to our healthcare partners, every member of Nexas Blood Donation Club plays a vital role in our mission to save lives.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Add team member cards here */}
                        <div className="bg-white p-4 rounded-lg shadow-lg" data-aos="fade-up">
                            <img src="team-member-photo-url" alt="Team Member" className="rounded-full w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-center">Hasibul Islam</h3>
                            <p className="text-center text-gray-600">Founder & CEO</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg" data-aos="fade-up">
                            <img src="team-member-photo-url" alt="Team Member" className="rounded-full w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-center">Madhury Biswas Joya</h3>
                            <p className="text-center text-gray-600">Volunteer Coordinator</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg" data-aos="fade-up">
                            <img src="team-member-photo-url" alt="Team Member" className="rounded-full w-24 h-24 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-center">Emily Johnson</h3>
                            <p className="text-center text-gray-600">Medical Advisor</p>
                        </div>
                    </div>
                </div>

                <div className="text-center" data-aos="fade-up">
                    {
                        user ? <>
                            <Link to='/'>
                                <button className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-700 transition duration-300">
                                    Join Our Mission
                                </button>
                            
                            </Link>
                        </>
                            :
                            <>
                                <Link to='/signup'>
                                    <button className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-700 transition duration-300">
                                        Join Our Mission
                                    </button>

                                </Link>
                            </>
                   }
                </div>
            </div>
            <SmoothScroll></SmoothScroll>
        </section>
    );
};

export default AboutUs;
