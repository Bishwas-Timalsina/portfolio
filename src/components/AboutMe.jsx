import React from 'react'
import image from '../files/IMG-20230209-WA0000.jpg'
import { AiOutlineDownload } from 'react-icons/ai'

const AboutMe = () => {
    const handleDownload = () => {
        const url = `${process.env.PUBLIC_URL}/resume.pdf`;
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-nav' id='about'>
                <div className='max-w-7xl mx-auto grid grid-cols-12 justify-between items-center gap-8 py-12'>
                    <div className='md:col-span-6 col-span-12 md:flex justify-center md:justify-start hidden'>
                        <img src={image} alt="" className='w-[70%] rounded-lg' />
                    </div>
                    <div className='md:col-span-6 col-span-12 flex flex-col jjustify-center items-center leading-8 gap-y-2'>
                        <p className='text-2xl font-[500] text-textPrimary'>My
                            <span className='text-ctaHover'> intro</span>
                        </p>
                        <p className='text-textPrimary text-4xl'>About me</p>
                        <p className='text-lg text-textPrimary text-center'>MERN Stack Developer, I create dynamic web application to help your business achieve technological advancement.
                            I can build responsive, visually appealing website with UI/UX interface.</p>
                        <button className='bg-ctaSecondary text-white text-xl px-2 py-1 rounded-md hover:bg-ctaHover flex items-center gap-2'
                            onClick={handleDownload}>
                            Resume <AiOutlineDownload />
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe