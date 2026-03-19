import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Zap, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const personImages = [
  "/Doctor_web.png",
  "/Female_Website.png",
  "/cheif.png",
  "/businessman.png",
  "/engineer.png",
  "/teacher.png",
  "/plumber.png"
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % personImages.length);
        setVisible(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen pt-30 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3d0a0a 0%, #7a1a0a 25%, #b83010 55%, #d45020 75%, #c87840 100%)",
      }}
    >
      {/* Subtle texture overlay for depth */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, rgba(255,160,60,0.35) 0%, transparent 65%)",
        }}
      />

      {/* Main layout: left text + right image */}
      <div className="relative z-20 max-w-7xl mx-auto min-h-[calc(100vh-128px)] flex items-center">

        {/* LEFT: Text content */}
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
            Get a modern, mobile-friendly website for your business in just 48 hours.
            No technical knowledge required. FREE hosting included.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="text-md px-6 py-6 h-12 bg-white text-gray-900 hover:bg-white/90 font-semibold shadow-lg"
            >
              Start Your Website
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-6 py-6 h-12 border-white/40 text-orange-400 hover:bg-white/10 backdrop-blur-sm"
            >
              View Examples
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

        {/* RIGHT: Rotating person PNG — Desktop fixed size container */}
        <div className="hidden lg:flex w-1/2 items-end justify-center relative"
          style={{ height: "580px" }}
        >
          {personImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Website example ${i + 1}`}
              className="absolute bottom-0 select-none transition-all duration-500"
              style={{
                width: "420px",
                height: "560px",
                objectFit: "contain",
                objectPosition: "bottom",
                opacity: i === current ? (visible ? 1 : 0) : 0,
                transform: i === current
                  ? visible
                    ? "translateY(0) scale(1)"
                    : "translateY(20px) scale(0.97)"
                  : "translateY(20px) scale(0.97)",
                mixBlendMode: "normal",
              }}
              draggable={false}
            />
          ))}
        </div>
      </div>

      {/* Mobile: fixed size side by side */}
      <div className="lg:hidden relative z-20 flex items-end justify-end"
        style={{
          position: "absolute",
          bottom: 0,
          right: "16px",
          width: "160px",
          height: "240px",
        }}
      >
        {personImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Website example ${i + 1}`}
            className="absolute bottom-0 right-0 select-none transition-all duration-500"
            style={{
              width: "160px",
              height: "240px",
              objectFit: "contain",
              objectPosition: "bottom",
              opacity: i === current ? (visible ? 1 : 0) : 0,
              transform: i === current
                ? visible
                  ? "translateY(0) scale(1)"
                  : "translateY(12px) scale(0.97)"
                : "translateY(12px) scale(0.97)",
            }}
            draggable={false}
          />
        ))}
      </div>
    </section>
  );
}