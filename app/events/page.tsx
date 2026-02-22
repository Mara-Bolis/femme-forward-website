const events = [
  {
    id: 1,
    date: 'February 24, 2026',
    day: 'Tuesday',
    title: 'Bi-Monthly Happy Hour Gathering',
    series: 'Happy Hour',
    location: 'Washington, D.C.',
    description:
      'Our signature bi-monthly happy hour is the perfect way to unwind, meet fellow community members, and enjoy great conversation in a relaxed setting. Come as you are — and bring a friend! Location details shared upon sign-up.',
  },
  {
    id: 2,
    date: 'March 8, 2026',
    day: 'Sunday',
    title: 'Group Admin: The Resume',
    series: 'Sunday Admin Club',
    location: 'Washington, D.C.',
    description:
      'The Sunday Admin Club turns those tasks we always put off into a communal ritual. This session focuses on the résumé — refreshing, refining, and making yours work harder for your goals. Come with your current résumé and leave with a polished update, backed by peer support and collective wisdom.',
  },
  {
    id: 3,
    date: 'March 13, 2026',
    day: 'Friday',
    title: 'Your Resilient Self — Day 1',
    series: 'F//F Workshops',
    location: 'Washington, D.C.',
    description:
      'A two-day workshop experience exploring resilience, purpose, and personal growth. Day 1 lays the foundation through guided reflection, expert insight, and open community dialogue. Come ready to explore what resilience looks and feels like for you.',
  },
  {
    id: 4,
    date: 'March 14, 2026',
    day: 'Saturday',
    title: 'Your Resilient Self — Day 2',
    series: 'F//F Workshops',
    location: 'Washington, D.C.',
    description:
      'Building on Day 1, this session equips you with practical tools, peer frameworks, and actionable strategies for thriving through challenge and change. Space is limited — register for both days for the full experience.',
  },
  {
    id: 5,
    date: 'March 22, 2026',
    day: 'Sunday',
    title: 'Community Walk in Capitol Hill',
    series: 'Walk//Forward',
    location: 'Capitol Hill, Washington, D.C.',
    description:
      'Lace up your sneakers and join us for a community walk through the historic streets of Capitol Hill. A chance to move, breathe fresh air, and connect with fellow members in a casual, restorative setting. All paces welcome.',
  },
]

const seriesColors: Record<string, string> = {
  'Happy Hour': 'text-amber-700 bg-amber-50 border-amber-200',
  'Sunday Admin Club': 'text-blue-700 bg-blue-50 border-blue-200',
  'F//F Workshops': 'text-[#5E0037] bg-[#5E0037]/5 border-[#5E0037]/20',
  'Walk//Forward': 'text-emerald-700 bg-emerald-50 border-emerald-200',
}

export default function EventsPage() {
  return (
    <main className="bg-[#FAF2E7] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#FAF2E7] border-b border-[#5E0037]/15 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs text-[#5E0037] font-semibold uppercase tracking-widest mb-3">
            Upcoming Gatherings
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-4">
            Events
          </h1>
          <p className="font-sans text-stone-500 max-w-xl leading-relaxed">
            All events are in-person in Washington, D.C. Registration links and
            location details are shared via our{' '}
            <a
              href="https://linktr.ee/femmeforward.dc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5E0037] hover:underline"
            >
              Linktree hub
            </a>
            .
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white/60 border border-[#5E0037]/10 rounded-2xl p-8 hover:border-[#5E0037]/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Date block */}
                <div className="shrink-0 md:w-36 text-left md:text-center">
                  <p className="font-sans text-2xl font-bold text-[#5E0037] leading-none">
                    {event.date.split(' ')[1].replace(',', '')}
                  </p>
                  <p className="font-sans text-xs text-stone-400 uppercase tracking-wide mt-1">
                    {event.date.split(' ')[0]} · {event.day}
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px bg-[#5E0037]/15 self-stretch" />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`font-sans text-xs font-semibold px-3 py-1 rounded-full border ${
                        seriesColors[event.series] ||
                        'text-stone-600 bg-stone-50 border-stone-200'
                      }`}
                    >
                      {event.series}
                    </span>
                    <span className="font-sans text-xs text-stone-400">
                      {event.location}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl md:text-2xl text-stone-800 mb-3">
                    {event.title}
                  </h2>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed mb-5">
                    {event.description}
                  </p>

                  <a
                    href="https://linktr.ee/femmeforward.dc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#5E0037] text-[#FAF2E7] font-sans text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#4a002b] transition-colors"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#5E0037]/15 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl text-stone-800 mb-3">
            Don't miss future events
          </h2>
          <p className="font-sans text-stone-500 mb-7 text-sm leading-relaxed">
            Sign up to receive event updates directly to your inbox — whether
            you're local to D.C. or just passing through.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf_Hdy5pbkyy_kOC3JUeixEvHjBuBXGG8V3wFYV-w02kcVl2w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5E0037] text-[#FAF2E7] font-sans font-medium px-8 py-3.5 rounded-full hover:bg-[#4a002b] transition-colors"
          >
            Get Event Updates
          </a>
        </div>
      </section>
    </main>
  )
}
