import { useState, useEffect, useRef, type JSX } from "react";
import {
  FaBitcoin,
  FaEthereum,
  FaCoins,
  FaDollarSign,
  FaChartLine
} from "react-icons/fa6";
import clsx from "clsx";
import "../Carousel/memoryCarousel.css";

interface CryptoCard {
  symbol: string;
  name: string;
  icon: JSX.Element;
  preview: string;
  full: string;
  price: string;
  change: string;
}

const cryptoData: CryptoCard[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    icon: <FaBitcoin className="memory-icon" />,
    preview: "Digital gold with limited supply",
    full: "Bitcoin (BTC) is the first and most popular cryptocurrency, designed as a decentralized digital currency. It's capped at 21 million coins and is widely considered a store of value.",
    price: "$103,102",
    change: "+2.5%",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: <FaEthereum className="memory-icon" />,
    preview: "Smart contracts and DeFi powerhouse",
    full: "Ethereum (ETH) enables smart contracts and decentralized applications using its powerful blockchain. It transitioned to proof-of-stake via The Merge in 2022.",
    price: "$3,250",
    change: "+1.8%",
  },
  {
    symbol: "USDT",
    name: "Tether",
    icon: <FaDollarSign className="memory-icon" />,
    preview: "Stablecoin pegged to USD",
    full: "Tether (USDT) is a stablecoin that mirrors the price of the U.S. dollar. It's commonly used as a bridge between fiat and crypto markets and offers low volatility.",
    price: "$1.00",
    change: "0.0%",
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    icon: <FaCoins className="memory-icon" />,
    preview: "Fuel for Binance ecosystem",
    full: "Binance Coin (BNB) is the utility token of Binance exchange. It's used for fee discounts, token sales, and within Binance Smart Chain (BSC) ecosystem.",
    price: "$584",
    change: "+0.6%",
  },
  {
    symbol: "XRP",
    name: "Ripple",
    icon: <FaChartLine className="memory-icon" />,
    preview: "Fast global payments",
    full: "Ripple (XRP) aims to enable real-time cross-border payments using blockchain technology. It's known for speed and low transaction costs.",
    price: "$0.92",
    change: "-0.4%",
  },
  {
    symbol: "ADA",
    name: "Cardano",
    icon: <FaChartLine className="memory-icon" />,
    preview: "Sustainable blockchain innovation",
    full: "Cardano (ADA) is a third-generation blockchain built on peer-reviewed research. It supports smart contracts and aims to scale efficiently with low energy use.",
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
        style={{ userSelect: "none", WebkitUserSelect: "none", msUserSelect: "none" }}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="card-content">
            <div className="memory-date">Symbol: {crypto.symbol}</div>
            <h3>{crypto.name}</h3>
            <div className="memory-image">
              {crypto.icon}
              <div className="glitch-effect" />
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
    setActiveIndex((prev) => (prev + direction + cryptoData.length) % cryptoData.length);
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
          className="relative z-10 bg-violet-950/20 min-h-[calc(100vh-40px)] flex items-center justify-center overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
      >
        <div className="carousel-container" ref={carouselRef}>
          <div
              className="carousel"
              style={{
                transform: `rotateY(${-activeIndex * (360 / cryptoData.length)}deg)`,
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
 