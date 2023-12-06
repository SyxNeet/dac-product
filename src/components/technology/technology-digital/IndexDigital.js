import React from 'react'
import Introduce from './Introduce'
import System from './System'
import ContentDigital from './ContentDigital'

function IndexDigital({ data }) {
    const dataDigital = data?.data?.page?.translation?.technology_common?.content
    return (
        <div>
            <Introduce dataIntro={dataDigital?.introduce} />
            <System dataSystem={dataDigital?.system} />
            <ContentDigital dataContent={dataDigital?.mainContent} />
        </div>
    )
}

export default IndexDigital