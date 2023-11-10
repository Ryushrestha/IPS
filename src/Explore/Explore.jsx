import React from 'react'
import { BiSolidDroplet } from 'react-icons/bi'
const Explore = () => {
    return (
        <div className='relative  z-10'>
            <img src='border/border_d.png' className='w-full absolute top-0' />
            <img src='explore/e_img.png' className='w-full' />
            <span className='w-full absolute sm:top-1/4 top-3 md:top-1/3 gap-4'>
                <img src='explore/e_icon.png' className='w-10 md:w-14 mx-auto' />
                <p className='text-lg md:text-2xl text-white w-fit font-semibold mx-auto mt-3'>#Know your artisans </p>
                <p className='text-white w-4/5 text-sm sm:text-base sm:w-2/3 md:w-1/2 text-center mx-auto '>Learn the stories of those who made the things you love.
                    We're bringing to light the human stories behind the things we wear.Uncover stories of the world's hidden makers. Discover extraordinary craftsmanship with a human story.</p>
                <button className='bg-btn flex flex-row gap-2 p-2 mx-auto text-white rounded-tr-2xl  cursor-pointe mt-5'>Explore Product <BiSolidDroplet className='rotate-90 my-auto' /></button>
            </span>
            <img src='border/border.png' className='w-full absolute bottom-0' />
        </div>
    )
}

export default Explore