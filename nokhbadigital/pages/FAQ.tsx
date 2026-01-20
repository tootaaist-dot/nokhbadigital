
import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-right group"
      >
        <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{q}</span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
           {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 leading-relaxed text-lg animate-fade-in">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { q: 'هل الباقات تشمل الميزانية الإعلانية؟', a: 'الباقات تشمل أتعاب الإدارة والتصميم والتحليل. الميزانية الإعلانية (للحملات الممولة) يتم دفعها مباشرة للمنصات أو إضافتها بطلب مستقل.' },
    { q: 'متى أبدأ أشوف نتائج حقيقية؟', a: 'في العادة، يبدأ التحسن الملحوظ في التفاعل من الأسبوع الثاني، والنتائج الاستراتيجية تتضح بشكل أكبر بعد مرور شهر كامل من الإدارة المنتظمة.' },
    { q: 'هل لديكم عقود سنوية؟', a: 'نعم، نوفر عقود سنوية وربع سنوية بخصومات تصل إلى 30%. تواصل معنا للحصول على عرض مخصص لشركتك.' },
    { q: 'كيف أتابع أداء حساباتي؟', a: 'بمجرد الاشتراك، ستحصل على دخول للوحة تحكم خاصة بك (Dashboard) تعرض إحصائيات حية وشاملة لكل ما نقوم به.' }
  ];

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-6">الأسئلة الشائعة</h1>
        <p className="text-xl text-gray-600">كل ما تريد معرفته عن خدمات نخبة ديجيتال</p>
      </div>

      <div className="glass p-8 rounded-[40px] shadow-xl">
        {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
      </div>

      <div className="mt-20 text-center">
         <p className="text-gray-600 mb-6">عندك سؤال ثاني؟ ما يهمك، حنا موجودين.</p>
         <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-all">تواصل مع الدعم الفني</button>
      </div>
    </div>
  );
};

export default FAQ;
