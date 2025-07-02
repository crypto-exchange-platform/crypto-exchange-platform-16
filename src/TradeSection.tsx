
import { useState } from 'react';
import { FaArrowUpRightDots, FaArrowRightArrowLeft, FaArrowDown } from 'react-icons/fa6';
import clsx from 'clsx';

const markets = ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'XRP/USDT'];

const TradeSection = () => {
  const [selected, setSelected] = useState('BTC/USDT');

  return (
    <section className="bg-gradient-to-br from-violet-950 to-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">Trade Instantly</h2>
        <p className="text-violet-300 mb-8 text-lg">
          Seamless, secure and lightning-fast cryptocurrency trading.
        </p>

        <div className="flex justify-center mb-10 flex-wrap gap-4">
          {['Buy', 'Sell', 'Trade'].map((action) => (
            <button
              key={action}
              className="bg-violet-700 hover:bg-violet-600 transition px-6 py-2 rounded-full font-medium text-white"
            >
              {action}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <label htmlFor="market" className="text-gray-400 font-medium">
            Choose Market:
          </label>
          <select
            id="market"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="bg-zinc-900 border border-violet-600 px-4 py-2 rounded-md text-white"
          >
            {markets.map((mkt) => (
              <option key={mkt} value={mkt}>
                {mkt}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-lg p-6 border border-violet-700/30">
            <h4 className="text-lg text-violet-400 mb-2">Price</h4>
            <p className="text-2xl font-bold text-white">$34,120.23</p>
          </div>
          <div className="bg-zinc-900 rounded-lg p-6 border border-violet-700/30">
            <h4 className="text-lg text-violet-400 mb-2">24h Volume</h4>
            <p className="text-2xl font-bold text-white">$1.8B</p>
          </div>
          <div className="bg-zinc-900 rounded-lg p-6 border border-violet-700/30">
            <h4 className="text-lg text-violet-400 mb-2">24h Change</h4>
            <p className={clsx("text-2xl font-bold", 1.52 >= 0 ? "text-green-400" : "text-red-400")}>
              <FaArrowUpRightDots className="inline-block mr-2" />
              +1.52%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeSection;
