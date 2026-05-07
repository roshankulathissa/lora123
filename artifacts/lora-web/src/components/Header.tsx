import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Jobs" },
  { href: "/about", label: "About Us" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/apply", label: "Apply Now" },
];

export default function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "border-b border-gray-200/60 shadow-sm"
          : "border-b border-white/10"
      }`}
      style={{
        background: scrolled
          ? "oklch(100% 0 0 / 0.80)"
          : "linear-gradient(135deg, oklch(18% 0.05 240 / 0.92) 0%, oklch(28% 0.08 240 / 0.92) 50%, oklch(22% 0.06 250 / 0.92) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/lora-logo.png"
              alt="LORA Foreign Employment"
              className="h-10 w-auto object-contain"
            />
            <div className={`text-xs leading-tight hidden sm:block transition-colors duration-300 ${scrolled ? "text-gray-500" : "text-white/70"}`}>
              Foreign Employment
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = location === href;
              const isApply = href === "/apply";
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isApply
                      ? "ml-2 px-5 py-2 text-white rounded-full"
                      : isActive
                      ? scrolled
                        ? "text-gray-900 bg-gray-100"
                        : "text-white bg-white/20"
                      : scrolled
                      ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  style={
                    isApply ? { background: "var(--gradient-accent)" } : {}
                  }
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden border-t backdrop-blur-md"
          style={{
            background: scrolled ? "oklch(100% 0 0 / 0.90)" : "oklch(18% 0.08 240 / 0.85)",
            borderColor: scrolled ? "oklch(90% 0 0)" : "oklch(100% 0 0 / 0.10)",
          }}
        >
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = location === href;
              const isApply = href === "/apply";
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isApply
                      ? "text-white text-center rounded-full mt-1"
                      : isActive
                      ? scrolled ? "text-gray-900 bg-gray-100" : "text-white bg-white/20"
                      : scrolled ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50" : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  style={
                    isApply ? { background: "var(--gradient-accent)" } : {}
                  }
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
