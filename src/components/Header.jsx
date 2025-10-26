import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../public/files.js';

const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // CHANGE: A single source of truth for all navigation links.
  // We can control where each link appears (desktop, mobile, or all).
  const menuItems = [
    { name: 'خانه', path: '/', showOn: 'all' },
    { name: 'دانلود', path: '/download', showOn: 'all' },
    { name: 'درباره ما', path: '/about', showOn: 'all' },
    { name: 'امنیت', path: '/security', showOn: 'all' },
    { name: 'پشتیبانی', path: '/support', showOn: 'all' },
  ];

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  const renderMenuItem = (item) => (
    <Link
      to={item.path}
      onClick={handleMobileLinkClick} // This will only run in mobile context but is harmless on desktop
      className="text-text-secondary hover:text-text-primary transition-colors relative group py-2 hover:text-[--main] active:text-[--main] transition-all"
    >
      {item.name}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-debug-red transition-all group-hover:w-full"></span>
    </Link>
  );

  return (
    <header dir="rtl" className="glass sticky top-0 z-50 border-b border-voxsy-gray-light">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-debug text-2xl font-bold flex items-center group">
            <img src={Logo} alt="Logo" className='w-10'/>
            <span className="text-[--main]">ووکسی</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            {menuItems
              .filter((item) => item.showOn === 'all' || item.showOn === 'desktop')
              .map((item) => (
                <div key={item.name}>{renderMenuItem(item)}</div>
              ))}
          </nav>

          <div className="flex items-center space-x-4 space-x-reverse">
            <button
              onClick={() => onNavigate && onNavigate('easy-login')}
              className="btn-primary text-sm px-6 py-2 hidden sm:block"
            >
              ورود
            </button>

            <button
              className="md:hidden text-text-primary p-2 hover:bg-voxsy-gray rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon
                icon={faBars}
                className="text-xl transition-all hover:text-[--main] active:text-[--main]"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu - ANIMATED */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-[500px] opacity-100 mt-4 py-4 border-t' : 'max-h-0 opacity-0'}
            border-voxsy-gray-light
          `}
        >
          <nav className="flex flex-col space-y-2">
            {menuItems
              .filter((item) => item.showOn === 'all' || item.showOn === 'mobile')
              .map((item) => (
                <div key={item.name}>{renderMenuItem(item)}</div>
              ))}
            <button
              onClick={() => {
                handleMobileLinkClick();
                // Assuming `onNavigate` is used to open a login modal/page
                onNavigate ? onNavigate('easy-login') : window.location.assign('/easy-login');
              }}
              className="btn-primary text-sm px-6 py-2 w-full mt-4"
            >
              ورود
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
