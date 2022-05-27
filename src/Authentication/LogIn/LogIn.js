import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Pages/Shared/Loading/Loading';
import Devider from '../../Pages/Shared/Devider/Devider';

const LogIn = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <Loading />
    }

    if (user) {
        console.log(user);
        navigate('/home');
    }
    return (
        <div class="mx-16 my-10">
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Log In</h1>
            </div>
            <Devider />
            <div class="mx-16 text-center">
                <div class="form-control w-1/4 mx-auto my-10">
                    <label class="label">
                        <span class="label-text">Your Email</span>
                    </label>
                    <label class="input-group">
                        <span>Email</span>
                        <input type="email" placeholder="info@site.com" class="input input-bordered" />
                    </label>
                    <label class="label">
                        <span class="label-text">Your Password</span>
                    </label>
                    <label class="input-group">
                        <span>Password</span>
                        <input type="password" placeholder="abc@#_123ABC" class="input input-bordered" />
                    </label>
                </div>
                <button class="btn btn-warning mx-6">Log In</button>
                <button onClick={() => signInWithGoogle()} class="btn btn-warning mx-6">Google</button>
                <p class="p-4">New here? <span><Link to='/signUp'>Create an account</Link></span></p>
                <p>{error && error.message}</p>
            </div>
        </div>
    );
};

export default LogIn;