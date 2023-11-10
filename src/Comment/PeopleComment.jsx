import React from 'react'
import {BiSolidCommentDots} from 'react-icons/bi'
const PeopleComment = ({data,idx}) => {
  return (
    <div className={`flex flex-col gap-5 mx-5 ${idx%2 !== 0 ? 'mt-10 ' :'mt-0'}`}>
    <div className={`bg-${data.color} bg-opacity-10 py-4 px-4  rounded-lg h-52 border   border-${data.color} relative `}>
        <span className='py-3 h-full ' >
            <p className='my-auto text-sm sm:text-base' style={{color:'#191919'}}>{data.comment}</p>
        </span>
        <BiSolidCommentDots className={`text-${data.color} text-4xl absolute -bottom-4 left-4`} />

    </div>
    <div className='flex flex-row gap-2 h-f '>
        <img src={data.img} className='h-20'/>
        <span className='my-auto'>
            <p className='text-base sm:text-lg font-semibold'>{data.name}</p>
            <p className={`text-${data.color}`}>A Happy Customer</p>
        </span>
    </div>
    </div>
  )
}

export default PeopleComment