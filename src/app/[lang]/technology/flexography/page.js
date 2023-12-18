import ScrollToTop from '@/components/common/ScrollToTop'
import IndexFlexo from '@/components/technology/technology-flexo/IndexFlexo'
import { fetchData } from '@/data/fetchData'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_TECHNOLOGY_FLEXO, GET_SLUG_DIGITAL, GET_SLUG_FLEXO, GET_SLUG_GRAVURE, GET_SLUG_OFFSET, GET_SLUG_OTHERPRINT, SLUG_TECH_PAGE_QUERY} from '@/graphql/technology/query'
import React from 'react'
const PARAM_ARR = [
  GET_SLUG_OFFSET,
  GET_SLUG_FLEXO,
  GET_SLUG_GRAVURE,
  GET_SLUG_DIGITAL,
  GET_SLUG_OTHERPRINT
]
export default async function page({params}) {
    let language = params?.lang?.toUpperCase()
    let data = await getDataPage(language, GET_DATA_TECHNOLOGY_FLEXO)
    const [
      sluOffset,
      slugFlexo,
      slugGravure,
      slugDigital,
      slugOther
    ] = await Promise.all(PARAM_ARR.map(item=>{
      return fetchData(item,{language:language})
    }))
    
    // get all list slug 4 page
    const slugO = sluOffset?.data?.page?.translation?.slug
    const slugF = slugFlexo?.data?.page?.translation?.slug
    const slugG = slugGravure?.data?.page?.translation?.slug
    const slugD = slugDigital?.data?.page?.translation?.slug
    const slugK = slugOther?.data?.page?.translation?.slug
    const titleO = sluOffset?.data?.page?.translation?.technology_common?.content?.titlePage
    const titleF = slugFlexo?.data?.page?.translation?.technology_common?.content?.titlePage
    const titleG = slugGravure?.data?.page?.translation?.technology_common?.content?.titlePage
    const titleD = slugDigital?.data?.page?.translation?.technology_common?.content?.titlePage
    const titleK = slugOther?.data?.page?.translation?.technology_otherPrinting?.content?.titlepage
    const slugPage = [slugO,slugF,slugG,slugD,slugK]
    const titlePage = [titleO,titleF,titleG,titleD,titleK]

    // get slug VI, EN
    const listSlugFlexo = await getDataPage(language,SLUG_TECH_PAGE_QUERY(data?.data?.page?.translation?.id))
    const listSlug = {
      slugVi:'/cong-nghe/'+ (listSlugFlexo?.data?.page?.translations[0]?.language?.code==='VI'?listSlugFlexo?.data?.page?.translations[0]?.slug:listSlugFlexo?.data?.page?.slug),
      slugEn:'/en/technology/' +(listSlugFlexo?.data?.page?.translations[0]?.language?.code==='EN'?listSlugFlexo?.data?.page?.translations[0]?.slug:listSlugFlexo?.data?.page?.slug)
    }
  return (
    <> 
        <ScrollToTop />
        <IndexFlexo slugPage={slugPage} listSlug={listSlug} lang={params?.lang} titlePage={titlePage} data={data} />
    </>
  )
}
