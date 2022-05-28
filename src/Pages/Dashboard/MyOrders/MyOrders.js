import React, { useEffect, useState } from 'react';
import Devider from '../../Shared/Devider/Devider';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/order")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    return (
        <div class="mx-16 my-10">
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">My Orders</h1>
            </div>
            <Devider />
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {
                    orders.map(order => <div class="card w-90 bg-base-100 shadow-xl my-8">
                        <figure><img src={order.item.picture} alt="" /></figure>
                        <div class="card-body">
                        <h2 class="card-title">{order.item.name}</h2>
                            <p>{order.item.about}</p>
                            <p><span className='font-bold'>Quantity:</span> {order.orderQuantity}</p>
                            <p><span className='font-bold'>Total Price:</span> {order.total} $</p>
                        </div>
                    </div>)

                }
            </div>
        </div>
    );
};

export default MyOrders;