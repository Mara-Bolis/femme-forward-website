import Image from 'next/image'
import Link from 'next/link'

const pillars = [
  {
    title: 'Connection',
    desc: 'Authentic, face-to-face connections that cut through the noise of virtual life and foster genuine relationships between ambitious women.',
  },
  {
    title: 'Community',
    desc: 'A curated space where purpose-driven women support each other\'s growth, wellbeing, and careers — free from the performative nature of online networking.',
  },
  {
    title: 'Collaboration',
    desc: 'Opportunities to learn from one another, partner on initiatives, and multiply our collective impact in meaningful, lasting ways.',
  },
]

const previewEvents = [
  {
    id: 1,
    date: 'Feb 24, 2026',
    title: 'Bi-Monthly Happy Hour Gathering',
    series: 'Happy Hour',
  },
  {
    id: 2,
    date: 'Mar 8, 2026',
    title: 'Group Admin: The Resume',
    series: 'Sunday Admin Club',
  },
  {
    id: 3,
    date: 'Mar 13–14, 2026',
    title: 'Your Resilient Self',
    series: 'F//F Workshops',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-[#FAF2E7] pt-20 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10">
            <Image
              src="/images/femme-forward-logo.jpg"
              alt="Femme//Forward"
              width={420}
              height={180}
              className="mx-auto object-contain"
              priority
            />
          </div>

          <p className="font-serif text-xl md:text-2xl text-stone-700 max-w-2xl mx-auto leading-relaxed italic">
            Intentional in-person experiences for purpose-driven professional
            women to connect, build community, and collaborate.
          </p>

          <p className="font-sans text-sm text-stone-500 mt-4 tracking-wide uppercase">
            Washington, D.C. — and beyond
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_Hdy5pbkyy_kOC3JUeixEvHjBuBXGG8V3wFYV-w02kcVl2w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5E0037] text-[#FAF2E7] font-sans font-medium px-8 py-3.5 rounded-full hover:bg-[#4a002b] transition-colors text-center"
            >
              Join the Community
            </a>
            <Link
              href="/events"
              className="border-2 border-[#5E0037] text-[#5E0037] font-sans font-medium px-8 py-3.5 rounded-full hover:bg-[#5E0037] hover:text-[#FAF2E7] transition-colors text-center"
            >
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="bg-[#FAF2E7] border-t border-[#5E0037]/15 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 text-center mb-4">
            Built on Three Pillars
          </h2>
          <p className="font-sans text-stone-500 text-center mb-14 max-w-xl mx-auto">
            Every gathering is designed with intention — to create space for
            what matters most.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="text-center px-6 py-8 rounded-2xl border border-[#5E0037]/10 hover:border-[#5E0037]/30 transition-colors"
              >
                <div className="w-10 h-0.5 bg-[#5E0037] mx-auto mb-5" />
                <h3 className="font-serif text-2xl text-stone-800 mb-3">
                  {pillar.title}
                </h3>
                <p className="font-sans text-stone-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull Quote ── */}
      <section className="bg-[#5E0037] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl text-[#FAF2E7] leading-relaxed italic">
            "There are so many ambitious, purpose-driven women out there — but
            real connection and wellbeing can get lost in the daily grind and
            noise of virtual life."
          </p>
          <div className="w-16 h-px bg-[#FAF2E7]/30 mx-auto my-7" />
          <p className="font-sans text-[#FAF2E7]/60 text-xs tracking-widest uppercase">
            Femme//Forward
          </p>
        </div>
      </section>

      {/* ── Upcoming Events Preview ── */}
      <section className="bg-[#FAF2E7] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-800">
                Upcoming Gatherings
              </h2>
              <p className="font-sans text-stone-500 mt-2 text-sm">
                Spring 2026 · Washington, D.C.
              </p>
            </div>
            <Link
              href="/events"
              className="font-sans text-sm font-medium text-[#5E0037] hover:underline hidden sm:block"
            >
              See all events →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewEvents.map((event) => (
              <div
                key={event.id}
                className="group border border-[#5E0037]/15 rounded-2xl p-6 hover:border-[#5E0037]/40 transition-colors flex flex-col"
              >
                <p className="font-sans text-xs text-[#5E0037] font-semibold uppercase tracking-widest mb-2">
                  {event.series}
                </p>
                <p className="font-sans text-sm text-stone-400 mb-2">
                  {event.date}
                </p>
                <h3 className="font-serif text-lg text-stone-800 mb-5 flex-1">
                  {event.title}
                </h3>
                <a
                  href="https://linktr.ee/femmeforward.dc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm font-medium text-[#5E0037] group-hover:underline"
                >
                  Register →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/events"
              className="font-sans text-sm font-medium text-[#5E0037] hover:underline"
            >
              See all events →
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="bg-[#FAF2E7] border-t border-[#5E0037]/15 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-xs text-[#5E0037] font-semibold uppercase tracking-widest mb-4">
              About the Community
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-5 leading-snug">
              A new kind of community for women who mean business.
            </h2>
            <p className="font-sans text-stone-600 leading-relaxed mb-6">
              Femme//Forward brings purpose-driven women together through
              monthly, in-person gatherings that spark connection, cultivate
              community, and create space to learn and collaborate.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mb-8">
              While rooted in Washington, D.C., this community is open to
              anyone. If you're passing through, sign up for event updates and
              join us when you're in town.
            </p>
            <Link
              href="/about"
              className="font-sans text-sm font-medium text-[#5E0037] hover:underline"
            >
              Learn more about us →
            </Link>
          </div>
          <div className="bg-[#5E0037]/5 rounded-2xl p-8 border border-[#5E0037]/10">
            <p className="font-sans text-xs text-[#5E0037] font-semibold uppercase tracking-widest mb-4">
              This community is for you if you are…
            </p>
            <ul className="space-y-3">
              {[
                'An ambitious professional who craves real connection',
                'Ready to invest time in meaningful relationships',
                'Interested in supporting other women\'s growth',
                'Looking for a space to recharge and collaborate',
                'Based in D.C. or visiting the area',
              ].map((item) => (
                <li
                  key={item}
                  className="font-sans text-sm text-stone-700 flex items-start gap-3"
                >
                  <span className="text-[#5E0037] mt-0.5 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="bg-[#5E0037] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#FAF2E7] mb-5">
            Ready to join us?
          </h2>
          <p className="font-sans text-[#FAF2E7]/75 mb-10 leading-relaxed">
            Sign up to receive event updates and become part of the
            Femme//Forward community — wherever you are.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf_Hdy5pbkyy_kOC3JUeixEvHjBuBXGG8V3wFYV-w02kcVl2w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FAF2E7] text-[#5E0037] font-sans font-semibold px-10 py-4 rounded-full hover:bg-white transition-colors"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </main>
  )
}
