import React from 'react'

const CarouselImage = () => {
    return (
        <div className='flex flex-row h-96 relative w-full'>
            <img src='explore/girl.jpg' />
            <span className='absolute left-40 '>

            <img src='border/border_ry.png' className='h-96' />
            </span>
            <div className='flex flex-row  justify-end' >
                <div className='py-16 flex flex-col gap-2 w-4/5 justify-end'>
                    <p className='text-2xl font-semibold mx-auto'>We're on a mission to discover the extraordinary.</p>
                    <div className='flex flex-col gap-3 '>
                        <p className='tex-center'>We've been working with skilled artisans in Nepal for over three years, creating cultural and traditional belongings for ethnic and indigenous groups. They earn money for every purchase of their product.  Our mission is to deliver authentic cultural products that tell the story of the artisan and his dedication to the product.</p>

                        <div className='flex flex-row justify-around' style={{ color: '#505050' }}>
                            <span className='flex flex-col'>
                                <img src='icon/hand1.png' className='w-24' />
                                <p className='text-sm'>60+ Ethnic Groups</p>
                            </span>
                            <span className='flex flex-col'>
                                <img src='icon/hand2.png' className='w-24' />
                                <p className='text-sm'>800+ Skilled Artisans</p>
                            </span>
                            <span className='flex flex-col'>
                                <img src='icon/hand1.png' className='w-24' />
                                <p className='text-sm'>1000+ Handcrafts</p>
                            </span>
                        </div>
                    </div>

                    <div className='flex flex-row gap-3'>
                        <p className='text-lg font-bold'>Newsletter</p>
                        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                className="relative px-2 flex-auto rounded-l border border-solid border-neutral-300 "
                                placeholder="Your Email Address"
                                aria-label="Your Email Address"
                              />


                            <button
                               className='bg-btn text-white'>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <img src='border/border_r.png' className='h-full' />
            </div>
        </div>
    )
}

export default CarouselImage