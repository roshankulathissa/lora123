import { Phone, Mail, MapPin, MessageCircle, Facebook } from "lucide-react";
import Reveal from "@/components/Reveal";

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
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--gradient-accent)" }}
                  >
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-gray-800 font-medium leading-relaxed">
                      LORA Foreign Employment (Pvt) Ltd<br />
                      139/D First Floor, Kurunegala Road,<br />
                      Hettipola
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <span className="text-white text-xs font-bold">Lic</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Labour Licence</p>
                    <p className="text-gray-800 font-medium">3777</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--gradient-accent)" }}
                  >
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Mobile</p>
                    <div className="space-y-0.5">
                      <a href="tel:+94704040407" className="block text-gray-800 font-medium hover:text-gold transition-colors duration-200">
                        070 40 40 407
                      </a>
                      <a href="tel:+94702340823" className="block text-gray-800 font-medium hover:text-gold transition-colors duration-200">
                        070 23 40 823
                      </a>
                      <a href="tel:+94711567174" className="block text-gray-800 font-medium hover:text-gold transition-colors duration-200">
                        071 15 67 174
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Land Line</p>
                    <a href="tel:+94372290141" className="text-gray-800 font-medium hover:text-gold transition-colors duration-200">
                      037 22 90 141
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</p>
                    <a
                      href="mailto:loraemp@gmail.com"
                      className="text-gray-800 font-medium hover:text-gold transition-colors duration-200"
                    >
                      loraemp@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#1877F2" }}
                  >
                    <Facebook size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Facebook</p>
                    <a
                      href="https://www.facebook.com/share/1WYoeBQ2ci/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 font-medium hover:text-gold transition-colors duration-200"
                    >
                      LORA Foreign Employment
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
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
                <a
                  href="https://www.facebook.com/share/1WYoeBQ2ci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90"
                  style={{ background: "#1877F2" }}
                >
                  <Facebook size={18} />
                  Follow on Facebook
                </a>
              </div>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Find Our Office</h2>
              <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100 h-80">
                <iframe
                  src="https://maps.google.com/maps?q=7.606485,80.083265&z=16&output=embed"
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
                139/D First Floor, Kurunegala Road, Hettipola.
              </p>
              <a
                href="https://maps.app.goo.gl/PSjTNrvak1tTqg9h8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ background: "var(--gradient-accent)" }}
              >
                <MapPin size={16} />
                Open in Google Maps
              </a>
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
