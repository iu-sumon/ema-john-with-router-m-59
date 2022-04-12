import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'

import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useSignInWithMicrosoft } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import img1 from '../../images/google-40.png'
import img2 from '../../images/facebook-48.png'
import img3 from '../../images/twitter-48.png'
import img4 from '../../images/github.png'
import img5 from '../../images/microsoft-48.png'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)

    const [signInWithEmailAndPassword, createUser, createLoading, createError,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubUser] = useSignInWithGithub(auth);
    const [signInWithMicrosoft, microSoftUser] = useSignInWithMicrosoft(
        auth
    );
    const location = useLocation()
    const from = location.state?.from?.pathname || "/shipment";

    const navigate = useNavigate()
    //    if(createUser)
    //    {
    //     navigate(from, { replace: true });
    //    }  
    createUser && navigate(from, { replace: true });
    googleUser && navigate("/shop");
    facebookUser && navigate("/inventory");
    githubUser && navigate("/orders");


    return (
        <div className='login-container'>
            <div>
                <h1 className='login-title'>Login</h1>
                <form>

                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" name='email' required />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <p onClick={() => setShow(!show)} className='eye-icon'>{
                            show ?
                                <i class="fa-solid fa-eye-slash"></i>
                                : <i className="fa-solid fa-eye"></i>

                        }</p>
                        <input onBlur={(e) => setPassword(e.target.value)} type={`${show ? 'text' : 'password'}`} name='password' required />
                    </div>

                    <p style={{ color: 'red' }}>{createError?.message}</p>

                    <p style={{ color: "black" }}>{createLoading && 'Loading....'}</p>


                    <button onClick={(e) => { e.preventDefault(); signInWithEmailAndPassword(email, password) }} className='btn-login' type='submit' value='login'>Login</button>

                </form>

                <p style={{ textAlign: 'center' }}>New to Ema-john? <Link to='/signup' style={{ color: '#e2a54a' }}>Create New Account</Link></p>

                <div className='or-part'>
                    <hr className='hr-line' />
                    <p>Or</p>
                    <hr className='hr-line' />
                </div>

                <div className='google-part'>
                    <img onClick={() => signInWithGoogle(email, password)} src={img1} alt="" />
                    <img onClick={() => signInWithFacebook(email, password)} src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img onClick={() => signInWithGithub(email, password)} src={img4} alt="" />
                    <img onClick={() => signInWithMicrosoft(email, password)} src={img5} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Login;