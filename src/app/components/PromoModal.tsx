// src/components/PromoModal.tsx
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function PromoModal() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimateIn(true));
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const handleClose = () => {
    setAnimateIn(false);
    setTimeout(() => setVisible(false), 300);
  };

  const handleCTA = () => {
    window.open(
      "https://wa.me/919493971229?text=Hello%20I%20have%20a%20question%20about%20your%20services.",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        backgroundColor: `rgba(0,0,0,${animateIn ? 0.55 : 0})`,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "420px",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.3)",
          transform: animateIn ? "scale(1) translateY(0)" : "scale(0.85) translateY(40px)",
          opacity: animateIn ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease",
          fontFamily: "'Segoe UI', sans-serif",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute", top: "12px", right: "12px",
            background: "rgba(255,255,255,0.9)", border: "none",
            borderRadius: "50%", width: "32px", height: "32px",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", zIndex: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <X size={16} color="#555" />
        </button>

        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #ff6a00 0%, #ee8c00 100%)",
          padding: "22px 24px 18px",
          position: "relative", overflow: "hidden",
        }}>
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
          <div style={{ position: "absolute", bottom: "-30px", left: "60%", width: "80px", height: "80px", borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <img src="/logo.png" alt="Logo" style={{ width: "120px", height: "30px", backgroundColor: "white", borderRadius: "4px", padding: "4px" }} />
            {/* <span style={{ color: "#fff", fontWeight: 800, fontSize: "18px", letterSpacing: "0.5px" }}></span> */}
          </div>

          <p style={{ color: "rgba(255,255,255,0.92)", margin: 0, fontSize: "13px", fontWeight: 500 }}>
            Customers don't need complexity,
          </p>
          <p style={{ color: "#fff", margin: "2px 0 0", fontSize: "15px", fontWeight: 600 }}>
            one clear website is enough. ✨
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: "20px 24px" }}>
          <p style={{ margin: "0 0 4px", color: "#444", fontSize: "13px" }}>
            Simple. Clean. Professional.
          </p>
          <p style={{ margin: "0 0 16px", color: "#222", fontSize: "14px", fontWeight: 600 }}>
            Website ready in <span style={{ color: "#ff6a00" }}>48 hours</span> · Includes FREE Hosting*
          </p>

          {/* Offer badge */}
          <div style={{
            background: "linear-gradient(135deg, #ff6a00, #ee8c00)",
            borderRadius: "12px", padding: "10px 16px",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: "18px",
            boxShadow: "0 4px 15px rgba(255,106,0,0.35)",
          }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "18px", letterSpacing: "0.5px" }}>
              🔥 30% OFF SPECIAL OFFER
            </span>
          </div>

          {/* Pricing */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "20px" }}>
            <div>
              <span style={{ color: "#aaa", fontSize: "13px" }}>for </span>
              <span style={{
                color: "#aaa", fontSize: "20px", fontWeight: 700,
                textDecoration: "line-through",
              }}>₹9,999</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
              <span style={{ color: "#ff6a00", fontSize: "36px", fontWeight: 700, lineHeight: 1 }}>₹6,999*</span>
              <span style={{ color: "#ff6a00", fontSize: "13px", fontWeight: 700 }}>only</span>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleCTA}
            style={{
              width: "100%",
              padding: "14px",
              background: "linear-gradient(135deg, #ff6a00 0%, #ee8c00 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.3px",
              boxShadow: "0 6px 20px rgba(255,106,0,0.4)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease",
            }}
            onMouseEnter={e => {
              (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.target as HTMLButtonElement).style.boxShadow = "0 10px 28px rgba(255,106,0,0.5)";
            }}
            onMouseLeave={e => {
              (e.target as HTMLButtonElement).style.transform = "translateY(0)";
              (e.target as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(255,106,0,0.4)";
            }}
          >
            Claim Offer on WhatsApp 💬
          </button>

          <p style={{ textAlign: "center", margin: "10px 0 0", color: "#aaa", fontSize: "11px" }}>
            Contact: 9493971229 · www.webvidha.com
          </p>
        </div>
      </div>
    </div>
  );
}