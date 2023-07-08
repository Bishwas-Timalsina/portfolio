import React from 'react'
import image from '../files/IMG-20230209-WA0000.jpg'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import { Link } from 'react-scroll'


const HeroSection = () => {
    return (
        <>
            <div className='h-[100vh] flex flex-col justify-center items-center' id='home'>
                <div className='max-w-7xl mx-auto grid grid-cols-12 justify-between items-center gap-12 py-12'>
                    <div className='col-span-6 flex flex-col leading-8 gap-y-4'>
                        <p className='text-2xl font-[500]'>Hello,
                            <span className='text-textSec'> I'm</span>
                        </p>
                        <p className='text-textSec text-4xl'>Bishwas Timalsina</p>
                        <p className='text-2xl'>Web Developer</p>
                        <p className='text-xl'>MERN Stack Developer focused on crafting immersive web applications with an emphasis on user satisfaction.</p>

                        <Link to="contacts" smooth={true} duration={500}>
                            <button className='bg-ctaPrimary text-textPrimary text-2xl px-2 py-1 rounded-md hover:bg-ctaSecondary w-[20%]'>Let's Talk</button>
                        </Link>


                        <div className='flex flex-row gap-4 mt-2'>

                            <a href="https://github.com/bishwas-timalsina" target='_blank'>
                                <button className='bg-ctaPrimary p-2 rounded-[60%] hover:bg-ctaSecondary text-2xl text-textPrimary'><AiOutlineGithub /></button>
                            </a>

                            <a href="https://m.facebook.com/profile.php?id=100006942044685" target='_blank'>
                                <button className='bg-ctaPrimary p-2 rounded-[60%] hover:bg-ctaSecondary text-2xl text-textPrimary'><BiLogoFacebook /></button>
                            </a>
                            <a href="https://www.linkedin.com/in/bishwas-timalsina-110a59234" target='_blank'>
                                <button className='bg-ctaPrimary p-2 rounded-[60%] hover:bg-ctaSecondary text-2xl text-textPrimary'><AiOutlineLinkedin /></button>
                            </a>

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