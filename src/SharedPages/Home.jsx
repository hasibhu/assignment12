import  { useEffect } from "react";
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
import TestimonialsAndStories from "./TestimonialsAndStories";
import HomePageDontionRequests from "./HomePageDontionRequests";

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
                <HomePageDontionRequests />
            </div>
            <div data-aos="fade-left">
                <DonorStatistics />
            </div>
           
            {/* Uncomment the Steps component if you need it */}
            {/* <div data-aos="fade-up">
                <Steps />
            </div> */}
            <div data-aos="fade-right">
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
