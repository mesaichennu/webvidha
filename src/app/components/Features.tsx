import { Zap, Shield, Smartphone, Paintbrush, Search, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Get your website live in just 48 hours. We handle everything from design to deployment."
  },
  {
    icon: Shield,
    title: "FREE Hosting For 1 Year",
    description: "No hidden costs. Your website hosting is completely free, for 1 year. No monthly fees."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every website is optimized for mobile devices, ensuring great experience on all screens."
  },
  {
    icon: Paintbrush,
    title: "Custom Design",
    description: "Professional designs tailored to your brand. No templates. Unique to your business."
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built with search engines in mind. Help your customers find you on Google."
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Get help whenever you need it. We're here to ensure your success."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4">
            Everything you need to succeed online
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've built the perfect solution for small businesses who need a professional web presence without the complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-background p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
