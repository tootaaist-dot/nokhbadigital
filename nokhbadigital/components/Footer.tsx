
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center space-x-2 space-x-reverse mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">نخبة ديجيتال</span>
          </Link>
          <p className="text-gray-600 leading-relaxed">
            شريكك الاستراتيجي للنمو الرقمي في المملكة العربية السعودية. نجمع بين الإبداع البشري وقوة الذكاء الاصطناعي.
          </p>
          <div className="flex space-x-4 space-x-reverse mt-6">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
               <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
               <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
               <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-800">روابط سريعة</h4>
          <ul className="space-y-4">
            <li><Link to="/services" className="text-gray-600 hover:text-blue-600">خدماتنا</Link></li>
            <li><Link to="/offers" className="text-gray-600 hover:text-blue-600">العروض</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-600">من نحن</Link></li>
            <li><Link to="/faq" className="text-gray-600 hover:text-blue-600">الأسئلة الشائعة</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-800">تواصل معنا</h4>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-2 space-x-reverse">
              <span>واتساب: {CONTACT_PHONE}</span>
            </li>
            <li>الرياض، المملكة العربية السعودية</li>
            <li>info@nokhbah-digital.sa</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-800">طرق الدفع</h4>
          <div className="flex flex-wrap gap-4">
             <div className="bg-white p-2 rounded shadow-sm border border-gray-100 flex items-center h-10 px-4 font-bold text-gray-400">Mada</div>
             <div className="bg-white p-2 rounded shadow-sm border border-gray-100 flex items-center h-10 px-4 font-bold text-gray-400">VISA</div>
             <div className="bg-white p-2 rounded shadow-sm border border-gray-100 flex items-center h-10 px-4 font-bold text-gray-400">MasterCard</div>
          </div>
          <p className="mt-4 text-xs text-gray-500">مدعوم بواسطة بوابة دفع آمنة 🇸🇦</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} نخبة ديجيتال. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
