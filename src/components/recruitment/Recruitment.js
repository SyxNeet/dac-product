'use client'
import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Culture from './Culture'
import InputAndPagination from './InputAndPagination'
import Opportunity from './Opportunity'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useMediaQuery } from 'react-responsive'
function Recruitment({ data, lang, dataFirstIn }) {
    const [seeMore, setSeeMore] = useState(1)
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const router = useRouter()
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const handleSeeMore = () => {
        setSeeMore(seeMore + 1)
    }

    useEffect(() => {
        if (isMobile) {
            const paramNew = new URLSearchParams(searchParams)
            paramNew.set('page', seeMore)
            router.replace(pathName + '?' + paramNew.toString(), {
                scroll: false,
            })
        }
    }, [seeMore])

    return (
        <>
            <Banner dataBanner={data?.banner} />
            <main>
                <Culture dataCulture={data?.content} />
                <div className='flex flex-col max-md:flex-col-reverse'>
                    {seeMore < Math.ceil(dataFirstIn?.pageInfo?.offsetPagination?.total / 4) &&
                        <p onClick={handleSeeMore} className='md:hidden text-[4.26667rem] leading-[116.662%] underline text-center text-[#00A84F] max-md:mb-[7rem] cursor-pointer'>Xem thêm</p>
                    }
                    <Opportunity lang={lang} dataOp={data?.content} dataPagination={dataFirstIn} />
                    <InputAndPagination dataFirstIn={dataFirstIn} />
                    <h2 className='heading md:hidden px-[4.27rem] pt-[4rem] max-md:!text-[6.93333rem]'>{data?.content?.subTitle}</h2>
                </div>
            </main>
        </>
    )
}

export default Recruitment