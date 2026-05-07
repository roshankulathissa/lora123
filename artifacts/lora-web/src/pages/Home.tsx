import { Link } from "wouter";
import { ArrowRight, Globe, Shield, Users, Award, Briefcase, CheckCircle, Link2, MapPin as MapPinIcon, ClipboardList, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    letter: "L",
    icon: Link2,
    title: "Linking",
    description:
      "We aren't just a middleman; we are the vital connection between a dream and a reality.",
  },
  {
    letter: "O",
    icon: Globe,
    title: "Overseas",
    description:
      "Our reach is borderless, opening doors in the world's most thriving economies.",
  },
  {
    letter: "R",
    icon: ClipboardList,
    title: "Recruitment",
    description:
      "A rigorous, fair, and professional process ensuring the right fit for candidate and company.",
  },
  {
    letter: "A",
    icon: Heart,
    title: "Aspirance",
    description:
      "The burning desire for progress that we vow to protect and nurture.",
  },
];

const services = [
  "Skilled & unskilled worker placement",
  "Professional & managerial recruitment",
  "Pre-departure orientation & training",
  "Document verification & attestation support",
  "Visa and travel assistance",
  "Post-placement welfare support",
];


export default function Home() {
  return (
    <div>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/home-hero.jpg')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, oklch(55% 0.18 60 / 0.70) 0%, oklch(18% 0.08 240 / 0.82) 55%, oklch(15% 0.06 240 / 0.88) 100%)"
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white mb-8 opacity-90"
            style={{ background: "oklch(75% 0.18 75 / 0.2)", border: "1px solid oklch(75% 0.18 75 / 0.3)" }}
          >
            <Globe size={14} />
            Trusted Sri Lankan Overseas Recruitment Agency
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Gateway to
            <br />
            <span className="text-gold">Global Opportunities</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            LORA Foreign Employment connects talented Sri Lankans with legitimate
            overseas career opportunities — safely, ethically, and with full
            government compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/jobs">
              <Button
                variant="hero"
                size="xl"
                gradientStyle="accent"
                className="rounded-full px-8"
              >
                Browse Jobs
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="xl"
                className="rounded-full px-8 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50"
              >
                Talk to Us
              </Button>
            </Link>
          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Vision & Mission
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We believe every Sri Lankan deserves access to safe and rewarding international employment.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="p-8 rounded-2xl shadow-card border border-gray-100 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  <Globe size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be Sri Lanka's most trusted overseas recruitment agency — recognized for integrity,
                  excellence, and transforming lives through meaningful international employment opportunities.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="p-8 rounded-2xl shadow-card border border-gray-100 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Award size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To connect skilled and dedicated Sri Lankans with reputable international employers
                  through ethical recruitment practices, comprehensive support, and unwavering commitment
                  to candidate welfare.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-[18rem] font-black text-white/[0.03] leading-none">&#8220;</div>
          <div className="absolute -right-10 bottom-0 text-[18rem] font-black text-white/[0.03] leading-none">&#8221;</div>
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent" style={{ transform: "rotate(-3deg) scaleX(2)" }} />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="mb-6 flex justify-center">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400 opacity-60" />
                <span className="text-amber-400/80 text-xs font-bold uppercase tracking-[0.25em]">Our Promise</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400 opacity-60" />
              </div>
            </div>

            <blockquote>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed mb-3">
                "At LORA, we don't just{" "}
                <span className="italic text-white">move people across borders</span>;
              </p>
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent leading-tight"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              >
                we move lives forward."
              </p>
            </blockquote>

            <div className="mt-10 flex justify-center">
              <div className="flex items-center gap-2 opacity-50">
                <div className="h-px w-16 bg-white" />
                <span className="text-white text-xs tracking-widest uppercase">LORA Foreign Employment</span>
                <div className="h-px w-16 bg-white" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24" style={{ background: "#eef2f7" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
              The LORA Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Four Pillars
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
              Our identity is built on a foundation of four core values that ensure every placement
              is ethical, efficient, and life-changing.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                  <div
                    className="absolute top-2 right-3 text-8xl font-semibold select-none pointer-events-none"
                    style={{ color: "oklch(75% 0.18 75 / 0.28)", lineHeight: 1 }}
                  >
                    {pillar.letter}
                  </div>
                  <div className="relative z-10">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: "oklch(30% 0.09 240)" }}
                    >
                      <pillar.icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-base">{pillar.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Recruitment Services
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                From your first inquiry to post-placement welfare, we support you every step
                of the way. Our full-service approach ensures you're never alone in your
                international journey.
              </p>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="flex-shrink-0 text-gold" />
                    {service}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <div
                className="rounded-3xl p-10 text-white"
                style={{ background: "var(--gradient-hero)" }}
              >
                <Briefcase size={40} className="text-gold mb-6" />
                <h3 className="text-2xl font-bold mb-4">Ready to start your journey?</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Explore our current job openings across the Middle East and Asia,
                  or contact us to discuss your specific skills and career goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/jobs">
                    <Button variant="hero" gradientStyle="accent" className="rounded-full">
                      View Openings
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                  <Link href="/apply">
                    <Button
                      variant="outline"
                      className="rounded-full border-white/30 text-white bg-white/10 hover:bg-white/20"
                    >
                      Apply via WhatsApp
                    </Button>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "#eef2f7" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img
                  src="/air-ticketing.jpeg"
                  alt="LORA Air Ticketing Service"
                  className="w-full h-80 object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, oklch(18% 0.05 240 / 0.4) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-5 left-5">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white" style={{ background: "var(--gradient-accent)" }}>
                    ✈ Certified Air Ticketing
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
                  Additional Services
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                  Air Ticketing — <br className="hidden sm:block" />
                  <span className="text-gold">We've Got You Covered</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Beyond recruitment, LORA offers a full air ticketing service to make your
                  departure as smooth as possible. Our qualified team has the expertise to
                  secure the best international flights for our candidates and their families.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "International flight bookings at competitive fares",
                    "Qualified & certified ticketing professionals",
                    "Assistance with travel documentation",
                    "Flexible scheduling around your departure dates",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-700 text-sm">
                      <CheckCircle size={17} className="flex-shrink-0 text-gold mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant="hero" gradientStyle="accent" className="rounded-full px-7">
                    Enquire About Air Tickets
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="py-24 text-center text-white"
        style={{ background: "var(--gradient-accent)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Start Your Overseas Career Today
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Thousands of Sri Lankans have built better futures through LORA.
              Let us guide you to your next opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jobs">
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-white text-gray-900 hover:bg-white/90 font-semibold"
                >
                  Browse Available Jobs
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-white/20 text-white border border-white/30 hover:bg-white/30"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
