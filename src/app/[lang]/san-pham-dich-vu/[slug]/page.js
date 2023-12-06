import ServiceDetail from '@/components/service/service-detail/ServiceDetail'
import { fetchData } from '@/data/fetchData'
import getDataDetail from '@/data/getDataDetail'
import { getMeta } from '@/graphql/metaData/getMeta'
import { GET_DATA_PRODUCT_DETAIL, META_PRODUCT_DETAIL_QUERY, OTHER_PRODUCT_QUERY ,SUBTITLE_PRODUCT_QUERY } from '@/graphql/product/query'
import React from 'react'

export async function generateMetadata({ params: { lang, slug } }) {
    const res = await fetchData(META_PRODUCT_DETAIL_QUERY, { language: lang?.toUpperCase(), slug: slug })
    const servProduct = res?.data?.serviceProduct?.translation?.seo
    const featuredImage = res?.data?.serviceProduct?.translation?.featuredImage
    const title = servProduct?.title
    const excerpt = servProduct?.metaDesc
    return getMeta(title, excerpt, featuredImage)
}

export default async function page({ params: { lang, slug } }) {

    let data = await getDataDetail(lang, slug, GET_DATA_PRODUCT_DETAIL)
    const idCate = data?.data?.serviceProduct?.translation?.categoryProducts?.nodes[0]?.id
    const product = await fetchData(OTHER_PRODUCT_QUERY,{taxonomyId:idCate})
    const subTitle = await fetchData(SUBTITLE_PRODUCT_QUERY,{termTaxonomId:idCate ,language:lang?.toUpperCase()})
    const otherProduct = product?.data?.allCategoryProducts?.nodes[0]?.serviceProduct?.nodes?.filter(item => item?.slug !== slug);
    return (
        <ServiceDetail
            data={data?.data?.serviceProduct?.translation}
            lang={lang}
            otherProduct = {otherProduct}
            subTitle = {subTitle?.data?.allCategoryProducts?.nodes[0]?.product_category?.info?.subTitle}
        />
    )
}
