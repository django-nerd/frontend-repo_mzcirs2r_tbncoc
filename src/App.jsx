import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Rocket, TrendingUp, Megaphone, Layers, Users, Handshake, Mail, Github, Twitter, Linkedin } from 'lucide-react'

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/50 p-3 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div className="font-semibold tracking-tight text-gray-900">Satya Swaroop Voora</div>
          <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#expertise" className="hover:text-gray-900 transition-colors">Expertise</a>
            <a href="#work" className="hover:text-gray-900 transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-white text-sm font-medium hover:bg-black/90 transition-colors">
            Let’s talk <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.6])

  return (
    <section className="relative h-[95vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/80" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
              <Rocket size={14} /> Growth Operator
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] text-gray-900 sm:text-6xl">
              I architect growth across product, marketing, and partnerships
            </h1>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              I’m Satya Swaroop Voora — I help companies compound growth through product marketing, product management, sales, community development, and strategic partnerships.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-white font-medium hover:bg-black/90 transition-colors">
                Explore case studies <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-gray-900 font-medium border border-gray-200 hover:border-gray-300">
                Get in touch
              </a>
            </div>
          </motion.div>

          {/* Floating capability chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { icon: TrendingUp, label: 'Growth Strategy' },
              { icon: Megaphone, label: 'Product Marketing' },
              { icon: Layers, label: 'Product Management' },
              { icon: Users, label: 'Community Development' },
              { icon: Handshake, label: 'Partnerships' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur border border-black/5 shadow-sm"
              >
                <item.icon size={16} /> {item.label}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <span className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-gray-700">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  )
}

function Expertise() {
  const items = [
    {
      icon: TrendingUp,
      title: 'Growth Systems',
      desc: 'North-star metrics, growth loops, and experimentation frameworks that scale compounding growth.'
    },
    {
      icon: Megaphone,
      title: 'Product Marketing',
      desc: 'Messaging, positioning, and GTM plans that bridge user insight with product value.'
    },
    {
      icon: Layers,
      title: 'Product Management',
      desc: 'Roadmapping, discovery, and cross-functional alignment to ship outcomes, not just features.'
    },
    {
      icon: Users,
      title: 'Community Development',
      desc: 'Programs and playbooks that turn users into advocates and reduce CAC over time.'
    },
    {
      icon: Handshake,
      title: 'Partnerships',
      desc: 'Strategic integrations and co-marketing that unlock new distribution channels.'
    },
  ]

  return (
    <section id="expertise" className="relative py-20">
      <div className="absolute inset-0 -z-0 opacity-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100 via-white to-white" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="What I Do" title="Full-stack growth across the funnel" subtitle="I operate at the intersection of product, marketing, sales, and community." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ delay: 0.05 * i, duration: 0.5 }} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow">
              <div className="mb-4 inline-flex rounded-xl bg-gray-900 p-3 text-white"><card.icon size={20} /></div>
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const cases = [
    {
      title: 'B2B SaaS PLG Transformation',
      metric: 'ARR +42% in 9 months',
      bullets: [
        'Redesigned activation to reduce time-to-value by 60%',
        'Built pricing experiment framework; increased ARPA 18%',
        'Launched partner integrations driving 25% new signups'
      ]
    },
    {
      title: 'Community-led Growth Engine',
      metric: 'CAC -35%, NPS +22',
      bullets: [
        'Shipped ambassador program and tiered rewards',
        'Codified UGC playbook to scale organic reach',
        'Deployed referral-based onboarding paths'
      ]
    },
    {
      title: 'Enterprise GTM Realignment',
      metric: 'Win rate +15pp',
      bullets: [
        'Clarified ICP and multi-threaded deal strategy',
        'Tightened PMM-sales feedback loop',
        'ROI narrative and proof-library revamp'
      ]
    }
  ]

  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Selected Work" title="Case studies & outcomes" subtitle="A snapshot of programs and systems I’ve led." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ delay: 0.08 * i, duration: 0.5 }} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="text-sm font-medium text-gray-500">{c.metric}</div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{c.title}</h3>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                {c.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader eyebrow="About" title="Operator with cross-functional range" />
        <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <p className="text-gray-700 leading-relaxed">
            Over the last several years I’ve operated across product marketing, product management, sales, community development, and partnerships. I thrive in ambiguous environments, turning signal into systems — and systems into repeatable growth.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I collaborate tightly with product and go-to-market teams, connecting strategy to execution with clear metrics and fast feedback loops.
          </p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const links = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
  ]

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeader eyebrow="Let’s talk" title="Ready to compound growth?" subtitle="Tell me about your product, funnel, and goals — I’ll share where I can help most." />
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-gray-800 shadow-sm hover:border-black/20">
              <l.icon size={16} /> {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Work />
      <Contact />
      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Satya Swaroop Voora — Growth Operator
        </div>
      </footer>
    </div>
  )
}
