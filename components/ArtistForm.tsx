import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const ArtistForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border-4 border-black p-12 text-center transform rotate-1 shadow-[8px_8px_0px_rgba(255,255,255,0.2)]">
        <h3 className="font-sans font-black text-4xl uppercase mb-2 text-pomodoro-blue">Received.</h3>
        <p className="font-serif italic text-xl text-black">We will be in touch.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_rgba(255,255,255,0.2)] relative">
      <div className="absolute top-0 right-0 bg-pomodoro-red text-white font-mono text-xs px-2 py-1 transform translate-x-2 -translate-y-2 border border-black">
        OPEN FOR SUBMISSIONS
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border-b-4 border-black pb-2 group focus-within:border-pomodoro-blue transition-colors">
            <input 
                required 
                type="text" 
                className="w-full bg-transparent text-black text-2xl md:text-3xl font-sans font-black uppercase placeholder:text-black/20 focus:outline-none" 
                placeholder="NAME / COLLECTIVE" 
            />
        </div>
        
        <div className="border-b-4 border-black pb-2 group focus-within:border-pomodoro-blue transition-colors">
            <input 
                required 
                type="email" 
                className="w-full bg-transparent text-black text-xl font-mono placeholder:text-black/20 focus:outline-none" 
                placeholder="EMAIL_ADDRESS" 
            />
        </div>

        <div className="flex flex-col gap-2">
            <label className="font-mono text-xs font-bold uppercase text-black">Discipline</label>
            <div className="flex flex-wrap gap-2">
                {['Visual', 'Sonic', 'Performance', 'Culinary', 'Other'].map(type => (
                    <label key={type} className="inline-flex items-center cursor-pointer group">
                        <input type="radio" name="discipline" className="peer sr-only" />
                        <span className="px-4 py-2 border-2 border-black peer-checked:bg-pomodoro-blue peer-checked:text-white peer-checked:border-pomodoro-blue hover:bg-black/10 transition-all font-mono text-sm uppercase font-bold">
                            {type}
                        </span>
                    </label>
                ))}
            </div>
        </div>

        <div className="border-4 border-black p-4 focus-within:border-pomodoro-blue transition-colors">
            <textarea 
                required 
                rows={4} 
                className="w-full bg-transparent resize-none font-serif text-lg text-black placeholder:italic placeholder:text-black/30 focus:outline-none" 
                placeholder="Describe your proposal. How does it break the norm?..."
            ></textarea>
        </div>

        <button type="submit" className="w-full bg-black text-white font-sans font-black text-2xl py-4 hover:bg-pomodoro-blue transition-colors flex items-center justify-center gap-2 group border-4 border-transparent hover:border-black">
            SUBMIT APPLICATION <ArrowRight className="group-hover:translate-x-2 transition-transform"/>
        </button>
      </form>
    </div>
  );
};