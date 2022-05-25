import React from 'react';
import Devider from '../../Shared/Devider/Devider';
import subscribe from '../../../images/subscribe.jpg';

const Subscribe = () => {
    return (
        <div class="mx-16 my-10" id='subscribe'>
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Subscribe</h1>
            </div>
            <Devider />
            <div class="mx-16 my-10">
                <div class="p-8 hero min-h-screen bg-base-200 rounded-lg">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={subscribe} class="max-w-sm rounded-lg shadow-2xl" />
                        <div class="px-8">
                            <h1 class="text-5xl font-bold">To Get The Latest!</h1>
                            <p class="py-6">Subscribe here soon</p>
                            <button class="btn btn-error bg-rose-500 shadow-lg shadow-rose-500/50">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;