import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SocialLogin from '../../Home/SocailLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
  
    const navigateToLogin = () =>{
        navigate('/login');
    }

   

    const handleRegister = event =>{

        event.preventDefault();

        const nameField = event.target.name.value;

        const emailField = event.target.email.value;

        const passwordField = event.target.password.value;

        createUserWithEmailAndPassword(emailField, passwordField);
    }

    if(user){
        navigate('/home');
    }

    return (
        <div className='register'>
            <h2 className='text-center text-danger'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder='Name' name="name" id="" />
                
                <input type="email"  placeholder='Email address' name="email" id="" required/>
                
                <input type="password" placeholder='Password' name="password" id=""  required/>

                <input type="submit" value="Register" />

            </form>
            <h6>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateToLogin}>Please Login</Link> </h6>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;