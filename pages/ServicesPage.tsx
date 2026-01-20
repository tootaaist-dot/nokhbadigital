
import React from 'react';
import { SERVICES, CONTACT_PHONE } from '../constants';

const ServicesPage: React.FC = () => {
  const handleWhatsApp = (serviceName: string) => {
    const text = encodeURIComponent(`هلا، حاب أستفسر عن ${serviceName} في نخبة ديجيتال.`);
    window.open(`https://wa.me/${CONTACT_PHONE.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black mb-6">خدماتنا الاحترافية</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          سواء كنت تبحث عن تأسيس تواجدك الرقمي أو التوسع في حملاتك، نحن هنا لنصنع لك التميز.
        </p>
      </div>

      <div className="space-y-16">
        {SERVICES.map((svc, idx) => (
          <div key={svc.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1 relative">
               <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
               <div className="relative glass p-10 rounded-[40px] shadow-2xl transform hover:rotate-2 transition-transform duration-500">
                  <div className="text-6xl mb-6">
                    {idx === 0 ? '🥉' : idx === 1 ? '🥈' : '🥇'}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{svc.name}</h2>
                  <p className="text-gray-600 text-lg mb-8">{svc.description}</p>
                  <ul className="space-y-4 mb-10">
                    {svc.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                       <p className="text-sm text-gray-500">تبدأ من</p>
                       <p className="text-3xl font-black text-blue-600">{svc.price} ر.س</p>
                    </div>
                    <button 
                      onClick={() => handleWhatsApp(svc.name)}
                      className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
                    >
                      اشترك الآن
                    </button>
                  </div>
               </div>
            </div>
            
            <div className="flex-1 w-full h-[400px] glass rounded-[40px] overflow-hidden flex items-center justify-center relative">
               <img src={`https://picsum.photos/800/600?random=${idx+100}`} alt={svc.name} className="w-full h-full object-cover opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent flex items-end p-8">
                  <p className="text-blue-900 font-bold text-lg">تحليل ذكي وتصميم عصري لكل خطوة.</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
