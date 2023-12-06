import { fetchData } from "@/data/fetchData"

// tieu de
const NEWS_QUERY = `{
  posts(first: 1000, where: {language: VI}) {
    nodes {
      slug
      date
    }
  }
}`

const NEWS_QUERY_EN = `{
  posts(first: 1000, where: {language: EN}) {
    nodes {
      slug
      date
    }
  }
}`


// opporturnity
const JOB_QUERY = `{
 allJobOpportunity(first:1000, where: {language: VI}){
    nodes{
      slug
      date
    }
  }
}`

const JOB_QUERY_EN = `{
  allJobOpportunity(first:1000, where: {language: EN}){
     nodes{
       slug
       date
     }
   }
 }`

// thuoc la, ...
const PRODUCT_QUERY = `{
 allServiceProduct(first:1000, where: {language: VI}){
    nodes{
      slug
      date
    }
  }
}`
const PRODUCT_QUERY_EN = `{
  allServiceProduct(first:1000, where: {language: EN}){
     nodes{
       slug
       date
     }
   }
 }`


export default async function sitemap() {
  const news = await fetchData(NEWS_QUERY)
  const newsEn = await fetchData(NEWS_QUERY_EN)
  const jobs = await fetchData(JOB_QUERY)
  const jobsEn = await fetchData(JOB_QUERY_EN)
  const products = await fetchData(PRODUCT_QUERY)
  const productsEn = await fetchData(PRODUCT_QUERY_EN)
  const arrNews = news?.data?.posts?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/tin-tuc-su-kien/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrNewsEn = newsEn?.data?.posts?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/tin-tuc-su-kien/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrJobs = jobs?.data?.allJobOpportunity?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/tuyen-dung/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrJobsEn = jobsEn?.data?.allJobOpportunity?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/tuyen-dung/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrProducts = products?.data?.allServiceProduct?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/san-pham-dich-vu/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  const arrProductsEn = productsEn?.data?.allServiceProduct?.nodes?.map(e => {
    return {
      url: `${process.env.DOMAIN}/san-pham-dich-vu/${e?.slug}`,
      lastModified: e?.date,
      priority: 0.8
    }
  })
  

  return [
    {
      url: process.env.DOMAIN,
      lastModified: new Date(),
      priority: 1
    },
    {
      url: `${process.env.DOMAIN}/en`,
      lastModified: new Date(),
      priority: 1
    },
    {
      url: `${process.env.DOMAIN}/san-pham-dich-vu`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/san-pham-dich-vu`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/thiet-ke`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/thiet-ke`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/ve-chung-toi/tam-nhin`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/ve-chung-toi/vision`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/ve-chung-toi/chang-duong-phat-trien`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/ve-chung-toi/journey`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/ve-chung-toi/chung-nhan`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/ve-chung-toi/awards`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/ve-chung-toi/so-do-to-chuc`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/ve-chung-toi/company-structure`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/tin-tuc-su-kien`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/tin-tuc-su-kien`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/tuyen-dung`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/tuyen-dung`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/lien-he`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/lien-he`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/cong-nghe/in-offset`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/cong-nghe/offset`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/cong-nghe/flexo`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/cong-nghe/flexo`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/cong-nghe/gravure`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/cong-nghe/gravure`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/cong-nghe/digital`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/cong-nghe/digital`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/cong-nghe/other-printing`,
      lastModified: new Date(),
      priority: 0.9
    },
    {
      url: `${process.env.DOMAIN}/en/cong-nghe/other-printing`,
      lastModified: new Date(),
      priority: 0.9
    },
    ...arrNews,
    ...arrNewsEn,
    ...arrJobs,
    ...arrJobsEn,
    ...arrProducts,
    ...arrProductsEn
  ]
}

