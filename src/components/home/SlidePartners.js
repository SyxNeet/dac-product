'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import Image from 'next/image'

function SlidePartners({ data }) {
  const dataSlide = data?.concat(data)?.concat(data)
  return (
    <div className='mt-[6.93rem] slide-partners'>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
        slidesPerView={2}
        spaceBetween={50}
        loop={true}
        centeredSlides={true}
        allowTouchMove={false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          waitForTransition: true
        }}
        speed={1000}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className='w-full mySwiper slide-partners'
      >
        {dataSlide?.map((item, index) => {
          return (
            <SwiperSlide className='w-[20%] partner-item' key={index * Math.random()}>
              <Image
                src={item?.image?.sourceUrl}
                width={500}
                height={500}
                alt='partners'
                className={`object-contain md:w-[10.19rem] md:h-[9.6rem] w-[29.86427rem] h-[28.53333rem] `}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SlidePartners
