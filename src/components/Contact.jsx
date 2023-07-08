import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center '>
                <div className='max-w-7xl mx-auto py-4 flex flex-col justify-center items-center gap-8 w-[50%]'>
                    <p className='mt-4 text-2xl text-center font-[500]'>Get in <span className='text-ctaPrimary'> Touch</span></p>


                    <form action="" className='grid grid-cols-12 w-[100%] gap-4'>
                        <input type="text" placeholder='Enter Your name' className='col-span-6 h-[46px] px-2 outline-none rounded-md bg-[#8d8d8d] caret-white placeholder:text-white' />
                        <input type="email" placeholder='Enter Your Email' className='col-span-6 h-[46px] px-2 outline-none rounded-md bg-[#8d8d8d] caret-white placeholder:text-white' />
                        <textarea placeholder='Enter Your Message' className='col-span-12 h-[200px] outline-none rounded-md bg-[#8d8d8d] caret-white placeholder:text-white px-2 py-3' />
                        <input type="submit" value='Submit' className='bg-ctaPrimary rounded-md mx-auto text-white tet-2xl font-[500] col-span-12 px-4 py-2' />

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact