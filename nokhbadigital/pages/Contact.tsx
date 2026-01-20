
import React from 'react';
import { CONTACT_PHONE } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-black mb-8 text-gray-900 leading-tight">حنا هنا عشان <span className="text-blue-600">نسمع منك</span> 👂</h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            سواء كنت صاحب متجر صغير أو شركة كبيرة، يهمنا جداً نسمع أفكارك ونساعدك تحقق أهدافك الرقمية في السوق السعودي.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-3xl shadow-lg">📍</div>
               <div>
                  <h4 className="font-bold text-lg">المقر الرئيسي</h4>
                  <p className="text-gray-500">الرياض، حي الملقا، المملكة العربية السعودية</p>
               </div>
            </div>
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-3xl shadow-lg">📞</div>
               <div>
                  <h4 className="font-bold text-lg">واتساب المبيعات</h4>
                  <p className="text-gray-500">{CONTACT_PHONE}</p>
               </div>
            </div>
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-3xl shadow-lg">✉️</div>
               <div>
                  <h4 className="font-bold text-lg">البريد الإلكتروني</h4>
                  <p className="text-gray-500">hello@nokhbah-digital.sa</p>
               </div>
            </div>
          </div>
        </div>

        <div className="glass p-10 rounded-[40px] border border-white/60 shadow-2xl relative">
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
           <h3 className="text-2xl font-bold mb-8">أرسل لنا استفسارك</h3>
           <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">الاسم بالكامل</label>
                    <input type="text" className="w-full bg-white/50 border-gray-200 rounded-xl px-4 py-3 focus:ring-blue-600" placeholder="فهد بن محمد" />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">رقم الجوال</label>
                    <input type="text" className="w-full bg-white/50 border-gray-200 rounded-xl px-4 py-3 focus:ring-blue-600" placeholder="05XXXXXXXX" />
                 </div>
              </div>
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">الخدمة المطلوبة</label>
                 <select className="w-full bg-white/50 border-gray-200 rounded-xl px-4 py-3 focus:ring-blue-600">
                    <option>إدارة حسابات تواصل اجتماعي</option>
                    <option>حملات إعلانية ممولة</option>
                    <option>تصميم هوية بصرية</option>
                    <option>أخرى</option>
                 </select>
              </div>
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">رسالتك</label>
                 <textarea rows={4} className="w-full bg-white/50 border-gray-200 rounded-xl px-4 py-3 focus:ring-blue-600" placeholder="اكتب تفاصيل طلبك هنا..."></textarea>
              </div>
              <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-xl shadow-lg hover:bg-blue-700 transition-all">إرسال الطلب</button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
