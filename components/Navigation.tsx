'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/events', label: 'Events' },
  { href: '/about', label: 'About' },
  { href: '/join', label: 'Join' },
  { href: '/social', label: 'Social' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-[#FAF2E7] border-b border-[#5E0037]/15">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/femme-forward-logo.jpg"
            alt="Femme//Forward"
            width={150}
            height={60}
            className="object-contain h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? 'text-[#5E0037]'
                  : 'text-stone-600 hover:text-[#5E0037]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf_Hdy5pbkyy_kOC3JUeixEvHjBuBXGG8V3wFYV-w02kcVl2w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5E0037] text-[#FAF2E7] font-sans text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#4a002b] transition-colors"
          >
            Join Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#5E0037] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF2E7] border-t border-[#5E0037]/15 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-base font-medium transition-colors ${
                pathname === link.href
                  ? 'text-[#5E0037]'
                  : 'text-stone-600 hover:text-[#5E0037]'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf_Hdy5pbkyy_kOC3JUeixEvHjBuBXGG8V3wFYV-w02kcVl2w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5E0037] text-[#FAF2E7] font-sans text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-[#4a002b] transition-colors"
          >
            Join Now
          </a>
        </div>
      )}
    </header>
  )
}
