'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '../../../i18n-config'
import { useState } from 'react'

function SelectLang({ lang, checkHome, color }) {
  const pathName = usePathname()
  const [lng, setLng] = useState(lang)
  const redirectedPathName = (locale) => {
    if (!pathName) return `/${currentLang}`
    const segments = pathName.split('/')
    if (segments[1] !== 'it' && segments[1] !== 'en' && segments[1] !== 'fr') {
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
          onClick={() => setLng(locale.locale)}
          key={index}
          href={redirectedPathName(locale.locale)}
          className={`flex link items-center w-full border-r border-solid  last:border-none px-[0.6rem] ${checkHome ? 'border-black' : ''} border-[${color}] ${lng === locale.locale ? 'active' : ''}`}
        >
          <span className={`uppercase text-[1rem]  ${checkHome ? '!text-black' : 'text-white'} !text-[${color}]`}>{locale.locale}</span>
        </Link>
      ))}
    </div>
  )
}

export default SelectLang
