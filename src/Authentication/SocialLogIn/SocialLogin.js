import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Pages/Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <Loading />
    }

    if (user) {
        console.log(user);
        navigate(from, { replace: true });
    }

    return (
        <div>
            <p>{error && error.message}</p>
            <button onClick={() => signInWithGoogle()} class="btn btn-bg-#dca54c w-1/8 mx-auto mx-6">Google</button>
        </div>
    );
};

export default SocialLogin;