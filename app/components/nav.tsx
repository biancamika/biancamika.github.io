'use client';

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navItems = {
  '/work': {
    name: 'Work',
    isExternal: false
  },
  '/about': {
    name: 'About',
    isExternal: false
  },
  '/resume.pdf': {
    name: 'Resume',
    isExternal: true
  }
}

export function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <aside className="tracking-tight">
      <div 
        className="fixed flex flex-col w-full z-10 bg-gradient-to-b from-black to-transparent backdrop-blur-sm" 
        id="nav"
      >
        <nav
          className="flex flex-row items-center justify-between relative fade md:overflow-auto scroll-pr-6 md:relative px-4 py-2 sm:px-20 sm:py-2"
        >
          <a id="nav-home" href="/">Bianca Aguilar</a>
          <button className="flex sm:hidden text-stone-300" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
          <div className="hidden sm:flex sm:flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name, isExternal }]) => {
              return isExternal ? (
                <a
                  key={path}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={path}
                  href={path}
                  className={`flex align-middle relative py-1 px-2 m-1 ${pathname === path ? 'active' : ''}`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
        {/* Mobile nav menu */}
        {isMobileMenuOpen && (
          <div className="w-full bg-black">
            <div className="flex flex-col px-[0.5rem] py-3 gap-0">
              {Object.entries(navItems).map(([path, { name, isExternal }]) => {
                return isExternal? (
                  <a
                    key={path}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex align-middle relative py-1 px-2 m-1"
                  >
                    {name}
                  </a>
                ): (
                  <Link
                    key={path}
                    href={path}
                    className={`flex align-middle relative py-1 px-2 m-1 ${pathname === path ? 'active' : ''}`}
                  >
                    {name}
                  </Link>
                )
              })}  
            </div>        
          </div>
        )}
      </div>
    </aside>
  )
}
