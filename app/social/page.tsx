const links = [
  {
    label: 'Linktree Hub',
    description:
      'All our links in one place — events, registration, updates, and more.',
    href: 'https://linktr.ee/femmeforward.dc',
    cta: 'Visit Linktree →',
    primary: true,
  },
  {
    label: 'Join the Community',
    description:
      'Sign up to receive event updates and become a Femme//Forward member.',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSf_Hdy5pbkyy_kOC3JUeixEvHjBuBXGG8V3wFYV-w02kcVl2w/viewform',
    cta: 'Sign Up Now →',
    primary: false,
  },
]

export default function SocialPage() {
  return (
    <main className="bg-[#FAF2E7] min-h-screen">
      {/* Page Header */}
      <section className="border-b border-[#5E0037]/15 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs text-[#5E0037] font-semibold uppercase tracking-widest mb-3">
            Stay Connected
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800">
            Social
          </h1>
        </div>
      </section>

      {/* Links Hub */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-stone-600 text-center mb-14 leading-relaxed">
            Follow along, stay in the loop, and connect with the
            Femme//Forward community wherever you are.
          </p>

          <div className="space-y-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-2xl p-8 border transition-all group ${
                  link.primary
                    ? 'bg-[#5E0037] border-[#5E0037] text-[#FAF2E7] hover:bg-[#4a002b]'
                    : 'bg-white/60 border-[#5E0037]/15 text-stone-800 hover:border-[#5E0037]/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2
                      className={`font-serif text-xl mb-2 ${
                        link.primary ? 'text-[#FAF2E7]' : 'text-stone-800'
                      }`}
                    >
                      {link.label}
                    </h2>
                    <p
                      className={`font-sans text-sm leading-relaxed ${
                        link.primary ? 'text-[#FAF2E7]/75' : 'text-stone-500'
                      }`}
                    >
                      {link.description}
                    </p>
                  </div>
                  <span
                    className={`font-sans text-sm font-medium ml-6 shrink-0 ${
                      link.primary ? 'text-[#FAF2E7]/80' : 'text-[#5E0037]'
                    } group-hover:translate-x-1 transition-transform inline-block`}
                  >
                    {link.cta}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Follow on social */}
          <div className="mt-16 text-center">
            <p className="font-sans text-xs text-stone-400 uppercase tracking-widest mb-4">
              Follow Along
            </p>
            <p className="font-sans text-stone-600 text-sm leading-relaxed mb-6">
              Find us on social media through our Linktree hub for the latest
              event announcements, community highlights, and updates.
            </p>
            <a
              href="https://linktr.ee/femmeforward.dc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#5E0037] text-[#5E0037] font-sans font-medium px-8 py-3 rounded-full hover:bg-[#5E0037] hover:text-[#FAF2E7] transition-colors"
            >
              Visit Our Linktree
            </a>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="bg-[#5E0037] py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-xl text-[#FAF2E7] italic mb-2">
            Rooted in Washington, D.C. — open to the world.
          </p>
          <p className="font-sans text-[#FAF2E7]/60 text-sm">
            Connection · Community · Collaboration
          </p>
        </div>
      </section>
    </main>
  )
}
