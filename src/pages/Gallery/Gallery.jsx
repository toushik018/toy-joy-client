import React, { useEffect, useState } from 'react';
import '../../../src/style/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Gallery = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cards = [
        {
            img: 'https://i.ibb.co/qCVf9gf/istockphoto-458240411-612x612.jpg',
            title: 'Super Speed Racers',
            description: 'Experience the thrill of high-speed racing with our super speed racer cars.',
        },
        {
            img: 'https://i.ibb.co/dLKDHmc/ford-6241843-960-720.jpg',
            title: 'Off-Road Adventures',
            description: 'Conquer any terrain and go on exciting off-road adventures with our rugged off-road cars.',
        },
        {
            img: 'https://i.ibb.co/mBwj4xS/model-car-5086605-960-720.jpg',
            title: 'Classic Car Collection',
            description: 'Discover a timeless collection of classic cars that will take you back in time.',
        },
        {
            img: 'https://i.ibb.co/gwxrJvJ/jeff-gordon-1513350-960-720.jpg',
            title: 'Formula Racing Championship',
            description: 'Participate in the adrenaline-pumping Formula Racing Championship and compete against the best racers in the world.',
        },
        {
            img: 'https://i.ibb.co/p1PKdMJ/istockphoto-528289050-612x612.jpg',
            title: 'Remote Control Cars',
            description: 'Take control of the action with our advanced remote control cars and experience the excitement of high-speed racing in the palm of your hand.',
        },
        {
            img: 'https://i.ibb.co/DVNw5hL/cars-2947087-960-720.jpg',
            title: 'Vintage Car Collection',
            description: 'Explore our exquisite collection of vintage cars and marvel at the craftsmanship and elegance of these timeless beauties.',
        },
        {
            img: 'https://i.ibb.co/9rcy4LZ/model-1364607-960-720.jpg',
            title: 'Interactive Playsets',
            description: 'Engage in imaginative play with our interactive playsets, where kids can create thrilling car adventures and build their own racing world.',
        },
        {
            img: 'https://i.ibb.co/8bS3K2F/capri-ford-oldtimer-automotive.webp',
            title: 'Super Speed Racers',
            description: 'Experience the thrill of high-speed racing with our super speed racer cars.',
            buttonText: 'Shop Now',
        },
        // Add more cards here...
    ];

    const handleCardHover = (index) => {
        setHoveredIndex(index);
    };

    const handleCardLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className='mb-32'>

            <div className="mt-32 text-blue-950">
                <p className='text-center text-xl font-light'>Shop ToyJoy</p>
                <p className='chicle-font text-5xl text-center font-light' data-aos='fade-down'> Popular in Store</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10" data-aos="fade-up">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden"
                        onMouseEnter={() => handleCardHover(index)}
                        onMouseLeave={handleCardLeave}
                    >
                        <img src={card.img} alt={card.title} className={`w-full h-48 object-cover rounded-lg transition-transform duration-300 ease-in-out ${hoveredIndex === index ? 'scale-125' : 'scale-100'}`} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
                            {hoveredIndex === index ? (
                                <>
                                    <p className="text-white text-base text-center px-4">{card.description}</p>
                                    <button className="mt-2 px-4 py-2 button-2">
                                        Shop Now
                                    </button>
                                </>
                            ) : (
                                <h2 className="text-white text-lg font-bold">{card.title}</h2>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Gallery;
