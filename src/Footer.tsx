import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-violet-900/40 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white">CryptoWe</h2>
          <p className="text-sm mt-2 text-gray-400">
            Navigate the crypto galaxy with real-time insights, market data, and powerful tools.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Twitter" className="hover:text-violet-400"><FaTwitter /></a>
            <a href="#" aria-label="Discord" className="hover:text-violet-400"><FaDiscord /></a>
            <a href="#" aria-label="Telegram" className="hover:text-violet-400"><FaTelegram /></a>
            <a href="#" aria-label="GitHub" className="hover:text-violet-400"><FaGithub /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#market-section" className="hover:text-violet-400">Market</a></li>
            <li><a href="#portfolio" className="hover:text-violet-400">Portfolio</a></li>
            <li><a href="#news" className="hover:text-violet-400">News</a></li>
            <li><a href="#faq" className="hover:text-violet-400">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Community</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-violet-400">Discord</a></li>
            <li><a href="#" className="hover:text-violet-400">Twitter</a></li>
            <li><a href="#" className="hover:text-violet-400">Telegram</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-violet-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-violet-400">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} CryptoWe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
 