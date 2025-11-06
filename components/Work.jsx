import { assets, workData } from '@/assests/assets'
import React from 'react'
import Image from 'next/image'

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>My Portfolio</h4>
            <h2 className='text-center text-5xl'>My Latest Works</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
                Welcome! I am a passionate frontend web developer with experience in building user-friendly, responsive, and modern websites.
                I focus on creating smooth user experiences using the latest frontend technologies.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {workData.map((project, index) => (
                    <div
                        key={index}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold text-lg'>{project.title}</h2>
                                <p className='text-sm text-gray-600'>{project.description}</p>
                            </div>
                            <div>
                                <Image src={assets.send_icon} alt='send icon' width={24} height={24} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Work
