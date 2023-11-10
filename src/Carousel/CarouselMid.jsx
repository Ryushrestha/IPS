import React from 'react'
import {BiSolidDroplet} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
const CarouselMid = () => {
  return (
    <div className='h-96 flex flex-col w-full' style={{backgroundColor:'#efe3c7'}}>
        <span className='my-auto gap-3 flex flex-col w-3/4 mx-auto'>
        <p className='text-sm sm:text-base text-center '>Magar Cultural Groups</p>
        <p className='flex flex-row text-base md:text-lg lg:xl xl:text-2xl text-center mx-auto gap-1'><p className='text-btn'>Preserving Heritage:</p>Support Artisans through Cultural Ecommerce</p>
        <p className='text-xs sm:text-base text-center '>Artisans create handmade products reflecting centuries of knowledge passed down through generations.</p>
        <div className='py-6 md:py-8 lg:py-10'>
        <button className='bg-btn flex flex-row gap-2 p-1 sm:p-2 mx-auto text-white rounded-tr-2xl  cursor-pointer'>Explore Product <BiSolidDroplet className='rotate-90 my-auto'/></button>
      </div>
       
      <span className='w-full relative'>
            <input placeholder='Seach all the product here' className='w-full p-2 rounded-2xl'/>
            <AiOutlineSearch className='p-1 bg-icons text-white text-2xl rounded-full absolute right-2 top-2'/>
        </span>
        </span>
       
        
    </div>
  )
}

export default CarouselMid