'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Pagination,Autoplay } from 'swiper/modules';
import Link from 'next/link';
import HandleChangeSlug from '@/components/common/HandleChangeSlug';
import Zoom from 'react-img-zoom';


function ServiceDetail({ data, lang,otherProduct,subTitle,listSlug }) {
    const [indexSlide, setIndexSlide] = useState(0)
    const swiperRef = useRef()
    const swiperRef1 = useRef()
    const [width,setWidth] = useState()
    const [height,setHeight] = useState()

    useEffect(()=>{
        if(typeof window === 'undefined') return
        setWidth(window.innerWidth/100*33.2)
        setHeight(window.innerWidth/100*30.5)
    },[])

    const handleSlideChange = (swiper) => {
        setIndexSlide(swiper.realIndex);
    };
    const handlePreSlide = () => {
        swiperRef?.current?.slidePrev();
    };
    const handleNextSlide = () => {
        swiperRef?.current?.slideNext();
    };
    const handleSlideChange1 = (swiper) => {
        setIndexSlide(swiper.realIndex);
    };
    const handlePreSlide1 = () => {
        swiperRef1?.current?.slidePrev();
    };
    const handleNextSlide1 = () => {
        swiperRef1?.current?.slideNext();
    };
 
        
    return (
        <section className="md:pt-[10.26rem] pt-[29.3rem]">
            <HandleChangeSlug listSlug={listSlug} />
            <div className='md:px-[4.27rem]'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 1759 2" fill="none">
                    <path d="M1 1H1758" stroke="black" stroke-linecap="round" />
                </svg>
            </div>

            <div className="md:pt-[3.18rem] pt-[7.2rem] md:mx-[12.03rem] max-md:px-[4.27rem] content_padding flex flex-col md:pb-[3.96rem]">
                <h2 className='heading max-md:pb-[7.2rem]'>
                    {data?.product_detail?.heading}
                </h2>

                <div className='flex justify-between md:mt-[2.5rem] md:mb-[4.01rem] max-md:flex-col '>
                    {/* slide1 */}
                    <div className='relative md:w-[36.66667rem] w-[100%] md:h-[32.8125rem] md:rounded-br-[8rem] rounded-br-[18rem] overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" className=' absolute inset-0 z-[-1] md:rounded-br-[8rem] rounded-br-[18rem]' viewBox="0 0 704 630" fill="none">
                            <path d="M0 0H704V464.211C704 555.774 643.174 630 568.14 630H0V0Z" fill="#D9D9D9" />
                        </svg> 
                        <Swiper
                            loop={true}
                            pagination={{
                                clickable: true,
                              }}
                            speed={500}
                            modules={[Pagination,Autoplay]}
                            className="mySwiper slideFeatureImage md:w-[36.7rem] md:h-full h-[81.6rem]"
                            onSlideChange={handleSlideChange1}
                            onBeforeInit={(swiper) => {
                                if (swiperRef1) {
                                    swiperRef1.current = swiper;
                                }
                            }}
                            
                        >
                            {data?.product_detail?.listImages?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='box relative overflow-hidden w-full h-full'>
                                        {/* <Image src={item?.image?.sourceUrl} alt='img' width={1000} height={1000} quality={100} className='w-full h-full object-cover' /> */}
                                        {height && <Zoom
                                        img={item?.image?.sourceUrl}
                                        zoomScale={2}
                                        transitionTime={0.5}
                                        className='w-full h-full object-cover'
                                        width={width}
                                        height={height}
                                        />}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* pre */}
                        <button
                            className='absolute left-[1.6rem] top-[50%] z-[10]'
                            onClick={handlePreSlide1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className='md:-[0.88542rem] md:h-[1.77083rem] w-[3.73333rem] h-[7.46667rem]' viewBox="0 0 19 32" fill="none">
                                <path d="M17 30L3 16L17 2" stroke="white" stroke-width="3" />
                            </svg>
                        </button>
                        {/* next */}

                        <button
                            className='absolute right-[1.6rem] top-[50%] z-[10]'
                            onClick={handleNextSlide1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className='md:-[0.88542rem] md:h-[1.77083rem] w-[3.73333rem] h-[7.46667rem]' viewBox="0 0 19 32" fill="none">
                                <path d="M2 2L16 16L2 30" stroke="white" stroke-width="3" />
                            </svg>
                        </button>
                    </div>
                    {/* info */}
                    <div className=''>
                        <h2 className='heading md:mb-[1.3rem] md:w-[28.59rem] max-md:py-[7.47rem] max-md:!text-[6.93333rem]'>{data?.product_detail?.title}</h2>
                        <div className='flex flex-col md:w-[32rem] md:h-[21.82rem]'>
                            {data?.product_detail?.aboutProduct?.map((item, index) => (
                                <div key={index} className='flex text-[#444] md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] font-bold md:leading-[226.662%] md:tracking-[-0.06771rem]'>
                                    {/* <span className='whitespace-nowrap max-md:mr-[1rem] mr-[0.5rem]'>{item?.name}</span> */}
                                    {/* <span className='font-normal'>{item?.description}</span> */}
                                    <p className='font-normal'>
                                        <span className='whitespace-nowrap font-bold max-md:mr-[1rem] mr-[0.5rem]'>{item?.name}</span>
                                        {item?.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* slide2 */}
                <div className='flex flex-col relative max-md:pt-[10rem]'>
                    <h3 className='md:w-[28.81rem] md:h-[2.76042rem] md:mb-[0.68rem] md:text-[#444] text-[#888] md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] md:leading-[116.662%] md:tracking-[-0.06771rem]'>
                        {subTitle}
                    </h3>
                    <div className='slideOther_Item relative max-md:pt-[5.53rem] max-md:pb-[8rem]'>
                        <Swiper
                            slidesPerView={3}
                            breakpoints={
                                {
                                    768: {
                                        slidesPerView: 5,
                                        spaceBetween: 25
                                    }
                                }
                            }
                            modules={[Autoplay]}
                            // speed={800}
                            freeMode={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            className="mySwiper"
                            onSlideChange={handleSlideChange}
                            onBeforeInit={(swiper) => {
                                if (swiperRef) {
                                    swiperRef.current = swiper;
                                }
                            }}
                        >
                            {otherProduct?.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Link href={`/${lang}/san-pham-dich-vu/${item?.slug}`}>
                                        <Image src={item?.featuredImage?.node?.sourceUrl} width={1000} height={1000} alt={item?.featuredImage?.node?.altText} className='imageSlideOtherItem md:w-[12.96875rem] md:h-[11.92708rem] h-[27.73333rem] object-cover' />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                    {/* pre */}
                    <button
                        className='absolute left-[-2rem] top-[50%]'
                        onClick={handlePreSlide}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[0.78125rem] md:h-[1.875rem]' viewBox="0 0 19 38" fill="none">
                            <path d="M17 37L2 18.5L17 1" stroke="#888888" stroke-width="3" />
                        </svg>
                    </button>
                    {/* next */}

                    <button
                        className='absolute right-[-2rem] top-[50%]'
                        onClick={handleNextSlide}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className='md:w-[0.78125rem] md:h-[1.875rem]' viewBox="0 0 19 38" fill="none">
                            <path d="M2 1L17 19.5L2 37" stroke="#888888" stroke-width="3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ServiceDetail
