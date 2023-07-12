import React from 'react'
import { AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'

const Footer = () => {
    return (
        <>

            <div className='bg-nav'>
                <div className='max-w-7xl mx-auto py-6 grid md:grid-cols-12 grid-cols-2 justify-items-between items-center'>
                    <div className='col-span-2'>
                        <p className='text-2xl font-[500] md:text-left text-center'>
                            <span className='text-textPrimary'>Bish</span>
                            <span className='text-ctaSecondary'>was</span>
                        </p>
                    </div>
                    <div className='md:col-span-6 col-span-2 flex flex-row justify-center item-center gap-4'>

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
                    <div className='md:col-span-4 col-span-2 flex md:justify-end justify-center'>
                        <p className='text-[#757575] text-sm'>Copyright Bishwas Timalsina. All rights reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer