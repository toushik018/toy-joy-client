import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ToysDetails = () => {
    const [toy, setToy] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchToyDetails = async () => {
            try {
                const res= await fetch(`http://localhost:5000/toy/${id}`);
                const data = await res.json();
                setToy(data);
            } catch (error) {
                console.log(error);
            }
        };
        Aos.init({ duration: 800 });

        fetchToyDetails();
    }, [id]);

    if (!toy) {
        return <div>Loading toy details...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h2 className='text-3xl font-fold chicle-font mt-4'>Toy Details </h2>
      <div
        className="max-w-md w-full mt-4 mb-12 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        data-aos="fade-up"
      >
        <img className="w-full h-64 object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110" src={toy.pictureUrl} alt={toy.name} />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{toy.name}</h2>
          <p className="text-gray-600 mb-2"><span className='text-lg font-semibold'>Seller Name:</span> {toy.sellerName}</p>
          <p className="text-gray-600 mb-2"> <span className='text-lg font-semibold'>Seller Email:</span> {toy.sellerEmail}</p>
          <p className="text-gray-600 mb-2"> <span className='text-lg font-semibold'>Price:</span> ${toy.price}</p>
          <p className="text-gray-600 mb-2"> <span className='text-lg font-semibold'>Rating: </span>{toy.rating}</p>
          <p className="text-gray-600 mb-2"> <span className='text-lg font-semibold'>Available Quantity:</span> {toy.quantity}</p>
          <p className="text-gray-600 mb-2"> <span className='text-lg font-semibold'>Description:</span> {toy.description}</p>
        </div>
        <Link
          to="/alltoys"
          className="block bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 text-center transition-colors duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Back to All Toys
        </Link>
      </div>
    </div>
    );
};

export default ToysDetails;
