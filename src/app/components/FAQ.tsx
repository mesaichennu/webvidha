import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How can you deliver a website in just 48 hours?",
    answer: "We have a streamlined process and experienced team that focuses on creating beautiful, functional websites quickly. We use proven templates as a foundation and customize them to match your brand perfectly."
  },
  {
    question: "Is the hosting really free for 1 year?",
    answer: "Yes! We include free hosting for the first year of your website. There are no monthly fees, no hidden costs. Your website will stay online as long as you need it."
  },
  {
    question: "What if I need changes after the website is live?",
    answer: "We include one round of revisions and 30 days of support. After that, we offer maintenance packages for ongoing updates and changes at affordable rates."
  },
  {
    question: "Can I use my own domain name?",
    answer: "Absolutely! You can use your existing domain or we can help you register a new one. Domain registration is separate and typically costs $10-15 per year."
  },
  {
    question: "What kind of websites do you build?",
    answer: "We specialize in business websites for small businesses, freelancers, and local service providers. This includes portfolios, service pages, about pages, contact forms, and basic business information sites."
  },
  {
    question: "Do you provide content and images?",
    answer: "You provide the content and images for your website. If you need help, we can guide you on what's needed. We can also source stock images for an additional fee."
  },
  {
    question: "Is the website mobile-friendly?",
    answer: "Yes! Every website we build is fully responsive and optimized for mobile devices, tablets, and desktop computers."
  },
  {
    question: "What happens after 48 hours?",
    answer: "After 48 hours, your website will be ready for review. You can request changes, and once you're happy, we'll launch it. The entire process typically takes 3-5 days from start to finish."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Webvidha
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-xl px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="mailto:webvidha@gmail.com"
            className="text-primary hover:underline font-semibold"
          >
            Get in touch with our team
          </a>
        </div>
      </div>
    </section>
  );
}
