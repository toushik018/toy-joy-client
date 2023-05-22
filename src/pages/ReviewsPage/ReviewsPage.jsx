import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const ReviewsPage = () => {
  // Dummy data for reviews
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://i.ibb.co/KFkyJNn/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg",
      rating: 4.5,
      review: "The toys from ToyJoy are amazing! My kids absolutely love them. Great quality and hours of entertainment.",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://i.ibb.co/gZjGwnb/nicolas-horn-MTZTGv-Ds-HFY-unsplash.jpg",
      rating: 5,
      review: "I highly recommend ToyJoy. Their toys are not only fun but also educational. My children have learned so much while playing with them.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatar: "https://i.ibb.co/jg6r5bH/christopher-campbell-r-DEOVt-E7v-Os-unsplash.jpg",
      rating: 3.5,
      review: "The toys are okay, but I expected better quality for the price. My kids enjoy them, but they tend to break easily.",
    },
  ];

  return (
    <div className="w-full mx-auto py-8 mt-14">
      <h2 className="text-4xl font-semibold mb-8 chicle-font text-center">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
                className="w-full h-32 object-cover rounded-t-lg"
                src={review.avatar}
                alt="Avatar"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 rounded-t-lg"></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <h3 className="text-lg font-semibold text-white">{review.name}</h3>
              </div>
            </div>
            <div className="p-4">
            <Rating style={{ maxWidth: 150 }} value={review.rating} readOnly />
              
              <p className="text-gray-800 mt-4">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
