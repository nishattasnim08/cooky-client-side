import userEvent from '@testing-library/user-event';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Devider from '../../Shared/Devider/Devider';
import Loading from '../../Shared/Loading/Loading';

const Profile = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading />
    }

    if (user) {
        console.log(user.displayName);
    }

    const updateProfile = (event) => {
        event.preventDefault();

        const image = event.target.image.value;
        const address = event.target.address.value;
        const contact = event.target.contact.value;
        const linkedin = event.target.linkedin.value;

        const data = {user, image, address, contact, linkedin};

        fetch(`http://localhost:5000/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                alert('User updated!');
            })

        console.log(image, address, contact, linkedin);

    }

    return (
        <div class="mx-16 my-10">
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">My Profile</h1>
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
                    <form onSubmit={updateProfile} class="form-control mx-auto">
                        <label class="label">
                            <span class="label-text">Image</span>
                        </label>
                        <input type="url" placeholder="Your profile image here" name='image' class="input input-bordered" />
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Your address here" name='address' class="input input-bordered" />
                        <label class="label">
                            <span class="label-text">Contact No.</span>
                        </label>
                        <input type="text" placeholder="Your contact number" name='contact' class="input input-bordered" />
                        <label class="label">
                            <span class="label-text">LinkedIn Profile</span>
                        </label>
                        <input type="url" placeholder="linkedin profile link" name='linkedin' class="input input-bordered" />
                        <input type="submit" value={"Update"} className="btn btn-bg-#dca54c w-1/2 mx-auto mt-6" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;