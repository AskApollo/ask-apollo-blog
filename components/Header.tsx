'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { usePathname } from 'next/navigation'
import { Anek_Latin } from 'next/font/google'

const anek = Anek_Latin({ subsets: ['latin'] })

const Header = () => {
  const pathname = usePathname()
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="https://www.askapollohq.com" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center">
            <div className="mr-2 rounded  dark:bg-opacity-20">
              <Logo />
            </div>
            <span
              className={`${anek.className} whitespace-nowrap bg-gradient-to-r from-[#1F7FF0] via-[#00ffff] to-[#1F7FF0] bg-clip-text text-2xl font-bold text-transparent xl:text-3xl`}
            >
              ASK<span className="font-normal ">APOLLO</span>
            </span>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 lg:space-x-6">
        {headerNavLinks
          // .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`hidden whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100 sm:block lg:text-base ${
                (pathname.startsWith(link.href) && link.href != '/') ||
                (pathname == '/' && link.href == '/')
                  ? ' underline decoration-primary-500 underline-offset-4 '
                  : ''
              }`}
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
