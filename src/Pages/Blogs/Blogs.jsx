
import { Link } from "react-router-dom";
import BlogPosts from "./BlogPosts";
import UseAuth from "../../Hooks/UseAuth";

const Blogs = () => {
    
    const { user } = UseAuth();

    return (
        <div>
            
            <div>
                <BlogPosts></BlogPosts>
            </div>


            <div className="divider"></div>

          
            <div className="flex justify-center items-center ">
                {
                    user ? <Link to='/postBlog'><button className="btn btn-primary">Post Your Blog</button></Link>
                        :
                        ''
                }
            </div>
       </div>
    );
};

export default Blogs;
