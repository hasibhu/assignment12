import { Link } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import donor from '../assets/becomeDonor.png'
import benefits from '../assets/benefits.png'
import helps from '../assets/helps.png'

const HeroPart = () => {
    const { user } = UseAuth();

    return (
        <div className="mt-28 pt-16 border-t-4 border-yellow-500 rounded-xl">
            <h1 className="text-4xl font-bold text-center mb-12">Join Our Mission to Save Lives</h1>
            <div className="flex flex-row justify-around">
                <div className="card w-[290px] bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-sm font-bold">Become a Donor</h2>
                        <p className="text-xs">Learn how you can make a difference by becoming a blood donor and saving lives.</p>
                    </div>
                    <figure><img className="w-52 mx-auto pb-5 rounded-xl" src={donor} alt="Shoes" /></figure>
                    <div className="mx-auto mb-3">
                        <Link to='/become-a-donor'><button className="btn btn-accent btn-xs">Learn More</button></Link>
                    </div>
                </div>
                <div className="card w-[290px] bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-sm font-bold">Benefits of Blood Donation</h2>
                        <p className="text-xs">Discover the numerous benefits that blood donation offers to donors.</p>
                    </div>
                    <figure><img className="w-52 mx-auto pb-5 rounded-xl" src={benefits} alt="Shoes" /></figure>
                    <div className="mx-auto mb-3">
                        <Link to='/benefits-of-blood-donation'><button className="btn btn-accent btn-xs">Learn More</button></Link>
                    </div>
                </div>
                <div className="card w-[290px] bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-sm font-bold">How Your Donation Helps</h2>
                        <p className="text-xs">Find out how your blood donation can help those in need and save lives.</p>
                    </div>
                    <figure><img className="w-52 mx-auto pb-5 rounded-xl" src={helps} alt="Shoes" /></figure>
                    <div className="mx-auto mb-3">
                        <Link to='/how-your-donation-helps'><button className="btn btn-accent btn-xs">Learn More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPart;
