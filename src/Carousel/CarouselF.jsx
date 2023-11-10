import React from 'react'
import CarouselRight from './CarouselRight'
import CarouselLeft from './CarouselLeft'
import CarouselMid from './CarouselMid'

const CarouselF = () => {
  return (
    <div className='flex flex-row w-full'>
        <CarouselLeft/>
        <CarouselMid/>
        <CarouselRight/>
    </div>
  )
}

export default CarouselF