import { useEffect, useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa6';
import clsx from 'clsx';

interface MarketItem {
  symbol: string;
  name: string;
  price: number;
  change: number; 
  volume: string;
}

const mockMarketData: MarketItem[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: 103102, change: 2.5, volume: '36.4B' },
  { symbol: 'ETH', name: 'Ethereum', price: 3250, change: 1.8, volume: '18.2B' },
  { symbol: 'SOL', name: 'Solana', price: 142.35, change: 3.1, volume: '3.9B' },
  { symbol: 'XRP', name: 'Ripple', price: 0.92, change: -0.4, volume: '2.5B' },
  { symbol: 'DOGE', name: 'Dogecoin', price: 0.125, change: 1.1, volume: '1.2B' },
  { symbol: 'ADA', name: 'Cardano', price: 0.47, change: 1.2, volume: '1.6B' },
];

const MarketSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('market-section');
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) setAnimate(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="market-section"
      className="relative py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-violet-950 to-black overflow-hidden"
    >
      <div className={clsx("transition-all duration-1000", animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Market Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMarketData.map((item) => (
            <div
              key={item.symbol}
              className="bg-violet-900/30 backdrop-blur-sm border border-violet-600/30 rounded-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white text-xl font-semibold">
                  {item.name} ({item.symbol})
                </h3>
                <div
                  className={clsx(
                    'flex items-center gap-1 font-semibold',
                    item.change >= 0 ? 'text-green-400' : 'text-red-400'
                  )}
                >
                  {item.change >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                  {item.change}%
                </div>
              </div>
              <div className="text-gray-300 text-lg">
                <div>Price: ${item.price.toLocaleString()}</div>
                <div>Volume: {item.volume}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
 