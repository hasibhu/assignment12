// import { useLoaderData } from "react-router-dom";
// import UseAuth from "../../Hooks/UseAuth";


// const BlogDetails = () => {
//     const { user } = UseAuth();
//     const data = useLoaderData();
//     console.log(data);
//     const { _id, name, district, image, headLine, story } = data;
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default BlogDetails;

import { Link, useLoaderData } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";

const BlogDetails = () => {
    const { user } = UseAuth();
    const data = useLoaderData();
    const { _id, name, district, image, headLine, story } = data;

    return (
        <div className="container mx-auto px-4 py-8 pt-28 bg-sky-200">
            <h1 className="text-3xl text-center font-bold mb-4">Title: {headLine}</h1>
            <div className="flex justify-center items-center mb-4 text-gray-500">
                <FaUser className="mr-2" />
                {name}
            </div>

            <div className="flex justify-center items-center mb-4 text-gray-500">
                <FaMapMarkerAlt className="mr-2" />
                {district}
            </div>


            <img src={image} alt={headLine} className="mb-4 mx-auto rounded-lg" />


            <p className=" mx-auto text-center bg-slate-300 rounded-xl lg:w-[790px] leading-relaxed">
                <span className="font-bold pt-8 ">My Story:</span>
                <br />
                {story}</p>

            <div className="flex justify-center items-center mt-10">
                <Link to='/blogs'><button className="btn btn-primary mt-10">Return Previous Page</button></Link>
            </div>
        </div>
    );
};

export default BlogDetails;
