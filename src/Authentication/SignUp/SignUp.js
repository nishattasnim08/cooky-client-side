import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Devider from '../../Pages/Shared/Devider/Devider';
import Loading from '../../Pages/Shared/Loading/Loading';
import SocialLogin from '../SocialLogIn/SocialLogin';

const SignUp = () => {
    const navigate = useNavigate();
    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        if (data.password === data.confirmPassword) {
            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName: data.name });
            await sendEmailVerification();
            alert("Verification email send!");
        }

        else { alert("Password doesn't match!") };
    };

    if (loading || sending || updating) {
        return <Loading />
    }

    if (user) {
        console.log(user);
        navigate('/home');
    }

    return (
        <div class="mx-16 my-10">
            <div class="text-center">
                <h1 class="py-6 text-5xl md:text-7xl">Sign Up</h1>
            </div>
            <Devider />

            <div class="mx-16 my-10 text-center">
                <p className='my-5'>{error && error.message}</p>
                <form onSubmit={handleSubmit(onSubmit)} class="form-control w-1/4 mx-auto">
                    <label class="label">
                        <span class="label-text">Your Name</span>
                    </label>
                    <label class="input-group">
                        <span className='w-2/5'>Name</span>
                        <input {...register("name", { required: true })} type="text" placeholder="name" class="w-3/5 input input-bordered" />
                    </label>
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
                    <label class="label">
                        <span class="label-text">Confirm Your Password</span>
                    </label>
                    <label class="input-group">
                        <span className='w-2/5'>Confirm Password</span>
                        <input {...register("confirmPassword", { required: true })} type="password" placeholder="abc@#_123ABC" class="w-3/5 input input-bordered" />
                    </label>
                    <input type="submit" value={"Sign Up"} className="btn btn-bg-#dca54c w-1/3 mx-auto mt-6" />
                </form>
                <div class="divider">OR</div>
                <SocialLogin/>
                <p class="p-4">Already have an account? <span><Link to='/logIn'>Log In</Link></span></p>

            </div>
        </div>
    );
};

export default SignUp;