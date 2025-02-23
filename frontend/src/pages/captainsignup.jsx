/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const CaptainSignup = () => {


    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstname,setFirstname] = React.useState('');
    const [lastname,setLastname] = React.useState('');
    const [userData, setUserData] = React.useState({});

    const submitHandler = (e)=>{
        e.preventDefault()

        setUserData({
           fullname:{
            firstname:firstname,
            lastname:lastname
           },
           email:email,
           password:password
        });
                
        setEmail('')
        setPassword('')
        setFirstname('')
        setLastname('')
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-20 mb-3' src='https://pngimg.com/d/uber_PNG24.png' alt='Uber'></img>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
        
        <h3 className='text-lg w-full font-medium mb-2' >What's our Captain's Name?</h3>
            <div className='flex gap-4 mb-6'>
                <input 
                type="text" 
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base ' 
                placeholder="First Name" 
                value={firstname}
                onChange={(e)=>setFirstname(e.target.value)}
                required/>
                <input 
                type="text" 
                className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-base ' 
                placeholder="Last Name" 
                value={lastname}
                onChange={(e)=>setLastname(e.target.value)}
                required/>
            </div>

            <h3 className='text-lg font-medium mb-2' >What's our Captain's Email?</h3>
            <input 
            type="email" 
            name="email"
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' 
            placeholder="Enter your email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required/>

            <h3 className='text-lg font-medium mb-2' >What's your Password?</h3>

            <input 
                type="password" 
                name="password" 
                className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
                placeholder="Enter your password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required/>

            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg ' type="submit">Login</button>
        </form>
        <p className='text-center'>Already have an Account? <Link to='/captain-login' className='text-blue-600'>Login Here</Link></p>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>By proceeding, you concent to get calls, Whatsapp or SMS 
                messages, including by 
                automated means, from Uber and 
                its affiliates to the number provided</p>
        </div>
        </div>
    );
    }

export default CaptainSignup;