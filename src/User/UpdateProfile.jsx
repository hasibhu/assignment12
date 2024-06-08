
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import UseAuth from '../Hooks/UseAuth';
import useLocations from '../Hooks/useLocations';
import useAllusers from '../Hooks/useAllUsers';



const UpdateProfile = () => {
    // const { createUser, updateUserProfile } = UseAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazila, setSelectedUpazila] = useState('');
    const axiosPublic = useAxiosPublic();
    const {user,  updateUserProfile } = UseAuth();

    const [locations, locationLoading] = useLocations();
    const [users, loading, refetch] = useAllusers();

    const currentUser = users.find(u => u.email === user.email);
    console.log(currentUser);

    const onSubmit = (data) => {

                updateUserProfile(data.name, data.image)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            district: data.district,
                            upazila: data.upazila,
                            bloodGroup: data.bloodGroup,
                            image: data.image
                        };
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('User added to the database');
                                    reset();

                                }
                            })
                    })
            
    }



    return (
        <div className="hero min-h-screen mx-auto bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse mt-36">
                <div className="text-center w-[690px] lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>This field is required</span>}
                        </div>

                        {/* blood group  */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Blood Group</span>
                            </label>
                            <select {...register("bloodGroup", { required: true })} className="input input-bordered">
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
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>

                        {/* password  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                            })} placeholder="Password" className="input input-bordered" />
                            {errors.password && <span className='text-red-600'>This field is required</span>}
                        </div>

                        {/* photo */}
                        {/* <div>
                            <input type="file"
                                {...register("image", { required: true })}
                                className="file-input w-full max-w-xs" />
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" {...register("image", { required: true })} placeholder="Image Link" className="input input-bordered" />
                            {errors.image && <span className='text-red-600'>This field is required</span>}
                        </div>


                        {/* Other form controls */}

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                        {/* <div className="flex justify-center items-center">
                            <button type='submit' className="btn bg-orange-400 ">Register</button>
                        </div> */}
                    </form>



                    <div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <Link to='/login'><button>Login</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
