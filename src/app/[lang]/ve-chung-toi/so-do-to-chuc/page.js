import { IndexOrganize } from '@/components/about-us/about-organize/IndexOrganize'
import { fetchData } from '@/data/fetchData'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_ABOUT_US_ORGANIZE, META_ORGANIZE_QUERY, SLUG_JOURNEY_QUERY, SLUG_ORGANIZE_QUERY, SLUG_PRIZE_QUERY, SLUG_VISION_QUERY } from '@/graphql/about-us/query'
import { getMeta } from '@/graphql/metaData/getMeta'
import React from 'react'
const PARAM_ARR = [
  SLUG_VISION_QUERY,
  SLUG_JOURNEY_QUERY,
  SLUG_PRIZE_QUERY,
  SLUG_ORGANIZE_QUERY
]
export async function generateMetadata({ params: { lang } }) {
    const res = await fetchData(META_ORGANIZE_QUERY, { language: lang?.toUpperCase() })
    const home = res?.data?.page?.translation?.seo
    const featuredImage = res?.data?.page?.translation?.featuredImage
    const title = home?.title
    const excerpt = home?.metaDesc
    return getMeta(title, excerpt, featuredImage)
  }
  
async function page({params}) {
    let language = params?.lang?.toUpperCase() || 'VI'
    let data = await getDataPage(language, GET_DATA_ABOUT_US_ORGANIZE)
    const [
      slugVision,
      slugJourney,
      slugPrize,
      slugOrganize
    ] = await Promise.all(PARAM_ARR.map(item=>{
      return fetchData(item,{language:language})
    }))
    const slugV = slugVision?.data?.page?.translation?.slug
    const slugJ = slugJourney?.data?.page?.translation?.slug
    const slugP = slugPrize?.data?.page?.translation?.slug
    const slugO = slugOrganize?.data?.page?.translation?.slug
    const titleV = slugVision?.data?.page?.translation?.vision?.tilePage
    const titleJ = slugJourney?.data?.page?.translation?.journey?.banner?.titlePage
    const titleP = slugPrize?.data?.page?.translation?.prize?.titlePage
    const titleO = slugOrganize?.data?.page?.translation?.organize?.titlePage
    const slugPage = [slugV,slugJ,slugP,slugO]
    const titlePage = [titleV,titleJ,titleP,titleO]
    return (
        <>
            <IndexOrganize slugPage={slugPage} titlePage={titlePage} data={data} lang={params?.lang} />
        </>
  )
}

export default page