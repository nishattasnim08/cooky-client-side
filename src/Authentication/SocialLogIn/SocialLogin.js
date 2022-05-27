import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Pages/Shared/Loading/Loading';

const SocialLogin = () => {
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
        <div>
            <p>{error && error.message}</p>
            <button onClick={() => signInWithGoogle()} class="btn btn-warning mx-6">Google</button>
        </div>
    );
};

export default SocialLogin;