import React, { useState } from 'react'
import WhiteBodyText from './WhiteBodyText'
import Card from './Card/Card'
import {BiSolidDroplet} from 'react-icons/bi'
const UpperWhitebody = () => {
  const [active, setActive] = useState(1)
  const activeBtn = 'bg-icons text-white p-1 '
  const inactiveBtn = 'bg-white border p-1 border-icon text-black'

  const cardarray = [
    {
      img: 'Card/necklace_ring.jpg',
      product: "Newari Neclaces (Nepasika) Ring",
      disc_price: 'Rs 990',
      org_price: 'Rs 900',
      community: 'newar community'
    },
    {
      img: 'Card/Necklace.png',
      product: "Necklace with Leaf and Floral Design",
      disc_price: 'Rs 990',
      org_price: 'Rs 900',
      community: 'tharu community'
    },
    {
      img: 'Card/base.png',
      product: "",
      disc_price: 'Rs 990',
      org_price: 'Rs 900',
      community: 'Chepang community'
    },{
      img: 'Card/nepasika.png',
      product: "Necklace with Leaf and Floral Design",
      disc_price: 'Rs 990',
      org_price: 'Rs 900',
      community: 'Newar community'
    },{
      img: 'Card/light.png',
      product: "Daura Suruwal (Light Beige). Nepali Traditional Mens Wear",
      disc_price: 'Rs 990',
      org_price: 'Rs 900',
      community: 'tharu community'
    },
    {
      img: 'Card/daura.png',
      product: "Daura Suruwal (Light Beige). Nepali Traditional Mens Wear",
      disc_price: 'Rs 990',
      org_price: 'Rs 900',
      community: 'chepang community'
    },
  ]
  const whitebodytext=[{
    type:'Best handpicked',
    category:'Artisanal Products ',
    quote:'Best in local artistry and traditional craftsmanship',
    rightside:"This ranges from women and men's outfits to children's clothing, shoes, accessories, and more. People love their clothes, and fashion isn't going anywhere!",
  }]
  return (
    <div className='bg-white '>
      <WhiteBodyText data={whitebodytext}/>
      <div className='flex flex-row px-10 sm:px-13 md:px-18 lg:px-24 xl:px-28 gap-3'>
        <button className={active === 1 ? activeBtn : inactiveBtn} onClick={() => setActive(1)}>Best Seller</button>
        <button className={active === 2 ? activeBtn : inactiveBtn} onClick={() => setActive(2)}>Hot Collection</button>
        <button className={active === 3 ? activeBtn : inactiveBtn} onClick={() => setActive(3)}>New Arrival</button>
      </div>
      <div className='px-10 sm:px-13 md:px-18 lg:px-24 xl:px-28 flex flex-wrap  justify-center sm:justify-between '>
        {
          cardarray && cardarray.map((items)=>{
            return(
              <Card  data={items}/>
            )
          })
        }
      </div>
      <div className='py-14'>
        <button className='bg-btn flex flex-row gap-2 p-2 mx-auto text-white rounded-tr-2xl  cursor-pointer'>See More <BiSolidDroplet className='rotate-90 my-auto'/></button>
      </div>
    </div>
  )
}

export default UpperWhitebody