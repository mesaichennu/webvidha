import { Button } from "./ui/button";
import { Check } from "lucide-react";

const featuresLeft = [
  "Custom professional design",
  "Mobile-responsive layout",
  "Up to 3 pages",
  "FREE hosting for 1 year",
  "SSL certificate included",
  "SEO optimization",
];

const featuresRight = [
  "Contact form integration",
  "Google Maps integration",
  "Social media links",
  "48-hour delivery",
  "One round of revisions",
  "30 days of support",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Full background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/pricing/4.jpeg')", // 👈 Replace with your actual path
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Subtle overlay for readability without hiding the image */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4 text-white drop-shadow-lg">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-white/75 max-w-2xl mx-auto">
            One-time payment. No hidden fees. No monthly charges.
          </p>
        </div>

        {/* Two-column layout: left = breathing room for cup, right = card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* LEFT: empty on desktop so the cup shows, small teaser on mobile */}
          <div className="hidden lg:flex flex-col justify-center gap-6 pl-4">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-orange-400 rounded-full text-sm font-semibold w-fit">
              Most Popular
            </div>
            <h3 className="text-5xl font-bold text-white drop-shadow-lg leading-tight">
              Business Website
            </h3>
            <div className="flex flex-col">
              <span className="text-6xl font-bold text-white/60 drop-shadow-lg line-through">₹9999/- </span>
              
              <span className="text-7xl font-bold text-white drop-shadow-lg">₹6999/-</span>
            </div>
            <p className="text-white/70 text-lg">One-time payment · FREE hosting included</p>
           <Button
            onClick={() => window.open(
              "https://wa.me/919493971229?text=Hello%20I%20have%20a%20question%20about%20your%20services.",
              "_blank",
              "noopener noreferrer"
            )}
            size="lg"
            className="w-fit text-lg px-10 py-6 h-auto bg-white text-orange-600 hover:bg-white/90 font-bold shadow-xl cursor-pointer"
          >
            Get Started Now
          </Button>
            {/* <p className="text-sm text-black/60">
              🎉 First 10 customers get 20% off
            </p> */}
          </div>

          {/* RIGHT: features card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/25 p-8 shadow-2xl">

            {/* Mobile-only header inside card */}
            <div className="lg:hidden text-center mb-6">
              <div className="inline-block px-4 py-1.5 bg-white/20 text-orange-400 rounded-full text-sm font-semibold mb-3">
                Most Popular
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">Business Website</h3>
              <div className="flex flex-col justify-center gap-2 mb-1">
                <span className="text-4xl font-bold text-white/60 drop-shadow-lg line-through ">₹9999/- </span>
                <span className="text-5xl font-bold text-white drop-shadow-lg">₹6999/-</span>
              </div>
              <p className="text-white/65 text-sm">One-time payment · FREE hosting included</p>
            </div>

            {/* Two-column features grid */}
            <p className="text-white/50 text-xs uppercase tracking-widest mb-4 font-semibold">
              Everything included
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8 font-medium">
              {[...featuresLeft, ...featuresRight].map((feature) => (
                <li key={feature} className="flex items-start gap-2 list-none">
                  <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{feature}</span>

                  
                </li>
                
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden">
              <Button
                size="lg"
                className="w-full text-lg py-6 h-auto bg-white text-orange-400 hover:bg-white/90 font-bold"
              >
                Get Started Now
              </Button>
              {/* <p className="text-center text-sm text-white/55 mt-4">
                🎉 First 10 customers get 20% off
              </p> */}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="bg-black text-white/55 font-bold">
            Need something custom?{" "}
            <a href="#contact" className="text-orange-400 hover:underline font-semibold">
              Let's talk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}