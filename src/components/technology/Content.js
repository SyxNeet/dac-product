'use client'
import React, { useEffect, useState } from 'react'
import { useDataBanner } from './DataContext'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
function Content({ lang, dataOffset, dataFlexo, dataGravure, dataDigital, dataOtherPrint }) {
    const context = useDataBanner()
    const pathName = usePathname()
    let check =  pathName.includes('in-offset') ? 1 : pathName.includes('in-flexo') ? 2 : pathName.includes('in-ong-dong') ? 3 : pathName.includes('in-kts') ? 4 : 5
    let dataInfoOffset = dataOffset?.data?.page?.translation?.technology_common
    let dataInfoFlexo = dataFlexo?.data?.page?.translation?.technology_common
    let dataInfoGravure = dataGravure?.data?.page?.translation?.technology_common
    let dataInfoDigital = dataDigital?.data?.page?.translation?.technology_common
    let dataInfoOtherPrint = dataOtherPrint?.data?.page?.translation?.technology_otherPrinting

    let dataSlugOffset = dataOffset?.data?.page?.translation?.slug
    let dataSlugFlexo = dataFlexo?.data?.page?.translation?.slug
    let dataSlugGravure = dataGravure?.data?.page?.translation?.slug
    let dataSlugDigital = dataDigital?.data?.page?.translation?.slug
    let dataSlugOtherPrint = dataOtherPrint?.data?.page?.translation?.slug
    const data = [
        {
            id: 1,
            title: dataInfoOffset?.content?.titlePage,
            background: dataInfoOffset?.banner?.background?.sourceUrl,
            altText: dataInfoOffset?.banner?.background?.altText,
            text: dataInfoOffset?.banner?.title
        },
        {
            id: 2,
            title: dataInfoFlexo?.content?.titlePage,
            background: dataInfoFlexo?.banner?.background?.sourceUrl,
            altText: dataInfoFlexo?.banner?.background?.altText,
            text: dataInfoFlexo?.banner?.title
        },
        {
            id: 3,
            title: dataInfoGravure?.content?.titlePage,
            background: dataInfoGravure?.banner?.background?.sourceUrl,
            altText: dataInfoGravure?.banner?.background?.altText,
            text: dataInfoGravure?.banner?.title
        },
        {
            id: 4,
            title: dataInfoDigital?.content?.titlePage,
            background: dataInfoDigital?.banner?.background?.sourceUrl,
            altText: dataInfoDigital?.banner?.background?.altText,
            text: dataInfoDigital?.banner?.title
        },
        {
            id: 5,
            title: dataInfoOtherPrint?.content?.titlepage,
            background: dataInfoOtherPrint?.banner?.background?.sourceUrl,
            altText: dataInfoOtherPrint?.banner?.background?.altText,
            text: dataInfoOtherPrint?.banner?.title
        }
    ]

    const slugPage = [
        dataSlugOffset, dataSlugFlexo, dataSlugGravure, dataSlugDigital, dataSlugOtherPrint
    ]
    useEffect(() => {
        window.scroll(0, 0)
    }, [check])

    useEffect(() => {
        if (pathName.endsWith('in-offset')) {
            context.setDataBanner(data[0])
        } else if (pathName.endsWith('in-flexo')) {
            context.setDataBanner(data[1])
        } else if (pathName.endsWith('in-ong-dong')) {
            context.setDataBanner(data[2])
        } else if (pathName.endsWith('in-kts')) {
            context.setDataBanner(data[3])
        } else if (pathName.endsWith('khac')) {
            context.setDataBanner(data[4])
        }
    }, [pathName,check])
    return (
        <div className='max-md:hidden'>
            <ul className='flex pt-[3.8rem] md:pl-[4.17rem] lg:pl-[12.03rem] bg-[#F5F5F5]'>
                {data?.map((item, index) => {
                    return (
                        <Link href={`/${lang}/cong-nghe/${slugPage[index]}`} key={index * Math.random()} className={`uppercase text-[1.3rem] lg:text-[1.04167rem] mr-[1.67rem] cursor-pointer ${check === index + 1 ? 'text-[#00A84F]' : ''}`} >{item?.title}</Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default Content