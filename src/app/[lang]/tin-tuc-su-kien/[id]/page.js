import Blog from '@/components/blogs/Blog'
import { fetchData } from '@/data/fetchData'
import { getMeta } from '@/graphql/metaData/getMeta'
import { GET_META_NEWS, NEWS_QUERY } from '@/graphql/news-blog/query'
import React from 'react'

export async function generateMetadata({ params: { lang } }) {
  const res = await fetchData(GET_META_NEWS, { language: lang?.toUpperCase() })
  const home = res?.data?.page?.translation?.seo
  const featuredImage = res?.data?.page?.translation?.featuredImage
  const title = home?.title
  const excerpt = home?.metaDesc
  return getMeta(title, excerpt, featuredImage)
}

async function page({ params: { lang,id } }) {
  let dataNews = await fetchData(NEWS_QUERY, { language: lang?.toUpperCase() })
  return (
    <Blog slug={id} dataBlog={dataNews?.data?.page?.translation} lang={lang} />
  )
}

export default page