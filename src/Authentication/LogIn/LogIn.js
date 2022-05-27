import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Pages/Shared/Loading/Loading';
import Devider from '../../Pages/Shared/Devider/Devider';
import SocialLogin from '../SocialLogIn/SocialLogin';
import { useForm } from 'react-hook-form';

const LogIn = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = async data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };

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
            <div class="mx-16 my-10 text-center">
                <form onSubmit={handleSubmit(onSubmit)} class="form-control w-1/4 mx-auto">
                    <label class="label">
                        <span class="label-text">Your Email</span>
                    </label>
                    <label class="input-group">
                        <span className='w-2/5'>Email</span>
                        <input {...register("email", { required: true })} type="email" placeholder="info@site.com" class="w-3/5 input input-bordered" />
                    </label>
                    <label class="label">
                        <span class="label-text">Your Password</span>
                    </label>
                    <label class="input-group">
                        <span className='w-2/5'>Password</span>
                        <input {...register("password", { required: true })} type="password" placeholder="abc@#_123ABC" class="w-3/5 input input-bordered" />
                    </label>
                    <input type="submit" value={"Log In"} className="btn btn-bg-#dca54c w-1/3 mx-auto mt-6" />
                </form>
                <div class="divider">OR</div>
                <SocialLogin />
                <p class="p-4">New here? <span><Link to='/signUp'>Create an account</Link></span></p>
                <p>{error && error.message}</p>
            </div>
        </div>
    );
};

export default LogIn;