import { Link } from "wouter";
import { Phone, Mail, MapPin, MessageCircle, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/lora-logo.png"
                alt="LORA Foreign Employment"
                className="h-10 w-auto object-contain"
              />
              <div className="text-xs text-white/60">Foreign Employment</div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Sri Lanka's trusted overseas recruitment agency, connecting
              talented individuals with legitimate international career
              opportunities.
            </p>
            <a
              href="https://wa.me/94704040407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: "var(--gradient-accent)" }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/jobs", label: "Job Listings" },
                { href: "/about", label: "About Us" },
                { href: "/resources", label: "Resources" },
                { href: "/contact", label: "Contact" },
                { href: "/apply", label: "Apply Now" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                <span>
                  139/D First Floor, Kurunegala Road,<br />
                  Hettipola
                </span>
              </li>
              <li>
                <a
                  href="tel:+94704040407"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Phone size={16} className="flex-shrink-0 text-gold" />
                  070 40 40 407
                </a>
              </li>
              <li>
                <a
                  href="tel:+94702340823"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Phone size={16} className="flex-shrink-0 text-gold" />
                  070 23 40 823
                </a>
              </li>
              <li>
                <a
                  href="tel:+94711567174"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Phone size={16} className="flex-shrink-0 text-gold" />
                  071 15 67 174
                </a>
              </li>
              <li>
                <a
                  href="mailto:loraemp@gmail.com"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Mail size={16} className="flex-shrink-0 text-gold" />
                  loraemp@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1WYoeBQ2ci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Facebook size={16} className="flex-shrink-0 text-gold" />
                  LORA Foreign Employment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Licence & Compliance
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Labour Licence</p>
                <p className="text-white font-semibold text-base">3777</p>
              </li>
              <li className="pt-1 text-white/60 leading-relaxed">
                Licensed by the Sri Lanka Bureau of Foreign Employment (SLBFE).
                All recruitment conducted in full government compliance.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} LORA Foreign Employment (Pvt) Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>Labour Licence No. 3777 — Licensed by SLBFE</p>
            <Link href="/admin" className="text-white/20 hover:text-white/50 transition-colors duration-200 text-xs">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
