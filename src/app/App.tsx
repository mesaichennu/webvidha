import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { TermsAndConditions } from "./components/TermsandConditions";
import { CookiePolicy } from "./components/Cookiepolicy";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Portfolio } from "./components/Portfolio";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

type Page = "home" | "terms" | "cookies";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [page, setPage] = useState<Page>("home");

  // Simple hash-based navigation helper (call from Footer links)
  // Usage in Footer: onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: "terms" }))}
  // Or just use window.location.hash and listen here:
  // For quick wiring without a router, expose setPage via a custom event:
  useState(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as Page;
      setPage(detail);
      window.scrollTo(0, 0);
    };
    window.addEventListener("navigate", handler);
    return () => window.removeEventListener("navigate", handler);
  });

  const renderPage = () => {
    switch (page) {
      case "terms":
        return <TermsAndConditions />;
      case "cookies":
        return <CookiePolicy />;
      default:
        return (
          <>
            <Header />
            <main>
              <Hero />
              <Features />
              <HowItWorks />
              <Portfolio />
              <Testimonials />
              <Pricing />
              <FAQ />
              <CTA />
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Home page / legal pages — always mounted so shatter reveals real content */}
      {renderPage()}

      {/* Splash sits on top via fixed positioning, unmounts after shatter finishes */}
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}
    </div>
  );
}

/*
  ─── HOW TO LINK TO LEGAL PAGES FROM YOUR FOOTER ───────────────────────────

  In Footer.tsx, add links like this:

    <button
      onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: "terms" }))}
      style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}
    >
      Terms & Conditions
    </button>

    <button
      onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: "cookies" }))}
      style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}
    >
      Cookie Policy
    </button>

  To go back home from inside a legal page, dispatch:
    window.dispatchEvent(new CustomEvent("navigate", { detail: "home" }))

  ─── IF YOU USE REACT ROUTER ────────────────────────────────────────────────
  Replace the CustomEvent system with <Route> entries:
    /terms    → <TermsAndConditions />
    /cookies  → <CookiePolicy />

  ────────────────────────────────────────────────────────────────────────────
*/