
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import UseAuth from '../Hooks/UseAuth';
import useLocations from '../Hooks/useLocations';
import useAllusers from '../Hooks/useAllUsers';


// const imageHostingKey = '5cdd12cfea07d698a1fc45c46d4c3e83';
const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const UpdateProfile = () => {
    // const { createUser, updateUserProfile } = UseAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazila, setSelectedUpazila] = useState('');
    const axiosPublic = useAxiosPublic();
    const {user,  updateUserProfile } = UseAuth();
    const [locations, locationLoading] = useLocations();
    const [users, loading, refetch] = useAllusers();


    const currentUser = users?.find(u => u?.email === user?.email);
    // const loggedInUserEmail = currentUser?.email;
    // console.log(loggedInUserEmail);

    const { name, email, district, upazila, bloodGroup, image } = currentUser || {};
    
    // console.log(name, email, district, upazila, bloodGroup, image);

    // const onSubmit = async(data) => {
    //     const imageFile = { image: data.image[0] }
    //     const res = await axiosPublic.post(imageHostingApi, imageFile, {
    //         headers: {
    //             "Content-Type": 'multipart/form-data'
    //         }
    //     });
    //     console.log('image response', res.data);


    //     if (res.data) {
    //         updateUserProfile(data.name, data.image)
    //             .then(() => {
    //                 const userInfo = {
    //                     name: data.name,
    //                     district: data.district,
    //                     upazila: data.upazila,
    //                     bloodGroup: data.bloodGroup,
    //                     image: data.image
    //                 };
    //                 // database part
    //                 axiosPublic.post(`/users/${user.email}`, userInfo)
    //                     .then(res => {
    //                         if (res.data.insertedId) {
    //                             console.log('User data has been update in the database');
    //                             reset();

    //                         }
    //                     })
    //             })
    //     }

                
            
    // }
    
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('image', data.image[0]);

            const res = await axiosPublic.post(imageHostingApi, formData, {
                headers: { "Content-Type": 'multipart/form-data' }
            });

            if (res.data.success) {
                const imageUrl = res.data.data.url;
                await updateUserProfile(data.name, imageUrl);

                const userInfo = {
                    name: data.name,
                    district: data.district,
                    upazila: data.upazila,
                    bloodGroup: data.bloodGroup,
                    image: imageUrl
                };

                const updateRes = await axiosPublic.patch(`/users/${user.email}`, userInfo);
                if (updateRes.data.modifiedCount) {
                    console.log('User data has been updated in the database');
                    reset();
                    refetch(); // Manually refetch the users to update the local state
                }
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };



    return (
        <div className="hero min-h-screen mx-auto bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse mt-36">
                <div className="text-center w-[690px] lg:text-left">
                    <h1 className="text-5xl font-bold">Update Your Profile now!</h1>
                    <p className="py-6">An User can change only a specific data in his/her profile.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name")} defaultValue={name}  className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>This field is required</span>}
                        </div>

                        {/* blood group  */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Blood Group</span>
                            </label>
                            <select {...register("bloodGroup")} defaultValue={bloodGroup} className="input input-bordered">
                                <option value="">--Select Blood Group--</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                            {errors.bloodGroup && <span className='text-red-600'>This field is required</span>}
                        </div>

                        {/* Other form controls */}

                        {/* Location selection */}
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


                        {/* email  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} defaultValue={email} disabled className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>

                       
                        {/* photo */}
                        <div>
                            <input type="file"
                                {...register("image", { required: true })}
                                className="file-input w-full max-w-xs" />
                        </div>
                        

                        {/* Other form controls */}

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Update Your Profile" />
                        </div>
                        {/* <div className="flex justify-center items-center">
                            <button type='submit' className="btn bg-orange-400 ">Register</button>
                        </div> */}
                    </form>



                  

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
