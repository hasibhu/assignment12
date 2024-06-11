// import SmoothScroll from "../SmoothScrooll/SmoothScroll";
// import Accordian from "./Accordian";
// import BloodDonationScamAlert from "./BloodDonationScamAlert";
// import DonorStatistics from "./DonorStatistics";
// import HeroPart from "./HeroPart";
// import HomepageCarousel from "./HomepageCarousel";
// import NewsletterSignUp from "./NewsletterSignUp";
// import ShareWithFriends from "./ShareWithFriends";
// import Steps from "./Steps";
// import TestimonialsAndStories from "./TestimonialsAndStories";



// const Home = () => {
//     return (
//         <div className="">
           
//             <HomepageCarousel></HomepageCarousel>
//             <HeroPart></HeroPart>
//             <DonorStatistics></DonorStatistics>
//             {/* <Steps></Steps> */}
//             <TestimonialsAndStories></TestimonialsAndStories>
//             <ShareWithFriends></ShareWithFriends>
//             <BloodDonationScamAlert></BloodDonationScamAlert>
//             <Accordian></Accordian>
//             <NewsletterSignUp></NewsletterSignUp>

//           <SmoothScroll></SmoothScroll>
//         </div>
//     );
// };

// export default Home;

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import SmoothScroll from "../SmoothScrooll/SmoothScroll";
import Accordian from "./Accordian";
import BloodDonationScamAlert from "./BloodDonationScamAlert";
import DonorStatistics from "./DonorStatistics";
import HeroPart from "./HeroPart";
import HomepageCarousel from "./HomepageCarousel";
import NewsletterSignUp from "./NewsletterSignUp";
import ShareWithFriends from "./ShareWithFriends";
import Steps from "./Steps";
import TestimonialsAndStories from "./TestimonialsAndStories";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div>
            <div data-aos="fade-up">
                <HomepageCarousel />
            </div>
            <div data-aos="fade-left">
                <HeroPart />
            </div>
            <div data-aos="fade-right">
                <DonorStatistics />
            </div>
            {/* Uncomment the Steps component if you need it */}
            {/* <div data-aos="fade-up">
                <Steps />
            </div> */}
            <div data-aos="fade-left">
                <TestimonialsAndStories />
            </div>
            <div data-aos="fade-up">
                <ShareWithFriends />
            </div>
            <div data-aos="fade-right">
                <BloodDonationScamAlert />
            </div>
            <div data-aos="fade-left">
                <Accordian />
            </div>
            <div data-aos="fade-up">
                <NewsletterSignUp />
            </div>
            <SmoothScroll />
        </div>
    );
};

export default Home;
