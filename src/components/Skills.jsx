import React from 'react'
import image from '../files/IMG-20230209-WA0000.jpg'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaBootstrap } from 'react-icons/fa6'
import { BiLogoJavascript, BiLogoMongodb, BiLogoTailwindCss, BiLogoNodejs, BiLogoGit } from 'react-icons/bi'
import { SiExpress } from 'react-icons/si'
import { Link } from 'react-scroll'



const Skills = () => {
    return (

        <>
            <div className='h-[90vh] flex flex-col justify-center items-center' id='skills'>
                <div className='max-w-7xl mx-auto grid md:grid-cols-12 grid-cols-4 justify-between items-center gap-12 py-12 mt-4 md:my-0'>
                    <div className='md:col-span-6 col-span-4 flex flex-col justify-center items-center leading-8 gap-y-2'>
                        <p className='text-2xl font-[500]'>My
                            <span className='text-textSec'> Skills</span>
                        </p>
                        <p className='text-xl text-center'>
                            Skills I have acquired to develop dynamic webpages and web application.
                        </p>
                        <Link to="projects" smooth={true} duration={500}>
                            <button className='bg-ctaPrimary text-textPrimary px-2 py-1 rounded-md hover:bg-ctaSecondary'>See Projects</button>
                        </Link>

                    </div>

                    <div className='md:col-span-6 col-span-4 '>
                        <div className='grid grid-cols-12 justify-between gap-x-2 md:mx-0 mx-6'>
                            <div className='col-span-6 flex flex-col gap-4'>
                                <div className='text-[24px] text-ctaPrimary col-span-2 flex items-center gap-1'><AiOutlineHtml5 />HTML5</div>
                                <div className='text-[24px] text-ctaPrimary col-span-2 flex items-center gap-1'><FaCss3Alt />CSS3</div>
                                <div className='text-[24px] text-ctaPrimary col-span-2 flex items-center gap-1'><BiLogoJavascript />Javascript</div>
                                <div className='text-[24px] text-ctaPrimary col-span-2 flex items-center gap-1'><FaReact />ReactJS</div>
                                <div className='text-[24px] text-ctaPrimary col-span-2 flex items-center gap-1'><BiLogoTailwindCss />TailwindCSS</div>
                                <div className='text-[24px] text-ctaPrimary col-span-2 flex items-center gap-1'><FaBootstrap />Bootstrap</div>

                            </div>
                            <div className='col-span-6 flex flex-col gap-4'>
                                <div className='text-[24px] text-ctaPrimary col-span-2 flex items-center gap-1'><BiLogoMongodb />MongoDB</div>
                                <div className='text-[24px] text-ctaPrimary col-span-2 flex items-center gap-1'><SiExpress />ExpressJS</div>
                                <div className='text-[24px] text-ctaPrimary col-span-2 flex items-center gap-1'><BiLogoNodejs />NodeJS</div>
                                <div className='text-[24px] text-ctaPrimary col-span-2 flex items-center gap-1'><BiLogoGit />Git & Github</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills