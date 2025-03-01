/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h5 className="p-1 text-center w-[93%] absolute top-0 " onClick={()=>{
                    props.setRidePopupPanel(false)
                }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className="text-2xl font-semibold mb-3">Availabe Rides</h3>
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
          <div className='flex w-full items-center justify-between mt-5'>
            <button onClick={()=>{
            props.setRidePopupPanel(false)
            }} className=' bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg mt-1'>Ignore</button>
            <button onClick={()=>{
            props.setConfirmRidePopupPanel(true)
            }} className=' bg-yellow-400 text-gray-800  font-semibold p-3 px-10 rounded-lg'>Accept</button>
            
          </div>
        </div>
    </div>
  )
}

export default RidePopUp