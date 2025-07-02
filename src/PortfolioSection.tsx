// PortfolioSection.tsx

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa6';

interface PortfolioAsset {
  symbol: string;
  name: string;
  amount: number;
  price: number;
  change: number;
}

const portfolio: PortfolioAsset[] = [
  { symbol: 'BTC', name: 'Bitcoin', amount: 0.5, price: 34000, change: 2.1 },
  { symbol: 'ETH', name: 'Ethereum', amount: 3.2, price: 2150, change: -1.3 },
  { symbol: 'ADA', name: 'Cardano', amount: 1000, price: 0.47, change: 0.6 },
];

const PortfolioSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('portfolio-section');
      if (el && el.getBoundingClientRect().top < window.innerHeight - 100) {
        setAnimate(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const totalValue = portfolio.reduce(
    (sum, asset) => sum + asset.amount * asset.price,
    0
  );

  return (
    <section
      id="portfolio-section"
      className="bg-gradient-to-br from-black to-violet-950 text-white py-20 px-4 sm:px-8 lg:px-16"
    >
      <div
        className={clsx(
          'transition-all duration-1000',
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Your Portfolio
        </h2>

        <div className="max-w-4xl mx-auto bg-zinc-900/80 p-6 rounded-lg border border-violet-700/30 mb-10 text-center">
          <p className="text-gray-400 text-sm">Total Balance</p>
          <h3 className="text-4xl font-bold text-green-400 mb-2">
            ${totalValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </h3>
          <p className="text-sm text-violet-300">+4.67% Today</p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-4">
          {portfolio.map((asset, i) => {
            const value = asset.amount * asset.price;
            return (
              <div
                key={i}
                className="flex items-center justify-between bg-zinc-900 rounded-md px-5 py-4 border border-zinc-700/40"
              >
                <div>
                  <p className="text-xl font-semibold">
                    {asset.name} ({asset.symbol})
                  </p>
                  <p className="text-sm text-gray-400">
                    {asset.amount} × ${asset.price.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-white">
                    ${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </p>
                  <p
                    className={clsx(
                      'text-sm flex items-center justify-end gap-1',
                      asset.change >= 0 ? 'text-green-400' : 'text-red-400'
                    )}
                  >
                    {asset.change >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                    {asset.change}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
 