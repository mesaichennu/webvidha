import { Button } from "./ui/button";
import { ArrowRight, Loader2, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl p-8 sm:p-12 lg:p-16">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl text-primary-foreground mb-4">
              Ready to launch your website?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join hundreds of businesses that have gone online with Webvidha.
              Get your professional website in just 48 hours.
            </p>
          </div>

          {/* Two-column: contact info + form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT: info + quick action buttons */}
            <div className="flex flex-col gap-8">
              {/* Contact details */}
              <div className="flex flex-col gap-5">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-foreground/15 flex items-center justify-center shrink-0 group-hover:bg-primary-foreground/25 transition-colors">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-xs uppercase tracking-widest font-medium">Call / WhatsApp</p>
                    <p className="text-primary-foreground font-semibold text-lg">+91 94939 71229</p>
                  </div>
                </a>

                <a
                  href="mailto:webvidha@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-foreground/15 flex items-center justify-center shrink-0 group-hover:bg-primary-foreground/25 transition-colors">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-xs uppercase tracking-widest font-medium">Email Us</p>
                    <p className="text-primary-foreground font-semibold text-lg">webvidha@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-foreground/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-xs uppercase tracking-widest font-medium">Location</p>
                    <p className="text-primary-foreground font-semibold text-lg">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-primary-foreground/20" />

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 h-auto group flex-1"
                  onClick={() => document.getElementById("contact-form-name")?.focus()}
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 h-auto bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground flex-1"
                  asChild
                >
                  <a href="tel:+919493971229">Schedule a Call</a>
                </Button>
              </div>

              <p className="text-sm text-primary-foreground/70">
                🎉 Limited slots available this month
              </p>
            </div>

            {/* RIGHT: contact form */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 sm:p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <CheckCircle2 className="w-14 h-14 text-primary-foreground" />
                  <h3 className="text-2xl font-bold text-primary-foreground">Message Sent!</h3>
                  <p className="text-primary-foreground/75">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", phone: "", message: "" });
                    }}
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-primary-foreground mb-1">
                    Send us a message
                  </h3>

                  <input
                    id="contact-form-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name *"
                    className="w-full rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/40 transition"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address *"
                      className="w-full rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/40 transition"
                    />
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/40 transition"
                    />
                  </div>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/40 transition resize-none"
                  />

                  {status === "error" && (
                    <p className="text-sm text-red-300">Something went wrong. Please try again.</p>
                  )}

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full py-6 h-auto text-base font-bold"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}