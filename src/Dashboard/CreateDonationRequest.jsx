import { Controller, useForm } from "react-hook-form";
import useLocations from "../Hooks/useLocations";
import UseAuth from "../Hooks/UseAuth";
import {  useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import DatePicker from "react-datepicker";
import SmoothScroll from '../SmoothScrooll/SmoothScroll'
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


// const imageHostingKey = '5cdd12cfea07d698a1fc45c46d4c3e83';
const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;


const CreateDonationRequest = () => {
    const [locations, loading] = useLocations();
    const { register, handleSubmit, reset, formState: { errors }, control }  = useForm();
    const [startDate, setStartDate] = useState(new Date()); // const date =  startDate.toLocaleDateString(); // console.log(startDate.toLocaleDateString());
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazila, setSelectedUpazila] = useState('');
    const axiosPublic = useAxiosPublic();
    const asxioSecure = useAxiosSecure();
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
                requestorName: user?.displayName,
                email: user?.email,
                recipientName: formData.recipientName,
                district: formData.district,
                upazila: formData.upazila,
                bloodGroup: formData.bloodGroup,
                // image: formData.image,
                image: res.data.data.display_url,
                date: startDate.toLocaleDateString(),
                time: formData.time,
                address: formData.fullAddress,
                hospital: formData.hospitalName,
                requestMessage: formData.requestMessage,
            };


            const res2 = await axiosPublic.post('/donationRequests', requestInfo);
            console.log(res2.data);
            if (res2.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        // console.log(data)
        const requestInfo = {
            requestorName: user?.displayName,
            email: user?.email,
            recipientName: formData.recipientName,
            district: formData.district,
            upazila: formData.upazila,
            bloodGroup: formData.bloodGroup,
            image: formData.image,
            date: startDate.toLocaleDateString() ,
            time: formData.time,
            address: formData.fullAddress,
            hospital: formData.hospitalName,
            requestMessage: formData.requestMessage,
        };
        console.log(requestInfo);   
        

        const { data } = await axiosPublic.post('/donationRequests', requestInfo)
        if (data.insertedId) {
            console.log('User added to the database');
            reset();
            Swal.fire({
                title: 'Data has been stored in DB Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            // navigate('/dashboard/donationRequest');

        }
             
    }


    
    return (
        <div className="mb-10">
           
            {/* onSubmit={handleSubmit(onSubmit)}  */}
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[810px] border-4 border-blue-400 p-6 mx-auto">

                <h1 className="text-4xl font-bold text-center pb-8 border-b-4 border-red-600">Create Your Donation Request Here </h1>
                
                {/* <DatePicker className="border" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                <div className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Requestor Name</span>
                        </label>
                        <input type="text" {...register("name")} disabled  defaultValue={user?.displayName}  className="input input-bordered " />
                        {errors.name && <span className='text-red-600'>This field is required</span>}
                    </div>
                
                    {/* email  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} disabled defaultValue={user?.email} className="input input-bordered" />
                        {errors.email && <span className='text-red-600'>This field is required</span>}
                    </div>
                </div>

                <div className="border-2 border-yellow-300 p-6">
                    <h1 className="text-2xl  text-blue-600 text-center border-b border-lime-600 mb-5">Recipient Information</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipient Name</span>
                        </label>
                        <input type="text" {...register("recipientName", { required: true })} className="input input-bordered " />
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
                        <input type="text" {...register("hospitalName", { required: true })} placeholder="like: Dhaka Medical College Hospital" className="input input-bordered " />
                        {errors.hospitalName && <span className='text-red-600'>This field is required</span>}
                    </div>

                    {/* full address  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Address</span>
                        </label>
                        <input type="text" {...register("fullAddress", { required: true })} placeholder="like: Zahir Raihan Rd, Dhaka" className="input input-bordered " />
                        {errors.fullAddress && <span className='text-red-600'>This field is required</span>}
                    </div>

                    {/* donation date  */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Donation Date</span>
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
                                    className="border text-center lg:w-full h-11 rounded-xl"
                                />
                            )}
                        />
                        {errors.date && <span className='text-red-600'>This field is required</span>}
                    </div>


                    {/* Time  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Donation Time</span>
                        </label>
                        <input type="text" {...register("time", { required: true })} placeholder="Time, like 10am or 5pm" className="input input-bordered mb-3" />
                        {errors.time && <span className='text-red-600'>This field is required</span>}
                    </div>

                    {/* photo */}
                    <div>
                            <input type="file"
                                {...register("image", { required: true })}
                                className="file-input w-full max-w-xs" />
                        </div>
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" {...register("image", { required: true })} placeholder="Image Link" className="input input-bordered" />
                        {errors.image && <span className='text-red-600'>This field is required</span>}
                    </div> */}


                    {/* request message  */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Request Message</span>
                        </label>
                        {/* <input type="text" {...register("requestMessage", { required: true })} placeholder="Image Link" className="input input-bordered" /> */}

                        <textarea type="text" {...register("requestMessage", { required: true })} className="input input-bordered textarea " placeholder="Request Message"></textarea>
                        {errors.requestMessage && <span className='text-red-600'>This field is required</span>}
                    </div>

                </div>
              

                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Create Request" />
                </div>
                {/* <div className="flex justify-center items-center">
                            <button type='submit' className="btn bg-orange-400 ">Register</button>
                        </div> */}
            </form>

            <SmoothScroll></SmoothScroll>
        </div>
    );
};

