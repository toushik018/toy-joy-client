import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function AddToys() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);


        fetch('http://localhost:5000/addtoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Toy have been added',
            showConfirmButton: false,
            timer: 1500
        })

    };

    return (
        <div className="flex justify-center mb-6">
            <form onSubmit={handleSubmit(onSubmit)} className="lg:w-3/5 w-full bg-white rounded-lg shadow-md px-8 py-6">
                <h2 className="text-2xl font-bold mb-6">Add a Toy</h2>

                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pictureUrl">
                            Picture URL
                        </label>
                        <input
                            {...register("pictureUrl", { required: "Picture URL is required" })}
                            className="form-input bg-gray-100 border-2 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg py-2 px-4 w-full"
                            id="pictureUrl"
                            type="text"
                            placeholder="http://"
                        />
                        {errors.pictureUrl && (
                            <p className="text-red-500 text-xs italic">{errors.pictureUrl.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            className="form-input bg-gray-100 border-2 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg py-2 px-4 w-full"
                            id="name"
                            type="text"
                            placeholder="Name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerName">
                            Seller Name
                        </label>
                        <input
                            {...register("sellerName", { required: "Seller name is required" })}
                            className="form-input bg-gray-100 border-2 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg py-2 px-4 w-full"
                            id="sellerName"
                            type="text"
                            placeholder="Seller Name"
                        />
                        {errors.sellerName && (
                            <p className="text-red-500 text-xs italic">{errors.sellerName.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellerEmail">
                            Seller Email
                        </label>
                        <input
                            {...register("sellerEmail", {
                                required: "Seller email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email",
                                },
                            })}
                            className="form-input bg-gray-100 border-2 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg py-2 px-4 w-full"
                            id="sellerEmail"
                            type="email"
                            placeholder="Seller Email"
                        />
                        {errors.sellerEmail && (
                            <p className="text-red-500 text-xs italic">{errors.sellerEmail.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subCategory">
                            Sub-category
                        </label>
                        <select
                            {...register("subCategory", { required: "Sub-category is required" })}
                            className="form-select bg-gray-100 border-2 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg py-2 px-4 w-full"
                            id="subCategory"
                        >
                            <option value="">Select...</option>
                            <option value="sports car">Sports Car</option>
                            <option value="regular car">Regular Car</option>
                            <option value="off-road car">Off-road Car</option>
                        </select>
                        {errors.subCategory && (
                            <p className="text-red-500 text-xs italic">{errors.subCategory.message}</p>
                        )}
                    </div>

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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                            Rating
                        </label>
                        <div className="flex">
                            <span className="rounded-l-lg bg-gray-100 border-2 border-r-0 px-4 py-2">
                                &#9733;
                            </span>
                            <input
                                {...register("rating", {
                                    required: "Rating is required",
                                    min: { value: 1, message: "Minimum rating is 1" },
                                    max: { value: 5, message: "Maximum rating is 5" },
                                })}
                                className="form-input bg-gray-100 border-2 focus:border-indigo-500 focus:ring-indigo-500 rounded-r-lg py-2 px-4 w-full"
                                id="rating"
                                type="number"
                                placeholder="Rating"
                            />
                        </div>
                        {errors.rating && (
                            <p className="text-red-500 text-xs italic">{errors.rating.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                            Available Quantity
                        </label>
                        <input
                            {...register("quantity", { required: "Available quantity is required" })}
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
                            className="form-textarea bg-gray-100 border-2 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg py-2 px-4 w-full h-32 resize-none"
                            id="description"
                            placeholder="Description"
                        />
                        {errors.description && (
                            <p className="text-red-500 text-xs italic">{errors.description.message}</p>
                        )}
                    </div>
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
}

export default AddToys;
