
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { CampaignStat } from '../types';

const mockData: CampaignStat[] = [
  { date: 'الأحد', views: 1200, likes: 450, comments: 80, shares: 30 },
  { date: 'الاثنين', views: 1900, likes: 800, comments: 120, shares: 45 },
  { date: 'الثلاثاء', views: 3200, likes: 1500, comments: 240, shares: 90 },
  { date: 'الأربعاء', views: 2800, likes: 1200, comments: 190, shares: 60 },
  { date: 'الخميس', views: 4500, likes: 2100, comments: 380, shares: 140 },
  { date: 'الجمعة', views: 5000, likes: 2800, comments: 500, shares: 200 },
  { date: 'السبت', views: 3800, likes: 1700, comments: 310, shares: 110 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
           <h1 className="text-4xl font-black text-gray-800">أهلاً بك، فهد! 👋</h1>
           <p className="text-gray-500">هذا موجز لأداء حملاتك التسويقية في نخبة ديجيتال.</p>
        </div>
        <div className="flex gap-3">
           <button className="px-5 py-2 glass rounded-xl text-blue-600 font-bold border border-blue-200">تحميل التقرير PDF</button>
           <button className="px-5 py-2 bg-blue-600 text-white rounded-xl font-bold shadow-lg">إضافة طلب جديد</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
         {[
           { label: 'إجمالي المشاهدات', val: '22.4K', color: 'blue' },
           { label: 'إجمالي الإعجابات', val: '10.5K', color: 'pink' },
           { label: 'التعليقات', val: '1.8K', color: 'purple' },
           { label: 'المشاركات', val: '675', color: 'cyan' }
         ].map((card, idx) => (
           <div key={idx} className="glass p-6 rounded-3xl border border-white/60 shadow-md">
              <p className="text-gray-500 text-sm mb-1">{card.label}</p>
              <h3 className="text-3xl font-black text-gray-800">{card.val}</h3>
              <div className="mt-2 flex items-center gap-1 text-green-500 text-xs font-bold">
                 <span>↑ 12%</span>
                 <span className="text-gray-400 font-normal">عن الأسبوع الماضي</span>
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
         {/* Main Chart */}
         <div className="lg:col-span-2 glass p-8 rounded-[32px] border border-white/60 shadow-lg">
            <h3 className="text-xl font-bold mb-8">إحصائيات التفاعل الأسبوعي</h3>
            <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockData}>
                     <defs>
                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                           <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                     <XAxis dataKey="date" />
                     <YAxis />
                     <Tooltip />
                     <Area type="monotone" dataKey="views" stroke="#3b82f6" fillOpacity={1} fill="url(#colorViews)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Current Subscription */}
         <div className="glass p-8 rounded-[32px] border border-white/60 shadow-lg flex flex-col">
            <h3 className="text-xl font-bold mb-6">اشتراكي الحالي</h3>
            <div className="bg-blue-600 p-6 rounded-2xl text-white mb-6">
               <p className="text-blue-100 text-sm">الباقة النشطة</p>
               <h4 className="text-2xl font-bold">باقة النخبة المتقدمة 🥇</h4>
               <p className="mt-4 text-xs font-mono">ID: N-DX-55269</p>
            </div>
            <div className="space-y-4 flex-grow">
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">حالة الطلب:</span>
                  <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full">جاري التنفيذ</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">تاريخ الانتهاء:</span>
                  <span className="font-bold">25 مارس 2025</span>
               </div>
               <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-4">
                  <div className="bg-blue-600 h-full w-[65%]"></div>
               </div>
               <p className="text-xs text-gray-400 text-center">باقي 12 يوم على التجديد</p>
            </div>
            <button className="w-full mt-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all">تجديد الاشتراك</button>
         </div>
      </div>

      {/* Campaigns Table */}
      <div className="glass p-8 rounded-[32px] border border-white/60 shadow-lg overflow-x-auto">
         <h3 className="text-xl font-bold mb-6">آخر الحملات والعمليات</h3>
         <table className="w-full text-right">
            <thead>
               <tr className="border-b border-gray-100">
                  <th className="pb-4 font-bold text-gray-700">الحملة</th>
                  <th className="pb-4 font-bold text-gray-700">المنصة</th>
                  <th className="pb-4 font-bold text-gray-700">التاريخ</th>
                  <th className="pb-4 font-bold text-gray-700">النتائج</th>
                  <th className="pb-4 font-bold text-gray-700">الحالة</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
               {[
                 { title: 'إعلان رمضان 2024', platform: 'سناب شات', date: '12 مارس', result: '15K تفاعل', status: 'مكتمل' },
                 { title: 'كولكشن الصيف', platform: 'انستغرام', date: '05 مارس', result: '8.2K مشاهدة', status: 'مكتمل' },
                 { title: 'افتتاح فرع الرياض', platform: 'تيك توك', date: '28 فبراير', result: '22K مشاهدة', status: 'مكتمل' },
               ].map((row, i) => (
                 <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-4 text-gray-800 font-medium">{row.title}</td>
                    <td className="py-4 text-gray-600">{row.platform}</td>
                    <td className="py-4 text-gray-500">{row.date}</td>
                    <td className="py-4 font-bold text-blue-600">{row.result}</td>
                    <td className="py-4">
                       <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">{row.status}</span>
                    </td>
                 </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
};

export default Dashboard;
