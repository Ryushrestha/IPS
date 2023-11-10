import React from 'react'
import {BiChevronDown} from 'react-icons/bi'
const LowerBodyText = () => {
    return (
        <div className='px-10 sm:px-13 md:px-18 lg:px-24 xl:px-28  flex flex-row h-fit'>
            <div className='md:w-1/2 w-full flex flex-col gap-2'>
                <img src='icon/flower.png' className='w-12' />
                <div>
                    <p className='flex flex-row gap-1'>Cultural<p className='text-btn'>Catalogue</p></p>
                    <span className='text-2xl font-semibold'>"Discover the Soul of Different Cultures</span>
                </div>
                <img src='icon/divider.png' className='w-12' />
            </div>

            <div className='w-1/2 hidden md:flex flex-row justify-between my-auto'>
                <p className='text-base w-1/4 '>Indigenous Group:</p>
                <div class=" ">
                   
                        <button type="button" class="flex   justify-center gap-44 text-base  bg-white px-3 py-1" >
                            Gurung Community
                            <BiChevronDown className='my-auto'/>
                        </button>
                  
                </div>
            </div>
        </div>
    )
}

export default LowerBodyText