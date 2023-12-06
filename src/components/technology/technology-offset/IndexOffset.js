import React from 'react'
import Introduce from './Introduce'
import System from './System'
import ContentOffset from './ContentOffset'

function IndexOffset({ data }) {
    const dataOffset = data?.data?.page?.translation?.technology_common
    return (
        <>
            <Introduce dataIntro = {dataOffset?.content?.introduce} />
            <System dataSystem = {dataOffset?.content?.system} />
            <ContentOffset dataContent = {dataOffset?.content?.mainContent} />
        </>
    )
}

export default IndexOffset