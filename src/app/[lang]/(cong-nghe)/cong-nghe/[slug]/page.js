import React from 'react'
import IndexGravure from '@/components/technology/technology-gravure/IndexGravure';
import IndexOffset from '@/components/technology/technology-offset/IndexOffset';
import IndexFlexo from '@/components/technology/technology-flexo/IndexFlexo';
import IndexDigital from '@/components/technology/technology-digital/IndexDigital';
import IndexOtherPrinting from '@/components/technology/technology-otherPrinting/IndexOtherPrinting';
import { GET_DATA_TECHNOLOGY_DIGITAL, GET_DATA_TECHNOLOGY_FLEXO, GET_DATA_TECHNOLOGY_GRAVURE, GET_DATA_TECHNOLOGY_OFFSET, GET_DATA_TECHNOLOGY_OTHERPRINT } from '@/graphql/technology/query';
import getDataPage from '@/data/getDataPage';


// const listData = [
//     {
//         slug:"in-offset",
//         query:GET_DATA_TECHNOLOGY_OFFSET
//     },
//     {
//         slug:"flexo",
//         query:GET_DATA_TECHNOLOGY_FLEXO
//     },
//     {
//         slug:"gravure",
//         query:GET_DATA_TECHNOLOGY_GRAVURE
//     },
//     {
//         slug:"digital",
//         query:GET_DATA_TECHNOLOGY_DIGITAL
//     },
//     {
//         slug:"other-printing",
//         query:GET_DATA_TECHNOLOGY_OTHERPRINT
//     }
// ]


export default async function page({ params }) {
    let language = params?.lang?.toUpperCase()
    let data
   
    if (params?.slug === 'in-offset') {
        data = await getDataPage(language, GET_DATA_TECHNOLOGY_OFFSET)
    }
    if (params?.slug === 'in-flexo') {
        data = await getDataPage(language, GET_DATA_TECHNOLOGY_FLEXO)
    }
    if (params?.slug === 'in-ong-dong') {
        data = await getDataPage(language, GET_DATA_TECHNOLOGY_GRAVURE)
    }
    if (params?.slug === 'in-kts') {
        data = await getDataPage(language, GET_DATA_TECHNOLOGY_DIGITAL)
    }
    if (params?.slug === 'khac') {
        data = await getDataPage(language, GET_DATA_TECHNOLOGY_OTHERPRINT)
    }
    return (
        <>
            {
                params?.slug === 'in-ong-dong' &&
                <IndexGravure data={data} />
            }
            {
                params?.slug === 'in-offset' &&
                <IndexOffset data={data} />
            }
            {
                params?.slug === 'in-flexo' &&
                <IndexFlexo data={data} />
            }
            {
                params?.slug === 'in-kts' &&
                <IndexDigital data={data} />
            }
            {
                params?.slug === 'khac' &&
                <IndexOtherPrinting data={data} />
            }
        </>
    )
}
