import React from 'react'
import UpperComment from './UpperComment'
import PeopleComment from './PeopleComment'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LowerComment from './Lowercomment/LowerComment';

const Comment = () => {
    const commentData = [
        {
            img: 'comment/person1.png',
            name: 'Mary Atikson',
            comment: '" Clean design. document is just a fews page but i should be like this cuz when looking on laravel project it well prepare. everytime i need a component or something else. easy to find. "',
            color: 'btn'
        },
        {
            img: 'comment/person2.png',
            name: 'Shuvi Atikson',
            comment: '"Indigenous Creation has unique items from Nepal. I was very happy with their customer support and quality of the products that I purchase. I recommend it 100% to other who are looking for rare finds. "',
            color: 'icons'
        },
        {
            img: 'comment/person3.png',
            name: 'Shuvi Atikson',
            comment: '"One stop shop for authentic Nepali products. I was referred by a friend to this website since I was looking to add some Nepali authenticity  to my place and fortunately wasnt disappointed with the collection they had. "',
            color: 'btn'
        },
        {
            img: 'comment/person1.png',
            name: 'Mary Atikson',
            comment: '" Clean design. document is just a fews page but i should be like this cuz when looking on laravel project it well prepare. everytime i need a component or something else. easy to find. "',
            color: 'btn'
        },
        {
            img: 'comment/person2.png',
            name: 'Shuvi Atikson',
            comment: '"Indigenous Creation has unique items from Nepal. I was very happy with their customer support and quality of the products that I purchase. I recommend it 100% to other who are looking for rare finds. "',
            color: 'icons'
        },
        {
            img: 'comment/person3.png',
            name: 'Shuvi Atikson',
            comment: '"One stop shop for authentic Nepali products. I was referred by a friend to this website since I was looking to add some Nepali authenticity  to my place and fortunately wasnt disappointed with the collection they had. "',
            color: 'btn'
        },

    ]
    return (
        <div className='flex flex-col '>
            <UpperComment />
            <div className='px-10 sm:px-13 md:px-18 lg:px-24 xl:px-28' >
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={2500}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={3}
                swipeable>
                {
                    commentData && commentData.map((items, idx) => {
                        return (
                            <PeopleComment data={items} idx={idx} />

                        )
                    })
                }
            </Carousel>
            </div>

            <LowerComment />
    </div >
  )
}

export default Comment