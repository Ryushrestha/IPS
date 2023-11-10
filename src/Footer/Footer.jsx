import React from 'react'
import FooterUp from './FooterUp'
import FooterDown from './FooterDown'


const Footer = () => {
  return (
    <div className=''>
        <FooterUp/>
        <FooterDown/>
        <div style={{backgroundColor:"#31332D"}} className='py-2 px-10 sm:px-13 md:px-18 lg:px-24 xl:px-28 flex flex-row justify-between'>
            <p className='text-white text-sm'>Copyright2023Sushanmah. All rights reserved.</p>
            <p className='text-white text-sm'>Designed and Developed by : Ryu Shrestha</p>
        </div>
    </div>
  )
}

export default Footer