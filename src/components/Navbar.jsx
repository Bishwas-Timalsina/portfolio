import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='bg-nav'>
                <div className='max-w-7xl mx-auto py-6 grid grid-cols-12 justify-items-between items-center'>
                    <div className='col-span-2 text-textPrimary'>
                        <p className='text-2xl font-[500]'>
                            <span className=''>Bish</span>
                            <span className='text-ctaSecondary'>was</span>
                        </p>
                    </div>

                    <ul className='col-span-10 flex justify-end gap-x-12 items-center text-xl cursor-pointer text-textPrimary'>
                        <li className='hover:text-ctaHover transition duration-300 text-ctaHover'>Home</li>
                        <li className='hover:text-ctaHover transition duration-300'>About</li>
                        <li className='hover:text-ctaHover transition duration-300'>Skills</li>
                        <li className='hover:text-ctaHover transition duration-300'>Projects</li>
                        <li className='hover:text-ctaHover transition duration-300'>Contacts</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar