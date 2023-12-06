import React from 'react'
import Introduce from './Introduce'
import Solution from './Solution'
import Content from './Content'

function IndexOtherPrinting({ data }) {
    const dataPrint = data?.data?.page?.translation?.technology_otherPrinting?.content
    return (
        <div>
            <Introduce dataIntro={dataPrint?.introduce} />
            <Solution dataSolution={dataPrint?.solutions} />
            <Content dataContent={dataPrint?.mainContent} />
        </div>
    )
}

export default IndexOtherPrinting