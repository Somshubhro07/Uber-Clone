/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0 " onClick={()=>{
                    props.waitingForDriver(false)
                }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <div className='flex items-center justify-between'>
          <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
            <div className='text-right'>
              <h2 className='text-lg font-medium '>Som</h2>
              <h4 className='text-xl font-semibold -mt-1 -mb-1'>wb 12ab 3456</h4>
              <p className='font-sm text-gray-600'>Maruti Suzuki Alto</p>
            </div>
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
          </div>
          
    </div>
  )
}
