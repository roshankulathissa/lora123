import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+94 70 404 0407",
    href: "tel:+94704040407",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+94 70 404 0407",
    href: "https://wa.me/94704040407",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@loraemployment.lk",
    href: "mailto:info@loraemployment.lk",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "No. 45, Galle Road, Colombo 03, Sri Lanka",
    href: null,
  },
];

export default function Contact() {
  return (
    <div className="pt-20">
      <section
        className="py-24 text-white text-center"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Our team is ready to answer your questions and guide you through the overseas employment process.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <Reveal direction="left">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--gradient-accent)" }}
                    >
                      <item.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-gray-800 font-medium hover:text-gold transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-4 mt-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Office Hours
                    </p>
                    <div className="text-gray-800 text-sm space-y-0.5">
                      <p>Monday – Friday: 8:30 AM – 5:30 PM</p>
                      <p>Saturday: 9:00 AM – 1:00 PM</p>
                      <p className="text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://wa.me/94704040407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Find Our Office</h2>
              <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d79.8574!3d6.9037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnMTMuMyJOIDc5wrA1MScyNi42IkU!5e0!3m2!1sen!2slk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LORA Foreign Employment Office Location"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500 flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-gold" />
                No. 45, Galle Road, Colombo 03, Sri Lanka. Near Liberty Plaza.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "oklch(97% 0.01 240)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-sm">Quick answers to common questions.</p>
          </Reveal>
          <div className="space-y-4">
            {[
              {
                q: "Is there any fee to register with LORA?",
                a: "No. LORA does not charge any registration or placement fees to candidates. All our fees are paid by the overseas employers.",
              },
              {
                q: "How do I know a job offer is legitimate?",
                a: "All job orders we handle are verified and approved by the SLBFE. We only work with licensed overseas principals and registered employment agencies.",
              },
              {
                q: "Can I apply even without prior overseas experience?",
                a: "Yes. Many of our positions accept first-time overseas workers. We provide pre-departure orientation to help you prepare.",
              },
              {
                q: "How long does the process take?",
                a: "Timelines vary by country and position, but typically range from 4 to 12 weeks from application to departure.",
              },
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-xl p-6 shadow-card border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
