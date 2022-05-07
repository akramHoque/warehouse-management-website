import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../../Home/SocailLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
        const emailRef = useRef('');
        const passwordRef = useRef('');
      
        const location = useLocation() ;
        const navigate = useNavigate() ;

        let from = location.state?.from?.pathname || "/";
        let errorMessageShow;
    

        const [
                signInWithEmailAndPassword,
                user,
                loading,
                error,
              ] = useSignInWithEmailAndPassword(auth);

  


            // showing error
            if (error) {
                errorMessageShow = <h6 className='text-danger'>error: {error?.message}</h6>
            }


            if (user) {
                navigate(from, { replace: true });
            }


            // reset password
            const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
                auth
              );


        
          const resetPassword = async() =>{
                const email = emailRef.current.value;

               if(email){
                await sendPasswordResetEmail(email);

                toast('Sent email');
               }
               else{
                       toast('please enter your email address');
               }
          }

        const navigateToRegister = event => {
                navigate('/register')
        }

        // handle login with email and password


        const hanldeLogin = event =>{
                event.preventDefault();

        const email = emailRef.current.value;

        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
        }

        
        return (

        <div className='container w-50 mx-auto py-3'>
        <h2 className='text-danger text-center mt-2'>Please Login</h2> 
        <Form onSubmit={ hanldeLogin}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                 <Form.Control  ref = {emailRef} type="email" placeholder="Enter your email" required/>
                 </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control ref = {passwordRef} type="password" placeholder="Password" required />

                </Form.Group>
                <Button className = 'mb-3' variant="success" type="submit">
                        Login
                </Button>
        </Form>   
        {errorMessageShow}

<h6>New to Here? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateToRegister}>Please Register</Link> </h6>
<p>Forget password? <button  className=' btn btn-link text-success pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p> 
               <SocialLogin></SocialLogin>

                <ToastContainer />

 </div>
        );
};

export default Login;