import React from 'react';
import Devider from '../../Shared/Devider/Devider';

const AddReview = () => {
    return (
        <div class="mx-16 my-10">
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Add Reviews</h1>
            </div>
            <Devider />
            <div>
                <form class="form-control w-1/3 mx-auto">
                    <label class="label">
                        <span class="label-text">Your Image</span>
                    </label>
                    <input type="ulr" placeholder="your image url" class="input input-bordered" />
                    <label class="label">
                        <span class="label-text">Your Rating</span>
                    </label>
                    <input type="number" placeholder="your rating" class="input input-bordered" />
                    <label class="label">
                        <span class="label-text">Your Review</span>
                    </label>
                    <input type="text" placeholder="your review" class="input input-bordered" />
                    <input type="submit" value={"Submit"} className="btn btn-bg-#dca54c w-1/3 mx-auto mt-6" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;