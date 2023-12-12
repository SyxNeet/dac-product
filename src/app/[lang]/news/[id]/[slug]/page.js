import IndexBlogDetail from '@/components/blogs/blog-detail/IndexBlogDetail'
import { fetchData } from '@/data/fetchData';
import getDataDetail from '@/data/getDataDetail'
import getDataPage from '@/data/getDataPage';
import { getMeta } from '@/graphql/metaData/getMeta';
import { GET_DATA_NEWS_DETAIL, META_NEWS_DETAIL_QUERY, SLUG_BLOG_DETAIL_QUERY } from '@/graphql/news-blog/query';
import React from 'react'

const GET_PARAMS_ALL_NEWS = `query ($language: LanguageCodeFilterEnum!) {
  posts(first: 100, where: {language: $language}) {
    nodes {
      slug
      categories {
        nodes {
          slug
        }
      }
    }
  }
}`
export async function generateStaticParams({ params: { lang } }) {
    const { data } = await fetchData(GET_PARAMS_ALL_NEWS,{language:"EN"})
  
    const posts = data?.posts?.nodes || []
    
    return posts.map((post) => ({
      id:post?.categories?.nodes[0]?.slug,
      slug: post?.slug || undefined,
    }))

}

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
    const listSlugBlogDetail = await getDataPage(lang,SLUG_BLOG_DETAIL_QUERY(data?.data?.post?.translation?.id))
    const listSlug = {
        slugVi:'/tin-tuc-su-kien/'+ (listSlugBlogDetail?.data?.post?.translations[0]?.language?.code==='VI'?listSlugBlogDetail?.data?.post?.translations[0]?.slug:listSlugBlogDetail?.data?.post?.slug),
        slugEn:'/en/news/' +(listSlugBlogDetail?.data?.post?.translations[0]?.language?.code==='EN'?listSlugBlogDetail?.data?.post?.translations[0]?.slug:listSlugBlogDetail?.data?.post?.slug)
    }
    return (
        <IndexBlogDetail listSlug={listSlug} lang={lang} data={dataDetail} />
    )
}


