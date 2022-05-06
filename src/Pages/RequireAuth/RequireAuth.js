import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);

    const location = useLocation();

    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);


    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (loading) {
        return <Loading></Loading>
    }

   

    if (user.providerData[0]?.providerId === "password" &&  !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h6 className='text-danger'> Verify your email address</h6>
            <button
            className='btn btn-success'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent an Email');
                }}
            >
                Send Verification Email Again
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequireAuth;