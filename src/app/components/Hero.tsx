import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Zap, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const personImages = [
  "/hero/doctor.png",
  "/hero/cheif.png",
  "/hero/store.png",
  "/hero/businesswomen.png",
  "/hero/product.png",
  "/hero/engineer.png",
  "/hero/teacher.png",
  "/hero/technision.png",

 
];

const SLIDE_DURATION = 600; // ms — how long the slide animation takes
const HOLD_DURATION  = 3000; // ms — how long each image is held before sliding

export function Hero() {
  // currentRef is the source of truth for the active index —
  // never goes stale inside setInterval/setTimeout closures
  const currentRef = useRef(0);
  const slidingRef = useRef(false);

  // State only used to trigger re-renders
  const [displayCurrent, setDisplayCurrent] = useState(0);
  const [displayNext,    setDisplayNext]    = useState(1);
  const [isSliding,      setIsSliding]      = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const slide = () => {
      // If already mid-slide, skip this tick
      if (slidingRef.current) return;

      const curr = currentRef.current;
      const next = (curr + 1) % personImages.length;

      // Prepare next image in position (off-screen right), no animation yet
      setDisplayCurrent(curr);
      setDisplayNext(next);

      // Small rAF delay so React flushes the above state before animation starts
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          slidingRef.current = true;
          setIsSliding(true); // triggers CSS transition

          setTimeout(() => {
            // Animation done — commit new current, reset sliding state
            currentRef.current = next;
            setDisplayCurrent(next);
            setDisplayNext((next + 1) % personImages.length);
            setIsSliding(false);
            slidingRef.current = false;
          }, SLIDE_DURATION + 20);
        });
      });
    };

    const interval = setInterval(slide, HOLD_DURATION + SLIDE_DURATION);
    return () => clearInterval(interval);
    // ✅ Empty deps — interval is set once and never recreated.
    // currentRef.current is always fresh inside the closure.
  }, []);

  const EASING = "cubic-bezier(0.42, 0, 0.18, 1)";

  // Current image: sits at 0, then slides out to -110% when isSliding
  const currentWrapStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    transform: isSliding ? "translateX(-112%)" : "translateX(0%)",
    opacity: isSliding ? 0.25 : 1,
    transition: isSliding
      ? `transform ${SLIDE_DURATION}ms ${EASING}, opacity ${SLIDE_DURATION}ms ease`
      : "none",
    zIndex: 1,
    willChange: "transform",
  };

  // Next image: parked at +110% off-screen, slides in to 0 when isSliding
  const nextWrapStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    transform: isSliding ? "translateX(0%)" : "translateX(112%)",
    opacity: isSliding ? 1 : 0,
    transition: isSliding
      ? `transform ${SLIDE_DURATION}ms ${EASING}, opacity ${SLIDE_DURATION}ms ease`
      : "none",
    zIndex: 2,
    willChange: "transform",
  };

  const imgStyle: React.CSSProperties = {
    width: "auto",
    maxHeight: "85vh",
    objectFit: "contain",
    userSelect: "none",
    pointerEvents: "none",
    display: "block",
  };

  // Mobile equivalents
  const mobileCurrentStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: isSliding
      ? "translateX(calc(-50% - 112%))"
      : "translateX(-50%)",
    opacity: isSliding ? 0.25 : 1,
    transition: isSliding
      ? `transform ${SLIDE_DURATION}ms ${EASING}, opacity ${SLIDE_DURATION}ms ease`
      : "none",
    width: "256px",
    objectFit: "contain",
    zIndex: 1,
  };

  const mobileNextStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: isSliding
      ? "translateX(-50%)"
      : "translateX(calc(-50% + 112%))",
    opacity: isSliding ? 1 : 0,
    transition: isSliding
      ? `transform ${SLIDE_DURATION}ms ${EASING}, opacity ${SLIDE_DURATION}ms ease`
      : "none",
    width: "256px",
    objectFit: "contain",
    zIndex: 2,
  };

  return (
    <section
      className={`relative min-h-screen ${isMobile ? "pt-10" : "pt-30"} pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden`}
      style={{
        background:
          "linear-gradient(135deg, #3d0a0a 0%, #7a1a0a 25%, #b83010 55%, #d45020 75%, #c87840 100%)",
      }}
    >
      {/* Depth overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, rgba(255,160,60,0.35) 0%, transparent 65%)",
        }}
      />

      {/* Main layout */}
      <div className="relative z-20 max-w-7xl mx-auto min-h-[calc(100vh-128px)] flex items-center">

        {/* LEFT: Text */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-12">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 bg-white/15 text-white border-white/20 backdrop-blur-sm"
          >
            <Zap className="w-3.5 h-3.5 mr-2 inline-block" />
            Launch your website in 48 hours
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 text-white">
            Professional websites for all businesses,{" "}
            <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent">
              delivered fast
            </span>
          </h1>

          <p className="text-xl text-white/75 mb-10">
            Get a modern, mobile-friendly website for your business in just 48 hours*.
            No technical knowledge required. FREE hosting included.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/919493971229?text=Hello%20I%20have%20a%20question%20about%20your%20services.",
                  "_blank",
                  "noopener noreferrer"
                )
              }
              size="lg"
              className="text-md px-6 py-6 h-12 bg-white text-gray-900 hover:bg-white/90 font-semibold shadow-lg cursor-pointer"
            >
              Start Your Website
            </Button>
            <Button
              onClick={() => (window.location.href = "#portfolio")}
              size="lg"
              variant="outline"
              className="text-lg px-6 py-6 h-12 border-white/40 text-orange-400 hover:bg-white/10 backdrop-blur-sm cursor-pointer"
            >
              View Our Works
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>48-hour delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>FREE hosting for 1 year</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>No setup fees</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Carousel — desktop */}
        <div
          className="hidden lg:flex w-1/2 items-end justify-center relative h-[calc(101vh-128px)]"
          style={{ overflow: "hidden" }}
        >
          {/* Current → exits left */}
          <div style={currentWrapStyle}>
            <img
              src={personImages[displayCurrent]}
              alt={`Person ${displayCurrent}`}
              style={imgStyle}
              draggable={false}
            />
          </div>

          {/* Next → enters from right */}
          <div style={nextWrapStyle}>
            <img
              src={personImages[displayNext]}
              alt={`Person ${displayNext}`}
              style={imgStyle}
              draggable={false}
            />
          </div>

        </div>
      </div>

      {/* Mobile carousel */}
      <div
        className="lg:hidden relative z-20 mt-4 mx-auto"
        style={{ overflow: "hidden", height: "320px", width: "260px", position: "relative" }}
      >
        <img
          src={personImages[displayCurrent]}
          alt={`Person ${displayCurrent}`}
          draggable={false}
          style={{ ...mobileCurrentStyle, height: "100%", objectFit: "contain" } as React.CSSProperties}
        />
        <img
          src={personImages[displayNext]}
          alt={`Person ${displayNext}`}
          draggable={false}
          style={{ ...mobileNextStyle, height: "100%", objectFit: "contain" } as React.CSSProperties}
        />
      </div>
    </section>
  );
}