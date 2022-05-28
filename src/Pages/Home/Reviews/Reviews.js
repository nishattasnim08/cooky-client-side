import React from 'react';
import Devider from '../../Shared/Devider/Devider';
import './Reviews.css';

const Reviews = () => {
    return (
        <div class="my-10" id='reviews'>
            <div class="mx-20 my-10 text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Customer Reviews</h1>
                <Devider />
            </div>
            <div class="my-10 p-5 review-section">
                <div class="flex items-center">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?t=st=1653672700~exp=1653673300~hmac=6a538b372cd6694f1bc2e5a08acaa2a62653833e75a005fd8d7c178eca02061f&w=740" />
                        </div>
                    </div>
                    <div class=" mx-10 rating gap-1">
                        {
                            Array.from(Array(3).keys()).map(i => <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked />)
                        }
                        {
                            Array.from(Array(3).keys()).map(i => <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />)
                        }
                    </div>
                </div>
                <p class="p-5 text-2xl md:text-4xl leading-relaxed">I love to use their products. They supplies the most qualityful products</p>
            </div>
            
        </div>
    );
};

export default Reviews;