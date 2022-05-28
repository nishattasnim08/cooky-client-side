import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Devider from '../../Shared/Devider/Devider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://calm-shore-01458.herokuapp.com/order?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    if (loading) {
        return <Loading />
    }

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
                            <p><span className='font-bold'>Shipping Address:</span> {order.address}</p>
                        </div>
                    </div>)

                }
            </div>
        </div>
    );
};

export default MyOrders;