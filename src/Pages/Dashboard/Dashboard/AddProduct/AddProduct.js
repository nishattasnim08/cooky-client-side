import React from 'react';
import Devider from '../../../Shared/Devider/Devider';

const AddProduct = () => {
    return (
        <div class="mx-16 my-10">
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Our Best Selling Products</h1>
            </div>
            <Devider />
            <form class="form-control w-1/3 mx-auto">
                <label class="label">
                    <span class="label-text">Product Image</span>
                </label>
                <input type="ulr" placeholder="product image url" class="input input-bordered" />
                <label class="label">
                    <span class="label-text">Product Name</span>
                </label>
                <input type="text" placeholder="product Name" class="input input-bordered" />
                <label class="label">
                    <span class="label-text">Product Details</span>
                </label>
                <input type="text" placeholder="product details" class="input input-bordered" />
                <input type="submit" value={"Add Product"} className="btn btn-bg-#dca54c w-1/3 mx-auto mt-6" />
            </form>
        </div>
    );
};

export default AddProduct;