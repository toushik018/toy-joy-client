import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import Swal from 'sweetalert2';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const data = useLoaderData();
  console.log(data);

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'

    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )

            const remaining = toys.filter(toy => toy._id !== id);
            setToys(remaining)

          })

        console.log('delete confirmed');
      }
    })
  };


  // const url = `https://toy-joy-server.vercel.app/search?sellerEmail=${user?.email}`;
  useEffect(() => {
    fetch('https://toy-joy-server.vercel.app/search?sellerEmail=aaaaa@gmail.com')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setToys(data)

        // console.log(data);
      })
  }, [data])


  if (!user) {
    return <div>Please log in to view your toys.</div>;
  }



  return (
    <div className="overflow-x-auto w-full lg:w-4/5 mx-auto mb-12">
      <h2 className="text-2xl font-bold mb-6 chicle-font text-center mt-4">My Toys</h2>
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
                <div className="flex space-x-4">
                  <Link
                    to={`/${toy._id}`}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <RiPencilLine size={20} />
                  </Link>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleDeleteToy(toy._id)}
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
