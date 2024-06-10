import { Controller, useForm } from "react-hook-form";
import useLocations from "../../Hooks/useLocations";
import UseAuth from "../../Hooks/UseAuth";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import SmoothScroll from '../../SmoothScrooll/SmoothScroll'
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




// const imageHostingKey = '5cdd12cfea07d698a1fc45c46d4c3e83';
const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;


const PostYourBlog = () => {
    const [locations, loading] = useLocations();
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm();
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazila, setSelectedUpazila] = useState('');
    const axiosPublic = useAxiosPublic();
    const { user } = UseAuth();
    const navigate = useNavigate();




    const onSubmit = async (formData) => {


        const imageFile = { image: formData.image[0] }
        const res = await axiosPublic.post(imageHostingApi, imageFile, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        });
        console.log('image response', res.data);

        if (res.data.success) {


            const requestInfo = {
                name: user?.displayName,
                email: user?.email,
                district: formData.district,
                upazila: formData.upazila,
                image: res.data.data.display_url,
                headLine: formData.headLine,
                story: formData.story,
            };


            const res2 = await axiosPublic.post('/blogs', requestInfo);
            console.log(res2.data);
            if (res2.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/blogs')

            }
        }




    }

    return (
        <div className="mb-10 pt-28  w-[480px]  mx-auto ">

            {/* onSubmit={handleSubmit(onSubmit)}  */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ml-2 rounded-xl border-4 border-blue-400 p-6 ">

                <h1 className="text-4xl font-bold text-center pb-8 border-b-4 border-red-600">Post Your Blog Here </h1>

                {/* <DatePicker className="border" selected={startDate} onChange={(date) => setStartDate(date)} /> */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Requestor Name</span>
                    </label>
                    <input type="text" {...register("name")} disabled defaultValue={user?.displayName} className="input input-bordered " />
                    {errors.name && <span className='text-red-600'>This field is required</span>}
                </div>


                { }
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Headline</span>
                    </label>
                    <input type="text" {...register("headLine", { required: true })} placeholder="like: Zahir Raihan Rd, Dhaka" className="input input-bordered " />
                    {errors.headLine && <span className='text-red-600'>This field is required</span>}
                </div>

                {/*  blog Story  */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Story </span>
                    </label>
                    {/* <input type="text" {...register("requestMessage", { required: true })} placeholder="Image Link" className="input input-bordered" /> */}

                    <textarea type="text" {...register("story", { required: true })} className="input input-bordered textarea h-28" placeholder="Request Message"></textarea>
                    {errors.story && <span className='text-red-600'>This field is required</span>}
                </div>


                {/* Location selection */}
                <h1>Locations: </h1>
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

                {/* select upsazila part  */}
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


                {/* photo */}
                <div>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input w-full max-w-xs" />
                </div>


                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Make Your Blog Post" />
                </div>

            </form>

            <SmoothScroll></SmoothScroll>
        </div>
    );
};

export default PostYourBlog;