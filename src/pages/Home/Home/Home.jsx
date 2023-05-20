import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import car1 from '../../../assets/slider/car1.jpg';
import car2 from '../../../assets/slider/car2.jpg';
import car3 from '../../../assets/slider/car3.jpg';
import Gallery from '../../Gallery/Gallery';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';
import { Link } from 'react-router-dom';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <>
            <div className="w-full lg:w-4/5 p-2 mx-auto">
                <Slider {...settings}>
                    <div className="relative">
                        <img src={car1} alt="Slide 1" className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-md" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">Welcome to ToyJoy</h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-2 mb-6">Discover a world of fun and imagination with our wide range of toys.</p>
                            <Link to="/" className="button text-xs sm:text-sm md:text-base lg:text-lg mt-4">Shop Now</Link>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={car2} alt="Slide 2" className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-md" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">Engaging Educational Toys</h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-2 mb-6">Ignite your child's curiosity and learning with our educational toys.</p>
                             <Link to="/" className="button text-xs sm:text-sm md:text-base lg:text-lg mt-4">Education Toys</Link>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={car3} alt="Slide 3" className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-md" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">Unleash the Fun with Outdoor Toys</h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-2 mb-6">Let your kids play and enjoy the outdoors with our exciting range of outdoor toys.</p>
                            <Link to="/" className="button text-xs sm:text-sm md:text-base lg:text-lg mt-4">Outdoor toys</Link>
                        </div>
                    </div>
                </Slider>
                <Gallery />
                <ShopByCategory></ShopByCategory>
            </div>
        </>
    );
};

export default Home;
