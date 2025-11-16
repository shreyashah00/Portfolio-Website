import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
const Contact = () => {
    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
            <h4 className='text-center mb-2 text-lg'>Connect with me</h4>
            <h2 className='text-center text-5xl font-semibold'>Get in touch</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700'>
                I’d love to hear from you! Whether you have a project in mind, a question, or just want to connect, feel free to reach out anytime.
            </p>

            <form className='max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mt-4 mb-8'>
                    <input
                        type='text'
                        placeholder='Enter your name'
                        required
                        className='p-3 w-full outline-none border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-400 transition-all duration-200'
                    />
                    <input
                        type='email'
                        placeholder='Enter your email'
                        required
                        className='p-3 w-full outline-none border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-400 transition-all duration-200'
                    />
                </div>

                <textarea
                    rows='6'
                    placeholder='Enter your message'
                    required
                    className='w-full p-3 outline-none border border-gray-300 rounded-md mb-6 resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-400 transition-all duration-200'
                />

                <button
                    type='submit'
                    className='w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2'
                >
                    Submit Now
                    <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </button>

                <p className='text-center text-gray-500 mt-4'>sending......</p>
            </form>
        </div>
    )
}

export default Contact
