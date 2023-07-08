import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <>
            <div className='bg-nav fixed w-full z-100 navbar'>
                <div className='max-w-7xl mx-auto py-6 grid grid-cols-12 justify-items-between items-center'>
                    <div className='col-span-2 text-textPrimary'>
                        <p className='text-2xl font-[500]'>
                            <span className=''>Bish</span>
                            <span className='text-ctaSecondary'>was</span>
                        </p>
                    </div>

                    <ul className='col-span-10 flex justify-end gap-x-12 items-center text-xl cursor-pointer text-textPrimary'>
                        <Link to="home" smooth={true} duration={500}>
                            <li className='hover:text-ctaHover transition duration-300 text-ctaHover'>Home</li>
                        </Link>
                        <Link to="about" smooth={true} duration={500}>
                            <li className='hover:text-ctaHover transition duration-300'>About</li>
                        </Link>
                        <Link to="skills" smooth={true} duration={500}>
                            <li className='hover:text-ctaHover transition duration-300'>Skills</li>
                        </Link>
                        <Link to="projects" smooth={true} duration={500}>
                            <li className='hover:text-ctaHover transition duration-300'>Projects</li>
                        </Link>
                        <Link to="contacts" smooth={true} duration={500}>
                            <li className='hover:text-ctaHover transition duration-300'>Contacts</li>
                        </Link>



                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar