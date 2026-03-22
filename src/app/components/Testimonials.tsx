import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jagadish Gadireddy",
    role: "CEO, Vocinfra",
    content: "Webvidha got my companies website up in less than 2 days! My customers can now see our menu online and I've gotten so many new orders. Best investment for my business.",
    rating: 5,
    image: "https://www.vocinfra.com/Jagadish_Gadireddy.png"
  },
  {
    name: "Ramya Jaddu",
    role: "Founder, Scalers Business Agency",
    content: "As a business owner, I needed a beautiful portfolio site fast. Webvidha delivered exactly what I wanted. The free hosting is a huge bonus!",
    rating: 5,
    image: "/ramya.png"
  },
  {
    name: "Dr. Shilpa Kotla",
    role: "Founder, Wahstays",
    content: "I was skeptical about the 48-hour promise, but they actually delivered! My students love the clean design and booking system. Highly recommend!",
    rating: 5,
    image: '/shilpa.jpeg',
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4">
            Loved by small business owners
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of businesses that have launched their online presence with Webvidha.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-background p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
