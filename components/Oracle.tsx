import React, { useState } from 'react';
import { sendMessageToOracle } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Loader2 } from 'lucide-react';

const Oracle: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'I am the Spirit of Pomodori. Ask me about the night.' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setLoading(true);

    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);

    const history = messages.map(m => `${m.role}: ${m.text}`);
    const response = await sendMessageToOracle(history, userMsg);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  return (
    <div className="w-full bg-white border-4 border-white p-6 shadow-[8px_8px_0px_#FF2400] font-mono text-sm text-black text-left">
      {/* Header */}
      <div className="border-b-4 border-black pb-4 mb-4 flex justify-between items-center">
        <div className="uppercase font-bold tracking-widest text-lg">ORACLE v1.0</div>
        <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
      </div>
      
      <div className="h-64 overflow-y-auto mb-4 space-y-4 px-2 custom-scrollbar bg-gray-100 p-4 border-2 border-black/10">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 ${
              msg.role === 'user' 
                ? 'bg-black text-white' 
                : 'bg-white text-black border-2 border-black'
            }`}>
              <span className="block text-[10px] uppercase font-bold opacity-50 mb-1">
                {msg.role === 'user' ? 'YOU' : 'TOMATO'}
              </span>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
            <div className="text-center py-4 text-black">
                <Loader2 className="w-5 h-5 animate-spin mx-auto mb-2" />
                <span className="text-xs uppercase blink">Consulting the vine...</span>
            </div>
        )}
      </div>

      {/* Input Area */}
      <div className="flex gap-0 border-t-4 border-black pt-4">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="ASK THE ORACLE..."
          className="flex-1 p-3 bg-gray-100 border-2 border-black outline-none uppercase placeholder:text-black/30 font-bold focus:bg-white transition-colors"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="bg-black text-white px-6 border-2 border-black border-l-0 hover:bg-pomodoro-red transition-colors disabled:opacity-50 font-bold uppercase"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default Oracle;