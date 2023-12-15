import React from 'react'
import Footer from './Footer'
import { DATA_SOCIAL_FOOTER, GET_DATA_FOOTER, POLICY_QUERY } from '@/graphql/home/query';
import { fetchData } from '@/data/fetchData';

const ARR = [
  GET_DATA_FOOTER,
  DATA_SOCIAL_FOOTER,
  POLICY_QUERY
]

async function FooterData({lang}) {
  let [
    dataFooter,
    dataSocialFooter,
    dataPolicy
  ]
  = await Promise.all(ARR.map((item)=>{
    return fetchData(item,{language:lang?.toUpperCase()})
  }))
  const dataFooterFinal = dataFooter?.data?.page?.translation;
  console.log(dataPolicy?.data?.page);
  return (
    <Footer 
      data={dataFooterFinal}
      dataSocialFooter={dataSocialFooter} 
      dataPolicy={dataPolicy} 
     />
  )
}

export default FooterData