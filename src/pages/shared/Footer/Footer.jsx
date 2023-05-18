import React from 'react';
import logo from '../../../assets/default.png'

function Footer() {
    return (
        <footer className="bg-blue-500 text-white px-10 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center mb-4 md:mb-0">
                    <img src={logo} alt="ToyJoy logo" className="h-24 rounded-md w-auto mb-2"/>
                    <h1 className="font-bold text-2xl text-yellow-400">ToyJoy</h1>
                </div>
                <div className="flex flex-col items-center">
                    <p className="mb-2 text-gray-100">1234 Street Name, City, State, ZIP</p>
                    <p className="mb-2 text-gray-100">Email: contact@toyjoy.com</p>
                    <p className="text-gray-100">Phone: (123) 456-7890</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-white text-xl font-bold mb-2">Follow us:</p>
                    <div className="flex space-x-3">
                        <a href="#" className="text-white hover:text-yellow-400">
                            <i className="fab fa-facebook-square text-2xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-yellow-400">
                            <i className="fab fa-twitter-square text-2xl"></i>
                        </a>
                        <a href="#" className="text-white hover:text-yellow-400">
                            <i className="fab fa-instagram-square text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
            <p className="text-center mt-10 text-sm text-gray-100">© {new Date().getFullYear()} ToyJoy. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
