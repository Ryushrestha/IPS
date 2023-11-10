import React from 'react'
import {FaHandHoldingDollar} from 'react-icons/fa6'

const LowerBodyCard = ({data}) => {
   
  return (
    <span className='relative  w-fit justify-center items-center'>
        <img src={data.img} />
        
        <span className='absolute  w-full top-1/3 '>
        <p className='flex flex-col text-white mx-auto '>{data.icon}<p className='mx-auto'>{data.product}</p></p>
        </span>
    </span>
  )
}

export default LowerBodyCard