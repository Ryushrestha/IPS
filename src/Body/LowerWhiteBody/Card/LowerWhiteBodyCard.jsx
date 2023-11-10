import React from 'react'

const LowerWhiteBodyCard = ({data}) => {
  return (
    <div className='border border-txt-title p-1 relative my-2 sm:my-0 ' l>
        <img src={data.img} className=' md:border md:border-black '/>
        <span className='w-full absolute bottom-1/3 z-10'>
            <img src='icon/logo_icon.png' className='mx-auto' />
            </span>
            <span className='absolute bottom-1/4 w-full '>
                <p className='py-4 bg-white font-bold text-center '>Ceremony {'('}wedding {")"} </p>
            </span>
    </div>
  )
}

export default LowerWhiteBodyCard