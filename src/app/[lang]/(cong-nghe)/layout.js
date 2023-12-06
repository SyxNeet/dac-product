import Banner from '@/components/technology/Banner'
import Content from '@/components/technology/Content'
import { DataProvider } from '@/components/technology/DataContext'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_TECHNOLOGY_DIGITAL, GET_DATA_TECHNOLOGY_FLEXO, GET_DATA_TECHNOLOGY_GRAVURE, GET_DATA_TECHNOLOGY_OFFSET, GET_DATA_TECHNOLOGY_OTHERPRINT } from '@/graphql/technology/query'
import React from 'react'

async function layout({ children, params }) {
    let language = params.lang
    let dataOffset
    let dataFlexo
    let dataGravure
    let dataDigital
    let dataOtherPrint
    dataOffset = await getDataPage(language, GET_DATA_TECHNOLOGY_OFFSET)
    dataFlexo = await getDataPage(language, GET_DATA_TECHNOLOGY_FLEXO)
    dataGravure = await getDataPage(language, GET_DATA_TECHNOLOGY_GRAVURE)
    dataDigital = await getDataPage(language, GET_DATA_TECHNOLOGY_DIGITAL)
    dataOtherPrint = await getDataPage(language, GET_DATA_TECHNOLOGY_OTHERPRINT)
    return (
        <>
            <DataProvider>
                <Banner />
                <Content
                    lang={language}
                    dataOffset={dataOffset}
                    dataFlexo={dataFlexo}
                    dataGravure={dataGravure}
                    dataDigital={dataDigital}
                    dataOtherPrint={dataOtherPrint}
                />
            </DataProvider>
            {children}
        </>
    )
}

export default layout