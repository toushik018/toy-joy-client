import React from 'react';

const toyData = [
  {
    id: 1,
    name: 'Super Speed Racer',
    description: 'Experience the thrill of high-speed racing with this sleek and powerful car. Equipped with advanced features for ultimate performance.',
    price: 39.99,
    image: 'https://i.ibb.co/sQ86c85/luis-domenech-JCio3nqgm9g-unsplash.jpg',
  },
  {
    id: 2,
    name: 'Off-Road Adventure Monster',
    description: 'Conquer any terrain with this rugged off-road monster truck. Its sturdy build and large wheels ensure a thrilling and unstoppable adventure.',
    price: 49.99,
    image: 'https://i.ibb.co/Tws7L16/pexels-bhupendra-singh-3358482.jpg',
  },
  {
    id: 3,
    name: 'Convertible Cruiser',
    description: 'Enjoy the open road with this stylish convertible cruiser. Its sleek design and smooth handling make it perfect for a relaxing drive.',
    price: 29.99,
    image: 'https://i.ibb.co/4Z2hbhM/gabriel-vasiliu-Niu-BAomdr-T4-unsplash.jpg',
  },
  {
    id: 4,
    name: 'Turbo Boost Sports Car',
    description: 'Feel the adrenaline rush with this turbo-charged sports car. With its aerodynamic design and lightning-fast acceleration its built for speed.',
    price: 59.99,
    image: 'https://i.ibb.co/p2wJwVw/pexels-mike-bird-97353.jpg',
  },
];

const NewArrival = () => {
  return (
    <div className="w-full mx-auto px-4 py-8">
      <h1 className="text-4xl font-semibold mb-8 chicle-font">New Arrivals at ToyJoy</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {toyData.map((toy) => (
          <div key={toy.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img src={toy.image} alt={toy.name} className="w-full h-full object-cover transform transition-transform hover:scale-105" />
              <div className="absolute top-2 right-2 bg-purple-700 text-white text-xs p-1 rounded-md">New</div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{toy.name}</h2>
              <p className="text-gray-500 text-sm mb-4">{toy.description}</p>
              <div className="flex items-center justify-between flex-grow">
                <p className="text-green-500 font-semibold">${toy.price}</p>
                <button className="tab_button text-white rounded-md px-4 py-2">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
