import { Users, Award, Globe, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";

const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Successful Placements", value: "5,000+" },
  { label: "Partner Countries", value: "8+" },
  { label: "Active Job Orders", value: "300+" },
];

const team = [
  {
    name: "W.P.W. Rasanjali Jayakodi",
    title: "Licensee",
    image: "/rasanjali.jpeg",
    bio: "Mrs. Rasanjali Jayakodi is the licensed proprietor of LORA Foreign Employment (Pvt) Ltd, holding the official SLBFE license that authorizes all overseas recruitment operations. With a deep commitment to ethical and legal compliance, she ensures every placement meets the highest regulatory standards set by the Sri Lanka Bureau of Foreign Employment.",
  },
  {
    name: "W.P.A. Udeshika Rasaj",
    title: "Managing Director",
    image: "/udeshika.jpeg",
    bio: "Mr. Udeshika Rasaj leads the day-to-day operations of LORA Foreign Employment as Managing Director. He oversees recruitment activities, employer partnerships, and candidate welfare, driving the company's mission to connect Sri Lankan talent with trusted overseas opportunities across the Middle East and Asia.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with full transparency and zero tolerance for deceptive practices.",
  },
  {
    icon: Heart,
    title: "Candidate Welfare",
    description: "Every candidate's safety and well-being is our highest priority.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "We uphold international labor standards and work only with reputable employers.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We continuously improve our services to deliver the best outcomes for all.",
  },
];

import { Shield } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      <section
        className="py-24 text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About LORA</h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            LORA Foreign Employment (Pvt) Ltd has been a trusted name in Sri Lankan overseas
            recruitment since 2010. Licensed, ethical, and committed to your success.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80} className="text-center">
                <div
                  className="text-4xl font-bold bg-clip-text text-transparent mb-2"
                  style={{ backgroundImage: "var(--gradient-accent)" }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
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
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010, LORA Foreign Employment (Pvt) Ltd was established with a
                  simple but powerful mission: to provide every Sri Lankan job seeker with
                  safe, legitimate, and rewarding overseas employment opportunities.
                </p>
                <p>
                  Over the years, we have grown from a small local agency to a recognized
                  name in overseas recruitment, with established relationships with hundreds
                  of employers across the Middle East and Asia-Pacific regions.
                </p>
                <p>
                  We are fully licensed by the Sri Lanka Bureau of Foreign Employment (SLBFE)
                  and operate in strict compliance with Sri Lankan labor export laws and
                  international ethical recruitment guidelines.
                </p>
                <p>
                  Our team of experienced recruiters, welfare officers, and documentation
                  specialists work together to ensure every candidate is fully prepared,
                  informed, and supported throughout their overseas journey.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <div
                className="rounded-3xl p-10 text-white"
                style={{ background: "var(--gradient-hero)" }}
              >
                <Globe size={40} className="text-gold mb-6" />
                <h3 className="text-2xl font-bold mb-4">SLBFE Licensed Agency</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  We are a fully licensed overseas recruitment agency regulated by the
                  Sri Lanka Bureau of Foreign Employment, ensuring all our operations
                  meet the highest legal and ethical standards.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Zero placement fees (employer-paid)",
                    "Verified job orders only",
                    "Pre-departure briefing",
                    "24/7 welfare support",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="text-gold mt-1 flex-shrink-0">✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "oklch(97% 0.01 240)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Managing Directors
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              LORA is led by two experienced professionals dedicated to ethical overseas recruitment.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 150}>
                <div className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
                  <div className="h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.parentElement!.style.background = "var(--gradient-hero)";
                        target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center"><div class="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-white text-3xl font-bold">${member.name.charAt(0)}</div></div>`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-gold text-sm font-medium mb-3">{member.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="text-center p-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "var(--gradient-hero)" }}
                  >
                    <value.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
