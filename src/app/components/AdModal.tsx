import { useEffect, useState } from "react";

export function AdModal() {
  const [visible, setVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      requestAnimationFrame(() => setTimeout(() => setAnimateIn(true), 10));
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const handleClose = () => {
    setAnimateIn(false);
    setTimeout(() => setVisible(false), 300);
  };

  const handleWhatsApp = () => {
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
        backgroundColor: `rgba(0,0,0,${animateIn ? 0.6 : 0})`,
        transition: "background-color 0.3s ease",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "420px",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
          transform: animateIn ? "scale(1) translateY(0)" : "scale(0.85) translateY(40px)",
          opacity: animateIn ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease",
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute", top: "10px", right: "10px", zIndex: 10,
            width: "30px", height: "30px", borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.5)", border: "none",
            color: "#fff", fontSize: "16px", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        {/* Ad Image */}
        <img
          src="/ad-creative.jpeg" // 👈 Replace with your actual image path
          alt="Webvidha Special Offer"
          style={{ width: "100%", display: "block" }}
        />

        {/* CTA Button */}
        <div
          style={{
            backgroundColor: "#ea580c",
            padding: "14px 20px",
            textAlign: "center",
          }}
        >
          <button
            onClick={handleWhatsApp}
            style={{
              backgroundColor: "#25D366",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "13px 32px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              width: "100%",
              maxWidth: "320px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              boxShadow: "0 4px 15px rgba(37,211,102,0.4)",
              letterSpacing: "0.3px",
            }}
          >
            {/* WhatsApp icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Claim 30% Off on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}