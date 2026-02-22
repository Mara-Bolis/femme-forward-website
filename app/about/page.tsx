import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="bg-[#FAF2E7] min-h-screen">
      {/* Page Header */}
      <section className="border-b border-[#5E0037]/15 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs text-[#5E0037] font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800">
            About Femme//Forward
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-6 leading-snug">
              We bring purpose-driven women together — in person.
            </h2>
            <p className="font-sans text-stone-600 leading-relaxed mb-5">
              Femme//Forward brings purpose-driven women together through
              monthly, in-person gatherings that spark connection, cultivate
              community, and create space to learn from one another and
              collaborate.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed mb-5">
              There are so many ambitious, purpose-driven women out there — but
              real connection and wellbeing can get lost in the daily grind and
              noise of virtual life. We created a community where women can be
              intentional with their time, connect authentically, support each
              other's careers, and recharge while making a positive impact.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed">
              This community isn't just for D.C. — anyone can join! While our
              focus is on in-person gatherings in Washington, D.C., virtual
              sessions may be added if there's enough interest. If you're just
              passing through, sign up to get event updates and join us when
              you're in town.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                label: 'Connection',
                desc: 'Face-to-face moments that foster genuine relationships and lasting bonds.',
              },
              {
                label: 'Community',
                desc: 'A curated, welcoming space for ambitious women to show up authentically.',
              },
              {
                label: 'Collaboration',
                desc: 'Shared knowledge, collective wisdom, and opportunities to grow together.',
              },
            ].map((pillar) => (
              <div
                key={pillar.label}
                className="flex items-start gap-4 p-5 rounded-xl border border-[#5E0037]/10 bg-white/40"
              >
                <div className="w-8 h-0.5 bg-[#5E0037] shrink-0 mt-3" />
                <div>
                  <h3 className="font-serif text-lg text-stone-800 mb-1">
                    {pillar.label}
                  </h3>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-[#5E0037]/5 border-t border-[#5E0037]/15 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs text-[#5E0037] font-semibold uppercase tracking-widest mb-10 text-center">
            Meet the Founder
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-[#5E0037]/15">
                <Image
                  src="/images/tu.jpeg"
                  alt="Tu Rinsche, Founder of Femme//Forward"
                  width={500}
                  height={600}
                  className="object-cover w-full"
                />
              </div>
              <div className="mt-5 text-center md:text-left">
                <h3 className="font-serif text-2xl text-stone-800">
                  Tu Rinsche
                </h3>
                <p className="font-sans text-sm text-[#5E0037] font-medium mt-1">
                  Founder, Femme//Forward
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3 space-y-5">
              <p className="font-sans text-stone-700 leading-relaxed">
                Tu Rinsche is an award-winning social impact and human rights
                leader with twenty years of experience driving measurable
                results across government, global brands, and the nonprofit
                sector. Known for her pragmatic approach and ability to
                translate policies into strategic action, Tu has built and led
                multidisciplinary teams, designed enterprise-level strategies,
                and executed programs that have turned values, policy, and
                regulatory compliance into positive outcomes for business,
                workers, and communities.
              </p>

              <p className="font-sans text-stone-700 leading-relaxed">
                She has held senior social impact and human rights roles at
                major multinational corporations including Starbucks, HP Inc.,
                The Walt Disney Company, Marriott International, and The
                Ritz-Carlton, leading initiatives in supply chain
                accountability, labor rights, responsible sourcing, governance,
                social investment, LGBTI rights, gender equality, and human
                trafficking prevention.
              </p>

              <p className="font-sans text-stone-700 leading-relaxed">
                In the nonprofit sector, Tu held C-suite roles at leading human
                rights organizations including the Minderoo Foundation's Walk
                Free and Transparentem, where she led complex negotiations with
                global brands related to forced labor investigations in the
                apparel industry.
              </p>

              <p className="font-sans text-stone-700 leading-relaxed">
                She began her career in public service with the U.S. Peace
                Corps in Mauritania and the U.S. Department of State. Tu holds
                a B.A. in International Affairs from The George Washington
                University and an M.A. in International Affairs and
                International Security Policy from Columbia University.
              </p>

              <p className="font-sans text-stone-700 leading-relaxed">
                Originally from Vietnam, she resides in the Washington, D.C.
                area. In her free time, Tu enjoys endurance running, supporting
                women's economic empowerment, prototyping AI tools for social
                impact, and baking with new recipes she finds on Instagram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl text-stone-800 mb-3">
            Become part of the community
          </h2>
          <p className="font-sans text-stone-500 mb-7 text-sm">
            Join Femme//Forward and connect with purpose-driven women in
            Washington, D.C.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_Hdy5pbkyy_kOC3JUeixEvHjBuBXGG8V3wFYV-w02kcVl2w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5E0037] text-[#FAF2E7] font-sans font-medium px-8 py-3.5 rounded-full hover:bg-[#4a002b] transition-colors"
            >
              Sign Up Now
            </a>
            <Link
              href="/events"
              className="inline-block border-2 border-[#5E0037] text-[#5E0037] font-sans font-medium px-8 py-3.5 rounded-full hover:bg-[#5E0037] hover:text-[#FAF2E7] transition-colors"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
