import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Pages/Shared/Loading/Loading';

const LogIn = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <Loading/>
    }

    if (user) {
        console.log(user);
        navigate('/home');
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} class="btn btn-primary">Google</button>
            <p>{error&&error.message}</p>
        </div>
    );
};

export default LogIn;