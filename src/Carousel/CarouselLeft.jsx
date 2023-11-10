import React from 'react'

const CarouselLeft = () => {
  return (
    <div className='h-96 relative flex flex-row'>
        <img src='carousel/w.png' className='max-h-full'/>
        <img src='carousel/color.png' className='max-h-full absolute right-0'/>
    </div>
  )
}

export default CarouselLeft