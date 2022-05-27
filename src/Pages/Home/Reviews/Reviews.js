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
                    <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
                    <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked />
                    <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
                    <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
                    <input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
                </div>
                </div>
                <p class="p-5 text-2xl md:text-4xl leading-relaxed">I love to use their products. They supplies the most qualityful products</p>
            </div>
            <div class="my-10 p-5 review-section">
                <div class="flex items-center">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src="https://img.freepik.com/free-photo/handsome-man-white-shirt-posing-attractive-guy-with-fashion-hairstyle-confident-man-with-short-beard-adult-boy-with-brown-hair-closeup-portrait_186202-8545.jpg?t=st=1653672949~exp=1653673549~hmac=c89dea4c0f2e91c6c6897a64d5aa6bd62409cbf0cc2669f865295c6fd682d32f&w=740" />
                    </div>
                </div>
                <div class=" mx-10 rating gap-1">
                    <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
                    <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked />
                    <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
                    <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
                    <input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
                </div>
                </div>
                <p class="p-5 text-2xl md:text-4xl leading-relaxed">I love to use their products. They supplies the most qualityful products</p>
            </div>
            <div class="my-10 p-5 review-section">
                <div class="flex items-center">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src="https://img.freepik.com/free-photo/beautiful-adult-woman-with-long-brown-curly-hair-fashion-model-white-background_186202-3505.jpg?t=st=1653672700~exp=1653673300~hmac=ff9a9bf9643fad11db87b51aebae71059f4f28fe6e8eb0bd006bddba9ec5a34c&w=740" />
                    </div>
                </div>
                <div class=" mx-10 rating gap-1">
                    <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
                    <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked />
                    <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
                    <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
                    <input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
                </div>
                </div>
                <p class="p-5 text-2xl md:text-4xl leading-relaxed">I love to use their products. They supplies the most qualityful products</p>
            </div>
        </div>
    );
};

export default Reviews;