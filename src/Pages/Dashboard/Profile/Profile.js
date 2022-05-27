import userEvent from '@testing-library/user-event';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Devider from '../../Shared/Devider/Devider';

const Profile = () => {
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user.displayName);
    }
    return (
        <div class="mx-16 my-10">
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Our Best Selling Products</h1>
            </div>
            <Devider />
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 my-10">
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-5xl font-bold">{user.displayName}</h1>
                            <p class="py-6">{user.email}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-center py-3'>Update Profile</p>
                    <Devider />
                    <form class="form-control mx-auto">
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Your address here" class="input input-bordered" />
                        <label class="label">
                            <span class="label-text">Contact No.</span>
                        </label>
                        <input type="text" placeholder="Your contact number" class="input input-bordered" />
                        <label class="label">
                            <span class="label-text">LinkedIn Profile</span>
                        </label>
                        <input type="url" placeholder="linkedin profile link" class="input input-bordered" />
                        <input type="submit" value={"Update"} className="btn btn-bg-#dca54c w-1/2 mx-auto mt-6" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;