import React from 'react';
import logo from '../../../assets/slider/ToyJoy-logos_transparent.png'
import { RiFacebookBoxFill, RiTwitterFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="bg-blue-950 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">

                        <img className="text-lg font-semibold text-white w-28 h-28 rounded-full" src={logo} />
                        <p className="text-gray-300 mt-2">Bringing joy to toy car enthusiasts!</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <ul>
                            <li className="text-gray-300">
                                <svg
                                    className="inline-block mr-2 h-5 w-5 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.243 4.243a8 8 0 1 1 11.314 11.314l-1.415-1.415a6 6 0 1 0-8.486-8.486L4.243 4.243zm9.899 5.657l-2.828 2.829L7.414 9.9l2.828-2.828 4.243 4.242zm-2.829-2.829l2.828-2.829L12.586 4.1 9.758 6.929l2.828 2.828zm-2.828 9.9l-2.829-2.828L9.9 12.586l2.828 2.828-2.828 2.829zm2.828-2.829L12.586 15.9l-2.828-2.828L12.586 9.9l2.828 2.829z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                toyjoy@example.com
                            </li>
                            <li className="text-gray-300">
                                <svg
                                    className="inline-block mr-2 h-5 w-5 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-8a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                123 Toy Street, Dhaka
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white transition duration-300"
                            >
                                <RiFacebookBoxFill size={40}></RiFacebookBoxFill>
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:text-white transition duration-300"
                            >
                                <RiTwitterFill size={40}> </RiTwitterFill>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                    <p className="text-gray-300">
                        &copy; {new Date().getFullYear()} ToyJoy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;