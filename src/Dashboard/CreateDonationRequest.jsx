import { Controller, useForm } from "react-hook-form";
import useLocations from "../Hooks/useLocations";
import UseAuth from "../Hooks/UseAuth";
import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateDonationRequest = () => {
    const [locations, loading] = useLocations();
    const { register, handleSubmit, reset, formState: { errors }, control }  = useForm();
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazila, setSelectedUpazila] = useState('');
    const axiosPublic = useAxiosPublic();
    const { user } = UseAuth();
    const [startDate, setStartDate] = useState(new Date()); // const date =  startDate.toLocaleDateString();
   
    // console.log(startDate.toLocaleDateString());

    const onSubmit = (data) => {
        // console.log(data)
        const userInfo = {
            name: data.name,
            email: data.email,
            district: data.district,
            upazila: data.upazila,
            bloodGroup: data.bloodGroup,
            image: data.image
        };
                        
                        
          
    }

    return (
        <div>
            <h1>Donation request form will be here </h1>
            {/* onSubmit={handleSubmit(onSubmit)}  */}
            <form className="card-body">
                
                {/* <DatePicker className="border" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Requestor Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} disabled  defaultValue={user?.displayName}  className="input input-bordered " />
                        {errors.name && <span className='text-red-600'>This field is required</span>}
                </div>
                
                {/* email  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} disabled defaultValue={user?.email} className="input input-bordered" />
                    {errors.email && <span className='text-red-600'>This field is required</span>}
                </div>


                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipient Name</span>
                        </label>
                    <input type="text" {...register("recipientName", { required: true })}   className="input input-bordered " />
                    {errors.recipientName && <span className='text-red-600'>This field is required</span>}
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
                

                    {/* Hospital name  */}
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Hospital Name</span>
                        </label>
                    <input type="text" {...register("hospitalName", { required: true })} placeholder="Road Name" className="input input-bordered " />
                    {errors.hospitalName && <span className='text-red-600'>This field is required</span>}
                </div>
                
                    {/* full address  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Address</span>
                    </label>
                    <input type="text" {...register("fullAddress", { required: true })} placeholder="Road Name" className="input input-bordered " />
                    {errors.fullAddress && <span className='text-red-600'>This field is required</span>}
                </div>
                
                    {/* donation date  */}
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>

                    <Controller
                        name="date"
                        control={control}
                        defaultValue={startDate} 
                        rules={{ required: true }}
                        render={({ field }) => (
                            <DatePicker
                                {...field}
                                selected={field.value}
                                onChange={(date) => field.onChange(date)}
                                className="border text-center"
                            />
                        )}
                    />
                    {errors.date && <span className='text-red-600'>This field is required</span>}
                </div>
                

                {/* Time  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Time</span>
                    </label>
                    <input type="text" {...register("time", { required: true })} placeholder="Time, like 10am or 5pm" className="input input-bordered" />
                    {errors.time && <span className='text-red-600'>This field is required</span>}
                </div>
                    
                
                {/* donation status  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Donation Status</span>
                    </label>
                    <input type="text" {...register("status", { required: true })} defaultValue={'Pending'} disabled className="input input-bordered" />
                    {errors.email && <span className='text-red-600'>This field is required</span>}
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
                    <input className="btn btn-primary" type="submit" value="Create Request" />
                </div>
                {/* <div className="flex justify-center items-center">
                            <button type='submit' className="btn bg-orange-400 ">Register</button>
                        </div> */}
            </form>

            
        </div>
    );
};

export default CreateDonationRequest;
