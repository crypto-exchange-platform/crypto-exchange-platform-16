import { useEffect, useState } from "react";
import clsx from "clsx";

interface Testimonial {
  name: string;
  title: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    title: "Crypto Investor",
    message: "This platform helped me diversify my portfolio and keep track of everything effortlessly. Amazing UX!",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "Mark Chen",
    title: "Forex Trader",
    message: "I love how smooth the experience is. Market data, trades, and insights are all in one place. Brilliant.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lena Kovac",
    title: "DeFi Enthusiast",
    message: "From real-time charts to market sentiment — this app changed how I manage crypto. Super recommended!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  
];

const TestimonialsSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("testimonials-section");
      if (section && section.getBoundingClientRect().top < window.innerHeight - 100) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="testimonials-section"
      className="bg-gradient-to-b from-black to-violet-950 py-20 px-4 sm:px-10 lg:px-20 text-white overflow-hidden"
    >
      <div className={clsx("transition-all duration-1000", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What Our Users Say</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-zinc-900/60 border border-zinc-700/40 rounded-lg p-6 backdrop-blur-sm shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border border-violet-500 shadow-sm"
                />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-violet-400">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{t.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
