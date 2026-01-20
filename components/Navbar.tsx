
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'سياستنا', path: '/policy' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'الباقات والأسعار', path: '/packages' },
    { name: 'العروض والخصومات', path: '/offers' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass py-2 shadow-lg' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 space-x-reverse group">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <span className="text-white font-black text-xl">N</span>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-blue-600 to-cyan-600">نخبة ديجيتال</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold hover:text-blue-600 transition-colors ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isLoggedIn ? (
              <Link to="/dashboard" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:bg-blue-700 transition-all">
                لوحة التحكم
              </Link>
            ) : (
              <Link to="/login" className="border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">
                دخول
              </Link>
            )}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass border-t border-white/20 mt-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-blue-600 text-white px-5 py-2 rounded-full"
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
