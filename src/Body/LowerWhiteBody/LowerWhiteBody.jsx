import React from 'react'
import WhiteBodyText from '../WhiteBody/WhiteBodyText'
import LowerWhiteBodyAd from './LowerWhiteBodyAd'
import LowerBodyActiveCard from '../LowerBody/LowerBodyText/Card/LowerBodyActiveCard'
import LowerBodyCard from '../LowerBody/LowerBodyText/Card/LowerBodyCard'
import LowerWhiteBodyCard from './Card/LowerWhiteBodyCard'

const LowerWhiteBody = () => {

    const whitebodytext = [{
        type: 'Popular',
        category: 'categories',
        quote: 'Beautifyul Hand Crafted products for you',
        rightside: "This ranges from women and men's outfits to children's clothing, shoes, accessories, and more. People love their clothes, and fashion isn't going anywhere!",
    }]

    const lowercard = [
        {
            name:'Souvenir with history/story',
            img:'body/lowerbodycard/souvenier.png'
        },
        {
            name:'Handmade Statues',
            img:'body/lowerbodycard/statues.png'
        },
        {
            name:'Festival Fashion',
            img:'body/lowerbodycard/fashion.png'
        },
    ]
    return (
        <div className='bg-white flex flex-col '>
            <WhiteBodyText data={whitebodytext} />
            <LowerWhiteBodyAd />
            <div className='flex flex-col sm:flex-row px-10 sm:px-13 md:px-18 lg:px-24 xl:px-28 justify-center sm:justify-between py-10'>
                {lowercard && lowercard.map((items)=>{
                    return(
                       <LowerWhiteBodyCard data={items}/>
                    )
                })}
            </div>
        
            
        </div>
    )
}

export default LowerWhiteBody