import React from 'react'
import Introduce from './Introduce'
import System from './System'
import ContentGravure from './ContentGravure'

function IndexGravure({ data }) {
    const dataGravure = data?.data?.page?.translation?.technology_common?.content
    return (
        <div>
            <Introduce dataIntro={dataGravure?.introduce} />
            <System dataSystem={dataGravure?.system} />
            <ContentGravure dataContent={dataGravure?.mainContent} />
        </div>
    )
}

export default IndexGravure