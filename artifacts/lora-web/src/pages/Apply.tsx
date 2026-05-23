import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Reveal from "@/components/Reveal";

const WHATSAPP_URL = "https://wa.me/94704040407";

const steps = [
  {
    step: "01",
    title: "Click the WhatsApp button",
    description: "You'll be redirected to WhatsApp to start a conversation with our team.",
  },
  {
    step: "02",
    title: "Send your details",
    description: "Share your name, age, skills, and the type of job you're interested in.",
  },
  {
    step: "03",
    title: "Send your CV",
    description: "Upload your CV or relevant documents directly in the WhatsApp chat.",
  },
  {
    step: "04",
    title: "We match you",
    description: "Our team reviews your profile and matches you with suitable job openings.",
  },
];

const documents = [
  "Valid passport (at least 12 months remaining)",
  "National Identity Card (NIC)",
  "Educational certificates / NVQ certificates",
  "Work experience letters",
  "Medical fitness certificate (if available)",
  "Police clearance certificate (if available)",
  "2 recent passport-size photographs",
];

export default function Apply() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Apply for Overseas Jobs via WhatsApp — LORA Foreign Employment</title>
        <meta name="description" content="Apply for overseas jobs easily via WhatsApp. Send your CV and details to LORA Foreign Employment and our team will match you with the right opportunity." />
        <meta property="og:title" content="Apply via WhatsApp — LORA Foreign Employment Sri Lanka" />
        <meta property="og:description" content="The fastest way to apply for overseas work. Chat with our team on WhatsApp and start your journey abroad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lora123.pages.dev/apply" />
        <meta property="og:image" content="https://lora123.pages.dev/home-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://lora123.pages.dev/apply" />
      </Helmet>
      <section
        className="py-24 text-white text-center"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ background: "oklch(100% 0 0 / 0.15)" }}
          >
            <MessageCircle size={36} className="text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Apply via WhatsApp</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            The fastest way to apply is directly through WhatsApp. Our team responds
            quickly and guides you through every step.
          </p>
          <div className="relative inline-block">
            <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "#25D366", opacity: 0.4 }} />
            <span className="absolute inset-0 rounded-full animate-ping animation-delay-300" style={{ background: "#25D366", opacity: 0.25, animationDelay: "0.4s" }} />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 active:scale-95 transition-transform duration-200 shadow-lg"
              style={{ background: "#25D366" }}
            >
              <MessageCircle size={22} />
              Open WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Apply</h2>
            <p className="text-gray-500">It's simple, fast, and free.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <div className="text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                    style={{ background: "var(--gradient-accent)" }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "oklch(97% 0.01 240)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Documents to Prepare</h2>
            <p className="text-gray-500 text-sm">
              Having these ready will speed up your application process.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-8">
              <ul className="space-y-4">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <CheckCircle size={18} className="flex-shrink-0 text-gold mt-0.5" />
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-500 text-sm mb-4">
                  Don't have all documents yet? Contact us anyway — we'll guide you through
                  what you need based on your specific situation.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle size={16} />
                  WhatsApp Us Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
