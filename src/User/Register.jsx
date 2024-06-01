import { useEffect, } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
// import useAuth from '../AuthProvider/UseAuth';
// import useAxiosPublic from '../Hooks/useAxiosPublic';
import SocialLogin from './SocialLogin';


const Register = () => {
    // const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    // const axiosPublic = useAxiosPublic();

    // const onSubmit = (data) => {
    //     console.log(data)
    //     createUser(data.email, data.password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);
    //             // updateUserProfile(data.name, data.photoURL)
    //             //     .then(() => {
    //                     // const userInfo = {
    //                     //     name: data.name,
    //                     //     email: data.email,
    //                     //     photo: data.photoURL
    //                     // };
    //                     // axiosPublic.post('/users', userInfo)
    //                     //     .then(res => {
    //                     //         if (res.data.insertedId) {
    //                     //             console.log('User added to the database');
    //                     //             reset();

    //                     //         }
    //                     //     })
    //                 })
    //         })
    // }


    // const captchaRef = useRef(null);
    // const [disabled, setDisabled] = useState(true);
    // const { signIn } = useAuth();

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])


    // cpatcha check
    // const handleValidateCaptcha = e => {
    //     e.preventDefault();
    //     const user_captcha_value = captchaRef.current.value;
    //     console.log(user_captcha_value);

    //     if (validateCaptcha(user_captcha_value) == true) {
    //         alert('Captcha Matched');
    //         setDisabled(false);
    //     }

    //     else {
    //         alert('Captcha Does Not Match');
    //     }
    // }

    // console.log(watch('name'));

    return (
        <div className="hero min-h-screen mx-auto bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse mt-36">
                <div className="text-center w-[690px] lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    {/* form part  */}
                    {/* onSubmit={handleSubmit(onSubmit)} */}
                    <form  className="card-body">
                        {/* name part  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="text"
                                {...register("name", { required: true })}
                                name="name"
                                placeholder="Name"
                                className="input input-bordered" />

                            {errors.name && <span className='text-red-600'>This field is required</span>}
                        </div>

                        {/* email part  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />

                            {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                // pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])$/
                            })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span className='text-red-600'>This field is required</span>}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {/* <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>

                            <input ref={captchaRef} type="text" name="captcha" placeholder="Type the above captcha text here" className="input input-bordered" required />

                            <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-6'>Validate Captcha</button>
                        </div> */}



                        <div className="form-control mt-6">
                            {/* disabled={disabled} */}
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>

                    <Link to='/login'><button>Login</button></Link>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;