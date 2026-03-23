import { useState, useRef, useEffect } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
// import { useLanguage } from '../contexts/LanguageContext';

const projects = [
  {
    title: 'WahStays',
    category: 'Booking App',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Booking System', 'Tailwind', "payment gateway", "real-time availability", "booking flow"],
    link: 'https://wahstays.vercel.app/',
    description: 'Hotel and stay booking web app with real-time availability and smooth UX.',
    year: '2024',
  },
  {
    title: 'VOC Infra',
    category: 'Corporate',
    image: '/portfolio/vocinfra.png',
    tags: ['React', 'TypeScript', 'Animation', 'Vite', "contact form"],
    link: 'https://vocinfra.com',
    description: 'High-performance IT company site with custom animations and fast load times.',
    year: '2024',
  },
  {
    title: 'Salient Learnings',
    category: 'EdTech',
    image: '/portfolio/edutech.png',
    tags: ['React', 'Courses', 'AI & DeepTech', 'Tailwind', "payment gateway", "course progress tracking"],
    link: 'https://salientlearnings.com/',
    description: 'EdTech platform offering AI and deep-tech courses with structured learning paths.',
    year: '2024',
  },
  {
    title: 'Brow Crush',
    category: 'Beauty & Lifestyle',
    image: '/portfolio/browcrush.png',
    tags: ['React', 'Tailwind', 'Vercel', 'Animation', 'booking flow'],
    link: 'https://brow-crush.vercel.app/',
    description: 'Elegant beauty studio website with smooth transitions and booking flow.',
    year: '2024',
  },
  {
    title: 'Aroma Spa',
    category: 'Beauty & Lifestyle',
    image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Tailwind', 'SEO', 'CMS', 'whatsapp integration'],
    link: 'https://aromaspa.in',
    description: 'Spa & wellness website with CMS integration and strong local SEO setup.',
    year: '2024',
  },
  {
    title: 'Astroping',
    category: 'Corporate',
    image: '/portfolio/astroping.png',
    tags: ['React', 'Tailwind', 'Animation', 'Vite', 'payment gateway', 'login system'],
    link: 'https://astroping.com',
    description: 'Astrology platform with engaging animations and a vibrant visual identity.',
    year: '2024',
  },
  {
    title: 'Oakland School',
    category: 'EdTech',
    image: '/portfolio/school.jpg',
    tags: ['React', 'Tailwind', 'SEO', 'CMS', "admin dashboard", "login system"],
    link: 'https://www.oaklandschool.in/',
    description: 'School website with admissions, events, and CMS-managed content pages.',
    year: '2024',
  },
  {
    title: 'Dr.Shilpa Kotla',
    category: 'Personal business website',
    image: '/portfolio/shilpa.png',
    tags: ['responsive design', 'SEO', 'Tailwind', 'Vite'],
    link: 'https://drshilpakotla.com/',    
    description: 'Personal business website with engaging animations and a vibrant visual identity.',
    year: '2024',
  },
  {
    title: 'Kalapeksha',
    category: 'Corporate',
    image: '/portfolio/kalapeksha.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Admin Dashboard', 'Booking System'],
    link: 'https://kalapeksha.com/',
    description: 'Corporate website for an art gallery with a custom CMS and booking system for events.',
    year: '2024',
  },

];


