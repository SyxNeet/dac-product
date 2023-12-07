'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Popup({dataPopup,lang}) {
    const [isVisible, setIsVisible] = useState(false);
    const pathName = usePathname()
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(!isVisible);
        }, 7000);
        return () => clearTimeout(timeoutId);
      }, [isVisible,pathName]);
      const randomIndex = Math.floor(Math.random() * dataPopup?.length);
      const randomElement = dataPopup[randomIndex];
    return (
    (isVisible) && <div className='md:fixed top-[20%] right-[0] z-[9] w-[20rem]  rounded-tl-[1rem] rounded-bl-[1rem] bg-[#fff] px-[1rem] py-[1rem]'>
        <div className='absolute inset-0'></div>
        <p className='text-[1.7rem] text-[#444] leading-[1.2] '>{lang === 'vi' ? 'Tuyển dụng mới!!' : 'New Job!!'}</p>
        <Link href={`/${lang}/${lang === 'vi' ? 'tuyen-dung' : 'recruitment'}/${randomElement?.slug}`}>
            <h2 className='text-[1.3rem] text-[#444] leading-[1.2] '>
                {randomElement?.title}
            </h2>
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsVisible(false)} className='absolute top-[20%] right-[5%] w-[1rem] h-[1rem]'  viewBox="0 0 22 22" fill="none">
              <path d="M1.57785 20.0493C1.6417 20.1132 1.71752 20.1639 1.80098 20.1985C1.88445 20.2331 1.97391 20.2509 2.06426 20.2509C2.1546 20.2509 2.24407 20.2331 2.32753 20.1985C2.41099 20.1639 2.48681 20.1132 2.55066 20.0493L11 11.5999L19.4529 20.0493C19.5819 20.1783 19.7568 20.2508 19.9393 20.2508C20.1217 20.2508 20.2967 20.1783 20.4257 20.0493C20.5547 19.9203 20.6271 19.7453 20.6271 19.5629C20.6271 19.3804 20.5547 19.2055 20.4257 19.0765L11.9728 10.6271L20.4222 2.17429C20.5512 2.04529 20.6237 1.87032 20.6237 1.68788C20.6237 1.50544 20.5512 1.33048 20.4222 1.20148C20.2932 1.07247 20.1183 1 19.9358 1C19.7534 1 19.5784 1.07247 19.4494 1.20148L11 9.65429L2.54722 1.20491C2.4157 1.09228 2.24653 1.03343 2.0735 1.04011C1.90047 1.0468 1.73634 1.11852 1.6139 1.24096C1.49146 1.3634 1.41973 1.52754 1.41305 1.70056C1.40636 1.87359 1.46522 2.04277 1.57785 2.17429L10.0272 10.6271L1.57785 19.0799C1.4498 19.2087 1.37793 19.383 1.37793 19.5646C1.37793 19.7462 1.4498 19.9205 1.57785 20.0493Z" fill="#171717"/>
        </svg>
    </div>
  )
}

export default Popup