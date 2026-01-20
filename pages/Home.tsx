
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PACKAGES, GOLDEN_OFFERS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
              نصنع لك <span className="bg-clip-text text-transparent bg-gradient-to-l from-blue-600 to-cyan-500">أثرًا رقميًا</span> لا ينسى 🇸🇦
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              في نخبة ديجيتال، ندمج خبراتنا التسويقية مع أحدث تقنيات الذكاء الاصطناعي لإدارة صفحاتك وحملاتك باحترافية سعودية 100%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/packages" className="px-8 py-4 bg-blue-600 text-white rounded-2xl text-lg font-bold shadow-2xl hover:bg-blue-700 hover:-translate-y-1 transition-all">
                ابدأ رحلتك معنا
              </Link>
              <Link to="/about" className="px-8 py-4 glass text-blue-800 rounded-2xl text-lg font-bold hover:bg-white/50 transition-all">
                تعرف علينا
              </Link>
            </div>
          </div>

          <div className="relative">
             <div className="relative z-10 glass p-8 rounded-[40px] shadow-2xl rotate-3 animate-float">
                <img src="https://picsum.photos/600/600?random=10" alt="Success" className="rounded-[30px] w-full h-auto object-cover" />
                <div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl shadow-xl flex items-center gap-3">
                   <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                   </div>
                   <div>
                      <p className="text-xs text-gray-500">نمو المتابعين</p>
                      <p className="font-bold text-gray-800">+450% أسبوعياً</p>
                   </div>
                </div>
             </div>
             <div className="absolute -top-10 -left-10 w-32 h-32 glass rounded-full flex items-center justify-center animate-bounce">
                <span className="text-4xl">🚀</span>
             </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot with Layered 3D effect */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">خدماتنا المتميزة</h2>
          <p className="text-gray-600">نقدم حلولاً متكاملة تضمن لك صدارة المشهد الرقمي</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => (
            <div key={s.id} className="group relative">
               <div className="absolute inset-0 bg-blue-600 rounded-[32px] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500"></div>
               <div className="relative glass p-8 rounded-[32px] border border-white/50 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
                     {idx === 0 ? '🥉' : idx === 1 ? '🥈' : '🥇'}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{s.name}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{s.description}</p>
                  <Link to="/services" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    عرض التفاصيل <span>&larr;</span>
                  </Link>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof / Customer Showcase */}
      <section className="bg-blue-600 py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full"></div>
           <div className="absolute bottom-10 left-10 w-96 h-96 border-8 border-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">قصص نجاح من الذكاء الاصطناعي</h2>
              <p className="text-blue-100">هكذا يرى الذكاء الاصطناعي مستقبل علامتك التجارية معنا</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass bg-white/10 p-6 rounded-2xl border-white/20">
                   <img src={`https://picsum.photos/400/400?random=${i+20}`} alt="AI Result" className="w-full h-48 object-cover rounded-xl mb-4" />
                   <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-400">★★★★★</span>
                   </div>
                   <p className="text-sm italic">"تجربة استثنائية حولت متجري إلى منصة عالمية بلمسة سعودية."</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center">
         <div className="glass p-12 rounded-[40px] border border-white/60 shadow-2xl">
            <h2 className="text-3xl font-black mb-6">هل أنت جاهز لتكون "النخبة"؟</h2>
            <p className="text-xl text-gray-600 mb-8">
              لا تضيع وقتك في تجربة طرق تقليدية، اعتمد على التقنية والخبرة.
            </p>
            <Link to="/contact" className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-black text-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
              تواصل معنا الآن
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;
