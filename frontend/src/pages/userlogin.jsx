/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[userData, setUserData] = useState({})
    
    const {user, setUser} = useContext(UserDataContext)
    const navigate = useNavigate()
    
    const submitHandler = async (e) => {
        e.preventDefault();
        
        const userData = {
            email:email,
            password:password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)

        if(response.status === 200){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')
        }

        setEmail('')
        setPassword('')
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
        <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber'></img>
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
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p>
        </div>
        <div>
            <Link to='/captain-login' className='bg-[#10b477] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base ' type="submit">
                Sign In as Captain</Link>
        </div>
        </div>
    );
    }

export default UserLogin;