import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Devider from '../Shared/Devider/Devider';
import Loading from '../Shared/Loading/Loading';

const Order = () => {

    const [user, loading, error] = useAuthState(auth);


    const { id } = useParams();
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`https://calm-shore-01458.herokuapp.com/item/${id}`)
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, []);

    if (loading) {
        return <Loading />
    }


    const confirmOrder = (event) => {
        event.preventDefault();

        const address = event.target.address.value;
        const contact = event.target.contact.value;
        const orderQuantityValue = event.target.quantity.value;
        const userName = user.displayName;
        const userEmail = user.email;




        const minimumQuantity = parseInt(item.mOrder);
        const orderQuantity = parseInt(orderQuantityValue);
        let quantity = parseInt(item.quantity);
        const total = orderQuantity * parseInt(item.price);


        const data = { address, contact, orderQuantity, total, userName, userEmail, item };

        console.log(data);

        if (orderQuantity >= minimumQuantity) {
            if (orderQuantity < quantity) {


                fetch(`https://calm-shore-01458.herokuapp.com/order`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                })
                    .then((response) => response.json())
                    .then((result) => {

                        quantity = quantity - orderQuantity;

                        fetch(`https://calm-shore-01458.herokuapp.com/item/${id}`, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ quantity }),
                        })
                            .then((res) => res.json())
                            .then((data) => console.log(data));

                        alert('Your order is confirmed!')
                    });
            } else {
                alert('This product is out of stock')
            }
        } else {
            alert('You should order more than minimum order quantity!')
        }
    };








    return (
        <div class="mx-16 my-10">
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Confirm Order</h1>
            </div>
            <Devider />
            <form onSubmit={confirmOrder} class="form-control w-1/3 mx-auto">
                <label class="label">
                    <span class="label-text">Product Name</span>
                </label>
                <input type="text" value={item.name} class="input input-bordered" readOnly />
                <label class="label">
                    <span class="label-text">Address</span>
                </label>
                <input type="text" placeholder="Address" name='address' class="input input-bordered" />
                <label class="label">
                    <span class="label-text">Contact Number</span>
                </label>
                <input type="number" placeholder="Contact Number" name='contact' class="input input-bordered" />
                <label class="label">
                    <span class="label-text">Product Quantity</span>
                </label>
                <input type="number" placeholder="Product Quantity" name='quantity' class="input input-bordered" />
                <input type="submit" value={"Confirm Order"} className="btn btn-bg-#dca54c w-1/3 mx-auto mt-6" />
            </form>
        </div>
    );
};

export default Order;