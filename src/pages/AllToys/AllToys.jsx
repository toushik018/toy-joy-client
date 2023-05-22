import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Loader from "react-loader-spinner";
import useTitle from "../hooks/useTitle";
import { RiArrowRightCircleFill } from "react-icons/ri";

function AllToys() {
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { loading } = useContext(AuthContext);
  useTitle("AllToys");

  useEffect(() => {
    fetch("https://toy-joy-server-toushik018.vercel.app/alltoys")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader type="Rings" color="#4c51bf" height={80} width={80} />
      </div>
    );
  }

  // Filter toys based on search query
  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 chicle-font text-center mt-4">
        All Toys
      </h2>
      <div className="mb-4 px-2 flex justify-end">
        <input
          type="text"
          placeholder="Search by toy name"
          className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto mx-auto">

   
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Seller</th>
            <th className="py-3 px-6 text-left">Toy Name</th>
            <th className="py-3 px-6 text-left">Sub-category</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">Available Quantity</th>
            <th>
              <span className="py-3 px-6 text-left hidden sm:inline">
                Action
              </span>
              <span className=" py-3 px-2 text-left inline sm:hidden">
                View Details
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredToys.map((toy) => (
            <tr
              key={toy._id}
              className="hover:bg-gray-100 transition-colors duration-300"
            >
              <td className="py-4 px-6">
                <img
                  src={toy.pictureUrl}
                  alt={toy.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              </td>
              <td className="py-4 px-6">{toy.sellerName}</td>
              <td className="py-4 px-6">{toy.name}</td>
              <td className="py-4 px-6">{toy.subCategory}</td>
              <td className="py-4 px-6">${toy.price}</td>
              <td className="py-4 px-6">{toy.quantity}</td>
              <td className="py-4 px-6">
                <Link to={`/toy/${toy._id}`}>
                  <span className="hidden sm:inline button sm:mx-auto sm:text-sm">
                    View Details
                  </span>
                  <span className="inline sm:hidden text-purple-700 text-4xl">
                    <RiArrowRightCircleFill className="mr-1" />
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default AllToys;
