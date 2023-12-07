'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '../../../i18n-config'
import useStore from '@/(store)/store'

function SelectLang({ lang, checkHome, color }) {
  const pathName = usePathname()
  const slug = useStore((state) => state.slug);
  const redirectedPathName = (locale) => {
    if (!pathName) return `/${currentLang}`
    const segments = pathName.split('/')
    if (segments[1] !== 'en') {
      segments.splice(1, 0, locale)
      return segments.join('/')
    }
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='flex items-center select-lang max-md:hidden'>
      {i18n?.lo?.map((locale, index) => (
        <Link
          key={index}
          // href={redirectedPathName(locale.locale)}
          href={locale.locale==='vi'?slug?.slugVi||'/':slug?.slugEn||'/en'}
          className={`flex link items-center w-full border-r border-solid  last:border-none px-[0.6rem] ${checkHome ? 'border-black' : ''} border-[${color}] ${lang==='vi'&&index===0?'active':''} ${lang==='en'&&index===1?'active':''}`}
        >
          <span className={`uppercase lg:text-[1rem] md:text-[1.2rem]  ${checkHome ? '!text-black' : 'text-white'} !text-[${color}]`}>{locale.locale}</span>
        </Link>
      ))}
    </div>
  )
}

export default SelectLang
