import Service from '@/components/service/Service'
import { fetchData } from '@/data/fetchData'
import getDataPage from '@/data/getDataPage'
import { getMeta } from '@/graphql/metaData/getMeta'
import { GET_DATA_CATEGORY_PRODUCT_SERVICE, GET_DATA_PRODUCT_PAGE, META_SERVICE_PRODUCT_QUERY } from '@/graphql/product/query'
import React from 'react'

export async function generateMetadata({ params: { lang } }) {
    const res = await fetchData(META_SERVICE_PRODUCT_QUERY, { language: lang?.toUpperCase() })
    const home = res?.data?.page?.translation?.seo
    const featuredImage = res?.data?.page?.translation?.featuredImage
    const title = home?.title
    const excerpt = home?.metaDesc
    return getMeta(title, excerpt, featuredImage)
}

export default async function page({ params: { lang } }) {
    let data = await getDataPage(lang, GET_DATA_PRODUCT_PAGE)
    let dataCategory = await getDataPage(lang, GET_DATA_CATEGORY_PRODUCT_SERVICE)
    return (
        <Service
            data={data?.data?.page?.translation}
            lang={lang}
            dataCate={dataCategory?.data?.allCategoryProducts?.nodes}
        />
    )
}


