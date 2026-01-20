
import React, { useState } from 'react';
import { chatWithGemini } from '../services/gemini';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: 'هلا بك في نخبة ديجيتال! كيف أقدر أخدمك اليوم؟'}
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setLoading(true);

    try {
      const response = await chatWithGemini(userMsg);
      setMessages(prev => [...prev, {role: 'bot', text: response || 'معليش، حدث خطأ بسيط.'}]);
    } catch (err) {
      setMessages(prev => [...prev, {role: 'bot', text: 'عذراً، ما قدرت أرد حالياً.'}]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 z-50 flex flex-col glass rounded-2xl shadow-2xl overflow-hidden border border-white/40 h-[500px]">
          <div className="bg-blue-600 p-4 text-white font-bold flex justify-between items-center">
            <span>مساعد نخبة ديجيتال</span>
            <button onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-white/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-blue-600 text-white rounded-tl-none' : 'bg-white text-gray-800 shadow-sm rounded-tr-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-gray-400 italic">جاري التفكير...</div>}
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب سؤالك هنا..."
              className="flex-grow border-none focus:ring-0 text-sm"
            />
            <button onClick={handleSend} className="text-blue-600 font-bold p-2">إرسال</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
