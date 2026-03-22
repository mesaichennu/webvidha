import { useEffect, useState, useRef } from "react";

interface SplashScreenProps {
  onFinish: () => void;
}

// Each shard covers the full screen via clip-path and flies to a unique direction
const SHARDS = [
  { clip: "polygon(0% 0%, 52% 0%, 28% 42%)",                          tx: "-130%", ty: "-130%", rot: "-42deg", delay: 0   },
  { clip: "polygon(52% 0%, 100% 0%, 72% 38%)",                         tx: "130%",  ty: "-130%", rot: "42deg",  delay: 30  },
  { clip: "polygon(100% 0%, 100% 52%, 72% 38%)",                        tx: "140%",  ty: "-55%",  rot: "-22deg", delay: 55  },
  { clip: "polygon(100% 52%, 100% 100%, 65% 100%, 72% 38%)",            tx: "130%",  ty: "130%",  rot: "32deg",  delay: 20  },
  { clip: "polygon(65% 100%, 35% 100%, 50% 58%)",                       tx: "0%",    ty: "150%",  rot: "0deg",   delay: 70  },
  { clip: "polygon(35% 100%, 0% 100%, 0% 62%, 28% 42%)",                tx: "-130%", ty: "130%",  rot: "-32deg", delay: 10  },
  { clip: "polygon(0% 62%, 0% 0%, 28% 42%)",                            tx: "-140%", ty: "32%",   rot: "22deg",  delay: 45  },
  { clip: "polygon(28% 42%, 52% 0%, 72% 38%, 50% 58%, 35% 100%, 0% 62%)", tx: "-18%", ty: "-145%", rot: "13deg", delay: 60 },
  { clip: "polygon(72% 38%, 100% 52%, 65% 100%, 50% 58%)",              tx: "22%",   ty: "135%",  rot: "-13deg", delay: 40  },
];

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const [phase, setPhase] = useState<"enter" | "reveal" | "hold" | "shatter" | "gone">("enter");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  // Floating ember particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const COLS = ["rgba(255,180,50,","rgba(255,140,30,","rgba(255,210,100,","rgba(255,100,20,","rgba(250,165,55,"];
    const pts = Array.from({ length: 85 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2.2 + 0.5,
      vx: (Math.random() - 0.5) * 0.38,
      vy: -(Math.random() * 0.55 + 0.18),
      a: Math.random() * 0.55 + 0.2,
      col: COLS[Math.floor(Math.random() * COLS.length)],
      t: Math.random() * Math.PI * 2,
      ts: Math.random() * 0.035 + 0.01,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.t += p.ts;
        const a = p.a * (0.65 + 0.35 * Math.sin(p.t));
        if (p.y < -8) { p.y = canvas.height + 8; p.x = Math.random() * canvas.width; }
        if (p.x < -8) p.x = canvas.width + 8;
        if (p.x > canvas.width + 8) p.x = -8;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        g.addColorStop(0, `${p.col}${a})`);
        g.addColorStop(1, `${p.col}0)`);
        ctx.beginPath();
        ctx.fillStyle = g;
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fill();
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(rafRef.current); };
  }, []);

  // Phase timeline
  // onFinish is called AFTER shatter animation fully completes
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"),  150);
    const t2 = setTimeout(() => setPhase("hold"),    700);
    const t3 = setTimeout(() => setPhase("shatter"), 2700);
    const t4 = setTimeout(() => setPhase("gone"),    3600);
    // onFinish fires after all shards have flown off screen (700ms shatter + buffer)
    const t5 = setTimeout(() => onFinish(),          3600);
    return () => [t1,t2,t3,t4,t5].forEach(clearTimeout);
  }, [onFinish]);

  const revealed   = ["reveal","hold","shatter","gone"].includes(phase);
  const held       = ["hold","shatter","gone"].includes(phase);
  const shattering = phase === "shatter" || phase === "gone";

  // Background layers rendered inside every shard so they all look like
  // pieces of the same screen when they fly apart
  const ShardBG = () => (
    <>
      <div style={{ position:"absolute", inset:0, background:"#0e0800" }} />
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 85% 65% at 50% 58%, rgba(130,52,0,0.6) 0%, rgba(60,20,0,0.35) 55%, transparent 80%)" }} />
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 55% 38% at 50% 102%, rgba(210,82,0,0.28) 0%, transparent 70%)" }} />
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"30%", background:"linear-gradient(to bottom, rgba(255,140,20,0.055), transparent)" }} />
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(125deg, transparent 30%, rgba(255,160,40,0.04) 50%, transparent 70%)" }} />
      <div style={{ position:"absolute", inset:0, opacity:0.032,
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize:"200px" }} />
    </>
  );

  return (
    <div style={{ position:"fixed", inset:0, zIndex:100, overflow:"hidden" }}>

      {/* ── SHARD LAYERS ── */}
      {/* Each shard is a clipped copy of the full splash background.           */}
      {/* When shattering, they translate/rotate away to reveal the home page   */}
      {/* that is already mounted behind this fixed overlay in App.tsx.         */}
      {SHARDS.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            clipPath: s.clip,
            // No transition while idle — instant snap when shattering
            transition: shattering
              ? `transform 0.72s cubic-bezier(0.6,0,1,0.55) ${s.delay}ms, opacity 0.45s ease ${s.delay + 150}ms`
              : "none",
            transform: shattering
              ? `translate(${s.tx}, ${s.ty}) rotate(${s.rot}) scale(1.06)`
              : "translate(0,0) rotate(0deg) scale(1)",
            opacity: shattering ? 0 : 1,
            willChange: "transform, opacity",
          }}
        >
          <ShardBG />
          {/* Particle canvas — only rendered in shard 0, invisible in others */}
          {i === 0 && (
            <canvas ref={canvasRef} style={{ position:"absolute", inset:0, opacity:0.88 }} />
          )}
        </div>
      ))}

      {/* ── FOREGROUND UI ── */}
      {/* Fades out instantly at shatter start so only shards are visible */}
      <div style={{
        position:"absolute", inset:0, zIndex:6,
        display:"flex", alignItems:"center", justifyContent:"center",
        pointerEvents:"none",
        transition: shattering ? "opacity 0.1s ease" : "none",
        opacity: shattering ? 0 : 1,
      }}>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>

          {/* Logo + pulsing aura rings */}
          <div style={{ position:"relative", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:38 }}>
            {[210,155,105].map((sz, i) => (
              <div key={i} style={{
                position:"absolute", width:sz, height:sz, borderRadius:"50%",
                border:`1px solid rgba(255,${145+i*18},${35+i*12},${0.07+i*0.045})`,
                animation:`auraRing ${2.4+i*0.55}s ease-in-out infinite`,
                animationDelay:`${i*0.28}s`,
                opacity: held ? 1 : 0,
                transition:"opacity 0.8s ease",
              }} />
            ))}
            {/* warm glow blob */}
            <div style={{
              position:"absolute", width:150, height:85, borderRadius:"50%",
              background:"radial-gradient(ellipse, rgba(255,118,18,0.38) 0%, rgba(255,75,0,0.1) 60%, transparent 80%)",
              filter:"blur(18px)",
              opacity: held ? 1 : 0,
              transition:"opacity 0.95s ease 0.18s",
            }} />
            {/* logo */}
            <div style={{
              position:"relative", zIndex:2,
              transition:"transform 1.1s cubic-bezier(0.22,1,0.36,1), opacity 0.9s ease",
              transform: revealed ? "translateY(0) scale(1)" : "translateY(44px) scale(0.72)",
              opacity: revealed ? 1 : 0,
            }}>
              <img src="logo.png" alt="Webvidha" style={{
                height:82,
                filter:"drop-shadow(0 0 30px rgba(255,118,28,0.58)) drop-shadow(0 4px 14px rgba(0,0,0,0.72)) brightness(1.1)",
              }} />
            </div>
          </div>

          {/* Ornamental divider */}
          <div style={{
            display:"flex", alignItems:"center", gap:12, marginBottom:16,
            opacity: held ? 1 : 0,
            transform: held ? "scaleX(1)" : "scaleX(0.2)",
            transition:"opacity 0.8s ease 0.32s, transform 0.8s ease 0.32s",
          }}>
            <div style={{ width:52, height:"1px", background:"linear-gradient(to right, transparent, rgba(255,162,52,0.58))" }} />
            <div style={{ display:"flex", gap:5, alignItems:"center" }}>
              <div style={{ width:3, height:3, borderRadius:"50%", background:"rgba(255,162,52,0.5)" }} />
              <div style={{ width:6, height:6, borderRadius:"50%", background:"#ff9d2e", boxShadow:"0 0 9px rgba(255,157,46,0.95)" }} />
              <div style={{ width:3, height:3, borderRadius:"50%", background:"rgba(255,162,52,0.5)" }} />
            </div>
            <div style={{ width:52, height:"1px", background:"linear-gradient(to left, transparent, rgba(255,162,52,0.58))" }} />
          </div>

          {/* Tagline */}
          <div style={{
            marginBottom:46,
            opacity: held ? 1 : 0,
            transform: held ? "translateY(0)" : "translateY(14px)",
            transition:"opacity 0.9s ease 0.44s, transform 0.9s ease 0.44s",
          }}>
            <p style={{
              margin:0, fontSize:"clamp(11px,2.2vw,13px)",
              color:"rgba(255,192,102,0.62)",
              fontFamily:"'ubuntu', sans-serif, serif",
              fontStyle:"Timesnew Roman", letterSpacing:"0.25em", textTransform:"uppercase",
            }}>
              Your website, delivered in 48 hours
            </p>
          </div>

          {/* Progress bar */}
          <div style={{
            opacity: held ? 1 : 0,
            transition:"opacity 0.6s ease 0.54s",
            width:200, display:"flex", flexDirection:"column", alignItems:"center", gap:10,
          }}>
            <div style={{ width:"100%", height:2, borderRadius:2, background:"rgba(255,140,0,0.12)", overflow:"hidden", position:"relative" }}>
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,#ff6a00,#ffd27a)", borderRadius:2, animation:"loadBar 2s cubic-bezier(0.4,0,0.2,1) forwards", boxShadow:"0 0 12px rgba(255,160,30,0.72)" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.28) 50%,transparent 100%)", animation:"shimmer 1.5s linear infinite" }} />
            </div>
            <div style={{ display:"flex", gap:6 }}>
              {[0,1,2,3,4].map(i => (
                <div key={i} style={{ width:4, height:4, borderRadius:"50%", background:"rgba(255,160,50,0.28)", animation:"dotPulse 1.5s ease-in-out infinite", animationDelay:`${i*0.15}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Corner brackets */}
      {([
        { top:22, left:22,    borderTop:"1px solid rgba(255,162,52,0.48)", borderLeft:"1px solid rgba(255,162,52,0.48)"   },
        { top:22, right:22,   borderTop:"1px solid rgba(255,162,52,0.48)", borderRight:"1px solid rgba(255,162,52,0.48)"  },
        { bottom:22, left:22,  borderBottom:"1px solid rgba(255,162,52,0.48)", borderLeft:"1px solid rgba(255,162,52,0.48)"  },
        { bottom:22, right:22, borderBottom:"1px solid rgba(255,162,52,0.48)", borderRight:"1px solid rgba(255,162,52,0.48)" },
      ] as React.CSSProperties[]).map((s, i) => (
        <div key={i} style={{ position:"absolute", width:22, height:22, zIndex:7, opacity: held && !shattering ? 0.5 : 0, transition:`opacity 0.6s ease ${0.48+i*0.07}s`, ...s }} />
      ))}

      <style>{`
        @keyframes auraRing {
          0%,100% { transform:scale(1); opacity:0.55; }
          50%      { transform:scale(1.09); opacity:1;   }
        }
        @keyframes loadBar {
          0%   { width:0%;   } 15%  { width:22%; }
          50%  { width:58%; } 80%  { width:83%; }
          100% { width:100%;}
        }
        @keyframes shimmer {
          0%   { transform:translateX(-100%); }
          100% { transform:translateX(200%);  }
        }
        @keyframes dotPulse {
          0%,100% { background:rgba(255,160,50,0.24); transform:scale(1);   }
          50%     { background:rgba(255,160,50,0.92); transform:scale(1.45); }
        }
      `}</style>
    </div>
  );
}