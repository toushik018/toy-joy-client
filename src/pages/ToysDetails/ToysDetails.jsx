import Aos from 'aos';
import Loader from 'react-loader-spinner';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToysDetails = () => {
  const toy = useLoaderData();




  Aos.init({ duration: 800 });



  if (!toy) {
    return <div className="flex items-center justify-center h-64">
      <Loader type="Rings" color="#4c51bf" height={80} width={80} />
    </div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full lg:p-0 p-2">
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
          <div className='flex justify-normal items-center font-bold mb-4'>
          <Rating style={{ maxWidth: 150 }} value={toy.rating} readOnly />
          <p className="text-gray-600 mb-2 ml-4 mt-2"> <span className='text-lg font-semibold'></span>{toy.rating}</p>
          </div>
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
