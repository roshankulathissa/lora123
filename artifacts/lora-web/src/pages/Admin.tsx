import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, orderBy, query } from "firebase/firestore";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { db, auth } from "@/lib/firebase";
import { Plus, Pencil, Trash2, LogOut, ChevronDown, ChevronUp, X, Check, Loader2 } from "lucide-react";

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

const defaultJobs = [
  { title: "Construction Worker", country: "Qatar", category: "Construction", salary: "QAR 1,200 – 1,500 / month", positions: 50, requirements: ["Physical fitness", "Prior construction experience preferred", "Age 22–45"], description: "Work on large-scale infrastructure and building projects in Qatar. Accommodation, meals, and transport provided by employer." },
  { title: "Housemaid / Domestic Helper", country: "UAE", category: "Domestic", salary: "AED 1,000 – 1,400 / month", positions: 30, requirements: ["Female candidates", "Age 21–45", "Basic English or Arabic preferred"], description: "Live-in domestic helper positions with reputable families in Dubai and Abu Dhabi. Full accommodation and meals included." },
  { title: "Electrician (Skilled)", country: "Saudi Arabia", category: "Skilled Trade", salary: "SAR 1,800 – 2,400 / month", positions: 20, requirements: ["NVQ Level 3 or equivalent", "5+ years experience", "Age 25–45"], description: "Skilled electrician roles for industrial and commercial projects. ARAMCO-approved facilities." },
  { title: "Security Guard", country: "Kuwait", category: "Security", salary: "KWD 150 – 200 / month", positions: 40, requirements: ["Male candidates", "Height min. 165 cm", "No criminal record", "Age 22–40"], description: "Security positions at commercial and residential complexes across Kuwait City." },
  { title: "Factory Worker (Food Processing)", country: "Malaysia", category: "Manufacturing", salary: "MYR 1,500 – 1,800 / month", positions: 100, requirements: ["Basic education", "Age 22–40", "Both male and female"], description: "Production line roles in food processing factories. Overtime opportunities available." },
  { title: "Plumber (Skilled)", country: "Qatar", category: "Skilled Trade", salary: "QAR 1,500 – 2,000 / month", positions: 15, requirements: ["NVQ Level 2 or equivalent", "3+ years experience", "Age 25–45"], description: "Plumbing installation and maintenance for large construction projects in Doha." },
  { title: "Hotel Housekeeping Staff", country: "UAE", category: "Hospitality", salary: "AED 1,200 – 1,600 / month", positions: 25, requirements: ["Prior hotel experience preferred", "Age 21–40", "Both male and female"], description: "Housekeeping roles at 4 and 5-star hotels in Dubai. Staff accommodation provided." },
  { title: "Driver (Heavy Vehicle)", country: "Oman", category: "Transportation", salary: "OMR 250 – 350 / month", positions: 20, requirements: ["Valid HV license", "5+ years driving experience", "Age 25–45", "Male"], description: "Heavy vehicle driver positions for logistics and transport companies in Muscat." },
  { title: "Nurse (RN / Staff Nurse)", country: "Saudi Arabia", category: "Healthcare", salary: "SAR 3,500 – 5,000 / month", positions: 10, requirements: ["BSc Nursing", "SLMC registration", "2+ years clinical experience"], description: "Staff nurse positions at JCIA-accredited hospitals. Attractive package including accommodation and annual leave." },
];

const emptyForm = { title: "", country: "", category: "", salary: "", positions: 1, requirements: "", description: "" };

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(135deg, oklch(18% 0.05 240) 0%, oklch(28% 0.08 240) 100%)" }}>
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4">
        <div className="text-center mb-8">
          <img src="/lora-logo.png" alt="LORA" className="h-14 mx-auto mb-3 object-contain" />
          <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to manage job listings</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{ background: "linear-gradient(135deg, oklch(65% 0.18 60) 0%, oklch(55% 0.18 50) 100%)" }}
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : null}
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

