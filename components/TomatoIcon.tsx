import React from 'react';

interface TomatoProps {
  className?: string;
  color?: string;
  stemColor?: string;
}

export const TomatoIcon: React.FC<TomatoProps> = ({ 
  className = "w-12 h-12", 
  color = "#FF2400", // Default Red
  stemColor = "#2A4A00" 
}) => {
  return (
    <div className={`${className} group cursor-pointer transition-transform hover:scale-105 active:scale-95 animate-wiggle hover:animate-jelly`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Flat Stamp-like Tomato */}
        <circle cx="50" cy="55" r="40" fill={color} stroke="black" strokeWidth="2" />
        <circle cx="35" cy="45" r="10" fill="white" fillOpacity="0.2" />
        
        {/* Spiky Stem */}
        <path 
          d="M50 15 L55 35 L75 30 L60 45 L70 60 L50 50 L30 60 L40 45 L25 30 L45 35 Z" 
          fill={stemColor} 
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export const TomatoSlice: React.FC<TomatoProps> = ({ 
    className = "w-12 h-12", 
    color = "currentColor"
  }) => {
    return (
      <div className={`${className} group cursor-pointer hover:animate-spin-slow`}>
        <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="50" cy="50" r="48" stroke={color} strokeWidth="6" fill="transparent" />
            
            {/* Inner Segments */}
            <path d="M50 50 L50 6 A44 44 0 0 1 92 38 Z" fill={color} opacity="0.8" />
            <path d="M50 50 L92 38 A44 44 0 0 1 78 85 Z" fill={color} opacity="0.8" />
            <path d="M50 50 L78 85 A44 44 0 0 1 22 85 Z" fill={color} opacity="0.8" />
            <path d="M50 50 L22 85 A44 44 0 0 1 8 38 Z" fill={color} opacity="0.8" />
            <path d="M50 50 L8 38 A44 44 0 0 1 50 6 Z" fill={color} opacity="0.8" />
            
            {/* Seeds */}
            <circle cx="65" cy="35" r="4" fill="black" opacity="0.5"/>
            <circle cx="70" cy="65" r="4" fill="black" opacity="0.5"/>
            <circle cx="50" cy="80" r="4" fill="black" opacity="0.5"/>
            <circle cx="30" cy="65" r="4" fill="black" opacity="0.5"/>
            <circle cx="35" cy="35" r="4" fill="black" opacity="0.5"/>
        </svg>
      </div>
    );
  };