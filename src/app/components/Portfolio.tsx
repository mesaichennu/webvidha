import { useState, useRef, useEffect } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

type ProjectMedia =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string; poster?: string };

type Project = {
  title: string;
  category: string;
  media: ProjectMedia;
  tags: string[];
  link: string;
  description: string;
  year: string;
};

const projects: Project[] = [
  {
    title: 'WahStays',
    category: 'Booking App',
    media: { type: 'image', src: '/portfolio/wahstays.png' },
    tags: ['React', 'Booking System', 'Tailwind', "payment gateway", "real-time availability", "booking flow"],
    link: 'https://wahstays.com/',
    description: 'Hotel and stay booking web app with real-time availability and smooth UX.',
    year: '2024',
  },
  {
    title: 'YudhAi',
    category: 'AI Studio',
    media: { type: 'video', src: '/portfolio/yudhai.mp4' },
    tags: ['React', 'Tailwind', 'Vite', 'Animation', "contact form"],
    link: 'https://yudhai.com',
    description: 'AI studio website with engaging animations and a vibrant visual identity.',
    year: '2026',
  },
  {
    title: 'Onestep Jobs',
    category: 'Personal business website',
    media: { type: 'image', src: '/portfolio/onestepjobs.png' },
    tags: ['responsive design', 'SEO', 'Tailwind', 'Vite','admin dashboard', 'login system', 'role-based access control'],
    link: 'https://onestepjobs.com/',
    description: 'Personal business website for a job consultancy with engaging animations and a vibrant visual identity.',
    year: '2026',
  },
    {
    title: 'CoCoTang',
    category: 'Beverage Brand',
    media: { type: 'video', src: '/portfolio/cocotang.mp4' },
    tags: ['React', 'Tailwind', 'SEO', 'CMS', "Online ordering", "contact form"],
    link: 'https://cocotang.com',
    description: 'Beverage brand website with CMS integration and appointment booking.',
    year: '2026',
  },
  {
    title: 'VOC Infra',
    category: 'Corporate',
    media: { type: 'image', src: '/portfolio/vocinfra.png' },
    tags: ['React', 'TypeScript', 'Animation', 'Vite', "contact form"],
    link: 'https://vocinfra.com',
    description: 'High-performance IT company site with custom animations and fast load times.',
    year: '2024',
  },
  {
    title: 'Salient Learnings',
    category: 'EdTech',
    media: { type: 'image', src: '/portfolio/salientlearnings.png' },
    tags: ['React', 'Courses', 'AI & DeepTech', 'Tailwind', "payment gateway", "course progress tracking"],
    link: 'https://salientlearnings.com/',
    description: 'EdTech platform offering AI and deep-tech courses with structured learning paths.',
    year: '2024',
  },
  {
    title: 'Brow Crush',
    category: 'Beauty & Lifestyle',
    media: { type: 'image', src: '/portfolio/browcrush.png' },
    tags: ['React', 'Tailwind', 'Vercel', 'Animation', 'booking flow'],
    link: 'https://brow-crush.vercel.app/',
    description: 'Elegant beauty studio website with smooth transitions and booking flow.',
    year: '2024',
  },
  {
    title: 'Aroma Spa',
    category: 'Beauty & Lifestyle',
    media: { type: 'image', src: '/portfolio/aroma.png' },
    tags: ['React', 'Tailwind', 'SEO', 'CMS', 'whatsapp integration'],
    link: 'https://aromaspa.in',
    description: 'Spa & wellness website with CMS integration and strong local SEO setup.',
    year: '2024',
  },
  {
    title: 'Astroping',
    category: 'Corporate',
    media: { type: 'image', src: '/portfolio/astroping.png' },
    tags: ['React', 'Tailwind', 'Animation', 'Vite', 'payment gateway', 'login system'],
    link: 'https://astroping.com',
    description: 'Astrology platform with engaging animations and a vibrant visual identity.',
    year: '2024',
  },
  {
    title: 'Aranya The School',
    category: 'Personal business website',
    media: { type: 'image', src: '/portfolio/aranya.png' },
    tags: ['responsive design', 'SEO', 'Tailwind', 'Vite'],
    link: 'https://aranya.in/',    
    description: 'Personal business website for a school with engaging animations and a vibrant visual identity.',
    year: '2026',
  },
  {
    title: 'Oakland School',
    category: 'EdTech',
    media: { type: 'image', src: '/portfolio/school.png' },
    tags: ['React', 'Tailwind', 'SEO', 'CMS', "admin dashboard", "login system"],
    link: 'https://www.oaklandschool.in/',
    description: 'School website with admissions, events, and CMS-managed content pages.',
    year: '2024',
  },
  {
    title: 'Dr.Shilpa Kotla',
    category: 'Personal business website',
    media: { type: 'image', src: '/portfolio/shilpa.png' },
    tags: ['responsive design', 'SEO', 'Tailwind', 'Vite'],
    link: 'https://drshilpakotla.com/',    
    description: 'Personal business website with engaging animations and a vibrant visual identity.',
    year: '2024',
  },
  {
    title: 'Kalapeksha',
    category: 'Corporate',
    media: { type: 'image', src: '/portfolio/kalapeksha.png' },
    tags: ['React', 'Node.js', 'MongoDB', 'Admin Dashboard', 'Booking System'],
    link: 'https://kalapeksha.com/',
    description: 'Corporate website for an art gallery with a custom CMS and booking system for events.',
    year: '2024',
  },

];


function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
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
        transition: `all 0.5s ease ${index * 0.07}s`,
      }}
    >
      <div
        onClick={() => window.open(project.link, '_blank')}
        className="portfolio-card group bg-white rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer"
      >
        {/* MEDIA */}
        <div className="relative overflow-hidden ">
          {project.media.type === 'video' ? (
            <video
              src={project.media.src}
              poster={project.media.poster}
              className="portfolio-media w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={project.media.src}
              alt={project.title}
              className="portfolio-media w-full h-full object-cover"
            />
          )}

          {/* overlay */}
          <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition" />

          {/* arrow */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition">
            <ArrowUpRight size={16} className="text-orange-500" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex justify-between mb-2">
            <span className="text-xs text-orange-500 font-semibold uppercase">
              {project.category}
            </span>
            <ExternalLink size={14} className="text-gray-400" />
          </div>

          <h3 className="text-lg font-bold mb-2">{project.title}</h3>

          <p className="text-sm text-gray-500 mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-orange-100 rounded-full"
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
  return (
    <section className="py-24 bg-slate-50">
      <style>{`
        .portfolio-card {
          transition: all 0.3s ease;
        }
        .portfolio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }
        .portfolio-media {
          transition: transform 0.6s ease;
        }
        .portfolio-card:hover .portfolio-media {
          transform: scale(1.07);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center mb-12">
          Websites we've built
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}