import Link from 'next/link'

const faqs = [
  {
    q: 'Who is Femme//Forward for?',
    a: 'Femme//Forward is for ambitious, purpose-driven professional women who value authentic connection and meaningful community. Whether you\'re a seasoned executive, a purpose-driven entrepreneur, or an emerging leader — if you\'re intentional about how you invest your time and energy, you\'ll fit right in.',
  },
  {
    q: 'Do I need to live in D.C. to join?',
    a: 'Not at all! This community isn\'t just for D.C. residents. Anyone can join. While the focus is on in-person gatherings in Washington, D.C., virtual sessions may be added in the future. If you\'re visiting D.C., sign up and we\'ll keep you updated on events during your stay.',
  },
  {
    q: 'What kinds of events do you host?',
    a: 'Our gatherings range from casual happy hours to skill-building workshops (Sunday Admin Club), two-day personal development retreats (F//F Workshops), and outdoor community walks (Walk//Forward). Every event is designed to foster genuine connection alongside purposeful activity.',
  },
  {
    q: 'Is there a membership fee?',
    a: 'Sign-up is free. Individual events may have registration fees depending on the format and venue. All details are shared via our Linktree hub when events are announced.',
  },
  {
    q: 'How do I find out about upcoming events?',
    a: 'Sign up using the form below to receive event updates. You can also follow us via our Linktree hub for the latest announcements.',
  },
]

export default function JoinPage() {
  return (
    <main className="bg-[#FAF2E7] min-h-screen">
      {/* Page Header */}
      <section className="border-b border-[#5E0037]/15 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs text-[#5E0037] font-semibold uppercase tracking-widest mb-3">
            Become a Member
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800">
            Join Femme//Forward
          </h1>
        </div>
      </section>

      {/* Intro + CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-serif text-3xl text-stone-800 mb-5 leading-snug">
              Your community is waiting.
            </h2>
            <p className="font-sans text-stone-600 leading-relaxed mb-5">
              Signing up takes less than two minutes. Once you're in, you'll
              receive updates on upcoming gatherings, workshop invitations, and
              everything the Femme//Forward community has to offer.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mb-8">
              This is a community built on trust, intentionality, and
              warmth. We'd love to have you.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_Hdy5pbkyy_kOC3JUeixEvHjBuBXGG8V3wFYV-w02kcVl2w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5E0037] text-[#FAF2E7] font-sans font-semibold px-10 py-4 rounded-full hover:bg-[#4a002b] transition-colors text-lg"
            >
              Sign Up Now
            </a>
            <p className="font-sans text-xs text-stone-400 mt-3">
              Free to join. No spam. Just great events.
            </p>
          </div>

          {/* What to expect */}
          <div className="bg-[#5E0037]/5 border border-[#5E0037]/10 rounded-2xl p-8">
            <h3 className="font-serif text-xl text-stone-800 mb-6">
              What to expect
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: '◆',
                  text: 'Monthly in-person gatherings in Washington, D.C.',
                },
                {
                  icon: '◆',
                  text: 'Curated events: happy hours, workshops, walks, and more.',
                },
                {
                  icon: '◆',
                  text: 'A warm, welcoming community of purpose-driven women.',
                },
                {
                  icon: '◆',
                  text: 'No performance, no pressure — just real connection.',
                },
                {
                  icon: '◆',
                  text: 'Event updates delivered directly to your inbox.',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#5E0037] text-xs mt-1 shrink-0">
                    {item.icon}
                  </span>
                  <p className="font-sans text-sm text-stone-700 leading-relaxed">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#5E0037]/15 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-stone-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#5E0037]/10 pb-8">
                <h3 className="font-serif text-lg text-stone-800 mb-3">
                  {faq.q}
                </h3>
                <p className="font-sans text-stone-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#5E0037] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-[#FAF2E7] mb-5">
            Ready to get started?
          </h2>
          <p className="font-sans text-[#FAF2E7]/75 mb-8 text-sm leading-relaxed">
            Join hundreds of purpose-driven women across Washington, D.C. and
            beyond. Your next meaningful connection is one sign-up away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_Hdy5pbkyy_kOC3JUeixEvHjBuBXGG8V3wFYV-w02kcVl2w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FAF2E7] text-[#5E0037] font-sans font-semibold px-10 py-4 rounded-full hover:bg-white transition-colors"
            >
              Sign Up
            </a>
            <Link
              href="/events"
              className="inline-block border-2 border-[#FAF2E7]/50 text-[#FAF2E7] font-sans font-medium px-10 py-4 rounded-full hover:border-[#FAF2E7] transition-colors"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
