/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import {UserDataContext} from '../context/userContext';


const UserSignup = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstname,setFirstname] = React.useState('');
    const [lastname,setLastname] = React.useState('');
    const [userData, setUserData] = React.useState({});

    const navigate = useNavigate()
    const {user, setUser} = React.useContext(UserDataContext)

    const submitHandler = async (e)=>{
        e.preventDefault()

        const newUser = {
            fullname:{
                firstname:firstname,
                lastname:lastname
               },
               email:email,
               password:password
        }
        
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

        if (response.status === 201){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')

        }
        
        setEmail('')
        setPassword('')
        setFirstname('')
        setLastname('')
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt='Uber'></img>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
        
        <h3 className='text-lg font-medium mb-2' >What's your Name?</h3>
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

            <h3 className='text-lg font-medium mb-2' >What's your Email?</h3>
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

            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg ' type="submit">Create Account</button>
        </form>
        <p className='text-center'>Already have an Account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
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

export default UserSignup;