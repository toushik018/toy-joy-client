import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from "react-hook-form";



const UpdateToys = () => {

    const toys = useLoaderData();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);


        fetch('https://toy-joy-server-toushik018.vercel.app/addtoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Toy have been added',
                    showConfirmButton: false,
                    timer: 1500
                })
            })



    };

    console.log(toys);

    return (
        <div className="flex justify-center mb-6">
        <form onSubmit={handleSubmit(onSubmit)} className="lg:w-3/5 w-full bg-white rounded-lg shadow-md px-8 py-6">
          <h2 className="text-2xl font-bold mb-6">Add a Toy</h2>
      
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <div className="flex">
              <span className="rounded-l-lg bg-gray-100 border-2 border-r-0 px-4 py-2">
                $
              </span>
              <input
                {...register("price", { required: "Price is required" })}
                defaultValue=""
                className="form-input bg-gray-100 border-2 focus:border-indigo-500 focus:ring-indigo-500 rounded-r-lg py-2 px-4 w-full"
                id="price"
                type="number"
                placeholder="Price"
              />
            </div>
            {errors.price && (
              <p className="text-red-500 text-xs italic">{errors.price.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
              Available Quantity
            </label>
            <input
              {...register("quantity", { required: "Available quantity is required" })}
              defaultValue=""
              className="form-input bg-gray-100 border-2 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg py-2 px-4 w-full"
              id="quantity"
              type="number"
              placeholder="Quantity"
            />
            {errors.quantity && (
              <p className="text-red-500 text-xs italic">{errors.quantity.message}</p>
            )}
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Detailed Description
            </label>
            <textarea
              {...register("description", { required: "Description is required" })}
              defaultValue=""
              className="form-textarea bg-gray-100 border-2 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg py-2 px-4 w-full h-32 resize-none"
              id="description"
              placeholder="Description"
            />
            {errors.description && (
              <p className="text-red-500 text-xs italic">{errors.description.message}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-blue-950 border-2 mt-2 border-purple-500 font-semibold py-2 px-4 hover:bg-gradient-to-r from-purple-400 to-purple-500 hover:text-white transition duration-300 ease-in-out shadow-md outline-none rounded-full"
            >
              Add Toy
            </button>
          </div>
        </form>
      </div>
      

    );
};

export default UpdateToys;