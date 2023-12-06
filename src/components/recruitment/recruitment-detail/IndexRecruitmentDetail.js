import React from 'react'
import BannerDetail from './BannerDetail'
import Infomation from './Infomation'

function IndexRecruitmentDetail({ data, dataJobNew, lang }) {
    return (
        <>
            <BannerDetail dataBanner={data?.recruimentDetail?.banner} />
            <main>
                <Infomation lang={lang} dataJobNew={dataJobNew} dataContent={data?.recruimentDetail?.content} />
            </main>
        </>
    )
}

export default IndexRecruitmentDetail