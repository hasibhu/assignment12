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
    return (
        <div className="">
           
            <HomepageCarousel></HomepageCarousel>
            <HeroPart></HeroPart>
            <DonorStatistics></DonorStatistics>
            {/* <Steps></Steps> */}
            <TestimonialsAndStories></TestimonialsAndStories>
            <ShareWithFriends></ShareWithFriends>
            <BloodDonationScamAlert></BloodDonationScamAlert>
            <Accordian></Accordian>
            <NewsletterSignUp></NewsletterSignUp>

          <SmoothScroll></SmoothScroll>
        </div>
    );
};

export default Home;