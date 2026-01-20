
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="absolute inset-0 z-0 overflow-hidden">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md glass p-10 rounded-[40px] border border-white/60 shadow-2xl">
         <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-800 mb-2">{isRegistering ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}</h2>
            <p className="text-gray-500">مرحباً بك في نخبة ديجيتال</p>
         </div>

         <form onSubmit={handleSubmit} className="space-y-6">
            {isRegistering && (
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">الاسم بالكامل</label>
                 <input type="text" required className="w-full bg-white/50 border-gray-200 rounded-xl px-4 py-3 focus:ring-blue-600" />
              </div>
            )}
            <div>
               <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني</label>
               <input type="email" required className="w-full bg-white/50 border-gray-200 rounded-xl px-4 py-3 focus:ring-blue-600" />
            </div>
            <div>
               <label className="block text-sm font-bold text-gray-700 mb-2">كلمة المرور</label>
               <input type="password" required className="w-full bg-white/50 border-gray-200 rounded-xl px-4 py-3 focus:ring-blue-600" />
            </div>
            
            <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-all">
               {isRegistering ? 'إنشاء الحساب' : 'دخول'}
            </button>
         </form>

         <div className="mt-8 text-center text-sm text-gray-500">
            {isRegistering ? 'لديك حساب بالفعل؟' : 'ليس لديك حساب؟'}
            <button onClick={() => setIsRegistering(!isRegistering)} className="text-blue-600 font-bold mr-1">
               {isRegistering ? 'سجل دخولك' : 'أنشئ حساباً الآن'}
            </button>
         </div>
      </div>
    </div>
  );
};

export default Login;
