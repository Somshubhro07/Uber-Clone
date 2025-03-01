/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
        <h5 className="p-1 text-center w-[93%] absolute top-0 " onClick={()=>{
                    props.setRidePopupPanel(false)
                }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className="text-2xl font-semibold mb-3">Confirm this ride to Start!</h3>
      <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
        <div className='flex items-center gap-3 '>
            <img className='h-10 w-10 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4W6BVKLNmmCEHj82kCJqF1sWJlofIe1pLwVVNsX6IwZF2Ecp-GsyBGSshrhoHWsVPM8&usqp=CAU" alt="" />
            <h2 className='text-lg font-medium'>Somg</h2>
        </div>
        <h5 className='text-lg font-semibold'>6.9km</h5>
      </div>

        <div className='flex gap-2 justify-between flex-col items-center'>
             <div className='w-full mt-5 '>
              <div className='text-lg flex items-center gap-5 p-3 border-b-2'>
                <i className="ri-map-pin-range-line"></i>
                  <div>
                    <h3 className='text-lg font-medium'>562/11/A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Random Address</p>
                  </div>
              </div>
              <div className='text-lg flex items-center gap-5 p-3 border-b-2'>
                  <i className="ri-map-pin-time-fill"></i>
                  <div>
                    <h3 className='text-lg font-medium'>562/11/A</h3>
                    <p className='text-sm -mt-1 text-gray-600'>Random Address</p>
                  </div>
              </div>
              <div className='text-lg flex items-center gap-5 p-3'>
              <i className="ri-money-rupee-circle-line"></i>
                <div>
                  <h3 className='text-lg font-medium'>₹99.99</h3>
                  <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                </div>
              </div>
          </div>
          <form >

          </form>
          <div className='mt-6 w-full'>
            <form onSubmit={(e)=>{
              submitHandler(e)
              }} >
                <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="number" className="bg-[#eee] px-6 py-4 text-lg font-mono rounded-lg w-full mt-3"  placeholder='Enter OTP' />
              <Link to='/captain-riding' className='w-full flex justify-center bg-yellow-400 text-gray-800  font-semibold p-3 rounded-lg mt-5'>Confirm</Link>
              <button onClick={()=>{
              props.setConfirmRidePopupPanel(false)
              props.setRidePopupPanel(false)
              }} className='w-full bg-red-500 text-white font-semibold p-3 rounded-lg mt-2'>Cancel</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default ConfirmRidePopUp