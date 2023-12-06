import React from 'react'
import Banner from './Banner'
import Branch from './Branch'
import FormContact from './FormContact'

function Contact({ dataContact,lang }) {
    return (
        <>
            <Banner dataBanner={dataContact?.banner} />
            <main>
                <Branch 
                    lang={lang} 
                    dataBranch={dataContact?.contentAddress} 
                />
                <FormContact dataForm={dataContact?.contentContact} />
            </main>
        </>
    )
}

export default Contact