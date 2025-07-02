import { useState, useEffect, useRef, type JSX } from "react";
import {
  FaBitcoin,
  FaEthereum,
  FaCoins,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa6";
import clsx from "clsx";
import "../Carousel/memoryCarousel.css";

interface CryptoCard {
  symbol: string;
  name: string;
  imageUrl: string;
  preview: string;
  full: string;
  price: string;
  change: string;
}

const cryptoData: CryptoCard[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJpdGNvaW58ZW58MHx8MHx8fDA%3D",
    preview: "Digital gold with limited supply",
    full: "Bitcoin (BTC) is the first and most popular cryptocurrency...",
    price: "$103,102",
    change: "+2.5%",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    imageUrl: "https://images.unsplash.com/photo-1660836709538-dbe487ea4db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV0aGVyaXVtfGVufDB8fDB8fHww",
    preview: "Smart contracts and DeFi powerhouse",
    full: "Ethereum (ETH) enables smart contracts and decentralized apps...",
    price: "$3,250",
    change: "+1.8%",
  },
  {
    symbol: "USDT",
    name: "Tether",
    imageUrl: "https://images.unsplash.com/photo-1640826163493-d26ba72efa1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNkdHxlbnwwfHwwfHx8MA%3D%3D",
    preview: "Stablecoin pegged to USD",
    full: "Tether (USDT) is a stablecoin that mirrors the price of USD...",
    price: "$1.00",
    change: "0.0%",
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    imageUrl: "https://plus.unsplash.com/premium_photo-1671997600458-00d572868c4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmluYW5jZSUyMGNvaW58ZW58MHx8MHx8fDA%3D",
    preview: "Fuel for Binance ecosystem",
    full: "Binance Coin (BNB) is the utility token of Binance exchange...",
    price: "$584",
    change: "+0.6%",
  },
  {
    symbol: "XRP",
    name: "Ripple",
    imageUrl: "https://images.unsplash.com/photo-1655228430443-956887bc35dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlwcGxlJTIwY29pbnxlbnwwfHwwfHx8MA%3D%3D",
    preview: "Fast global payments",
    full: "Ripple (XRP) aims to enable real-time cross-border payments...",
    price: "$0.92",
    change: "-0.4%",
  },
  {
    symbol: "ADA",
    name: "Cardano",
    imageUrl: "https://images.unsplash.com/photo-1641580532665-f234b5c87fc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZGFub3xlbnwwfHwwfHx8MA%3D%3D",
    preview: "Sustainable blockchain innovation",
    full: "Cardano (ADA) is a third-gen blockchain built on peer-reviewed research...",
    price: "$0.47",
    change: "+1.2%",
  },
];

interface CardProps {
  crypto: CryptoCard;
  isActive: boolean;
  flipped: boolean;
  onFlip: () => void;
}

const Card = ({ crypto, flipped, onFlip }: CardProps) => (
  <div
    className={clsx("memory-card", { flipped })}
    onClick={onFlip}
    style={{
      userSelect: "none",
      WebkitUserSelect: "none",
      msUserSelect: "none",
    }}
  >
    <div className="card-inner">
      <div className="card-front">
        <div className="card-content">
          <div className="memory-date">Symbol: {crypto.symbol}</div>
          <h3>{crypto.name}</h3>
          <div className="memory-image relative">
            <img
              src={crypto.imageUrl}
              alt={crypto.name}
              className="w-24 h-24 object-cover rounded-full mx-auto shadow-md border border-white/10"
            />
            <div className="glitch-effect absolute inset-0 rounded-full" />
          </div>

          <p className="memory-preview">{crypto.preview}</p>
          <p className="memory-preview">Current Price: {crypto.price}</p>
          <p className="memory-preview">24h Change: {crypto.change}</p>
          <div className="card-glow" />
        </div>
      </div>
      <div className="card-back">
        <div className="card-content">
          <h3>{crypto.name}</h3>
          <p>{crypto.full}</p>
          <div className="memory-coordinates">
            <span>Symbol: {crypto.symbol}</span>
            <span>Price: {crypto.price}</span>
            <span className="time-stamp">Change: {crypto.change}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [flipped, setFlipped] = useState<boolean[]>(
    Array(cryptoData.length).fill(false)
  );

  const startXRef = useRef<number | null>(null);
  const endXRef = useRef<number | null>(null);

  const rotate = (direction: number) => {
    setActiveIndex(
      (prev) => (prev + direction + cryptoData.length) % cryptoData.length
    );
  };

  const handleFlip = (index: number) => {
    if (index === activeIndex) {
      setFlipped((prev) => {
        const updated = [...prev];
        updated[index] = !updated[index];
        return updated;
      });
    }
  };

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) rotate(1);
      else rotate(-1);
    };
    const node = carouselRef.current;
    node?.addEventListener("wheel", handleWheel);
    return () => node?.removeEventListener("wheel", handleWheel);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    startXRef.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    endXRef.current = e.clientX;
    if (startXRef.current !== null && endXRef.current !== null) {
      const diff = endXRef.current - startXRef.current;
      if (Math.abs(diff) > 50) {
        rotate(diff < 0 ? 1 : -1);
      }
    }
    startXRef.current = null;
    endXRef.current = null;
  };

  return (
    <section
className="relative z-10 bg-gradient-to-b from-black to-violet-950 min-h-[calc(100vh-40px)] flex items-center justify-center overflow-hidden flex-col"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="text-center pointer-events-none select-none">
          <h1 className="text-violet-950 text-[15vw] font-extrabold uppercase tracking-widest blur-sm leading-none">
            CryptoWe
          </h1>
          <p className="text-violet-800 text-[4vw] mt-4 blur-xs tracking-wide">
            Dive deep into the blockchain galaxy
          </p>
        </div>
      </div>

      <div className="carousel-container mt-28 sm:mt-40" ref={carouselRef}>
        <div
          className="carousel"
          style={{
            transform: `rotateY(${
              -activeIndex * (360 / cryptoData.length)
            }deg)`,
          }}
        >
          {cryptoData.map((crypto, index) => {
            const angle = (360 / cryptoData.length) * index;
            return (
              <div
                key={index}
                style={{ transform: `rotateY(${angle}deg) translateZ(400px)` }}
              >
                <Card
                  crypto={crypto}
                  isActive={index === activeIndex}
                  flipped={flipped[index]}
                  onFlip={() => handleFlip(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