export default CreateDonationRequest;



















// import { Controller, useForm } from "react-hook-form";
// import useLocations from "../Hooks/useLocations";
// import UseAuth from "../Hooks/UseAuth";
// import { useState } from "react";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
// import DatePicker from "react-datepicker";
// import SmoothScroll from '../SmoothScrooll/SmoothScroll'
// import "react-datepicker/dist/react-datepicker.css";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";


// const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;


// const CreateDonationRequest = () => {
//     const [locations, loading] = useLocations();
//     const { register, handleSubmit, reset, formState: { errors }, control } = useForm();
//     const [startDate, setStartDate] = useState(new Date()); // const date =  startDate.toLocaleDateString(); // console.log(startDate.toLocaleDateString());
//     const [selectedDistrict, setSelectedDistrict] = useState('');
//     const [selectedUpazila, setSelectedUpazila] = useState('');
//     const axiosPublic = useAxiosPublic();
//     const { user } = UseAuth();
//     const navigate = useNavigate();


//     const onSubmit = async (formData) => {


//         const imageFile = { image: data.image[0] }
//         const res = await axiosPublic.post(imageHostingApi, imageFile, {
//             headers: {
//                 "Content-Type": 'multipart/form-data'
//             }
//         });
//         console.log(res.data);




//         // console.log(data)
//         const requestInfo = {
//             requestorName: user?.displayName,
//             email: user?.email,
//             recipientName: formData.recipientName,
//             district: formData.district,
//             upazila: formData.upazila,
//             bloodGroup: formData.bloodGroup,
//             image: formData.image,
//             date: startDate.toLocaleDateString(),
//             time: formData.time,
//             address: formData.fullAddress,
//             hospital: formData.hospitalName,
//             requestMessage: formData.requestMessage,
//         };
//         console.log(requestInfo);


//         const { data } = await axiosPublic.post('/donationRequests', requestInfo)
//         if (data.insertedId) {
//             console.log('User added to the database');
//             reset();
//             Swal.fire({
//                 title: 'Data has been stored in DB Successful.',
//                 showClass: {
//                     popup: 'animate__animated animate__fadeInDown'
//                 },
//                 hideClass: {
//                     popup: 'animate__animated animate__fadeOutUp'
//                 }
//             });
//             navigate('/dashboard/donationRequest');

//         }

//     }



//     return (
//         <div className="mb-10">

//             {/* onSubmit={handleSubmit(onSubmit)}  */}
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[810px] border-4 border-blue-400 p-6 mx-auto">

//                 <h1 className="text-4xl font-bold text-center pb-8 border-b-4 border-red-600">Create Your Donation Request Here </h1>

//                 {/* <DatePicker className="border" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
//                 <div className="">
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Requestor Name</span>
//                         </label>
//                         <input type="text" {...register("name")} disabled defaultValue={user?.displayName} className="input input-bordered " />
//                         {errors.name && <span className='text-red-600'>This field is required</span>}
//                     </div>

//                     {/* email  */}
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input type="email" {...register("email")} disabled defaultValue={user?.email} className="input input-bordered" />
//                         {errors.email && <span className='text-red-600'>This field is required</span>}
//                     </div>
//                 </div>

//                 <div className="border-2 border-yellow-300 p-6">
//                     <h1 className="text-2xl  text-blue-600 text-center border-b border-lime-600 mb-5">Recipient Information</h1>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Recipient Name</span>
//                         </label>
//                         <input type="text" {...register("recipientName", { required: true })} className="input input-bordered " />
//                         {errors.recipientName && <span className='text-red-600'>This field is required</span>}
//                     </div>

