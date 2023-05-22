import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';




const UpdateToys = () => {

    const toys = useLoaderData();
    console.log(toys._id);
    const { user } = useContext(AuthContext);


    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const UpdateToy = {
            price,
            quantity,
            description
        };

        console.log(UpdateToy);

        // Sending data to the server.

        fetch(`https://toy-joy-server-toushik018.vercel.app/mytoys/${toys._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Updated!',
                        'Your toy has been Updated.',
                        'success'
                    )

                }

            })
    }

    console.log(toys);

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleUpdateToy} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Price
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        name="price"
                        defaultValue={toys.price}
                        type="text"
                        placeholder="Enter price"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Quantity
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="quantity"
                        defaultValue={toys.quantity}
                        name="quantity"
                        type="text"
                        placeholder="Enter quantity"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Detailed Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        defaultValue={toys.description}
                        rows="4"
                        placeholder="Enter detailed description"
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Update Toy
                    </button>
                </div>
            </form>
        </div>


    );
};

export default UpdateToys;