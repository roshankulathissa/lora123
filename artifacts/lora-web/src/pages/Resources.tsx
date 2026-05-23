import { FileText, Banknote, CheckCircle, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Reveal from "@/components/Reveal";
import { SITE_URL } from "@/lib/constants";

const cvTips = [
  {
    title: "Keep It Concise and Clear",
    points: [
      "Limit your CV to 1–2 pages.",
      "Focus on relevant experience that matches the job market (e.g., construction, caregiving, hospitality, or IT).",
    ],
  },
  {
    title: "Highlight Work Experience",
    points: [
      "List experience in reverse chronological order (most recent first).",
      "Include: company name and location, job title, duration (month/year – month/year), and main duties.",
    ],
  },
  {
    title: "Include Education and Certifications",
    points: [
      "Mention diplomas, technical courses, or professional training.",
      "If your certificates are translated into English, mention it.",
      "Include recognized qualifications like NVQ, City & Guilds, or trade-specific certificates for skilled labour jobs.",
    ],
  },
  {
    title: "Language Skills Matter",
    points: [
      "Clearly state your language proficiency level for each language you speak.",
    ],
  },
  {
    title: "Emphasize Technical and Soft Skills",
    points: [
      "For skilled jobs: include technical abilities (e.g., machinery operation, electrical wiring, carpentry).",
      "For service roles: highlight communication, teamwork, and responsibility.",
    ],
  },
  {
    title: "Add a Professional Photo",
    points: [
      "Many overseas employers expect a passport-size photo (neutral background, professional appearance).",
      "Avoid casual or selfie-style photos.",
    ],
  },
  {
    title: "Personal Information",
    points: [
      "Full name, date of birth or age, nationality.",
      "Contact details (phone, email).",
      "Current location and willingness to relocate.",
      "Optional: marital status (still common in some countries but not required).",
    ],
  },
];

const loanPoints = [
  {
    label: "Interest Rates",
    detail: "Some schemes offer around 8% interest or subsidised rates specifically for foreign employment.",
  },
  {
    label: "Required Documents",
    detail: "Valid employment contract / job permit, clean credit record, foreign currency account, and remittance history are usually required.",
  },
  {
    label: "Guarantors",
    detail: "A guarantor or mortgage security will typically be required by the bank.",
  },
  {
    label: "SLBFE Registration",
    detail: "You must be registered with the Sri Lanka Bureau of Foreign Employment (SLBFE) to be eligible.",
  },
];

export default function Resources() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Resources & Guidance — LORA Foreign Employment Sri Lanka</title>
        <meta name="description" content="CV writing tips, bank loan guidance for foreign job seekers, and pre-departure advice from LORA Foreign Employment — Sri Lanka's trusted overseas recruitment agency." />
        <meta property="og:title" content="Resources & Guidance for Overseas Job Seekers — LORA Foreign Employment" />
        <meta property="og:description" content="Helpful tips on writing your CV, applying for bank loans, and preparing for overseas employment from LORA's expert team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/resources`} />
        <meta property="og:image" content={`${SITE_URL}/home-hero.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`${SITE_URL}/resources`} />
      </Helmet>
      <section
        className="py-24 text-white text-center"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resources & Guidance</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Helpful tips and information to prepare you for your overseas employment journey.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--gradient-accent)" }}
              >
                <FileText size={18} className="text-white" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-500">Prepare Your Application</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">CV Writing Tips</h2>
            <p className="text-gray-500 mb-10">
              Follow these guidelines to put together a strong CV that stands out to overseas employers.
            </p>
          </Reveal>

          <div className="space-y-5">
            {cvTips.map((tip, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="rounded-2xl border border-gray-100 shadow-card p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <ChevronRight size={16} className="text-amber-500 flex-shrink-0" />
                    {tip.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {tip.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                        <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-green-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "oklch(97% 0.01 240)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Banknote size={18} className="text-white" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-500">Financial Support</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Bank Loans for Foreign Job Seekers</h2>
            <p className="text-gray-500 mb-10">
              Several Sri Lankan banks offer special loan schemes to support candidates heading abroad for employment.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {loanPoints.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 h-full">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">{item.label}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <p className="mt-8 text-sm text-gray-500 bg-white border border-gray-200 rounded-xl p-4">
              <strong className="text-gray-700">Note:</strong> Loan eligibility and terms vary by bank and scheme. Contact your preferred bank or LORA for guidance on which scheme suits your situation.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
