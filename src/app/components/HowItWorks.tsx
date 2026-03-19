import { MessageSquare, Palette, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Vision",
    description: "Tell us about your business, what you do, and what you want to achieve with your website.",
    step: "Step 1"
  },
  {
    icon: Palette,
    title: "We Design & Build",
    description: "Our team creates a custom website tailored to your brand, complete with your content and images.",
    step: "Step 2"
  },
  {
    icon: CheckCircle,
    title: "Review & Refine",
    description: "Review your new website and request any changes. We'll make sure everything is perfect.",
    step: "Step 3"
  },
  {
    icon: Rocket,
    title: "Go Live",
    description: "We launch your website with free hosting. Your business is now online and ready to grow.",
    step: "Step 4"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4">
            From idea to website in 48 hours
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes getting your business online effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-4" />
                )}
                
                <div className="text-center">
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-2">{step.step}</div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
