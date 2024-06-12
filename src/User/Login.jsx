
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import loginImage from '../assets/loginImage.jpeg';
import UseAuth from '../Hooks/UseAuth';
import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaCheckCircle } from 'react-icons/fa';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const [captchaValid, setCaptchaValid] = useState(false);
    const { signIn } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;

        if (!validateCaptcha(captcha)) {
            Swal.fire({
                title: 'Captcha validation failed.',
                icon: 'error',
            });
            return;
        }

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    title: 'Login failed.',
                    text: error.message,
                    icon: 'error',
                });
            });
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setCaptchaValid(true);
            setDisabled(false);
        }
        else {
            setCaptchaValid(false);
            setDisabled(true)
        }
    }

    return (
        <>
            <div className="hero min-h-screen pt-32" style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="hero-content flex-col md:flex-row-reverse  bg-opacity-80 p-10 rounded-lg">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/* Captcha part */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <div className="relative">
                                    <input
                                        onBlur={handleValidateCaptcha}
                                        type="text"
                                        name="captcha"
                                        placeholder="type the captcha above"
                                        className="input input-bordered"
                                    />
                                    {captchaValid && <FaCheckCircle className="absolute right-2 text-3xl top-1/2 transform -translate-y-1/2 text-green-500" />}
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>

                        <p className='p-2 mx-auto text-xl'><small>New Here? <Link to="/signup"><span className='text-purple-500'>Create an account</span></Link> </small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