//                     {/* blood group  */}

//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Blood Group</span>
//                         </label>
//                         <select {...register("bloodGroup", { required: true })} className="input input-bordered">
//                             <option value="">--Select Blood Group--</option>
//                             <option value="A+">A+</option>
//                             <option value="A-">A-</option>
//                             <option value="B+">B+</option>
//                             <option value="B-">B-</option>
//                             <option value="AB+">AB+</option>
//                             <option value="AB-">AB-</option>
//                             <option value="O+">O+</option>
//                             <option value="O-">O-</option>
//                         </select>
//                         {errors.bloodGroup && <span className='text-red-600'>This field is required</span>}
//                     </div>

//                     {/* Location selection */}
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">District</span>
//                         </label>

//                         <select {...register("district", { required: true })} value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="input input-bordered">

//                             <option value="">--Select District--</option>


//                             {locations.map((location, index) => (
//                                 <option key={index} value={location.district}>{location.district}</option>
//                             ))}

//                         </select>

//                         {errors.district && <span className='text-red-600'>This field is required</span>}
//                     </div>

//                     {/* select upsazila part  */}
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Upazila</span>
//                         </label>
//                         <select {...register("upazila", { required: true })} value={selectedUpazila} onChange={(e) => setSelectedUpazila(e.target.value)} className="input input-bordered">

//                             <option value="">--Select Upazila--</option>

//                             {selectedDistrict && locations.find(location => location.district === selectedDistrict)?.upazilas.map((upazila, index) => (
//                                 <option key={index} value={upazila}>{upazila}</option>
//                             ))}
//                         </select>
//                         {errors.upazila && <span className='text-red-600'>This field is required</span>}
//                     </div>


//                     {/* Hospital name  */}
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Hospital Name</span>
//                         </label>
//                         <input type="text" {...register("hospitalName", { required: true })} placeholder="like: Dhaka Medical College Hospital" className="input input-bordered " />
//                         {errors.hospitalName && <span className='text-red-600'>This field is required</span>}
//                     </div>

//                     {/* full address  */}
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Full Address</span>
//                         </label>
//                         <input type="text" {...register("fullAddress", { required: true })} placeholder="like: Zahir Raihan Rd, Dhaka" className="input input-bordered " />
//                         {errors.fullAddress && <span className='text-red-600'>This field is required</span>}
//                     </div>

//                     {/* donation date  */}

//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Donation Date</span>
//                         </label>

//                         <Controller
//                             name="date"
//                             control={control}
//                             defaultValue={startDate}
//                             rules={{ required: true }}
//                             render={({ field }) => (
//                                 <DatePicker
//                                     {...field}
//                                     selected={field.value}
//                                     onChange={(date) => field.onChange(date)}
//                                     className="border text-center lg:w-full h-11 rounded-xl"
//                                 />
//                             )}
//                         />
//                         {errors.date && <span className='text-red-600'>This field is required</span>}
//                     </div>


//                     {/* Time  */}
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Donation Time</span>
//                         </label>
//                         <input type="text" {...register("time", { required: true })} placeholder="Time, like 10am or 5pm" className="input input-bordered" />
//                         {errors.time && <span className='text-red-600'>This field is required</span>}
//                     </div>






//                     {/* photo */}
//                     <div>
//                         <input type="file"
//                             {...register("image", { required: true })}
//                             className="file-input w-full max-w-xs" />
//                     </div>
//                     {/* <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Image</span>
//                         </label>
//                         <input type="text" {...register("image", { required: true })} placeholder="Image Link" className="input input-bordered" />
//                         {errors.image && <span className='text-red-600'>This field is required</span>}
//                     </div> */}


//                     {/* request message  */}

//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Request Message</span>
//                         </label>
//                         {/* <input type="text" {...register("requestMessage", { required: true })} placeholder="Image Link" className="input input-bordered" /> */}

//                         <textarea type="text" {...register("requestMessage", { required: true })} className="input input-bordered textarea " placeholder="Request Message"></textarea>
//                         {errors.requestMessage && <span className='text-red-600'>This field is required</span>}
//                     </div>

//                 </div>


//                 <div className="form-control mt-6">
//                     <input className="btn btn-primary" type="submit" value="Create Request" />
//                 </div>
//                 {/* <div className="flex justify-center items-center">
//                             <button type='submit' className="btn bg-orange-400 ">Register</button>
//                         </div> */}
//             </form>

//             <SmoothScroll></SmoothScroll>
//         </div>
//     );
// };

// export default CreateDonationRequest;
