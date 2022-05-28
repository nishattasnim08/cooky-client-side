import React, { useEffect, useState } from 'react';
import Devider from '../../Shared/Devider/Devider';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div class="my-10" id='reviews'>
            <div class="mx-20 my-10 text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Customer Reviews</h1>
                <Devider />
            </div>
            {
                reviews.map(review => <div class="my-10 p-5 review-section">
                    <div class="flex items-center">
                        <div class="avatar">
                            <div class="w-24 rounded-full">
                                <img src={review.image} />
                            </div>
                        </div>
                        <div class=" mx-10 rating gap-1">
                            {
                                Array.from(Array(review.rating).keys()).map(i => <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" disabled checked />)
                            }
                            {
                                Array.from(Array(5-review.rating).keys()).map(i => <input type="radio" name="rating-3" class="mask mask-heart bg-stone-500" disabled/>)
                                
                            }
                        </div>
                    </div>
                    <p class="p-5 text-2xl md:text-4xl leading-relaxed">{review.reviewText}</p>
                </div>)

            }

        </div>
    );
};

export default Reviews;