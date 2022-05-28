import React from 'react';
import Devider from '../../Shared/Devider/Devider';

const AddReview = () => {

    const addReview = (event) => {
        event.preventDefault();

        const reviewText = event.target.reviewText.value;
        const rating = parseInt(event.target.rating.value);
        const image = event.target.image.value;
        const data = { reviewText, rating, image };
        fetch(`https://calm-shore-01458.herokuapp.com/review`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                alert('Review added!');
            })

        console.log(reviewText, rating, image);
    }

    return (
        <div class="mx-16 my-10">
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Add Reviews</h1>
            </div>
            <Devider />
            <div>
                <form onSubmit={addReview} class="form-control w-1/3 mx-auto">
                    <label class="label">
                        <span class="label-text">Your Image</span>
                    </label>
                    <input type="ulr" placeholder="your image url" name='image' class="input input-bordered" />
                    <label class="label">
                        <span class="label-text">Your Rating</span>
                    </label>
                    <input type="number" placeholder="your rating" name='rating' class="input input-bordered" />
                    <label class="label">
                        <span class="label-text">Your Review</span>
                    </label>
                    <input type="text" placeholder="your review" name='reviewText' class="input input-bordered" />
                    <input type="submit" value={"Submit"} className="btn btn-bg-#dca54c w-1/3 mx-auto mt-6" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;