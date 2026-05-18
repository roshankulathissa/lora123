import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
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
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-opacity hover:opacity-90 shadow-glow"
            style={{ background: "#25D366" }}
          >
            <MessageCircle size={22} />
            Open WhatsApp
            <ArrowRight size={18} />
          </a>
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
