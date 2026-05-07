import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

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
              opportunities since 2010.
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
                  No. 45, Galle Road,
                  <br />
                  Colombo 03, Sri Lanka
                </span>
              </li>
              <li>
                <a
                  href="tel:+94704040407"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Phone size={16} className="flex-shrink-0 text-gold" />
                  +94 70 404 0407
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@loraemployment.lk"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Mail size={16} className="flex-shrink-0 text-gold" />
                  info@loraemployment.lk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Office Hours
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Clock size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                <div>
                  <p>Mon – Fri: 8:30 AM – 5:30 PM</p>
                  <p>Saturday: 9:00 AM – 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} LORA Foreign Employment (Pvt) Ltd. All rights reserved.</p>
          <p>Licensed by the Sri Lanka Bureau of Foreign Employment</p>
        </div>
      </div>
    </footer>
  );
}
