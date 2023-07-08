import React from 'react'
import image from '../files/IMG-20230209-WA0000.jpg'

const AboutMe = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-nav'>
                <div className='max-w-7xl mx-auto grid grid-cols-12 justify-between items-center gap-8 py-12'>
                    <div className='col-span-6'>
                        <img src={image} alt="" className='w-[70%] rounded-lg' />
                    </div>
                    <div className='col-span-6 flex flex-col leading-8 gap-y-2'>
                        <p className='text-2xl font-[500] text-textPrimary'>My
                            <span className='text-ctaHover'> intro</span>
                        </p>
                        <p className='text-textPrimary text-4xl'>About me</p>
                        <p className='text-lg text-textPrimary'>MERN Stack Developer, I create dynamic web application to help your business achieve technological advancement.
                            I can build responsive, visually appealing website with UI/UX interface.</p>
                        <button className='bg-ctaSecondary text-white text-2xl px-2 py-1 rounded-md hover:bg-ctaHover w-[20%]'>Let's Talk</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe