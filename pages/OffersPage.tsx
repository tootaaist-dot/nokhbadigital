
import React, { useState, useEffect } from 'react';
import { GOLDEN_OFFERS, CONTACT_PHONE } from '../constants';

const Countdown: React.FC<{ deadline: Date }> = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState<{h: number, m: number, s: number}>({h: 0, m: 0, s: 0});

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = deadline.getTime() - Date.now();
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        h: Math.floor(diff / (1000 * 60 * 60)),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="flex gap-4 justify-center">
      <div className="flex flex-col items-center">
         <div className="w-12 h-12 glass flex items-center justify-center rounded-lg font-bold text-xl">{timeLeft.h}</div>
         <span className="text-xs text-gray-500 mt-1">ساعة</span>
      </div>
      <div className="flex flex-col items-center">
         <div className="w-12 h-12 glass flex items-center justify-center rounded-lg font-bold text-xl">{timeLeft.m}</div>
         <span className="text-xs text-gray-500 mt-1">دقيقة</span>
      </div>
      <div className="flex flex-col items-center">
         <div className="w-12 h-12 glass flex items-center justify-center rounded-lg font-bold text-xl">{timeLeft.s}</div>
         <span className="text-xs text-gray-500 mt-1">ثانية</span>
      </div>
    </div>
  );
};

const OffersPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-6">عروض النخبة الذهبية 🏆</h1>
        <p className="text-xl text-gray-600">عروض حصرية لفترة محدودة جداً</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {GOLDEN_OFFERS.map((offer) => (
          <div key={offer.id} className="glass p-8 rounded-[40px] border-2 border-amber-300 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 opacity-10 rotate-45 translate-x-16 -translate-y-16"></div>
             
             <div className="relative z-10 text-center">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                   <img src={offer.image} alt={offer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full font-bold text-sm mb-4">
                  {offer.discount}
                </div>
                <h3 className="text-2xl font-bold mb-6">{offer.title}</h3>
                
                <div className="bg-white/40 p-4 rounded-2xl mb-8">
                  <p className="text-sm text-gray-500 mb-3">ينتهي العرض خلال:</p>
                  <Countdown deadline={offer.deadline} />
                </div>

                <a 
                  href={`https://wa.me/${CONTACT_PHONE.replace('+', '')}?text=أريد الحصول على العرض الذهبي: ${offer.title}`}
                  className="block w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all"
                >
                  اغتنم العرض الآن
                </a>
             </div>
          </div>
        ))}
      </div>

      {/* Bonus AI generated showcase */}
      <div className="mt-24 glass p-10 rounded-[40px] border border-white/60">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-3xl font-black mb-6">لماذا عروضنا لا تقاوم؟</h2>
               <p className="text-lg text-gray-600 leading-relaxed mb-6">
                 نحن نستخدم الذكاء الاصطناعي ليس فقط للتصميم، بل لتحليل احتياجاتك وتقديم العروض التي تخدم نموك الفعلي.
               </p>
               <div className="flex gap-4">
                  <div className="p-4 glass rounded-2xl flex-1 text-center">
                     <p className="text-2xl font-bold text-blue-600">+80%</p>
                     <p className="text-xs text-gray-500">زيادة تفاعل</p>
                  </div>
                  <div className="p-4 glass rounded-2xl flex-1 text-center">
                     <p className="text-2xl font-bold text-blue-600">-40%</p>
                     <p className="text-xs text-gray-500">توفير ميزانية</p>
                  </div>
               </div>
            </div>
            <div className="relative">
               <img src="https://picsum.photos/600/400?random=50" className="rounded-3xl shadow-xl" alt="AI Marketing" />
               <div className="absolute inset-0 bg-blue-600/10 rounded-3xl"></div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default OffersPage;
