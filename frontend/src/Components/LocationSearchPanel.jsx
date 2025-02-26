/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const LocationSearchPanel = (props) => {

  //sample array for loacation
  const locations = [
    '178 nsc boase road, amaya, tower 1',
    '180 nsc boase road, amaya, tower 2',
    '182 nsc boase road, amaya, tower 3'
  ]

  return (
    <div>
    {/* this is just sample data */}
    {
      locations.map(function(elem,idx){
        return <div key={idx} onClick={() =>{
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
              }} className='flex gap-4 border-2 border-gray-100 active:border-black px-3 rounded-xl items-center my-4 justify-start'>
              <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill "></i></h2>
              <h4 className='font-medium'>{elem}</h4>
              </div>
      })
    }

      </div>
  )
}

export default LocationSearchPanel