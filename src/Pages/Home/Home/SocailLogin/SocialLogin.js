import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../../../images/logo/google.png';
import Loading from '../../../Shared/Loading/Loading';


const SocialLogin = () => {
    
    const navigate = useNavigate();
    const location = useLocation() ;
    let from = location.state?.from?.pathname || "/" ;
    const [signInWithGoogle, user,  error, loading] = useSignInWithGoogle(auth);

    let errorElement;
  
  
 // showing socail error
    if (error) {
        errorElement = <h6 className='text-danger'>Error: {error?.message}</h6>
    }

    // showing spinner

    if(loading){
        return <Loading></Loading>
    }


    if (user) {
        navigate(from , {replace: true});
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1.50px' }} className=' w-50 bg-secondary '></div>
                <p className='px-2 mt-3'>OR</p>
                <div style={{ height: '1.50px' }} className=' w-50 bg-secondary '></div>
                </div>
            {errorElement}

            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-primary w-50 my-3 d-block mx-auto'>
                    <img style={{ width: '33px' }} src={google} alt="" />
                    <span className='px-3'>Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;