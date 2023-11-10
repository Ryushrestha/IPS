import React from 'react'
import {BiSolidDroplet} from 'react-icons/bi'
const LowerBodyImg = () => {
    return (
        <div className='px-10 sm:px-13 md:px-18 lg:px-24 xl:px-28 py-10'>
            <div className=' relative z-30'>
                <img src='body/img1.jpg' />
                <p className='bg-icons w-fit text-white px-2 absolute text-xs sm:text-sm md:text-base top-0 z-50'>Ad by DASTKAR</p>

                <span className='flex flex-col mx-auto absolute top-1/4 md:top-1/3 w-full'>
                    <button className='text-icons py-2 px-1 flex flex-row mx-auto'><p className='flex flex-row gap-1 text-xs sm:text-sm md:text-base bg-white py-2 px-2 rounded'>Best handpicked <p className='font-semibold'>Artisanal Products</p></p></button>
                    <p className='text-sm sm:text-base md:text-xl lg:text-2xl text-white mx-auto'>Best in local artistry and traditional craftsmanship</p>
                    <img src='icon/divider_y.png' className='w-6 sm:w-8 md:w-12 mx-auto mt-2 sm:mt-3 md:mt-5' />
                    <button className='bg-btn flex flex-row gap-2 px-2 sm:px-3 md:px-4 py-2 mx-auto text-white rounded-tr-2xl  cursor-pointer mt-6 md:mt-10'>Shop Now <BiSolidDroplet className='rotate-90 my-auto' /></button>
                </span>
                
            </div>
        </div>
    )
}

export default LowerBodyImg