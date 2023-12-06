import React from 'react'
import Banner from './Banner'
import Branch from './Branch'

function Design({data}) {

    return (
        <>
            <Banner data={data?.design?.banner} />
            <Branch data={data?.design?.content} />
        </>
    )
}

export default Design
