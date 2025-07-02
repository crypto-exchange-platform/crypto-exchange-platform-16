import { FC, useState } from "react";
import { SignupModal } from "./SignUpModal";
import { LoginModal } from "./LoginModal";
import Header from "./Header";
import HeroCarousel from "./Carousel/HeroCarousel";
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

          <HeroCarousel/>



          <div id="markets">
        </div>

        <div id="trade">
        </div>

        <div id="portfolio">
          {" "}
        </div>

        <div id="news">
          {" "}
        </div>

      </div>


    </>
  );
};

export default LandingPage; 