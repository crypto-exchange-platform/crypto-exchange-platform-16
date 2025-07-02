import { useState, useEffect } from "react";
import clsx from "clsx";

interface FAQ {
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  {
    question: "What is cryptocurrency trading?",
    answer: "Cryptocurrency trading is the act of buying and selling digital assets like Bitcoin and Ethereum through online exchanges.",
  },
  {
    question: "How do I create a portfolio?",
    answer: "You can build a portfolio by selecting cryptocurrencies, allocating capital, and tracking performance through our dashboard.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use industry-standard encryption and secure cloud infrastructure to protect all your data and transactions.",
  },
  {
    question: "How do I get started with Forex?",
    answer: "Start by learning market fundamentals, choosing a trusted broker, and practicing with a demo account before going live.",
  },
  {
    question: "Do you offer real-time market updates?",
    answer: "Yes, all crypto and forex prices, charts, and news are updated in real-time using trusted APIs.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("faq-section");
      if (section && section.getBoundingClientRect().top < window.innerHeight - 100) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq-section"
      className="bg-gradient-to-b from-black to-violet-950 text-white py-20 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className={clsx("transition-all duration-1000", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, idx) => (
            <div key={idx} className="border border-violet-700/40 rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-5 py-4 bg-zinc-900/60 hover:bg-zinc-800 transition-colors flex justify-between items-center font-medium"
                onClick={() => toggle(idx)}
              >
                {item.question}
                <span className="ml-4 text-violet-400 text-xl">
                  {openIndex === idx ? "-" : "+"}
                </span>
              </button>
              <div
                className={clsx(
                  "px-5 py-3 bg-zinc-900 text-sm text-gray-300 transition-all duration-300",
                  openIndex === idx ? "block" : "hidden"
                )}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
 