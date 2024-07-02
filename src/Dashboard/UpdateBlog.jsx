// import React, { useState } from 'react';
// import { useLoaderData, useNavigate } from 'react-router-dom';
// import UseAuth from '../Hooks/UseAuth';
// import useAxiosPublic from '../Hooks/useAxiosPublic';
// import { useForm } from 'react-hook-form';
// import useLocations from '../Hooks/useLocations';
// import Swal from 'sweetalert2';
// import SmoothScroll from '../SmoothScrooll/SmoothScroll';


// // const imageHostingKey = '5cdd12cfea07d698a1fc45c46d4c3e83';
// const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

// const UpdateBlog = () => {
//     const blogData = useLoaderData();
//     const [locations, loading] = useLocations();
//     const { register, handleSubmit, reset, formState: { errors }, control } = useForm();
//     const [selectedDistrict, setSelectedDistrict] = useState('');
//     const [selectedUpazila, setSelectedUpazila] = useState('');
//     const axiosPublic = useAxiosPublic();
//     const { user } = UseAuth();
//     const navigate = useNavigate();


//     const onSubmit = async (formData) => {
//         const imageFile = { image: formData.image[0] }
//         const res = await axiosPublic.post(imageHostingApi, imageFile, {
//             headers: {
//                 "Content-Type": 'multipart/form-data'
//             }
//         });
//         console.log('image response', res.data);

//         if (res.data.success) {
//             const requestInfo = {
//                 name: user?.displayName,
//                 email: user?.email,
//                 district: formData.district,
//                 upazila: formData.upazila,
//                 image: res.data.data.display_url,
//                 headLine: formData.headLine,
//                 story: formData.story,
//                 status: 'UnPublished'
//             };

//             const res2 = await axiosPublic.post('/blogsUpdate', requestInfo);
//             console.log(res2.data);
//             if (res2.data.insertedId) {
//                 Swal.fire({
//                     position: "center",
//                     icon: "success",
//                     title: "Your work has been saved",
//                     showConfirmButton: false,
//                     timer: 1500
//                 });

//                 navigate('/blogs')

//             }
//         }

//     }



//     return (
//         <div className="mb-10 pt-28  w-[480px]  mx-auto ">

//             {/* onSubmit={handleSubmit(onSubmit)}  */}
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body ml-2 rounded-xl border-4 border-blue-400 p-6 ">

//                 <h1 className="text-4xl font-bold text-center pb-8 border-b-4 border-red-600">Update Your Blog Here </h1>

//                 {/* <DatePicker className="border" selected={startDate} onChange={(date) => setStartDate(date)} /> */}

//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Bloger Name</span>
//                     </label>
//                     <input type="text" {...register("name")} disabled defaultValue={user?.displayName} className="input input-bordered " />
//                     {errors.name && <span className='text-red-600'>This field is required</span>}
//                 </div>


//                 { }
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Headline</span>
//                     </label>
//                     <input type="text" {...register("headLine", { required: true })} defaultValue={blogData.headLine}  placeholder="like: Zahir Raihan Rd, Dhaka" className="input input-bordered " />
//                     {errors.headLine && <span className='text-red-600'>This field is required</span>}
//                 </div>

//                 {/*  blog Story  */}

//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Story </span>
//                     </label>
//                     {/* <input type="text" {...register("requestMessage", { required: true })} placeholder="Image Link" className="input input-bordered" /> */}

//                     <textarea type="text" {...register("story", { required: true })} defaultValue={blogData?.story} className="input input-bordered textarea h-28" ></textarea>
//                     {errors.story && <span className='text-red-600'>This field is required</span>}
//                 </div>


//                 {/* Location selection */}
//                 <h1>Locations: </h1>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">District</span>
//                     </label>

//                     <select {...register("district", { required: true })} value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="input input-bordered">

//                         <option value="">--Select District--</option>


//                         {locations.map((location, index) => (
//                             <option key={index} value={location.district}>{location.district}</option>
//                         ))}

//                     </select>

//                     {errors.district && <span className='text-red-600'>This field is required</span>}
//                 </div>

//                 {/* select upsazila part  */}
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Upazila</span>
//                     </label>
//                     <select {...register("upazila", { required: true })} value={selectedUpazila} onChange={(e) => setSelectedUpazila(e.target.value)} className="input input-bordered">

