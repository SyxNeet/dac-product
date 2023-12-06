import React from 'react'
import Story from './Story'
import Motto from './Motto'
import Banner from '@/components/common/Banner'
import TitlePage_About_Us from '@/components/common/TitlePage_About_Us'

async function IndexVision({ data, lang, slugPage, titlePage }) {
  const dataStory = data?.data?.page?.translation?.vision?.story
  const dataMotto = data?.data?.page?.translation?.vision?.motto
  const dataBanner = data?.data?.page?.translation?.vision?.banner

  return (
    <>
      <Banner
        image={dataBanner?.imagebanner?.sourceUrl}
        altText={dataBanner?.imagebanner?.altText}
        textAboutUs={dataBanner?.textbanner}
        check={true}
      />
      <main>
        <TitlePage_About_Us check={0} lang={lang} slugPage={slugPage} titlePage={titlePage} />
        <Story data={dataStory} />
        <Motto data={dataMotto} />
      </main>
    </>
  )
}

export default IndexVision