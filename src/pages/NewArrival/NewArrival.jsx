import React from 'react';

const toyData = [
  {
    id: 1,
    name: 'Super Speed Racer',
    description: 'Experience the thrill of high-speed racing with this sleek and powerful car. Equipped with advanced features for ultimate performance.',
    price: 39.99,
    image: 'https://dummyimage.com/400x300/4B5563/FFFFFF&text=Super+Speed+Racer',
  },
  {
    id: 2,
    name: 'Off-Road Adventure Monster',
    description: 'Conquer any terrain with this rugged off-road monster truck. Its sturdy build and large wheels ensure a thrilling and unstoppable adventure.',
    price: 49.99,
    image: 'https://dummyimage.com/400x300/63B556/FFFFFF&text=Off-Road+Monster',
  },
  {
    id: 3,
    name: 'Convertible Cruiser',
    description: 'Enjoy the open road with this stylish convertible cruiser. Its sleek design and smooth handling make it perfect for a relaxing drive.',
    price: 29.99,
    image: 'https://dummyimage.com/400x300/B55663/FFFFFF&text=Convertible+Cruiser',
  },
  {
    id: 4,
    name: 'Turbo Boost Sports Car',
    description: 'Feel the adrenaline rush with this turbo-charged sports car. With its aerodynamic design and lightning-fast acceleration its built for speed.',
    price: 59.99,
    image: 'https://dummyimage.com/400x300/5563B5/FFFFFF&text=Turbo+Boost',
  },
];

const NewArrival = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">New Arrivals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {toyData.map((toy) => (
          <div key={toy.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img src={toy.image} alt={toy.name} className="w-full h-full object-cover transform transition-transform hover:scale-105" />
              <div className="absolute top-2 right-2 bg-white text-gray-500 text-xs p-1 rounded-md">New</div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{toy.name}</h2>
              <p className="text-gray-500 text-sm mb-4">{toy.description}</p>
              <div className="flex items-center justify-between flex-grow">
                <p className="text-green-500 font-semibold">${toy.price}</p>
                <button className="bg-blue-500 text-white rounded-md px-4 py-2">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
