import { useEffect, useRef, useState } from "react";

interface CookieSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

const COOKIE_TYPES = [
  {
    name: "Essential Cookies",
    icon: "🔒",
    required: true,
    description: "Necessary for the website to function. Cannot be disabled.",
    examples: ["Session management", "Security tokens", "Load balancing"],
  },
  {
    name: "Analytics Cookies",
    icon: "📊",
    required: false,
    description: "Help us understand how visitors interact with our website.",
    examples: ["Page views", "Traffic sources", "User behaviour patterns"],
  },
  {
    name: "Preference Cookies",
    icon: "⚙️",
    required: false,
    description: "Remember your settings and personalise your experience.",
    examples: ["Language preference", "Theme settings", "Form data"],
  },
  {
    name: "Marketing Cookies",
    icon: "📣",
    required: false,
    description: "Used to deliver relevant advertisements and track campaign performance.",
    examples: ["Ad targeting", "Conversion tracking", "Remarketing"],
  },
];

const SECTIONS: CookieSection[] = [
  {
    id: "what",
    title: "1. What Are Cookies?",
    content: (
      <>
        <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, improve user experience, and provide information to site owners.</p>
        <p>Cookies can be "session cookies" — which expire when you close your browser — or "persistent cookies" that remain on your device for a set period or until you delete them.</p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "2. How We Use Cookies",
    content: (
      <>
        <p>Webvidha uses cookies to:</p>
        <ul>
          <li>Ensure our website functions correctly and securely</li>
          <li>Remember your preferences and settings between visits</li>
          <li>Analyse website traffic and user behaviour to improve our services</li>
          <li>Measure the effectiveness of our marketing campaigns</li>
          <li>Provide a personalised experience tailored to your interests</li>
        </ul>
        <p>We do not use cookies to collect personally identifiable information without your explicit consent, and we never sell cookie data to third parties.</p>
      </>
    ),
  },
  {
    id: "types",
    title: "3. Types of Cookies We Use",
    content: (
      <p>We categorise the cookies on our website into four types. See the interactive overview above for details on each category and what you can control.</p>
    ),
  },
  {
    id: "third-party",
    title: "4. Third-Party Cookies",
    content: (
      <>
        <p>Some cookies on our website are set by third-party services that appear on our pages. We may use services such as:</p>
        <ul>
          <li><strong>Google Analytics</strong> — for website traffic analysis</li>
          <li><strong>Google Fonts</strong> — for typography rendering</li>
          <li><strong>Vercel Analytics</strong> — for performance monitoring</li>
          <li><strong>Meta Pixel</strong> — for advertising measurement (if applicable)</li>
        </ul>
        <p>These third parties have their own privacy and cookie policies. We recommend reviewing them directly. Webvidha is not responsible for the content or privacy practices of third-party services.</p>
      </>
    ),
  },
  {
    id: "consent",
    title: "5. Your Consent",
    content: (
      <>
        <p>When you first visit our website, you will be presented with a cookie consent notice. By clicking "Accept All", you consent to our use of all cookie categories described in this policy.</p>
        <p>You may also choose to accept only essential cookies, or customise your preferences. Your choice will be saved for future visits, though you can update it at any time.</p>
        <p>Please note that blocking certain cookies may impact the functionality and experience of our website.</p>
      </>
    ),
  },
  {
    id: "managing",
    title: "6. Managing & Disabling Cookies",
    content: (
      <>
        <p>You can control cookies through your browser settings. Most browsers allow you to:</p>
        <ul>
          <li>View and delete existing cookies</li>
          <li>Block all cookies by default</li>
          <li>Allow cookies only from specific websites</li>
          <li>Block third-party cookies</li>
          <li>Be notified when a cookie is set</li>
        </ul>
        <p>Instructions for managing cookies in popular browsers:</p>
        <ul>
          <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
          <li><strong>Firefox:</strong> Preferences → Privacy &amp; Security → Cookies</li>
          <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
          <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "7. Cookie Retention Periods",
    content: (
      <>
        <p>The length of time a cookie remains on your device depends on its type:</p>
        <ul>
          <li><strong>Session cookies</strong> — deleted when you close your browser</li>
          <li><strong>Persistent cookies</strong> — remain for a defined period (typically 30 days to 2 years) or until manually deleted</li>
          <li><strong>Analytics cookies</strong> — typically retained for up to 13 months</li>
          <li><strong>Marketing cookies</strong> — typically retained for 30–90 days</li>
        </ul>
      </>
    ),
  },
  {
    id: "updates",
    title: "8. Updates to This Policy",
    content: (
      <>
        <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. When we make significant changes, we will update the "Last updated" date at the top of this page.</p>
        <p>We encourage you to review this policy periodically. Continued use of our website after any changes constitutes acceptance of the updated policy.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: (
      <>
        <p>If you have any questions about our use of cookies or this policy, please contact us:</p>
        <div className="cp-contact-block">
          <p><strong>Webvidha</strong></p>
          <p>Hyderabad, Telangana, India</p>
          <p>Email: <a href="mailto:hello@webvidha.com">hello@webvidha.com</a></p>
          <p>Website: <a href="https://webvidha.com" target="_blank" rel="noopener noreferrer">webvidha.com</a></p>
        </div>
      </>
    ),
  },
];

export function CookiePolicy() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [consented, setConsented] = useState<Record<string, boolean>>({
    "Essential Cookies": true,
    "Analytics Cookies": true,
    "Preference Cookies": true,
    "Marketing Cookies": false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("cp-visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".cp-section, .cp-card").forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const toggle = (name: string) => {
    if (name === "Essential Cookies") return;
    setConsented((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .cp-root {
          min-height: 100vh;
          background: #faf7f4;
          font-family: 'DM Sans', sans-serif;
          color: #2a1a0e;
        }

        /* Hero */
        .cp-hero {
          position: relative;
          background: #0e0800;
          overflow: hidden;
          padding: 100px 24px 80px;
          text-align: center;
        }
        .cp-hero-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 70%, rgba(130,52,0,0.65) 0%, transparent 70%);
          pointer-events: none;
        }
        .cp-hero-line {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,160,50,0.4), transparent);
        }
        .cp-hero-label {
          display: inline-block;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(255,180,80,0.7);
          margin-bottom: 20px; position: relative;
        }
        .cp-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 8vw, 72px);
          font-weight: 700; line-height: 1.05;
          margin: 0 0 20px; position: relative;
          background: linear-gradient(135deg, #ffd27a 0%, #ff9d2e 40%, #ff6a00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cp-hero-date {
          font-size: 13px; color: rgba(255,190,100,0.5);
          letter-spacing: 0.1em; position: relative;
        }

        /* Cookie type cards */
        .cp-cards-wrap {
          background: #fff;
          border-bottom: 1px solid rgba(255,140,0,0.1);
          padding: 52px 24px;
        }
        .cp-cards-inner {
          max-width: 900px; margin: 0 auto;
        }
        .cp-cards-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 4vw, 30px);
          font-weight: 600; color: #1a0d00;
          margin: 0 0 8px;
        }
        .cp-cards-sub {
          font-size: 14px; color: rgba(80,40,10,0.55);
          font-weight: 300; margin: 0 0 32px;
        }
        .cp-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .cp-card {
          border: 1px solid rgba(255,140,0,0.15);
          border-radius: 14px;
          padding: 24px 20px;
          background: linear-gradient(135deg, #fffaf5, #fff8f0);
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.2s;
        }
        .cp-card.cp-visible { opacity: 1; transform: translateY(0); }
        .cp-card:hover { box-shadow: 0 4px 24px rgba(255,140,0,0.1); }
        .cp-card-icon { font-size: 24px; margin-bottom: 10px; }
        .cp-card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px; font-weight: 600; color: #1a0d00;
          margin-bottom: 6px;
        }
        .cp-card-desc {
          font-size: 12.5px; color: rgba(80,40,10,0.6);
          font-weight: 300; line-height: 1.6; margin-bottom: 14px;
        }
        .cp-card-examples {
          display: flex; flex-direction: column; gap: 4px;
          margin-bottom: 16px;
        }
        .cp-card-example {
          font-size: 11.5px; color: rgba(120,60,10,0.55);
          background: rgba(255,140,0,0.06);
          border-radius: 4px; padding: 3px 8px;
          width: fit-content;
        }
        /* Toggle switch */
        .cp-toggle-row {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: auto;
        }
        .cp-toggle-label {
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(120,60,10,0.5);
        }
        .cp-toggle {
          position: relative; width: 40px; height: 22px;
          cursor: pointer;
        }
        .cp-toggle input { opacity: 0; width: 0; height: 0; }
        .cp-toggle-track {
          position: absolute; inset: 0;
          border-radius: 11px;
          background: rgba(200,140,80,0.2);
          transition: background 0.25s;
        }
        .cp-toggle-track.on {
          background: linear-gradient(135deg, #ff7a00, #ffb347);
        }
        .cp-toggle-thumb {
          position: absolute;
          top: 3px; left: 3px;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        .cp-toggle-thumb.on { transform: translateX(18px); }
        .cp-required-badge {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(255,157,46,0.8);
          background: rgba(255,140,0,0.1);
          border-radius: 4px; padding: 2px 6px;
        }

        /* Body layout */
        .cp-body {
          max-width: 900px; margin: 0 auto;
          padding: 64px 24px 100px;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 700px) {
          .cp-body { grid-template-columns: 1fr; }
          .cp-nav { display: none; }
        }

        /* Nav */
        .cp-nav { position: sticky; top: 32px; }
        .cp-nav-title {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.25em; text-transform: uppercase;
          color: rgba(150,80,20,0.6); margin-bottom: 16px;
        }
        .cp-nav a {
          display: block; font-size: 13px; font-weight: 400;
          color: rgba(80,40,10,0.55); text-decoration: none;
          padding: 6px 0 6px 12px;
          border-left: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s; line-height: 1.4;
        }
        .cp-nav a:hover { color: #ff7a00; border-left-color: #ff7a00; }

        /* Sections */
        .cp-section {
          margin-bottom: 52px;
          opacity: 0; transform: translateY(22px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .cp-section.cp-visible { opacity: 1; transform: translateY(0); }
        .cp-section h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 3vw, 26px); font-weight: 600;
          color: #1a0d00; margin: 0 0 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,140,0,0.15);
        }
        .cp-section p {
          font-size: 15px; line-height: 1.8;
          color: #4a2e10; margin: 0 0 14px; font-weight: 300;
        }
        .cp-section ul { margin: 8px 0 16px; padding: 0; list-style: none; }
        .cp-section ul li {
          font-size: 15px; line-height: 1.75;
          color: #4a2e10; font-weight: 300;
          padding: 4px 0 4px 20px; position: relative;
        }
        .cp-section ul li::before {
          content: ''; position: absolute;
          left: 0; top: 13px; width: 6px; height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff9d2e, #ff6a00);
        }
        .cp-section strong { font-weight: 500; color: #2a1a0e; }
        .cp-section a {
          color: #ff7a00; text-decoration: none;
          border-bottom: 1px solid rgba(255,122,0,0.3);
          transition: border-color 0.2s;
        }
        .cp-section a:hover { border-color: #ff7a00; }
        .cp-contact-block {
          background: linear-gradient(135deg, rgba(255,140,0,0.06), rgba(255,100,0,0.04));
          border: 1px solid rgba(255,140,0,0.15);
          border-radius: 12px; padding: 24px 28px; margin-top: 8px;
        }
        .cp-contact-block p { margin: 4px 0; }
        .cp-contact-block strong { color: #1a0d00; font-weight: 500; }

        /* Updated badge */
        .cp-updated {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,140,0,0.08);
          border: 1px solid rgba(255,140,0,0.2);
          border-radius: 20px; padding: 6px 14px;
          font-size: 12px; color: rgba(255,180,80,0.8);
          margin-bottom: 40px; letter-spacing: 0.05em;
        }
        .cp-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #ff9d2e; box-shadow: 0 0 6px rgba(255,157,46,0.8);
        }
      `}</style>

      <div className="cp-root">
        {/* Hero */}
        <div className="cp-hero">
          <div className="cp-hero-glow" />
          <div className="cp-hero-line" />
          <div className="cp-hero-label">Privacy</div>
          <h1>Cookie Policy</h1>
          <p className="cp-hero-date">Last updated: March 2025</p>
        </div>

        {/* Interactive cookie preference cards */}
        <div className="cp-cards-wrap">
          <div className="cp-cards-inner">
            <h2 className="cp-cards-title">Cookie Preferences</h2>
            <p className="cp-cards-sub">Manage how we use cookies on your device. Essential cookies cannot be disabled.</p>
            <div className="cp-cards-grid">
              {COOKIE_TYPES.map((ct, i) => (
                <div
                  key={ct.name}
                  className="cp-card"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="cp-card-icon">{ct.icon}</div>
                  <div className="cp-card-name">{ct.name}</div>
                  <div className="cp-card-desc">{ct.description}</div>
                  <div className="cp-card-examples">
                    {ct.examples.map((ex) => (
                      <span key={ex} className="cp-card-example">{ex}</span>
                    ))}
                  </div>
                  <div className="cp-toggle-row">
                    {ct.required ? (
                      <span className="cp-required-badge">Always on</span>
                    ) : (
                      <>
                        <span className="cp-toggle-label">
                          {consented[ct.name] ? "Enabled" : "Disabled"}
                        </span>
                        <label className="cp-toggle" onClick={() => toggle(ct.name)}>
                          <div className={`cp-toggle-track ${consented[ct.name] ? "on" : ""}`} />
                          <div className={`cp-toggle-thumb ${consented[ct.name] ? "on" : ""}`} />
                        </label>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="cp-body">
          <nav className="cp-nav">
            <div className="cp-nav-title">On this page</div>
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`}>{s.title}</a>
            ))}
          </nav>

          <div>
            <div className="cp-updated">
              <div className="cp-dot" />
              Effective from March 2025
            </div>

            {SECTIONS.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className="cp-section"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <h2>{s.title}</h2>
                {s.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}