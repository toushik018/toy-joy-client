import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Loader from "react-loader-spinner";

function AllToys() {
    const [toys, setToys] = useState([]);
    const { loading } = useContext(AuthContext);

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

    return (
        <div className="overflow-x-auto w-full lg:w-4/5 mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-6 chicle-font text-center mt-4">All Toys</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-6 text-left">Image</th>
                        <th className="py-3 px-6 text-left">Seller</th>
                        <th className="py-3 px-6 text-left">Toy Name</th>
                        <th className="py-3 px-6 text-left">Sub-category</th>
                        <th className="py-3 px-6 text-left">Price</th>
                        <th className="py-3 px-6 text-left">Available Quantity</th>
                        <th className="py-3 px-6 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {toys?.map((toy) => (
                        <tr
                            key={toy._id}
                            className="hover:bg-gray-100 transition-colors duration-300"
                        >
                            <td className="py-4 px-6">
                                <img src={toy.pictureUrl} alt={toy.name} className="w-16 h-16 object-cover rounded-lg" />
                            </td>
                            <td className="py-4 px-6">{toy.sellerName}</td>
                            <td className="py-4 px-6">{toy.name}</td>
                            <td className="py-4 px-6">{toy.subCategory}</td>
                            <td className="py-4 px-6">${toy.price}</td>
                            <td className="py-4 px-6">{toy.quantity}</td>
                            <td className="py-4 px-6">
                                <Link
                                    to={`/toy/${toy._id}`}
                                    className="button"
                                >
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllToys;
