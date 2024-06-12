

import  { useState } from 'react';
import useBlogs from '../../Hooks/useBlogs';
import BlogCard from './BlogCard';
import SmoothScroll from '../../SmoothScrooll/SmoothScroll';

const BlogPosts = () => {
    const [blogs, loading, refetch] = useBlogs();
    const [visibleBlogs, setVisibleBlogs] = useState(4);

    const handleSeeMore = () => {
        setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 3);
    };

    return (
        <div className='pt-28'>
            <h1 className='text-4xl text-center p-10 border-t-4 border-yellow-500 rounded-xl '>Discover Our Blog</h1>
            




            {
                loading ? <>
                    {/* <h1 className='flex justify-center items-center text-4xl'> <span className="loading loading-spinner text-4xl text-error"></span> </h1> */}
                    <h1 className='flex justify-center items-center text-red-600 text-4xl'> <span className="loading loading-spinner loading-lg"></span> </h1>

                </>
                    :
                    <>
                        <div className='grid grid-cols-4 gap-4'>
                            {
                                blogs?.slice(0, visibleBlogs).map(blog => (
                                    <BlogCard key={blog._id} blog={blog} />
                                ))
                            }
                        </div>

                    </>
            }


            {visibleBlogs < blogs.length && (
                <div className="flex justify-center items-center mt-4">
                    <button onClick={handleSeeMore} className="btn btn-primary">
                        See More
                    </button>
                </div>
            )}
            <SmoothScroll></SmoothScroll>
        </div>
    );
};

export default BlogPosts;