//                         <option value="">--Select Upazila--</option>

//                         {selectedDistrict && locations.find(location => location.district === selectedDistrict)?.upazilas.map((upazila, index) => (
//                             <option key={index} value={upazila}>{upazila}</option>
//                         ))}
//                     </select>
//                     {errors.upazila && <span className='text-red-600'>This field is required</span>}
//                 </div>


//                 {/* photo */}
//                 <div>
//                     <input type="file"
//                         {...register("image", { required: true })}
//                         className="file-input w-full max-w-xs" />
//                 </div>


//                 <div className="form-control mt-6">
//                     <input className="btn btn-primary" type="submit" value="Update Now" />
//                 </div>

//             </form>

//             <SmoothScroll></SmoothScroll>
//         </div>
//     );
// };

// export default UpdateBlog;




import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import useLocations from '../Hooks/useLocations';
import Swal from 'sweetalert2';
import SmoothScroll from '../SmoothScrooll/SmoothScroll';

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const UpdateBlog = () => {
    const blogData = useLoaderData();
    const [locations, loading] = useLocations();
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();
    const [selectedDistrict, setSelectedDistrict] = useState(blogData.district || '');
    const [selectedUpazila, setSelectedUpazila] = useState(blogData.upazila || '');
    const axiosPublic = useAxiosPublic();
    const { user } = UseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (blogData) {
            setValue("headLine", blogData.headLine);
            setValue("story", blogData.story);
            setValue("district", blogData.district);
            setValue("upazila", blogData.upazila);
        }
    }, [blogData, setValue]);

    const onSubmit = async (formData) => {
        const imageFile = formData.image[0];
        let imageUrl = blogData.image;

        if (imageFile) {
            const imageData = new FormData();
            imageData.append('image', imageFile);
            const res = await axiosPublic.post(imageHostingApi, imageData);
            if (res.data.success) {
                imageUrl = res.data.data.display_url;
            }
        }

        const requestInfo = {
            name: user?.displayName,
            email: user?.email,
            district: formData.district,
            upazila: formData.upazila,
            image: imageUrl,
            headLine: formData.headLine,
            story: formData.story,
            status: 'UnPublished',
            _id: blogData._id  // Assuming the blogData contains an _id field
        };

        const res2 = await axiosPublic.put('/blogsUpdate', requestInfo);
        if (res2.data.modifiedCount > 0) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your work has been updated",
                showConfirmButton: false,
                timer: 1500
            });
            // navigate('/blogs');
            navigate('/dashboard/contentManagement');
        }
    };

    return (
        <div className="mb-10 pt-28 w-[480px] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ml-2 rounded-xl border-4 border-blue-400 p-6">
                <h1 className="text-4xl font-bold text-center pb-8 border-b-4 border-red-600">Update Your Blog Here</h1>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Blogger Name</span>
                    </label>
                    <input type="text" {...register("name")} disabled defaultValue={user?.displayName} className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Headline</span>
                    </label>
                    <input type="text" {...register("headLine", { required: true })} className="input input-bordered" />
                    {errors.headLine && <span className='text-red-600'>This field is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Story</span>
                    </label>
                    <textarea {...register("story", { required: true })} className="input input-bordered textarea h-28"></textarea>
                    {errors.story && <span className='text-red-600'>This field is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">District</span>
                    </label>
                    <select {...register("district", { required: true })} value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="input input-bordered">
                        <option value="">--Select District--</option>
                        {locations.map((location, index) => (
                            <option key={index} value={location.district}>{location.district}</option>
                        ))}
                    </select>
                    {errors.district && <span className='text-red-600'>This field is required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Upazila</span>
                    </label>
                    <select {...register("upazila", { required: true })} value={selectedUpazila} onChange={(e) => setSelectedUpazila(e.target.value)} className="input input-bordered">
                        <option value="">--Select Upazila--</option>
                        {selectedDistrict && locations.find(location => location.district === selectedDistrict)?.upazilas.map((upazila, index) => (
                            <option key={index} value={upazila}>{upazila}</option>
                        ))}
                    </select>
                    {errors.upazila && <span className='text-red-600'>This field is required</span>}
                </div>

                <div>
                    <input type="file" {...register("image")} className="file-input w-full max-w-xs" />
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Update Now" />
                </div>
            </form>

            <SmoothScroll />
        </div>
    );
};

export default UpdateBlog;

