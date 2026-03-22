import { useEffect, useRef } from "react";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

const SECTIONS: Section[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>By accessing or using Webvidha's services, website, or any related offerings, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please discontinue use of our services immediately.</p>
        <p>These terms apply to all visitors, clients, and users who access or use our services. We reserve the right to update these terms at any time, and continued use of our services constitutes acceptance of any revised terms.</p>
      </>
    ),
  },
  {
    id: "services",
    title: "2. Services Provided",
    content: (
      <>
        <p>Webvidha provides professional website design and development services, including but not limited to:</p>
        <ul>
          <li>Custom website design and development</li>
          <li>Landing page creation</li>
          <li>UI/UX design consultation</li>
          <li>Website maintenance and support</li>
          <li>Domain and hosting guidance</li>
        </ul>
        <p>All services are subject to availability and may be modified or discontinued at our discretion. Our signature offering of website delivery within 48 hours applies to standard projects as defined during the onboarding process.</p>
      </>
    ),
  },
  {
    id: "payment",
    title: "3. Payment & Pricing",
    content: (
      <>
        <p>Payment terms are established at the time of project agreement. Unless otherwise stated:</p>
        <ul>
          <li>A deposit may be required before project commencement</li>
          <li>Final payment is due upon project completion and prior to delivery of final files</li>
          <li>All prices are quoted in Indian Rupees (INR) unless explicitly stated otherwise</li>
          <li>Prices are subject to change with reasonable notice</li>
        </ul>
        <p>Failure to make timely payments may result in suspension of services or withholding of deliverables. We reserve the right to charge interest on overdue invoices.</p>
      </>
    ),
  },
  {
    id: "ip",
    title: "4. Intellectual Property",
    content: (
      <>
        <p>Upon receipt of full payment, clients receive full ownership of the final website deliverables created specifically for their project, including custom code, design assets, and content layouts.</p>
        <p>Webvidha retains the right to:</p>
        <ul>
          <li>Display completed projects in our portfolio</li>
          <li>Use project work for promotional purposes unless explicitly agreed otherwise</li>
          <li>Retain ownership of any reusable frameworks, templates, or code libraries used in the project</li>
        </ul>
        <p>Third-party assets such as stock images, fonts, or plugins remain subject to their respective licenses. The client is responsible for ensuring they hold appropriate licenses for any content they provide.</p>
      </>
    ),
  },
  {
    id: "revisions",
    title: "5. Revisions & Scope",
    content: (
      <>
        <p>Each project includes a defined number of revision rounds as agreed upon during onboarding. Revisions beyond the agreed scope will be quoted and billed separately.</p>
        <p>A revision is defined as a minor adjustment to existing design or content. Requests that constitute a significant change in scope, direction, or functionality are considered new work and will be scoped and priced accordingly.</p>
        <p>Webvidha will make reasonable efforts to accommodate client feedback; however, the final aesthetic and technical decisions rest with our team to ensure quality and performance standards are maintained.</p>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "6. Confidentiality",
    content: (
      <>
        <p>Both parties agree to keep confidential any proprietary information shared during the course of a project engagement. This includes business strategies, technical specifications, and client data.</p>
        <p>Webvidha will not disclose client information to third parties except where required by law or necessary to fulfill the contracted services (e.g., hosting providers, payment processors).</p>
      </>
    ),
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    content: (
      <>
        <p>Webvidha's liability is limited to the total fees paid by the client for the specific project in question. We shall not be liable for:</p>
        <ul>
          <li>Indirect, incidental, or consequential damages</li>
          <li>Loss of revenue, data, or business opportunities</li>
          <li>Damages arising from third-party services or integrations</li>
          <li>Issues resulting from client-provided content or assets</li>
        </ul>
        <p>We make no warranties, express or implied, regarding the fitness of our services for any particular purpose beyond what is explicitly agreed in writing.</p>
      </>
    ),
  },
  {
    id: "termination",
    title: "8. Termination",
    content: (
      <>
        <p>Either party may terminate a project engagement with written notice. Upon termination:</p>
        <ul>
          <li>The client is liable for payment of all work completed to date</li>
          <li>Webvidha will provide all completed deliverables upon receipt of outstanding payment</li>
          <li>Deposits are non-refundable unless Webvidha is unable to commence the project</li>
        </ul>
        <p>Webvidha reserves the right to terminate any engagement immediately if a client engages in abusive, fraudulent, or unlawful behaviour.</p>
      </>
    ),
  },
  {
    id: "governing",
    title: "9. Governing Law",
    content: (
      <>
        <p>These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana.</p>
        <p>We encourage clients to contact us directly to resolve any disputes informally before pursuing legal action.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: (
      <>
        <p>If you have questions about these Terms and Conditions, please reach out to us:</p>
        <div className="contact-block">
          <p><strong>Webvidha</strong></p>
          <p>Hyderabad, Telangana, India</p>
          <p>Email: <a href="mailto:hello@webvidha.com">hello@webvidha.com</a></p>
          <p>Website: <a href="https://webvidha.com" target="_blank" rel="noopener noreferrer">webvidha.com</a></p>
        </div>
      </>
    ),
  },
];

export function TermsAndConditions() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tc-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".tc-section").forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .tc-root {
          min-height: 100vh;
          background: #faf7f4;
          font-family: 'DM Sans', sans-serif;
          color: #2a1a0e;
        }

        /* Hero */
        .tc-hero {
          position: relative;
          background: #0e0800;
          overflow: hidden;
          padding: 100px 24px 80px;
          text-align: center;
        }
        .tc-hero-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 70%, rgba(130,52,0,0.65) 0%, transparent 70%);
          pointer-events: none;
        }
        .tc-hero-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,160,50,0.4), transparent);
        }
        .tc-hero-label {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,180,80,0.7);
          margin-bottom: 20px;
          position: relative;
        }
        .tc-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 8vw, 72px);
          font-weight: 700;
          line-height: 1.05;
          color: #fff;
          margin: 0 0 20px;
          position: relative;
          background: linear-gradient(135deg, #ffd27a 0%, #ff9d2e 40%, #ff6a00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tc-hero-date {
          font-size: 13px;
          color: rgba(255,190,100,0.5);
          letter-spacing: 0.1em;
          position: relative;
        }

        /* Layout */
        .tc-body {
          max-width: 900px;
          margin: 0 auto;
          padding: 64px 24px 100px;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 700px) {
          .tc-body { grid-template-columns: 1fr; }
          .tc-nav { display: none; }
        }

        /* Sticky nav */
        .tc-nav {
          position: sticky;
          top: 32px;
        }
        .tc-nav-title {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(150,80,20,0.6);
          margin-bottom: 16px;
        }
        .tc-nav a {
          display: block;
          font-size: 13px;
          font-weight: 400;
          color: rgba(80,40,10,0.55);
          text-decoration: none;
          padding: 6px 0 6px 12px;
          border-left: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          line-height: 1.4;
        }
        .tc-nav a:hover {
          color: #ff7a00;
          border-left-color: #ff7a00;
        }

        /* Sections */
        .tc-section {
          margin-bottom: 52px;
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .tc-section.tc-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .tc-section h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 3vw, 26px);
          font-weight: 600;
          color: #1a0d00;
          margin: 0 0 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,140,0,0.15);
        }
        .tc-section p {
          font-size: 15px;
          line-height: 1.8;
          color: #4a2e10;
          margin: 0 0 14px;
          font-weight: 300;
        }
        .tc-section ul {
          margin: 8px 0 16px 0;
          padding: 0;
          list-style: none;
        }
        .tc-section ul li {
          font-size: 15px;
          line-height: 1.75;
          color: #4a2e10;
          font-weight: 300;
          padding: 4px 0 4px 20px;
          position: relative;
        }
        .tc-section ul li::before {
          content: '';
          position: absolute;
          left: 0; top: 13px;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff9d2e, #ff6a00);
        }
        .tc-section a {
          color: #ff7a00;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,122,0,0.3);
          transition: border-color 0.2s;
        }
        .tc-section a:hover { border-color: #ff7a00; }
        .contact-block {
          background: linear-gradient(135deg, rgba(255,140,0,0.06), rgba(255,100,0,0.04));
          border: 1px solid rgba(255,140,0,0.15);
          border-radius: 12px;
          padding: 24px 28px;
          margin-top: 8px;
        }
        .contact-block p { margin: 4px 0; }
        .contact-block strong { color: #1a0d00; font-weight: 500; }

        /* Back button */
        .tc-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,180,80,0.7);
          text-decoration: none;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
          position: relative;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          transition: color 0.2s;
        }
        .tc-back:hover { color: #ff9d2e; }
        .tc-back svg { transition: transform 0.2s; }
        .tc-back:hover svg { transform: translateX(-3px); }

        /* Updated badge */
        .tc-updated {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,140,0,0.08);
          border: 1px solid rgba(255,140,0,0.2);
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 12px;
          color: rgba(255,180,80,0.8);
          margin-bottom: 40px;
          letter-spacing: 0.05em;
        }
        .tc-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #ff9d2e;
          box-shadow: 0 0 6px rgba(255,157,46,0.8);
        }
      `}</style>

      <div className="tc-root">
        {/* Hero */}
        <div className="tc-hero">
          <div className="tc-hero-glow" />
          <div className="tc-hero-line" />
          <div className="tc-hero-label">Legal</div>
          <h1>Terms &amp; Conditions</h1>
          <p className="tc-hero-date">Last updated: March 2025</p>
        </div>

        {/* Body */}
        <div className="tc-body">
          {/* Sticky sidebar nav */}
          <nav className="tc-nav">
            <div className="tc-nav-title">On this page</div>
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`}>{s.title}</a>
            ))}
          </nav>

          {/* Content */}
          <div>
            <div className="tc-updated">
              <div className="tc-dot" />
              Effective from March 2025
            </div>

            {SECTIONS.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className="tc-section"
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