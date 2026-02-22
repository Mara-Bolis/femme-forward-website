import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#5E0037] text-[#FAF2E7]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/femme-forward-logo.jpg"
              alt="Femme//Forward"
              width={130}
              height={55}
              className="object-contain mb-4 brightness-0 invert"
            />
            <p className="font-sans text-sm text-[#FAF2E7]/75 leading-relaxed max-w-xs">
              Intentional in-person experiences for purpose-driven professional
              women. Based in Washington, D.C.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-5 text-[#FAF2E7]/60">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: '/events', label: 'Events' },
                { href: '/about', label: 'About' },
                { href: '/join', label: 'Join' },
                { href: '/social', label: 'Social' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-[#FAF2E7]/75 hover:text-[#FAF2E7] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-5 text-[#FAF2E7]/60">
              Connect
            </h4>
            <a
              href="https://linktr.ee/femmeforward.dc"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-sans text-sm text-[#FAF2E7]/75 hover:text-[#FAF2E7] transition-colors mb-4"
            >
              Linktree Hub →
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_Hdy5pbkyy_kOC3JUeixEvHjBuBXGG8V3wFYV-w02kcVl2w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FAF2E7] text-[#5E0037] font-sans text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white transition-colors"
            >
              Join the Community
            </a>
          </div>
        </div>

        <div className="border-t border-[#FAF2E7]/20 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-[#FAF2E7]/50">
            © 2026 Femme//Forward. Washington, D.C.
          </p>
          <p className="font-sans text-xs text-[#FAF2E7]/50">
            Connection · Community · Collaboration
          </p>
        </div>
      </div>
    </footer>
  )
}
