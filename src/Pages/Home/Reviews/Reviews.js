import React from 'react';
import Devider from '../../Shared/Devider/Devider';
import './Reviews.css';

const Reviews = () => {
    return (
        <div class="my-10">
            <div class="mx-20 my-10 text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Customer Reviews</h1>
                <Devider />
            </div>
            <div class="my-10 p-5 review-section">
                <div class="flex items-center">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=28212" />
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
                        <img src="https://api.lorem.space/image/face?hash=28212" />
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
                        <img src="https://api.lorem.space/image/face?hash=28212" />
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