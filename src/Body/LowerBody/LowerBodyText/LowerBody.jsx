import React from 'react'
import LowerBodyText from './LowerBodyText'
import LowerBodyLeft from './LowerBodyLeft'
import LowerBodyRight from './LowerBodyRight'
import LowerBodyCard from './Card/LowerBodyCard'
import './LowerBody.css'
import {FaTshirt} from 'react-icons/fa'
import {GiNecklaceDisplay} from 'react-icons/gi'
import {FaHandHoldingDollar} from 'react-icons/fa6'
import LowerBodyActiveCard from './Card/LowerBodyActiveCard'

const LowerBody = () => {

    const lowerCard=[
        {
            product:'Cultural Dress',
            icon:<FaTshirt className='mx-auto'/>,
            img:'body/cultural.png'
        },
        {
            product:'Ornament',
            icon:<GiNecklaceDisplay className='mx-auto'/>,
            img:'body/ornament.png'
        },
        {
            product:'Handmade Product',
            icon:<FaHandHoldingDollar className='mx-auto'/>,
            img:'body/handmade.png'
        },
    ]

    return (
        <div className='flex flex-col gap-2 '>
            <LowerBodyText/>

            <div className='flex flex-col hero  '>

            <div className='flex flex-col md:flex-row h-fit px-10 sm:px-13 md:px-18 lg:px-24 xl:px-28  '>
            <div className='w-full max-h-fit md:w-1/2'>
                <LowerBodyLeft/>
            </div>

            <div className='w-full md:w-1/2 '>
                <LowerBodyRight/>
            </div>
            </div>
            <div className='flex justify-between mt-4 px-10 sm:px-13 md:px-18 lg:px-24 xl:px-28  py-10' style={{alignItems:'baseline'}}>
                
            {
                lowerCard && lowerCard.map((items)=>{
                   return(<LowerBodyCard data={items}/>)
                })
            }
            <LowerBodyActiveCard/>
            </div>
            <img src='border/border.png'/>
            </div>
        </div>

    )
}

export default LowerBody