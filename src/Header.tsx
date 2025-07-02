import  { FC, useState } from 'react';

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Markets', id: 'markets' },
  { label: 'Trade', id: 'trade' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'News', id: 'news' },
];

interface HeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}

const Header: FC<HeaderProps> = ({ onLogin, onSignup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="animated-header bg-violet-950/5 backdrop-blur-md bg-opacity-80 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-clip-text text-white">
                CryptoWe
              </span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
              <span className="sr-only">View notifications</span>
              <i className="fas fa-bell h-6 w-6" />
            </button>
            <button
              onClick={onSignup}
              className="px-4 py-2 rounded-md text-sm font-medium  text-white transition"
            >
              Sign Up
            </button>
            <button
              onClick={onLogin}
              className="px-4 py-2 rounded-md text-sm font-medium  text-white transition"
            >
              Log In
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-indigo-900 flex flex-col space-y-2 px-5 bg-gray-900">
            <button
              onClick={onSignup}
              className="w-full px-4 py-2 rounded-md text-sm font-medium bg-indigo-500 hover:bg-indigo-600 text-white transition"
            >
              Sign Up
            </button>
            <button
              onClick={onLogin}
              className="w-full px-4 py-2 rounded-md text-sm font-medium bg-indigo-500 hover:bg-indigo-600 text-white transition"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
    