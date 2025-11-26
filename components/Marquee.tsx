import React from 'react';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', className = '' }) => {
  return (
    <div className={`relative flex overflow-x-hidden ${className}`}>
      <div className={`py-4 animate-${direction === 'left' ? 'marquee' : 'marquee-reverse'} whitespace-nowrap flex gap-8`}>
        {/* Repeat text multiple times to ensure seamless loop */}
        <span className="text-4xl md:text-8xl font-black uppercase tracking-tighter mx-4">{text}</span>
        <span className="text-4xl md:text-8xl font-black uppercase tracking-tighter mx-4">{text}</span>
        <span className="text-4xl md:text-8xl font-black uppercase tracking-tighter mx-4">{text}</span>
        <span className="text-4xl md:text-8xl font-black uppercase tracking-tighter mx-4">{text}</span>
      </div>
      <div className={`absolute top-0 py-4 animate-${direction === 'left' ? 'marquee' : 'marquee-reverse'} whitespace-nowrap flex gap-8`} style={{ left: direction === 'left' ? '100%' : '-100%' }}>
         <span className="text-4xl md:text-8xl font-black uppercase tracking-tighter mx-4">{text}</span>
         <span className="text-4xl md:text-8xl font-black uppercase tracking-tighter mx-4">{text}</span>
         <span className="text-4xl md:text-8xl font-black uppercase tracking-tighter mx-4">{text}</span>
         <span className="text-4xl md:text-8xl font-black uppercase tracking-tighter mx-4">{text}</span>
      </div>
    </div>
  );
};