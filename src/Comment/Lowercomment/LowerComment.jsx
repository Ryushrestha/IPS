import React from 'react'
import LowerCommentAd from './LowerCommentAd'

const LowerComment = () => {
    const imgArray = [
        {
            img: 'comment/img1.png'
        },
        {
            img: 'comment/img2.png'
        }, {
            img: 'comment/img3.png'
        }, {
            img: 'comment/img4.png'
        }, {
            img: 'comment/img5.png'
        },

    ]
    return (
        <div className='mt-20 w-full'>
            <div className='flex flex-row justify-between sm:h-64 h-40 md:h-80 mb-10 sm:mb-16 md:mb-24'>
            {
                imgArray && imgArray.map((items,idx)=>{
                    return(
                        <div className={`${idx%2 !==0 ? 'mt-10':'mt-0 '}`}>
                        <img src={items.img}  />
                        </div>
                    )
                })
            }
            </div>
            <span className='w-full mt-0'>
            <p className='mb:text-xl sm:text-lg text-sm lg:text-2xl xl:text-3xl mx-auto italic font-semibold flex flex-row  mb-10 justify-center'>Happy Customer, <p className='text-icons'>Preserving Culture</p>,<p className='text-btn'>Spreading Happiness</p></p>
            </span>
            <LowerCommentAd/>

        </div>
    )
}

export default LowerComment