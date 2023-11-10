import React from 'react'

const CarouselRight = () => {
  return (
    <div className='relative h-96' style={{backgroundColor:"#efe3c7"}}>
        <img src='border/border_r.png' className='max-h-full '/> 
        <img src='carousel/e.png' className='absolute top-0 h-1/3'/>
        <img src='carousel/e.png' className='absolute top-1/3 h-1/3'/>
        <img src='carousel/er.png' className='absolute bottom-0 h-1/3'/>
    </div>
  )
}

export default CarouselRight