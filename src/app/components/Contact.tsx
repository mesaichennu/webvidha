import { useState } from "react";
import { Loader2, CheckCircle2, ChevronRight, Mail, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient matching site theme */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #3d0a0a 0%, #7a1a0a 30%, #b83010 65%, #d45020 100%)",
        }}
      />
      {/* Soft radial glow */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 50%, rgba(255,160,60,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-medium backdrop-blur-sm mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Let's build something{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #fbbf24, #fde68a, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              great together
            </span>
          </h2>
          <p className="text-white/65 text-lg max-w-xl mx-auto">
            Tell us about your business and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-8 sm:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                <p className="text-white/65 max-w-sm">
                  Thanks for reaching out. We'll contact you within 24 hours to discuss your website.
                </p>
                <Button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", email: "", phone: "", business: "", message: "" });
                  }}
                  className="mt-2 bg-white text-orange-700 hover:bg-white/90 font-bold px-8"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">
                      Full Name <span className="text-orange-300">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/35 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">
                      Email <span className="text-orange-300">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/35 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Phone + Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/35 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">
                      Business Name <span className="text-orange-300">*</span>
                    </label>
                    <input
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      required
                      placeholder="Your Business"
                      className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/35 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition backdrop-blur-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1.5">
                    What do you need?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="E.g. I need a website for my clinic with an appointment form and 3 pages..."
                    className="w-full rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/35 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition backdrop-blur-sm resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-400/20 rounded-lg px-4 py-2">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-6 h-auto text-base font-bold bg-white text-orange-700 hover:bg-white/90 shadow-xl"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Send Message
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>

                <p className="text-center text-xs text-white/45">
                  We respond within 24 hours · No spam, ever
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}