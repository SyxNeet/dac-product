import ApolloClientProvider from '../apolloProvider'
import './globals.css'
import Footer from '@/components/common/Footer'
// Sass
import '@/scss/main.scss'
// fonts
import '../../assets/fonts/stylesheet.css'
// Swiper
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import getDataPage from '@/data/getDataPage'
import { DATA_SOCIAL_FOOTER, GET_DATA_FOOTER } from '@/graphql/home/query'
import NavbarData from '@/components/common/NavbarData'
import SocialAction from '@/components/common/SocialAction'
import ScrollUp from '@/components/common/ScrollUp'
import Popup from '@/components/common/Popup'
import { fetchData } from '@/data/fetchData'
import { SLUG_JOB_FEATURE } from '@/graphql/recruitment/query'
export const metadata = {
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }]
}

export default async function RootLayout({ children, params }) {
  let lang = params.lang
  let dataFooter = await getDataPage(lang, GET_DATA_FOOTER)
  const dataFooterFinal = dataFooter?.data?.page?.translation
  const dataSocialFooter  = await getDataPage(lang,DATA_SOCIAL_FOOTER)
  const dataJobFeature = await fetchData(SLUG_JOB_FEATURE,{language:lang?.toUpperCase()})
  return (
    <html lang={lang}>
      <body>
        <ApolloClientProvider>
          <NavbarData lang={lang} />
          <Popup lang={lang} dataPopup = {dataJobFeature?.data?.allJobOpportunity?.nodes} />
          <SocialAction lang={lang} />
          <ScrollUp />
          {children}
          <Footer lang={lang} data={dataFooterFinal} dataSocialFooter={dataSocialFooter} />
        </ApolloClientProvider>
      </body>
    </html>
  )
}
