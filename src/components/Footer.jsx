import React from 'react'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail,AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <>

            <div className='bg-nav'>
                <div className='max-w-7xl mx-auto py-6 grid grid-cols-12 justify-items-between items-center'>
                    <div className='col-span-2'>
                        <p className='text-2xl font-[500]'>
                            <span className='text-textPrimary'>Bish</span>
                            <span className='text-ctaSecondary'>was</span>
                        </p>
                    </div>
                    <div className='col-span-6 flex flex-row justify-center item-center gap-4'>
                        <button className='bg-textPrimary text-ctaPrimary hover:bg-ctaHover text-xl font-[400] p-1 rounded-[60%] hover:bg-ctasec text-md'><AiOutlineGithub /></button>
                        <button className='bg-textPrimary text-ctaPrimary hover:bg-ctaHover text-xl font-[400] p-1 rounded-[60%] hover:bg-ctasec text-md'><AiOutlineLinkedin /></button>
                        <button className='bg-textPrimary text-ctaPrimary hover:bg-ctaHover text-xl font-[400] p-1 rounded-[60%] hover:bg-ctasec text-md'><AiOutlineInstagram /></button>
                    </div>
                    <div className='col-span-4 flex justify-end'>
                        <p className='text-[#757575] text-sm'>Copyright Bishwas Timalsina. All rights reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer