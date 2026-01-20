
import React from 'react';

const Policy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <div className="glass p-12 rounded-[40px] shadow-xl border border-white/60">
        <h1 className="text-4xl font-black mb-10 border-b border-gray-100 pb-6">سياستنا وشروطنا</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">سياسة الخصوصية</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            في نخبة ديجيتال، نلتزم بحماية بيانات عملائنا بأعلى المعايير الأمنية. لا يتم مشاركة بياناتك أو إحصائيات حملاتك مع أي طرف ثالث تحت أي ظرف من الظروف.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">شروط الخدمة</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-600 text-lg">
            <li>يتم تفعيل الباقة خلال 48 ساعة عمل من تاريخ سداد الفاتورة.</li>
            <li>الأسعار الموضحة لا تشمل ضريبة القيمة المضافة ما لم يذكر خلاف ذلك.</li>
            <li>للمشترك الحق في طلب تعديلات على التصاميم بما لا يتجاوز 3 مرات لكل منشور.</li>
            <li>نلتزم بتقديم تقارير دورية شهرية توضح كافة نتائج الحملات والعمليات.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">سياسة الاسترجاع</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            نظراً لطبيعة الخدمات الرقمية، لا يمكن استرجاع المبالغ بعد بدء العمل الفعلي على الباقة، ولكن نضمن لك الرضا الكامل من خلال تقديم حلول بديلة وتعديلات مستمرة.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Policy;
