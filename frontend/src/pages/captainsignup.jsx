/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CaptainSignup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstname,setFirstname] = React.useState('');
    const [lastname,setLastname] = React.useState('');

    const [vehicleColor, setVehicleColor] = React.useState('');
    const [vehiclePlate, setVehiclePlate] = React.useState('');
    const [vehicleCapacity, setVehicleCapacity] = React.useState('');
    const [vehicleType, setVehicleType] = React.useState('');



    const {captain , setCaptain} = React.useContext(CaptainDataContext);

    const submitHandler = async (e)=>{
        e.preventDefault()

        const captainData = {
           fullname:{
            firstname:firstname,
            lastname:lastname
           },
           email:email,
           password:password,
           vehicle:{
            color:vehicleColor,
            plate:vehiclePlate,
            capacity:vehicleCapacity,
            vehicleType:vehicleType
            }
        };

        const response = await axios.post(`${import .meta.env.VITE_BASE_URL}/captains/register`, captainData)


        if(response.status === 201){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

        // if (response.status === 200){
        //     const data = response.data

        //     setCaptain(data.captain)
        //     localStorage.setItem('token', data.token)
        //     navigate('/captain-home')
        // }
                
        setEmail('')
        setPassword('')
        setFirstname('')
        setLastname('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleCapacity('')
        setVehicleType('')
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-20 mb-3' src='https://pngimg.com/d/uber_PNG24.png' alt='Uber'></img>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
        
        <h3 className='text-base w-full font-medium mb-2' >What's our Captain's Name?</h3>
            <div className='flex gap-4 mb-6'>
                <input 
                type="text" 
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm ' 
                placeholder="First Name" 
                value={firstname}
                onChange={(e)=>setFirstname(e.target.value)}
                required/>
                <input 
                type="text" 
                className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-base placeholder:text-sm' 
                placeholder="Last Name" 
                value={lastname}
                onChange={(e)=>setLastname(e.target.value)}
                required/>
            </div>

            <h3 className='text-base font-medium mb-2' >What's our Captain's Email?</h3>
            <input 
            type="email" 
            name="email"
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm ' 
            placeholder="Enter your email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required/>

            <h3 className='text-base font-medium mb-2' >What's your Password?</h3>

            <input 
                type="password" 
                name="password" 
                className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:sm '
                placeholder="Enter your password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required/>
            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>

            <div className='flex gap-4 mb-6'>
                <input 
                    type="text" 
                    className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm' 
                    placeholder="Vehicle Color" 
                    value={vehicleColor}
                    onChange={(e) => setVehicleColor(e.target.value)}
                    required
                />
                <input 
                    type="text" 
                    className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm' 
                    placeholder="Vehicle Plate" 
                    value={vehiclePlate}
                    onChange={(e) => setVehiclePlate(e.target.value)}
                    required
                />
            </div>
            <div className='flex gap-4 mb-6'>
                <input 
                    type="number" 
                    className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm' 
                    placeholder="Vehicle Capacity" 
                    value={vehicleCapacity}
                    onChange={(e) => setVehicleCapacity(e.target.value)}
                    required
                />
                <select 
                    className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm' 
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    required
                >
                    <option value="" disabled>Select Vehicle Type</option>
                    <option value="car">Car</option>
                    <option value="auto">Auto</option>
                    <option value="moto">Moto</option>
                </select>
            </div>


            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base ' type="submit">Create Captain Account</button>
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