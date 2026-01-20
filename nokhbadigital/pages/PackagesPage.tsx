
import React from 'react';
import { PACKAGES, CONTACT_PHONE } from '../constants';

const PackagesPage: React.FC = () => {
  const handleWhatsApp = (pkgName: string) => {
    const text = encodeURIComponent(`مرحباً، أريد الاشتراك في ${pkgName} من فضلكم.`);
    window.open(`https://wa.me/${CONTACT_PHONE.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-6">باقات الإدارة والتسويق</h1>
        <p className="text-xl text-gray-600">اختر الباقة التي تناسب طموحاتك وميزانيتك</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PACKAGES.map((pkg) => (
          <div key={pkg.id} className={`relative group flex flex-col h-full ${pkg.tier === 'medium' ? 'scale-105 z-10' : ''}`}>
             {pkg.tier === 'medium' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  الأكثر طلباً ✨
                </div>
             )}
             <div className="glass p-8 rounded-[40px] border border-white/50 shadow-xl flex flex-col flex-grow group-hover:shadow-2xl transition-all duration-500">
                <div className="text-center mb-8">
                   <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                   <div className="flex items-center justify-center gap-1">
                      <span className="text-4xl font-black text-blue-600">{pkg.price}</span>
                      <span className="text-gray-500 font-bold">ر.س / {pkg.duration}</span>
                   </div>
                </div>

                <div className="space-y-6 flex-grow mb-10">
                   <div className="p-4 bg-white/40 rounded-2xl border border-white/20">
                      <p className="text-gray-600 text-sm">{pkg.description}</p>
                   </div>
                   
                   <ul className="space-y-4">
                      <li className="flex items-center justify-between text-gray-700">
                         <span>عدد المنصات:</span>
                         <span className="font-bold">{pkg.platforms}</span>
                      </li>
                      <li className="flex items-center justify-between text-gray-700">
                         <span>المنشورات:</span>
                         <span className="font-bold">{pkg.posts}</span>
                      </li>
                      <li className="flex items-center justify-between text-gray-700">
                         <span>الصور المصممة:</span>
                         <span className="font-bold">{pkg.images}</span>
                      </li>
                      <hr className="border-white/40" />
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                           <span className="text-green-500">✔</span>
                           {feat}
                        </li>
                      ))}
                   </ul>
                </div>

                <button 
                  onClick={() => handleWhatsApp(pkg.name)}
                  className={`w-full py-4 rounded-2xl font-bold text-lg shadow-lg transition-all ${
                    pkg.tier === 'medium' 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  اشترك في {pkg.name}
                </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesPage;
