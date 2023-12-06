"use client"
import Image from 'next/image';
import React, { useRef } from 'react'
import scrollDown from '@/hooks/scrollDown'
import { useDataBanner } from './DataContext';

function Banner() {
    const scrollRefTech = useRef()
    const context = useDataBanner()
    let imgBanner = 'https://cms-dac.okhub.tech/wp-content/uploads/2023/11/TechnologyBanner1.png'
    return (
        <section>
            <div className='banner banner_home w-full md:h-[70vh] lg:h-[100vh] h-[100rem] relative '>
                <div className='absolute inset-0 bg-[#F5F5F5]'></div>
                <Image src={context.dataBanner?.background || imgBanner} quality={100} alt='banner' fill className='w-full md:rounded-br-[13.54rem] rounded-br-[16rem] h-full object-cover z-[0]' />
                <div className='flex flex-col justify-end absolute md:right-[14.17rem] md:bottom-[5.9rem] bottom-[3.73rem] max-md:left-[4.27rem]'>
                    <h2 
                        dangerouslySetInnerHTML={{ __html: `${context.dataBanner?.text || 'Công nghệ in Offset'}` }}
                        className='md:w-[30.3125rem]  text-[#fff] md:text-[3.4375rem] text-[8.53333rem] font-bold leading-[116.662%] max-md:mb-[1rem]'>
                    </h2>
                    <svg onClick={() => scrollDown(scrollRefTech, 'start')} xmlns="http://www.w3.org/2000/svg" className='arrow_down md:mt-[2rem] md:w-[2.67969rem] md:h-[2.23958rem] w-[6.66667rem] h-[5.86667rem]' viewBox="0 0 43 50" fill="none">
                        <path d="M43 32.2278L43 21.24L25.0162 35.8564L25.0162 0.913573L17.9911 0.913573L17.9911 35.8564L2.91626e-06 21.24L2.43059e-06 32.2278L21.5 49.6953L43 32.2278Z" fill="white" />
                    </svg>
                </div>
                <div className="overlay absolute top-0 w-full h-[16rem]" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0.00) 89.06%)' }}></div>
            </div>
            <div ref={scrollRefTech}></div>
        </section>
    )
}

export default Banner