import React from 'react'
import Introduce from './Introduce'
import ListProduct from './ListProduct'
import ContentFlexo from './ContentFlexo'

function IndexFlexo({data}) {
    const dataFlexo = data?.data?.page?.translation?.technology_common?.content
    return (
        <div>
            <Introduce dataIntro = {dataFlexo?.introduce} />
            <ListProduct dataProductList = {dataFlexo?.system} />
            <ContentFlexo dataContent = {dataFlexo?.mainContent} />
        </div>
    )
}

export default IndexFlexo