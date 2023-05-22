import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/129750-login-orange.json';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../hooks/useTitle';




const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { SignIn, signInWithGoogle } = useContext(AuthContext);
    useTitle('Login')

    const location = useLocation();
    const navigate = useNavigate();
    console.log('Login page', location)
    const from = location.state?.from?.pathname || '/'


    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        SignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login successful!', {
                    position: toast.POSITION.TOP_LEFT,
                });
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                toast.error('Invalid email or password. Please check your credentials.', {
                    position: toast.POSITION.TOP_LEFT,
                });

            })
    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="lg:w-4/5 w-full my-10 mx-auto bg-white flex flex-col justify-center sm:px-2 lg:px-8">
            <h2 className="text-center text-3xl text-blue-950">
                Log in to <span className="chicle-font font-thin text-4xl">ToyJoy</span>
            </h2>
            <div className="sm:flex sm:items-center sm:mx-auto">
                <div className="sm:w-full">
                    <Lottie animationData={loginAnimation} loop autoplay style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg">
                        <form onSubmit={handleSignIn} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                                    />
                                    <span
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                        onClick={toggleShowPassword}
                                    >
                                        {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full mb-4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700"
                                >
                                    Log in
                                </button>
                            </div>
                        </form>
                        <button onClick={handleGoogle}
                            className="flex mb-4 items-center justify-center w-full py-2 px-4 border-2 rounded-md shadow-sm text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="Google Logo"
                                className="h-5 w-5 mr-2"
                            />
                            Sign in with Google
                        </button>
                        <div>
                            New to ToyJoy? <Link className='text-orange-600 font-bold text-md' to='/register'>Sign up</Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
