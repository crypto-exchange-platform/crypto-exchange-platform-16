
import { useEffect, useState } from "react";
import clsx from "clsx";

interface NewsItem {
  title: string;
  summary: string;
  image: string;
  date: string;
  source: string;
}

const mockNews: NewsItem[] = [
  {
    title: "USD Strengthens After Hawkish Fed Remarks",
    summary: "The dollar gains momentum as the Fed signals potential rate hikes ahead amid persistent inflation.",
    image: "https://images.unsplash.com/photo-1631260603607-b2709653fc65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGNyeXB0byUyMG5ld3N8ZW58MHx8MHx8fDA%3D",
    date: "Jul 1, 2025",
    source: "Bloomberg",
  },
  {
    title: "EUR/USD Faces Pressure as German Data Disappoints",
    summary: "EUR dips slightly as Germany's latest PMI data comes in weaker than expected, signaling slower growth.",
    image: "https://plus.unsplash.com/premium_photo-1675883161988-0fea4d198709?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNyeXB0byUyMG5ld3N8ZW58MHx8MHx8fDA%3D",
    date: "Jul 1, 2025",
    source: "Reuters",
  },
  {
    title: "JPY Retreats Despite BoJ’s Dovish Hold",
    summary: "The yen weakens as the Bank of Japan maintains ultra-loose policy, defying tightening trends elsewhere.",
    image: "https://images.unsplash.com/photo-1723785587499-0da15adeb967?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNyeXB0byUyMG5ld3N8ZW58MHx8MHx8fDA%3D",
    date: "Jun 30, 2025",
    source: "CNBC",
  },
  {
    title: "GBP Rallies After Positive GDP Numbers",
    summary: "Sterling strengthens as the UK economy shows better-than-expected growth in Q2 figures.",
    image: "https://images.unsplash.com/photo-1654574111817-048bf3cf226f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3J5cHRvJTIwbmV3c3xlbnwwfHwwfHx8MA%3D%3D",
    date: "Jun 30, 2025",
    source: "Financial Times",
  },
  {
    title: "AUD Slips Amid Weak Commodity Prices",
    summary: "The Australian dollar comes under pressure as iron ore and gold prices decline globally.",
    image: "https://images.unsplash.com/photo-1627570120184-7aec90f5613a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5cHRvJTIwbmV3c3xlbnwwfHwwfHx8MA%3D%3D",
    date: "Jul 2, 2025",
    source: "FXStreet",
  },
  {
    title: "CHF Holds Firm as Swiss Inflation Cools",
    summary: "Swiss franc remains stable as inflation slows, reducing the likelihood of SNB policy shifts.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    date: "Jul 2, 2025",
    source: "SwissInfo",
  },
];
const ForexNewsSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("forex-news-section");
      if (section && section.getBoundingClientRect().top < window.innerHeight - 100) {
        setAnimate(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="forex-news-section"
      className="bg-gradient-to-b from-violet-950 to-black text-white py-20 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className={clsx("transition-all duration-1000", animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Forex Market News
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNews.map((news, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 border border-violet-700/30 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{news.summary}</p>
                <div className="text-xs text-gray-500 flex justify-between">
                  <span>{news.source}</span>
                  <span>{news.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForexNewsSection;
 