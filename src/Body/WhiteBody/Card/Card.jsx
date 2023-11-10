import React from 'react'

const Card = ({data}) => {
  return (
    <div className='h-card w-card mt-8'>
      <div className='relative '>
       <img src={data.img} className='h-3/4' />
       <img src='icon/best_seller.png' className='absolute top-0 z-10' />
       </div>

      <div className='h-1/4 flex flex-col gap-2 '>
        <p className='text-base font-medium'>{data.product}</p>
        <span className='flex gap-2'>
          <img src='icon/rating.png'/><p className='text-txt-title text-sm'>{'('}200{')'}</p></span>
        <span className='flex flex-row gap-2'>
          <p className='font-medium'>{data.disc_price}</p>
          <p className='text-txt-title line-through'>{data.org_price}</p>
        </span>
        <span>
        <p className='text-icons uppercase text-xs font-medium w-fit px-1' style={{background:'#F5EED9'}}>{data.community}</p>
        </span>
      </div>
    </div>
  )
}

export default Card
