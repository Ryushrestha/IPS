import React from 'react'

const LowerWhiteBodyAd = () => {
  return (
    <div className=' pr-0 sm:pr-13 md:pr-18 lg:pr-24 xl:pr-28 flex flex-col sm:flex-row h-fit justify-between gap-5'>
        <div className='sm:w-1/2 w-80 flex flex-col h-full' style={{background:'#F4F4F4'}}>
            <p className='text-white px-2 text-base bg-icons w-fit'>Ad by DASTKAR</p>
            <span className='flex flex-row justify-between'>
                <p className='w-1/3 mx-auto  my-auto'>5,000 of our very best giftsorganized by recipients & interest</p>
                <img src='body/lowerad.png' className='sm:w-full w-32'/>
            </span>
        </div>
<div className='w-full sm:w-1/2 flex flex-row justify-center sm:justify-evenly gap-5 sm:gap-0'>
        <div className='h-full relative '>
            <img src='body/bag.png'/>
            <span className='w-full absolute bottom-9 z-20'>
            <img src='icon/logo_icon.png' className='mx-auto' />
            </span>
            <span className='absolute bottom-0 w-full z-10'>
                <p className='py-4 bg-white opacity-80 font-bold text-center '>Ceremony {'('}wedding {")"} </p>
            </span>
        </div>

        <div className='h-full relative rounded-tr-lg '>
            <img src='body/bell.png'/>
            <span className='w-full absolute bottom-9 z-20'>
            <img src='icon/logo_icon.png' className='mx-auto' />
            </span>
            <span className='absolute bottom-0 w-full z-10'>
                <p className='py-4 bg-white opacity-80 font-bold text-center '>Rituals </p>
            </span>
        </div>

        </div>
    </div>
  )
}

export default LowerWhiteBodyAd