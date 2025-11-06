import { assets } from '@/assests/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>Introduction</h4>
            <h2 className='text-center text-5xl'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                {/* Image Section */}
                <div className='flex-1'>
                    <Image
                        src={assets.user_image}
                        alt='user'
                        className='w-full rounded-3xl'
                        
                    />
                </div>

                {/* Text Section */}
                <div className='flex-1'>
                    <p className='text-lg'>
                        I am a passionate frontend web developer with experience in building user-friendly, responsive, and modern websites.
                        I focus on creating smooth user experiences using the latest frontend technologies.
                    </p>
                    <p className='mt-4 text-lg'>
                        My goal is to write clean, maintainable code while continuously learning new tools and techniques to enhance the projects I work on.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
