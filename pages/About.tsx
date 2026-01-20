
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-black mb-6">قصة نخبة ديجيتال</h1>
        <p className="text-xl text-gray-600">نحن لا ندير الحسابات فحسب، نحن نبني هويات تجارية قوية.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
        <div className="relative">
           <div className="glass p-4 rounded-[40px] shadow-2xl rotate-2">
              <img src="https://picsum.photos/800/600?random=99" alt="Team" className="rounded-[32px]" />
           </div>
           <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl shadow-xl border border-white/60 max-w-xs">
              <p className="text-4xl font-black text-blue-600 mb-2">+250</p>
              <p className="text-gray-600 font-bold">عميل سعيد في كافة أنحاء المملكة</p>
           </div>
        </div>
        
        <div className="space-y-8">
           <h2 className="text-3xl font-bold text-gray-800">رؤيتنا: أن نكون شريك النجاح الأول لكل رائد أعمال سعودي.</h2>
           <p className="text-lg text-gray-600 leading-relaxed">
             بدأت "نخبة ديجيتال" كمبادرة من مجموعة من الشباب السعودي الطموح، رأينا الفجوة الكبيرة بين أسلوب التسويق التقليدي والسرعة الهائلة التي يتغير بها العالم الرقمي.
           </p>
           <p className="text-lg text-gray-600 leading-relaxed">
             قررنا أن نجمع بين الذكاء الاصطناعي لفهم البيانات، وبين "الروح السعودية" لفهم ذائقة الجمهور المحلي. واليوم، نفخر بأننا أدرنا حملات ناجحة في كافة القطاعات من التجزئة إلى العقارات.
           </p>
           <div className="grid grid-cols-2 gap-4">
              <div className="p-6 glass rounded-2xl">
                 <h4 className="font-bold text-blue-600 mb-2">قيمنا</h4>
                 <p className="text-sm text-gray-500">الشفافية الكاملة، الإبداع بلا حدود، والالتزام بالمواعيد.</p>
              </div>
              <div className="p-6 glass rounded-2xl">
                 <h4 className="font-bold text-blue-600 mb-2">أدواتنا</h4>
                 <p className="text-sm text-gray-500">أحدث منصات التحليل والذكاء الاصطناعي لضمان أفضل عائد.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
