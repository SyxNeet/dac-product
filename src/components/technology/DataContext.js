'use client'
import React from 'react'
import { createContext, useContext, useState } from 'react'

const DataContext = createContext()
export const DataProvider = ({ children }) => {
    const [dataBanner, setDataBanner] = useState('https://cms-dac.okhub.tech/wp-content/uploads/2023/11/TechnologyBanner1.png');
    return (
        <DataContext.Provider value={{ dataBanner, setDataBanner }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataBanner = () => {
    return useContext(DataContext)
}
