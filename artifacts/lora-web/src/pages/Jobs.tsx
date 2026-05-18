import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Link } from "wouter";
import { MapPin, Briefcase, DollarSign, Users, ArrowRight, Search, Loader2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

interface Job {
  id: string;
  title: string;
  country: string;
  category: string;
  salary: string;
  positions: number;
  requirements: string[];
  description: string;
}

const fallbackJobs: Job[] = [
  { id: "1", title: "Construction Worker", country: "Qatar", category: "Construction", salary: "QAR 1,200 – 1,500 / month", positions: 50, requirements: ["Physical fitness", "Prior construction experience preferred", "Age 22–45"], description: "Work on large-scale infrastructure and building projects in Qatar. Accommodation, meals, and transport provided by employer." },
  { id: "2", title: "Housemaid / Domestic Helper", country: "UAE", category: "Domestic", salary: "AED 1,000 – 1,400 / month", positions: 30, requirements: ["Female candidates", "Age 21–45", "Basic English or Arabic preferred"], description: "Live-in domestic helper positions with reputable families in Dubai and Abu Dhabi. Full accommodation and meals included." },
  { id: "3", title: "Electrician (Skilled)", country: "Saudi Arabia", category: "Skilled Trade", salary: "SAR 1,800 – 2,400 / month", positions: 20, requirements: ["NVQ Level 3 or equivalent", "5+ years experience", "Age 25–45"], description: "Skilled electrician roles for industrial and commercial projects. ARAMCO-approved facilities." },
  { id: "4", title: "Security Guard", country: "Kuwait", category: "Security", salary: "KWD 150 – 200 / month", positions: 40, requirements: ["Male candidates", "Height min. 165 cm", "No criminal record", "Age 22–40"], description: "Security positions at commercial and residential complexes across Kuwait City." },
  { id: "5", title: "Factory Worker (Food Processing)", country: "Malaysia", category: "Manufacturing", salary: "MYR 1,500 – 1,800 / month", positions: 100, requirements: ["Basic education", "Age 22–40", "Both male and female"], description: "Production line roles in food processing factories. Overtime opportunities available." },
  { id: "6", title: "Plumber (Skilled)", country: "Qatar", category: "Skilled Trade", salary: "QAR 1,500 – 2,000 / month", positions: 15, requirements: ["NVQ Level 2 or equivalent", "3+ years experience", "Age 25–45"], description: "Plumbing installation and maintenance for large construction projects in Doha." },
  { id: "7", title: "Hotel Housekeeping Staff", country: "UAE", category: "Hospitality", salary: "AED 1,200 – 1,600 / month", positions: 25, requirements: ["Prior hotel experience preferred", "Age 21–40", "Both male and female"], description: "Housekeeping roles at 4 and 5-star hotels in Dubai. Staff accommodation provided." },
  { id: "8", title: "Driver (Heavy Vehicle)", country: "Oman", category: "Transportation", salary: "OMR 250 – 350 / month", positions: 20, requirements: ["Valid HV license", "5+ years driving experience", "Age 25–45", "Male"], description: "Heavy vehicle driver positions for logistics and transport companies in Muscat." },
  { id: "9", title: "Nurse (RN / Staff Nurse)", country: "Saudi Arabia", category: "Healthcare", salary: "SAR 3,500 – 5,000 / month", positions: 10, requirements: ["BSc Nursing", "SLMC registration", "2+ years clinical experience"], description: "Staff nurse positions at JCIA-accredited hospitals. Attractive package including accommodation and annual leave." },
];

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const q = query(collection(db, "jobs"), orderBy("createdAt", "asc"));
        const snap = await getDocs(q);
        const fetched = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Job));
        setJobs(fetched.length > 0 ? fetched : fallbackJobs);
      } catch {
        setJobs(fallbackJobs);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const categories = ["All", ...Array.from(new Set(jobs.map((j) => j.category)))];

  const filtered = jobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.country.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === "All" || job.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="pt-20">
      <section className="relative py-24 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/jobs-hero.png')" }} />
        <div className="absolute inset-0" style={{ background: "oklch(15% 0.04 240 / 0.75)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Overseas Job Openings</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Browse our current verified overseas positions across the Middle East and Asia.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs or countries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === cat ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  style={selectedCategory === cat ? { background: "var(--gradient-accent)" } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="animate-spin text-amber-500" size={32} />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Briefcase size={48} className="mx-auto mb-4 opacity-30" />
              <p>No jobs found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((job, i) => (
                <Reveal key={job.id} delay={i * 60}>
                  <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs font-medium text-gold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          {job.category}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-2">{job.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={14} className="text-gray-400" />
                        {job.country}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <DollarSign size={14} className="text-gray-400" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users size={14} className="text-gray-400" />
                        {job.positions} positions available
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{job.description}</p>

                    <div className="mb-5">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Requirements</p>
                      <ul className="space-y-1">
                        {job.requirements.map((req) => (
                          <li key={req} className="text-xs text-gray-600 flex items-start gap-1.5">
                            <span className="text-gold mt-0.5">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/apply">
                      <Button variant="glow" gradientStyle="accent" className="w-full rounded-xl">
                        Apply Now
                        <ArrowRight size={14} />
                      </Button>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 text-center text-white" style={{ background: "var(--gradient-primary)" }}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Don't see the right role?</h2>
          <p className="text-white/70 mb-6">
            Send us your CV and we'll match you with upcoming opportunities that fit your skills.
          </p>
          <Link href="/apply">
            <Button variant="hero" gradientStyle="accent" className="rounded-full px-8">
              Submit Your CV
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
