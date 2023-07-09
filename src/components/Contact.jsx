import React, { useState } from 'react'
import emailjs from 'emailjs-com';


const Contact = () => {
    const [formData, setFromData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const publicKey = 'TP-2hLZnyaQJOFANI'
    const serviceID = 'contactForm';
    const templateID = 'contactForm';
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.name || formData.email || formData.message) {
            emailjs.send(serviceID, templateID, {
                from_name: formData.name,
                to_name: "Bishwas Timalsina",
                message: formData.message,
                reply_to: formData.email,
            }, publicKey)
                .then(() => {
                    console.log('Form Submitted')
                    setFromData({
                        name: '',
                        email: '',
                        message: ''
                    })
                    window.alert("Email Sent Successfully")
                })
                .catch((e) => {
                    console.log("Error", e)
                })
        }
        else{
            window.alert("Please Fill Out the Field")
        }


    }
    const handleInputChange = (event) => {
        const { name, value } = event.target

        setFromData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    return (
        <>
            <div className='h-[80vh] flex flex-col justify-center items-center ' id='contacts'>
                <div className='max-w-7xl mx-auto py-4 flex flex-col justify-center items-center gap-8 w-[50%]'>
                    <p className='mt-4 text-2xl text-center font-[500]'>Get in <span className='text-ctaPrimary'> Touch</span></p>


                    <form action="" className='grid grid-cols-12 w-[100%] gap-4' onSubmit={handleSubmit}>
                        <input type="text" name='name'
                            onChange={handleInputChange}
                            value={formData.name}
                            required='true'
                            placeholder='Enter Your name' className='col-span-6 h-[46px] px-2 outline-none rounded-md bg-[#8d8d8d] caret-white placeholder:text-white' />
                        <input type="email" name='email'
                            onChange={handleInputChange}
                            value={formData.email}
                            required='true'
                            placeholder='Enter Your Email' className='col-span-6 h-[46px] px-2 outline-none rounded-md bg-[#8d8d8d] caret-white placeholder:text-white' />
                        <textarea placeholder='Enter Your Message' name='message'
                            onChange={handleInputChange}
                            value={formData.message}
                            required='true'
                            className='col-span-12 h-[200px] outline-none rounded-md bg-[#8d8d8d] caret-white placeholder:text-white px-2 py-3' />
                        <input type="submit" value='Submit' className='bg-ctaPrimary rounded-md mx-auto text-white tet-2xl font-[500] col-span-12 px-4 py-2' />

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact