import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X, ChevronRight, Loader2, CheckCircle2 } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

function GetStartedModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    type: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xqeypaek", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-border">
        
        {/* Header */}
        <div
          className="px-6 pt-6 pb-4 rounded-t-2xl"
          style={{
            background: "linear-gradient(135deg, #3d0a0a 0%, #b83010 60%, #d45020 100%)",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <h2 className="text-2xl font-bold text-white mb-1">Let's Build Your Website</h2>
          <p className="text-white/70 text-sm">Fill in your details and we'll get back to you within 24 hours.</p>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
              <CheckCircle2 className="w-16 h-16 text-green-500" />
              <h3 className="text-xl font-bold">You're all set!</h3>
              <p className="text-muted-foreground">
                Thanks for reaching out. We'll contact you within 24 hours to get started.
              </p>
              <Button onClick={onClose} className="mt-2">Close</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-border bg-muted/40 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-border bg-muted/40 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-border bg-muted/40 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                  />
                </div>
              </div>

              {/* Business Name */}
              <div>
                <label className="text-sm font-medium mb-1.5 block">Business Name *</label>
                <input
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                  required
                  placeholder="Your Business Name"
                  className="w-full rounded-lg border border-border bg-muted/40 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="text-sm font-medium mb-1.5 block">Business Type *</label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-muted/40 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                >
                  <option value="">Select your business type</option>
                  <option value="retail">Retail / Shop</option>
                  <option value="restaurant">Restaurant / Cafe</option>
                  <option value="clinic">Clinic / Healthcare</option>
                  <option value="salon">Salon / Beauty</option>
                  <option value="education">Education / Coaching</option>
                  <option value="freelancer">Freelancer / Consultant</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium mb-1.5 block">Tell us about your website needs</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="E.g. I need a 3-page website for my clinic with an appointment booking form..."
                  className="w-full rounded-lg border border-border bg-muted/40 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-6 h-auto text-base font-bold"
                style={{
                  background: "linear-gradient(135deg, #b83010, #d45020)",
                }}
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Submit Request <ChevronRight className="w-4 h-4" />
                  </span>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We'll reach out within 24 hours. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Webvidha" className="h-8" />
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" asChild>
                <a href="#contact">Contact</a>
              </Button>
              <Button onClick={() => setModalOpen(true)}>Get Started</Button>
            </div>

            {/* Mobile right side: Get Started + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                size="sm"
                className="text-sm px-4"
                onClick={() => setModalOpen(true)}
              >
                Get Started
              </Button>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-muted/40 hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 pb-4 pt-2 flex flex-col gap-1 border-t border-border bg-background/95 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-sm font-medium"
              >
                {link.label}
                <ChevronRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
            <div className="pt-2 border-t border-border mt-1">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-sm font-medium"
              >
                Contact
                <ChevronRight className="w-4 h-4 opacity-40" />
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Get Started Modal */}
      {modalOpen && <GetStartedModal onClose={() => setModalOpen(false)} />}
    </>
  );
}