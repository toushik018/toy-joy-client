import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useNavigate } from 'react-router-dom';
import Aos from "aos";
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import kids from '../../assets/slider/slide1.jpg'
import kids2 from '../../assets/slider/slide2.jpg'
import kids3 from '../../assets/slider/slide3.jpg'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ShopByCategory = () => {
  const [sportsCars, setSportsCars] = useState([]);
  const [regularCars, setRegularCars] = useState([]);
  const [offRoadCars, setOffRoadCars] = useState([]);

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
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

  useEffect(() => {
    fetch("https://toy-joy-server-toushik018.vercel.app/alltoys")
      .then((response) => response.json())
      .then((data) => {
        // Filter the toys based on their sub-category
        const sportsCarsData = data.filter((toy) => toy.subCategory === "sports car");
        const regularCarsData = data.filter((toy) => toy.subCategory === "regular car");
        const offRoadCarsData = data.filter((toy) => toy.subCategory === "off-road car");

        setSportsCars(sportsCarsData);
        setRegularCars(regularCarsData);
        setOffRoadCars(offRoadCarsData);

        Aos.init({ duration: 800 });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full mx-auto mt-8">


      <div className="relative sm:h-56 mb-8 lg:mb-4">
        <Slider {...settings}>
          <div className="relative h-full">
            <img src={kids} alt="Image 1" className="w-full h-56 object-cover rounded-lg" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-lg"></div>
            <h2 className="text-5xl chicle-font sm:text-5xl text-center font-light text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
              Shop By Category
            </h2>
          </div>
          <div className="relative h-full">
            <img src={kids2} alt="Image 2" className="w-full h-56 object-cover  rounded-lg" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-lg"></div>
            <h2 className="text-5xl chicle-font sm:text-5xl text-center font-light text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
              Shop By Category
            </h2>
          </div>
          <div className="relative h-full">
            <img src={kids3} alt="Image 3" className="w-full h-56 object-cover rounded-lg" />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-lg"></div>
            <h2 className="text-5xl chicle-font sm:text-5xl text-center font-light text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
              Shop By Category
            </h2>
          </div>
        </Slider>
      </div>


      <Tabs>
        <TabList className="flex border-none mx-auto mb-4">
          <Tab
            className="py-2 px-4 text-gray-600 font-bold border-2 mx-1 border-gray-800 hover:text-purple-800 cursor-pointer"
            selectedClassName="bg-purple-500 text-white"
          >
            <span className="chicle-font font-thin text-2xl">Sports Cars</span>
          </Tab>
          <Tab
            className="py-2 px-4 text-gray-600 font-bold mx-1 border-2 border-gray-800 hover:text-purple-800 cursor-pointer"
            selectedClassName="bg-purple-500 text-white"
          >
            <span className="chicle-font font-thin text-2xl">Regular Cars</span>
          </Tab>
          <Tab
            className="py-2 px-4 text-gray-600 font-bold mx-1 border-gray-800 border-2 hover:text-purple-800 cursor-pointer"
            selectedClassName="bg-purple-500 text-white"
          >
            <span className="chicle-font font-thin text-2xl">Off-road Cars</span>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Sports Cars</h2>
            <p className="text-gray-600">List of sports cars:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {sportsCars.map((car, index) => (
                <div key={car._id}
                  className="bg-white rounded-lg hover:shadow-purple-300 shadow-xl transition duration-300 hover:scale-125"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100}
                >

                

                  <LazyLoadImage effect="blur"  className="w-full h-64 object-cover object-center rounded-t-lg" src={car.pictureUrl} alt={car.name}  /> 
                  

                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
                    <p className="text-gray-600 mb-2 font-semibold">${car.price}</p>
                    <div className="flex justify-normal items-center font-bold mb-4">
                    <Rating style={{ maxWidth: 150 }} value={car.rating} readOnly />
                    <p className="text-purple-600 mb-2 ml-4 mt-2"> {car.rating}</p>
                    </div>
                    <button
                      className="tab_button text-white font-semibold py-2 px-4 rounded"
                      onClick={() => navigate(`/toy/${car._id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Regular Cars</h2>
            <p className="text-gray-600">List of regular cars:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {regularCars.map((car, index) => (
                <div
                  key={car._id}
                  className="bg-white rounded-lg hover:shadow-purple-300 shadow-xl transition duration-300 hover:scale-125"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100}
                >
                  <LazyLoadImage effect="blur"  className="w-full h-64 object-cover object-center rounded-t-lg" src={car.pictureUrl} alt={car.name}  /> 
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
                    <p className="text-gray-600 mb-2">${car.price}</p>
                    <div className="flex justify-normal items-center font-bold mb-4">
                    <Rating style={{ maxWidth: 150 }} value={car.rating} readOnly />
                    <p className="text-purple-600 mb-2 ml-4 mt-2"> {car.rating}</p>
                    </div>
                    <button
                      className="tab_button text-white font-semibold py-2 px-4 rounded"
                      onClick={() => navigate(`/toy/${car._id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>


        <TabPanel>
          <div className="lg:p-4 bg-white w-full rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Off-road Cars</h2>
            <p className="text-gray-600">List of off-road cars:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {offRoadCars.map((car, index) => (
                <div
                  key={car._id}
                  className="bg-white rounded-lg hover:shadow-purple-300 shadow-xl transition duration-300 hover:scale-125"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 100}
                >
                   <LazyLoadImage effect="blur"  className="w-full h-64 object-cover object-center rounded-t-lg" src={car.pictureUrl} alt={car.name}  />

                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
                    <p className="text-gray-600 font-semibold mb-2">${car.price}</p>
                    <div className="flex justify-normal items-center font-bold mb-4">
                    <Rating style={{ maxWidth: 150 }} value={car.rating} readOnly />
                    <p className="text-purple-600 mb-2 ml-4 mt-2"> {car.rating}</p>
                    </div>
                    <button
                      className="tab_button text-white font-semibold py-2 px-4 rounded"
                      onClick={() => navigate(`/toy/${car._id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default ShopByCategory;
