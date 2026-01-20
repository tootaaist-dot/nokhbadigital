
import React from 'react';
import { CONTACT_PHONE } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${CONTACT_PHONE.replace('+', '')}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce hover:animate-none"
      title="تواصل معنا عبر واتساب"
    >
      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.664.072-1.076-.058-.253-.08-1.096-.407-2.083-1.282-.77-.681-1.289-1.522-1.441-1.782-.153-.261-.017-.401.114-.531.117-.117.261-.306.391-.459.13-.153.174-.261.261-.435.088-.174.044-.326-.022-.459-.066-.134-.582-1.403-.798-1.923-.21-.508-.423-.438-.582-.446l-.496-.008c-.174 0-.456.066-.694.326-.238.261-.912.891-.912 2.174 0 1.282.934 2.52 1.065 2.694.13.174 1.838 2.809 4.453 3.94.622.27 1.107.43 1.487.55.626.199 1.196.171 1.646.104.502-.074 1.545-.63 1.762-1.239.217-.609.217-1.13.153-1.239-.066-.109-.239-.174-.522-.317z"/>
      </svg>
    </button>
  );
};

export default FloatingWhatsApp;
