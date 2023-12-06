import React from 'react'
import BannerCom from '../common/Banner'
function Banner({ dataBanner }) {
    const dataFinal = dataBanner?.news_page?.banner
    return (
        <BannerCom
            image={dataFinal?.background?.sourceUrl}
            altText={dataFinal?.background?.altText}
            title={dataFinal?.title}
            description={dataFinal?.description}
            classTitle={'md:text-[3.4375rem]'}
            classDesc={'md:text-[1.875rem] md:tracking-[-0.05625rem]'}
            positionAndBox={'md:right-[8.85rem] md:bottom-[6.72rem] md:w-[28.64583rem] md:h-[9.6875rem]'}
        />
    )
}

export default Banner
