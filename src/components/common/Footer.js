'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import icon1 from '@/assets/imgs/Group.svg'
import icon2 from '@/assets/imgs/Group-1.svg'
import icon3 from '@/assets/imgs/Group-2.svg'
import icon4 from '@/assets/imgs/Group-3.svg'
import imgFooter from '@/assets/imgs/iconmoi.png'
import Link from 'next/link'

function Footer({ lang, data,dataSocialFooter }) {
  
  const [active, setActive] = useState(false)
  const contentRef = useRef()
  const scrollRef = useRef()
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
  const handleClick = () => {
    setActive(!active)
  }
  if (contentRef.current && active && isMobile) {
    contentRef.current.style.height = contentRef.current.scrollHeight + "px"
    contentRef.current.style.overflow = 'visible'
    scrollRef.current.style.rotate = '180deg'
  } else if (contentRef.current && !active && isMobile) {
    contentRef.current.style.height = '0'
    contentRef.current.style.overflow = 'hidden'
    scrollRef.current.style.rotate = '0deg'
  }
  if(!isMobile && contentRef.current){
    contentRef.current.style.height = 'auto'
    contentRef.current.style.overflow = 'visible'
  }
  const listSocial = dataSocialFooter?.data?.page?.translation?.homepage?.partners?.socialAction
  
  return (
    <footer className='footer bg-[#000D10] text-[#888] md:pt-[4.98rem] pt-[11.47rem] max-md:h-auto'>
      <div className="content max-md:flex flex-col justify-center ">
        <div className="logo">
          <Image src={data?.homepage?.footer?.logo?.sourceUrl} width={100} height={100} className='object-cover w-[7.1875rem] h-[4.09453rem] max-md:w-[20.53333rem] max-md:h-[11.73333rem]' alt={data?.homepage?.footer?.logo?.altText || 'DAC'} />
        </div>
        <div className='flex items-start max-md:flex-col justify-between md:mt-[3.58rem] mt-[6.4rem] description2 md:!tracking-[-0.05rem] !text-[#888] md:mb-[3rem] mb-[6rem]'>
          <div className="left md:w-[44rem] md:mr-[10.4rem] max-md:mb-[8rem] title_name_company" dangerouslySetInnerHTML={{ __html: `${data?.homepage?.footer?.contentColumn1}` }}>
          </div>
          <div className='flex flex-col'>
            <div ref={contentRef} className="right title_name_company" dangerouslySetInnerHTML={{ __html: `${data?.homepage?.footer?.contentColumn2}` }}></div>
            <div className='flex mt-[3rem] max-md:hidden'>
                  <div className='grid grid-cols-2 gap-[1rem] md:mr-[4.84rem]'>
                    <Link href={`${listSocial?.facebook}`} target='_blank' > 
                      <Image src={icon4} alt='icon' className='w-[4rem] h-[4rem] object-contain' />
                    </Link>
                    <Link href={`${listSocial?.linkedin}`} target='_blank' >
                      <Image src={icon3} alt='icon' className='w-[4rem] h-[4rem] object-contain' />
                    </Link>
                    <Link href={`tel:${listSocial?.phone}`} target='_blank' >
                      <Image src={icon2} alt='icon' className='w-[4rem] h-[4rem] object-contain' />
                    </Link>
                    <Link href={`${listSocial?.zalo}`} target='_blank' >
                      <Image src={icon1} alt='icon' className='w-[4rem] h-[4rem] object-contain' /> 
                    </Link>
                  </div>
                  <Image src={imgFooter} alt='chứng nhận' className='w-[17.65625rem] h-[6.77083rem]' />
            </div>
          </div>
          
        </div>

        {/* see more > */}
        <svg ref={scrollRef} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" className='relative left-[50%] md:hidden w-[4.33333rem] h-[3.46667rem] mb-[6.4rem]' viewBox="0 0 15 7" fill="none">
          <path d="M14 1L7.5 6L1 1" stroke="#888888" />
        </svg>
        
        {/*  */}
        <div className="h-[0.0625vw] w-full bg-[#fff] opacity-60 mt-[1.35417rem]"></div>
        <div className="flex items-center max-md:flex-col justify-between copy-right md:py-[3.25rem] py-[4rem] max-md:text-[3.73333rem] md:leading-[0.01867rem]">
          <p>{data?.homepage?.footer?.copyrightAndPolicy?.copyright}</p>
          <div className='flex items-center gap-[2rem]'>
            {data?.homepage?.footer?.copyrightAndPolicy?.policy?.map((item, index) => (
              <span key={index}>{item?.text}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer