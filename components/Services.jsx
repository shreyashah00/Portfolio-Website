import { assets, serviceData } from '@/assests/assets'
import React from 'react'
import Image from 'next/image' // needed for icons

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
            <h2 className='text-center text-5xl'>My Services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
                I am a passionate frontend web developer with experience in building user-friendly, responsive, and modern websites.
                I focus on creating smooth user experiences using the latest frontend technologies.
            </p>

            <div className='grid grid-cols-4 gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index}>
                        <Image src={icon} alt={title} width={60} height={60} />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        {link && (
                            <a href={link} className='flex items-center gap-1 text-blue-500 hover:underline'>
                                Learn More
                                <Image src={assets.right_arrow} alt='' width={16} height={16} />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
