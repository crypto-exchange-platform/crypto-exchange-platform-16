import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa6';

interface TrendingPair {
  symbol: string;
  name: string;
  price: number;
  change: number;
  sparkline: number[];
}

const trending: TrendingPair[] = [
  { symbol: 'MATICUSDT', name: 'Polygon', price: 0.2913, change: 3.15, sparkline: [0.25, 0.28, 0.29, 0.291] },
  { symbol: 'BNBUSDT', name: 'BNB', price: 611.48, change: 0.65, sparkline: [608, 612, 611] },
  { symbol: 'RUNEUSDT', name: 'Thorchain', price: 1.44, change: -1.63, sparkline: [1.51, 1.45, 1.44] },
  { symbol: 'AVAXUSDT', name: 'Avalanche', price: 24.49, change: 0.88, sparkline: [24, 24.4, 24.5] },
];

const MarketSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('market-section');
      if (el && el.getBoundingClientRect().top < window.innerHeight - 100) {
        setAnimate(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="market-section"
      className="bg-gradient-to-br from-black to-violet-950  text-white py-20 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className={clsx('transition-all duration-1000', animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-violet-400">
          Crypto Market Overview
        </h2>

        <div className="overflow-x-auto flex gap-4 mb-10">
          {trending.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[200px] p-4 rounded-lg bg-violet-950/60 backdrop-blur-md border border-violet-600/30"
            >
              <h3 className="font-semibold text-violet-200">{item.symbol}</h3>
              <p className="text-sm text-violet-400">{item.name}</p>
              <p className="text-xl mt-2 font-bold text-white">${item.price.toFixed(4)}</p>
              <div
                className={clsx(
                  'mt-1 flex items-center gap-1 text-sm font-medium',
                  item.change >= 0 ? 'text-green-400' : 'text-red-400'
                )}
              >
                {item.change >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                {item.change}%
              </div>
              <div className="mt-3 h-8 w-full">
                <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <polyline
                    fill="none"
                    stroke={item.change >= 0 ? '#7c3aed' : '#f87171'}
                    strokeWidth="2"
                    points={item.sparkline.map((v, i) => `${(i / (item.sparkline.length - 1)) * 100},${30 - v * 10}`).join(' ')}
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-violet-950 p-6 rounded-lg border border-violet-600/30">
            <h4 className="text-lg font-semibold text-violet-300 mb-2">Market Cap & Volume</h4>
            <div className="flex justify-between text-sm text-violet-200 mb-4">
              <div>
                <p className="text-violet-400">Market Cap</p>
                <p className="text-xl text-violet-300">$2.85T</p>
              </div>
              <div>
                <p className="text-violet-400">Volume</p>
                <p className="text-xl text-violet-300">$71.27B</p>
              </div>
            </div>
            <div className="w-full h-40 bg-gradient-to-br from-violet-500/20 to-violet-900/10 rounded-md relative overflow-hidden">
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                <polyline
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  points="0,35 10,30 20,25 30,28 40,22 50,18 60,15 70,20 80,10 90,12 100,8"
                />
              </svg>
            </div>
          </div>

          <div className="bg-violet-950 p-6 rounded-lg border border-violet-600/30 flex flex-col items-center justify-center">
            <h4 className="text-lg font-semibold text-violet-300 mb-4">Fear & Greed Index</h4>
            <div className="w-40 h-20 relative">
              <svg viewBox="0 0 100 50" className="w-full h-full">
                <path
                  d="M 10 40 A 40 40 0 0 1 90 40"
                  fill="none"
                  stroke="#6b21a8"
                  strokeWidth="10"
                />
                <path
                  d="M 10 40 A 40 40 0 0 1 70 20"
                  fill="none"
                  stroke="#c084fc"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute left-1/2 top-[60%] -translate-x-1/2 text-white font-bold text-xl">60</div>
              <p className="text-sm text-violet-400 mt-3">Slightly Bullish</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
 