import React from 'react'
import Navbar from './Navbar'
import getDataPage from '@/data/getDataPage'
import { GET_DATA_CATEGORY_PRODUCT_SERVICE } from '@/graphql/product/query'
async function NavbarData({ lang }) {
    const dataCategory = await getDataPage(lang, GET_DATA_CATEGORY_PRODUCT_SERVICE)
    return (
        <Navbar
            lang={lang}
            dataProductList={dataCategory?.data?.allCategoryProducts?.nodes}
        />
    )
}

export default NavbarData
