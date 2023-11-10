import React from 'react'

const UpperComment = () => {
  return (
    <div className='bg-gradient-to-b from-white to-#F5EED9 flex flex-col w-full mb-7'>
        <img src='comment/c_icon.png' className='w-12 mx-auto'/>
        <span className='flex flex-col gap-2 mx-auto'>
            <p className='text-lg text-txt-title mx-auto'>Happy Customers</p>
            <p className='text-2xl'>You are helping us to fulfill Our Promise</p>
        </span>
        <img src='icon/divider_yb.png' className='mx-auto'/>
    </div>
  )
}

export default UpperComment