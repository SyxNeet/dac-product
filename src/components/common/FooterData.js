import React from 'react'
import Footer from './Footer'
import { DATA_SOCIAL_FOOTER, GET_DATA_FOOTER, POLICY_QUERY } from '@/graphql/home/query';
import getDataPage from '@/data/getDataPage';
import { fetchData } from '@/data/fetchData';

const ARR_FUNC_FOOTER = [
    GET_DATA_FOOTER,
    POLICY_QUERY,
    DATA_SOCIAL_FOOTER
]

async function FooterData({lang}) {
    let [
        dataFooter,
        dataPolicy,
        dataSocialFooter
    ] = await Promise.all(ARR_FUNC_FOOTER.map((item) => {
        return fetchData(item,{language:lang?.toUpperCase()})
    }))
    const dataFooterFinal = dataFooter?.data?.page?.translation;

  return (
    <Footer
        lang={lang}
        data={dataFooterFinal}
        dataSocialFooter={dataSocialFooter}
        dataPolicy={dataPolicy?.data?.page?.translation}
    />
  )
}

export default FooterData
