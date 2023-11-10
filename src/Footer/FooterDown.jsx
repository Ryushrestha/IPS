import React from 'react'

const FooterDown = () => {
  return (
    <div className='flex flex-row justify-between pl-10 sm:pl-13 md:pl-18 lg:pl-24 xl:pl-28'>
        <span className='flex flex-col gap-3'>
        <p className='md:text-lg sm:text-base text-sm font-semibold pb-3'>Payment Partner</p>
            <span className='flex flex-row gap-3'>
                <img src='payment/k.png' className='w-20' />
                <img src='payment/e.png' className='w-20' />
                <img src='payment/p.png' className='w-20' />

            </span>
        </span>

        <span className='flex flex-col gap-3'>
        <p className='md:text-lg sm:text-base text-sm font-semibold pb-3'>We are also available on</p>
            <span className='flex flex-row gap-3'>
                <img src='payment/as.png' className='w-20' />
                <img src='payment/gp.png' className='w-20' />
            </span>
        </span>

        <img src='body/lowerbodycard/cultural.png' className='w-1/5'/>
    </div>
  )
}

export default FooterDown