function JobForm({
  initial,
  onSave,
  onCancel,
  loading,
}: {
  initial: typeof emptyForm;
  onSave: (data: typeof emptyForm) => void;
  onCancel: () => void;
  loading: boolean;
}) {
  const [form, setForm] = useState(initial);
  const set = (k: string, v: string | number) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Job Title *</label>
          <input value={form.title} onChange={(e) => set("title", e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="e.g. Construction Worker" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Country *</label>
          <input value={form.country} onChange={(e) => set("country", e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="e.g. Qatar" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Category *</label>
          <input value={form.category} onChange={(e) => set("category", e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="e.g. Construction" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Salary *</label>
          <input value={form.salary} onChange={(e) => set("salary", e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="e.g. QAR 1,200 – 1,500 / month" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Positions Available *</label>
          <input type="number" min={1} value={form.positions} onChange={(e) => set("positions", parseInt(e.target.value) || 1)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Requirements (comma separated) *</label>
          <input value={form.requirements} onChange={(e) => set("requirements", e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Age 22-40, Male, Valid license" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wide">Description *</label>
        <textarea value={form.description} onChange={(e) => set("description", e.target.value)} rows={2} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none" placeholder="Brief job description…" />
      </div>
      <div className="flex gap-2 pt-1">
        <button
          onClick={() => onSave(form)}
          disabled={loading || !form.title || !form.country}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white disabled:opacity-50 transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, oklch(65% 0.18 60) 0%, oklch(55% 0.18 50) 100%)" }}
        >
          {loading ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
          Save Job
        </button>
        <button onClick={onCancel} className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
          <X size={14} /> Cancel
        </button>
      </div>
    </div>
  );
}

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (user) fetchJobs();
  }, [user]);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchJobs = async () => {
    setJobsLoading(true);
    try {
      const q = query(collection(db, "jobs"), orderBy("createdAt", "asc"));
      const snap = await getDocs(q);
      setJobs(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Job)));
    } catch {
      showToast("Failed to load jobs", "error");
    } finally {
      setJobsLoading(false);
    }
  };

  const handleAdd = async (form: typeof emptyForm) => {
    setSaving(true);
    try {
      await addDoc(collection(db, "jobs"), {
        title: form.title.trim(),
        country: form.country.trim(),
        category: form.category.trim(),
        salary: form.salary.trim(),
        positions: Number(form.positions),
        requirements: form.requirements.split(",").map((r) => r.trim()).filter(Boolean),
        description: form.description.trim(),
        createdAt: serverTimestamp(),
      });
      setShowAddForm(false);
      await fetchJobs();
      showToast("Job added successfully");
    } catch {
      showToast("Failed to add job", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = async (form: typeof emptyForm) => {
    if (!editingId) return;
    setSaving(true);
    try {
      await updateDoc(doc(db, "jobs", editingId), {
        title: form.title.trim(),
        country: form.country.trim(),
        category: form.category.trim(),
        salary: form.salary.trim(),
        positions: Number(form.positions),
        requirements: form.requirements.split(",").map((r) => r.trim()).filter(Boolean),
        description: form.description.trim(),
      });
      setEditingId(null);
      await fetchJobs();
      showToast("Job updated successfully");
    } catch {
      showToast("Failed to update job", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      await deleteDoc(doc(db, "jobs", id));
      await fetchJobs();
      showToast("Job deleted");
    } catch {
      showToast("Failed to delete job", "error");
    } finally {
      setDeletingId(null);
    }
  };

  const handleSeedJobs = async () => {
    if (!window.confirm(`This will add ${defaultJobs.length} default jobs to your database. Continue?`)) return;
    setSeeding(true);
    try {
      for (const job of defaultJobs) {
        await addDoc(collection(db, "jobs"), { ...job, createdAt: serverTimestamp() });
      }
      await fetchJobs();
      showToast(`${defaultJobs.length} default jobs imported`);
    } catch {
      showToast("Seeding failed", "error");
    } finally {
      setSeeding(false);
    }
  };

  const handleLogout = () => signOut(auth);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(135deg, oklch(18% 0.05 240) 0%, oklch(28% 0.08 240) 100%)" }}>
        <Loader2 className="text-white animate-spin" size={32} />
      </div>
    );
  }

  if (!user) return <LoginScreen onLogin={() => {}} />;

  return (
    <div className="min-h-screen bg-gray-50">
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-xl shadow-lg text-sm font-medium text-white transition-all ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
          {toast.msg}
        </div>
      )}

      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/lora-logo.png" alt="LORA" className="h-8 object-contain" />
            <span className="font-bold text-gray-900 text-sm">Admin Panel</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 hidden sm:block">{user.email}</span>
            <button onClick={handleLogout} className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-red-600 transition-colors font-medium">
              <LogOut size={15} /> Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Job Listings</h1>
            <p className="text-gray-500 text-sm mt-0.5">{jobs.length} job{jobs.length !== 1 ? "s" : ""} in database</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {jobs.length === 0 && !jobsLoading && (
              <button
                onClick={handleSeedJobs}
                disabled={seeding}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                {seeding ? <Loader2 size={14} className="animate-spin" /> : null}
                {seeding ? "Importing…" : "Import Default Jobs"}
              </button>
            )}
            <button
              onClick={() => { setShowAddForm(!showAddForm); setEditingId(null); }}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, oklch(65% 0.18 60) 0%, oklch(55% 0.18 50) 100%)" }}
            >
              {showAddForm ? <><ChevronUp size={15} /> Cancel</> : <><Plus size={15} /> Add New Job</>}
            </button>
          </div>
        </div>

        {showAddForm && (
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">New Job</h2>
            <JobForm
              initial={emptyForm}
              onSave={handleAdd}
              onCancel={() => setShowAddForm(false)}
              loading={saving}
            />
          </div>
        )}

        {jobsLoading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="animate-spin text-amber-500" size={28} />
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-medium mb-1">No jobs yet</p>
            <p className="text-sm">Click "Import Default Jobs" to populate with existing listings, or add jobs manually.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {editingId === job.id ? (
                  <div className="p-4">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Editing: {job.title}</p>
                    <JobForm
                      initial={{
                        title: job.title,
                        country: job.country,
                        category: job.category,
                        salary: job.salary,
                        positions: job.positions,
                        requirements: job.requirements.join(", "),
                        description: job.description,
                      }}
                      onSave={handleEdit}
                      onCancel={() => setEditingId(null)}
                      loading={saving}
                    />
                  </div>
                ) : (
                  <div className="p-4 flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2 flex-wrap">
                        <h3 className="font-semibold text-gray-900 text-sm">{job.title}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium">{job.country}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{job.category}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{job.salary} · {job.positions} positions</p>
                      <p className="text-xs text-gray-400 mt-0.5 truncate">{job.requirements.join(" · ")}</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button
                        onClick={() => { setEditingId(job.id); setShowAddForm(false); }}
                        className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
                        title="Edit"
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        onClick={() => { if (window.confirm(`Delete "${job.title}"?`)) handleDelete(job.id); }}
                        disabled={deletingId === job.id}
                        className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors disabled:opacity-40"
                        title="Delete"
                      >
                        {deletingId === job.id ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
