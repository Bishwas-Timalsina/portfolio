import React from 'react'
import image from '../files/IMG-20230209-WA0000.jpg'
import {AiOutlineLinkedin,AiOutlineGithub,AiOutlineMail} from 'react-icons/ai'

const HeroSection = () => {
    return (
        <>
            <div className='h-[90vh] flex flex-col justify-center items-center'>
                <div className='max-w-7xl mx-auto grid grid-cols-12 justify-between items-center gap-12 py-12'>
                    <div className='col-span-6 flex flex-col leading-8 gap-y-2'>
                        <p className='text-2xl font-[500]'>Hello,
                            <span className='text-textSec'> I'm</span>
                        </p>
                        <p className='text-textSec text-4xl'>Bishwas Timalsina</p>
                        <p className='text-2xl'>Web Developer</p>
                        <p className='text-xl'>MERN Stack Developer focused on crafting immersive web applications with an emphasis on user satisfaction.</p>
                        <button className='bg-ctaPrimary text-textPrimary text-2xl px-2 py-1 rounded-md hover:bg-ctaSecondary w-[20%]'>Let's Talk</button>
                        <div className='flex flex-row gap-4 mt-2'>
                            <button className='bg-ctaPrimary p-2 rounded-[60%] hover:bg-ctaSecondary text-2xl text-textPrimary'><AiOutlineGithub/></button>
                            <button className='bg-ctaPrimary p-2 rounded-[60%] hover:bg-ctaSecondary text-2xl text-textPrimary'><AiOutlineMail/></button>
                            <button className='bg-ctaPrimary p-2 rounded-[60%] hover:bg-ctaSecondary text-2xl text-textPrimary'><AiOutlineLinkedin/></button>
                        </div>
                    </div>

                    <div className='col-span-6 flex justify-end'>
                        <img src={image} alt="" className='w-[70%] rounded-lg' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection