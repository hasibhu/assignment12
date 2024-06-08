import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { name, district, image, headLine, story } = blog;

    return (
        <div className="card w-60 bg-base-100 shadow-xl">
            <figure><img src={image} alt={headLine} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {headLine}
                    <div className="badge badge-secondary">{name}</div>
                </h2>
                <p>{story}</p>
                <div className="card-actions justify-start">
                    {/* <div className="badge badge-outline">Read More..</div> */}
                    <Link><button className="badge badge-outline bg-blue-400"> Read More..</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
