import { useState } from "react";
//import { SplashScreen } from "./components/SplashScreen";
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
import { PromoModal } from "./components/PromoModal"; // add this import


export default function App() {
 // const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Home page is always mounted so it's visible behind the shatter */}
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
        <PromoModal />
      </main>
      <Footer />

      {/* Splash sits on top, unmounts only after shatter animation finishes */}
      {/* {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )} */}
    </div>
  );
}

/*
  ─── HOW TO LINK LEGAL PAGES FROM YOUR FOOTER ───────────────────────────────

  Place the two HTML files in your /public folder:
    /public/terms-and-conditions.html
    /public/cookie-policy.html

  Then in Footer.tsx add links like:

    <a href="/terms-and-conditions.html" target="_blank" rel="noopener noreferrer">
      Terms & Conditions
    </a>

    <a href="/cookie-policy.html" target="_blank" rel="noopener noreferrer">
      Cookie Policy
    </a>

  Both pages open in a new tab with a "Back" button to close the tab.
  ─────────────────────────────────────────────────────────────────────────────
*/