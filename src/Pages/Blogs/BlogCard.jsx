import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { _id, name, district, image, headLine, story } = blog;

    return (
        <div className="card w-60 h-80 bg-base-100 shadow-xl">
            <figure><img className='w-36 h-36 rounded-full' src={image} alt={headLine} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {headLine}
                    <div className="badge badge-secondary">{name}</div>
                </h2>

                <p>{story.slice(0, 26)}</p>
                <div className="card-actions justify-start">
                    {/* <div className="badge badge-outline">Read More..</div> */}
                    {/* <Link><button className="badge badge-outline bg-blue-400"> Read More..</button></Link> */}
                    <Link to={`/blogs/${blog?._id}`}><button className='btn btn-accent'>View</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
