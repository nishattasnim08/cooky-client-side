import React from 'react';
import Devider from '../../Shared/Devider/Devider';
import './Tools.css'

const Tools = () => {
    return (
        <div class="mx-16 my-10" id='tools'>
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Our Products</h1>
            </div>
            <Devider />
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="card w-90 bg-base-100 shadow-xl my-8">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary mt-6">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-90 bg-base-100 shadow-xl my-8">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary mt-6">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-90 bg-base-100 shadow-xl my-8">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary mt-6">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-90 bg-base-100 shadow-xl my-8">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary mt-6">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-90 bg-base-100 shadow-xl my-8">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary mt-6">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-90 bg-base-100 shadow-xl my-8">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary mt-6">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;