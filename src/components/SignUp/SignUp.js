import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import img1 from '../../images/google-40.png'
import img2 from '../../images/facebook-48.png'
import img3 from '../../images/twitter-48.png'
import img4 from '../../images/github.png'
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userError, setUserError] = useState('')
    const [show, setShow] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        error
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()
    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            setUserError('Password did not match!')
            return;
        }
        if (password.length < 6) {
            setUserError('Password must be 6 character or longer.')
            return;
        }
        // if (/(?=.*?[#?!@$%^&*-])/.test(password)) {
        //     setUserError('Password should be contain at least one special character')
        //     return;
        // }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='login-container'>
            <div>
                <h1 className='login-title'>Sign Up</h1>
                <form onSubmit={handleCreateUser}>

                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" name='email' required />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <p onClick={() => setShow(!show)} className='eye-icon'>
                        {
                                show ?
                                <i class="fa-solid fa-eye-slash"></i>
                                : <i className="fa-solid fa-eye"></i>
                            }
                            
                            </p>
                        <input onBlur={(e) => setPassword(e.target.value)} type={`${show ? 'text' : 'password'}`} name='password' required />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>

                        <p onClick={() => setShow(!show)} className='eye-icon'>
                            {
                                show ?
                                <i class="fa-solid fa-eye-slash"></i>
                                : <i className="fa-solid fa-eye"></i>

                            }
                        </p>
                        <input onBlur={(e) => setConfirmPassword(e.target.value)} type={`${show ? 'text' : 'password'}`} name='confirm-password' required />
                    </div>
                    <p style={{ color: 'red' }}>{userError}</p>
                    <p style={{ color: 'red' }}>{error}</p>



                    <button className='btn-login' type='submit' value='login'>Sign Up</button>

                </form>
                <p style={{ textAlign: 'center' }}>All ready have an account? <Link to='/login' style={{ color: '#e2a54a' }}>Login</Link></p>

                <div className='or-part'>

                    <hr className='hr-line' />
                    <p>Or</p>
                    <hr className='hr-line' />

                </div>

                <div className='google-part'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />

                </div>

            </div>
        </div>
    );
};

export default SignUp;