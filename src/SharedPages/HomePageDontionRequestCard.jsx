import { Link } from "react-router-dom";


const HomePageDontionRequestCard = ({ data }) => {
    console.log(data);
    return (
        
        <Link to='/donationRequestPosts'>
            <div className='card border border-blue-300'>
            <div>
                <h2>Donation Date: {data.date}</h2>
                <h2></h2>
            </div>
            <div>
                <img className='w-36 h-36 mx-auto' src={data.image} alt="" />
            </div>
            <h1 className="text-center">Hospital Name: {data.hospital}</h1>
        </div></Link>
    );
};

export default HomePageDontionRequestCard;