import React from 'react';
import { useLoaderData } from 'react-router-dom';



const UpdateToys = () => {

    const toys = useLoaderData();

    console.log(toys);

    return (
        <div>
<p>{toys._id}</p>
        </div>
    );
};

export default UpdateToys;