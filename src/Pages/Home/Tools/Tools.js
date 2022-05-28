import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Devider from '../../Shared/Devider/Devider';
import './Tools.css'

const Tools = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://calm-shore-01458.herokuapp.com/items")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    const nevigate = useNavigate();

    return (
        <div class="mx-16 my-10" id='tools'>
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Our Products</h1>
            </div>
            <Devider />
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {items.map(item =>
                    <div class="card w-90 bg-base-100 shadow-xl my-8">
                        <figure><img src={item.picture} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{item.name}</h2>
                            <p>{item.about}</p>
                            <p><span className='font-bold'>Available Quantity:</span> {item.quantity}</p>
                            <p><span className='font-bold'>Price Per Unit:</span> {item.price} $</p>
                            <p><span className='font-bold'>Minimum Order Quantity:</span> {item.mOrder}</p>
                            <div class="card-actions justify-end">
                                <button onClick={() => nevigate(`/tool/${item._id}`)} class="btn btn-bg-#dca54c mt-6">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )}





            </div>
        </div>
    );
};

export default Tools;