function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
      }}
    >
      <div
        onClick={() => window.open(project.link, '_blank')}
        tabIndex={0}
        role="link"
        onKeyDown={e => e.key === 'Enter' && window.open(project.link, '_blank')}
        aria-label={`Open ${project.title}`}
        className="portfolio-card group bg-white rounded-2xl overflow-hidden flex flex-col h-full"
        style={{ cursor: 'pointer' }}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/10', flexShrink: 0 }}>
          <img
            src={project.image}
            alt={project.title}
            className="portfolio-card-img w-full h-full object-cover"
          />

          {/* Dark overlay on hover */}
          <div
            className="portfolio-card-overlay absolute inset-0"
            style={{ background: 'rgba(255,107,53,0.08)' }}
          />

          {/* Top badges */}
          {/* <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: 'white', backdropFilter: 'blur(4px)', color: '#FF6B35' }}
          >
            {project.year}
          </div> */}
          <div
            className="portfolio-card-arrow absolute top-3 right-3 rounded-full p-1.5 shadow-md"
            style={{ background: 'rgba(255,107,53,0.08)' }}
          >
            <ArrowUpRight size={14} style={{ color: '#FF6B35' }} />
          </div>
        </div>

        {/* Slide-in accent line */}
        <div className="portfolio-card-line" style={{ height: '2px', background: '#FF6B35', width: 0 }} />

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#FF6B35' }}>
              {project.category}
            </span>
            <ExternalLink
              size={12}
              className="portfolio-card-exticon flex-shrink-0 mt-0.5"
              style={{ color: '#94a3b8', transition: 'color 0.2s' }}
            />
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="portfolio-card-tag px-2.5 py-1 text-xs rounded-full font-medium"
                style={{ background: 'rgba(255,107,53,0.08)', color: '#475569' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  // const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <style>{`
        /* Primary accent: #FF6B35 */
        .portfolio-card {
          box-shadow: 0 2px 14px rgba(255,107,53,0.06);
          transition: box-shadow 0.35s ease, transform 0.35s ease;
          outline: none;
        }
        .portfolio-card:focus {
          box-shadow: 0 6px 30px rgba(255,107,53,0.12);
          border-radius: 1rem;
        }
        .portfolio-card:hover {
          box-shadow: 0 18px 50px rgba(255,107,53,0.12);
          transform: translateY(-5px);
        }
        .portfolio-card-img {
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .portfolio-card:hover .portfolio-card-img {
          transform: scale(1.07);
        }
        .portfolio-card-overlay {
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .portfolio-card:hover .portfolio-card-overlay {
          opacity: 1;
        }
        .portfolio-card-arrow {
          opacity: 0;
          transform: translate(-3px, 3px) scale(0.85);
          transition: opacity 0.28s ease, transform 0.28s ease;
        }
        .portfolio-card:hover .portfolio-card-arrow {
          opacity: 1;
          transform: translate(0,0) scale(1);
        }
        .portfolio-card-line {
          transition: width 0.4s ease;
        }
        .portfolio-card:hover .portfolio-card-line {
          width: 100%;
        }
        /* change external link icon to orange on hover */
        .portfolio-card:hover .portfolio-card-exticon {
          color: #FF6B35 !important;
        }
        /* tags: apply strong orange on hover */
        .portfolio-card:hover .portfolio-card-tag {
          background: #FF6B35 !important;
          color: #ffffff !important;
        }
        .portfolio-filter-btn {
          transition: all 0.22s ease;
        }
        .portfolio-filter-btn:hover {
          transform: translateY(-1px);
        }

        /* CTA focus/hover */
        .cta-btn {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          outline: none;
        }
        .cta-btn:focus {
          box-shadow: 0 4px 20px rgba(255,107,53,0.22);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4">
            Websites we've built
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses like yours establish a professional online presence in just 48 hours.
          </p>
        </div>

        {/* Filter tabs - commented out, but styles present if you enable */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
          {ALL_FILTERS.map(f => {
            const count = f === 'All' ? projects.length : projects.filter(p => p.category === f).length;
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="portfolio-filter-btn px-4 py-2 rounded-full text-sm font-semibold"
                style={
                  isActive
                    ? {
                        background: '#FF6B35',
                        color: 'white',
                        boxShadow: '0 4px 16px rgba(255,107,53,0.18)',
                        border: '1px solid transparent',
                      }
                    : {
                        background: 'white',
                        color: '#64748b',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                      }
                }
              >
                {f}
                {f !== 'All' && (
                  <span className="ml-1.5 text-xs" style={{ opacity: 0.6 }}>{count}</span>
                )}
              </button>
            );
          })}
        </div> */}

        {/* Cards grid — re-mounts on filter change to retrigger fade-in */}
        <div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-sm text-slate-400 mb-4">Got a project in mind? Let's build it.</p>
          <a
            href="whatsapp://send?phone=+919493971229?text=Hello%20I%20have%20a%20question%20about%20your%20services.%20about%20your%20services."
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white cta-btn"
            style={{
              background: '#FF6B35',
              boxShadow: '0 4px 20px rgba(255,107,53,0.16)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(255,107,53,0.22)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(255,107,53,0.16)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
            onFocus={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(255,107,53,0.22)';
            }}
            onBlur={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(255,107,53,0.16)';
            }}
            // accessibility: remove browser default blue outline and use orange focus instead
            role="button"
            tabIndex={0}
          >
            Start Your Project <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}