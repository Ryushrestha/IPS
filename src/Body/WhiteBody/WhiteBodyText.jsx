import React from 'react'

const WhiteBodyText = ({data}) => {
    
  return (
    <div className='px-10 sm:px-13 md:px-18 lg:px-24 xl:px-28 py-10 gap-3 flex ' style={{alignItems:'baseline'}}>
        <div className='w-1/2 flex flex-col gap-1'>
            <img src='icon/gift_.png' className='w-12'/>
            <span>
                <p className='flex flex-row text gap-1'>{data[0].type}<p className='text-btn font-semibold'>{data[0].category}</p></p>
            </span>
            <span className='text-2xl font-semibold'>{data[0].quote}</span>
            <img src='icon/divider.png' className='w-12'/>
        </div>

        <div className='w-1/2 h-full' >
            <span className='text align-baseline h-full text-txt-title' >{data[0].rightside}</span>
        </div>
    </div>
  )
}

export default WhiteBodyText