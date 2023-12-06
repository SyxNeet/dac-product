import IndexBlogDetail from '@/components/blogs/blog-detail/IndexBlogDetail'
import { fetchData } from '@/data/fetchData';
import getDataDetail from '@/data/getDataDetail'
import { getMeta } from '@/graphql/metaData/getMeta';
import { GET_DATA_NEWS_DETAIL, META_NEWS_DETAIL_QUERY } from '@/graphql/news-blog/query';
import React from 'react'

export async function generateMetadata({ params: { lang, slug } }) {
    const res = await fetchData(META_NEWS_DETAIL_QUERY, { language: lang?.toUpperCase(), slug: slug })
    const news = res?.data?.post?.translation?.seo
    const featuredImage = res?.data?.post?.translation?.featuredImage
    const title = news?.title
    const excerpt = news?.metaDesc
    return getMeta(title, excerpt, featuredImage)
}

export default async function page({ params: { lang, slug } }) {
    let data = await getDataDetail(lang, slug, GET_DATA_NEWS_DETAIL)
    const dataDetail = data?.data?.post?.translation
    return (
        <IndexBlogDetail lang={lang} data={dataDetail} />
    )
}


