import Design from '@/components/design/Design'
import { fetchData } from '@/data/fetchData'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_DESIGN, GET_META_DESIGN } from '@/graphql/design/query'
import { getMeta } from '@/graphql/metaData/getMeta'
import React from 'react'

export async function generateMetadata({ params: { lang } }) {
    const res = await fetchData(GET_META_DESIGN, { language: lang?.toUpperCase() })
    const home = res?.data?.page?.translation?.seo
    const featuredImage = res?.data?.page?.translation?.featuredImage
    const title = home?.title
    const excerpt = home?.metaDesc
    return getMeta(title, excerpt, featuredImage)
}
export default async function page({ params: { lang } }) {
    let language = lang?.toUpperCase()
    let data = await getDataPage(language, GET_DATA_DESIGN)
    return (
        <Design data={data?.data?.page?.translation} />
    )
}

