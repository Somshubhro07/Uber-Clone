/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CaptainLogin = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[captainData, setCaptainData] = useState({})
    
    const submitHandler = (e) => {
        e.preventDefault();
        setCaptainData({
            email:email,
            password:password
        })
        console.log(captainData);
        setEmail('')
        setPassword('')
    }


    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
        <img className='w-20 mb-3' src='https://pngimg.com/d/uber_PNG24.png' alt='Uber'></img>
            <h3 className='text-lg font-medium mb-2' >What's your Email?</h3>
            <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base ' 
            placeholder="Enter your email" 
            required/>

            <h3 className='text-lg font-medium mb-2' >What's your Password?</h3>

            <input 
                type="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base '
                placeholder="Enter your password" 
                required/>

            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base ' type="submit">Login</button>
        </form>
        <p className='text-center'>Join our Fleet! <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
        </div>
        <div>
            <Link to='/login' className='bg-[#d56220] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base ' type="submit">
                Sign In as User</Link>
        </div>
        </div>
    );
    }

export default CaptainLogin;