import React from 'react';
import Devider from '../Shared/Devider/Devider';

const Order = () => {
    return (
        <div class="mx-16 my-10">
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Confirm Order</h1>
            </div>
            <Devider />
            <form class="form-control w-1/3 mx-auto">
                <label class="label">
                    <span class="label-text">Address</span>
                </label>
                <input type="text" placeholder="Address" class="input input-bordered" />
                <label class="label">
                    <span class="label-text">Contact Number</span>
                </label>
                <input type="number" placeholder="Contact Number" class="input input-bordered" />
                <label class="label">
                    <span class="label-text">Product Quantity</span>
                </label>
                <input type="number" placeholder="Product Quantity" class="input input-bordered" />
                <input type="submit" value={"Confirm Order"} className="btn btn-bg-#dca54c w-1/3 mx-auto mt-6" />
            </form>
        </div>
    );
};

export default Order;