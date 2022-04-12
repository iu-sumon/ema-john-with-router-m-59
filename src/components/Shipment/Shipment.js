import React, { useState } from 'react';

const Shipment = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    
     const handleCreateUser=(event)=>{
        event.preventDefault()
        const shipping={name,email,address,phone}
        console.log(shipping);
    }
    return (
        <div className='login-container'>
            <div>
                <h1 className='login-title'>Your Shipping Info</h1>
                <form onClick={handleCreateUser}>

                    <div className='input-group'>
                        <label htmlFor="name">Your Name</label>
                        <input onClick={(e)=> setName(e.target.value)} type="name" name='name' required />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="email">Your Email</label>
                        <input onClick={(e)=> setEmail(e.target.value)} type="email" name='email' readOnly />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="address">Your Address</label>
                        <input onClick={(e)=> setAddress(e.target.value)} type="address" name='address' required />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="number">Your Number</label>
                        <input onClick={(e)=> setPhone(e.target.value)} type="text" name='number' required />
                    </div>
                    <button className='btn-login' type='submit' value='login'>Add Shipping</button>

                </form>
            </div>
        </div>
    );
};

export default Shipment;