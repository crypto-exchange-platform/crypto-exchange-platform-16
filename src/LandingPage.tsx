import { FC, useState } from "react";
import { SignupModal } from "./SignUpModal";
import { LoginModal } from "./LoginModal";
import Header from "./Header";
import HeroCarousel from "./Carousel/HeroCarousel";
import TradeSection from "./TradeSection";
import MarketSection from "./MarketSection";
import PortfolioSection from "./PortfolioSection";
import ForexNewsSection from "./ForexNewsSection";
import FaqSection from "./FAQSection";
import TestimonialsSection from "./Testimonials";
import Footer from "./Footer";
const LandingPage: FC = () => {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);

  return (
    <>
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal("login")}
        />
      )}

      <style>{`html { scroll-behavior: smooth; }`}</style>

      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header
          onLogin={() => setModal("login")}
          onSignup={() => setModal("signup")}
        />

        <HeroCarousel />

        <div id="markets" className="scroll-mt-20">
          <MarketSection />
        </div>

        <div id="trade">
          {" "}
          <TradeSection />
        </div>
        <div id="portfolio">
          <PortfolioSection />
        </div>
        <div id="news">
          {" "}
          <ForexNewsSection />
        </div>
        <FaqSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
