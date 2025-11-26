
import React from 'react';
import { TomatoIcon, TomatoSlice } from './components/TomatoIcon';
import Oracle from './components/Oracle';
import { Marquee } from './components/Marquee';
import { ArtistForm } from './components/ArtistForm';
import { ManifestoItem } from './types';
import { MapPin, Calendar, Star, Disc, MoveRight } from 'lucide-react';

const MANIFESTO: ManifestoItem[] = [
  {
    title: "THE VOICE",
    description: "Bold. Outspoken. Unafraid to push back. The everyday fruit turned protest icon.",
    color: "bg-white",
    textColor: "text-pomodoro-blue"
  },
  {
    title: "JOYFUL REBELLION",
    description: "A wild splash of freedom. Breaking rules together and loving every second of it.",
    color: "bg-pomodoro-red",
    textColor: "text-white"
  },
  {
    title: "CULTURAL HEARTBEAT",
    description: "Warm, proud, and at the center of the table. Simple things done with love.",
    color: "bg-black",
    textColor: "text-white"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-pomodoro-blue font-sans overflow-x-hidden selection:bg-pomodoro-red selection:text-white">
      
      {/* HEADER */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 py-6 mix-blend-exclusion text-white pointer-events-none">
         <div className="font-sans font-black text-3xl tracking-tighter uppercase pointer-events-auto">Noordspace</div>
         <div className="font-mono text-sm uppercase tracking-widest border-2 border-white px-3 py-1 rounded-full animate-pulse">
            Spring/Summer '25
         </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col pt-24 pb-8 overflow-hidden">
        
        {/* Background Checkers */}
        <div className="absolute inset-0 bg-checkerboard pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between flex-grow gap-12">
          
          <div className="flex-1 flex flex-col justify-center items-start">
             <div className="animate-float mb-6 relative">
                <TomatoIcon className="w-32 h-32 md:w-56 md:h-56 text-pomodoro-red" stemColor="#000" />
                <div className="absolute -top-4 -right-4 bg-white text-pomodoro-blue font-black font-sans text-xl px-4 py-2 transform rotate-12 border-2 border-black shadow-[4px_4px_0px_#000]">
                    FRESH!
                </div>
             </div>
             
             <h1 className="poster-text text-[18vw] md:text-[13rem] text-white uppercase leading-[0.85] drop-shadow-[8px_8px_0px_#000]">
                SHARE<br/>THAT<br/><span className="text-pomodoro-red">SOUND</span>
             </h1>
             
             <div className="mt-8 bg-black text-white px-6 py-3 font-mono font-bold text-lg md:text-xl uppercase tracking-widest border-2 border-white shadow-[4px_4px_0px_#FFF]">
                 Soundstorming & Community
             </div>
          </div>

          <div className="flex-1 w-full md:max-w-md relative mt-12 md:mt-0">
             <div className="absolute top-0 right-0 w-full h-full bg-pomodoro-red border-2 border-black transform translate-x-3 translate-y-3"></div>
             <div className="relative bg-white border-2 border-black p-8 text-pomodoro-blue flex flex-col gap-6">
                <div className="flex justify-between border-b-2 border-black pb-2">
                    <span className="font-mono font-bold">DATE</span>
                    <span className="font-mono font-bold">25.05.25</span>
                </div>
                <div className="flex justify-between border-b-2 border-black pb-2">
                    <span className="font-mono font-bold">TIME</span>
                    <span className="font-mono font-bold">18:00 - LATE</span>
                </div>
                <p className="font-serif text-3xl italic leading-tight pt-2">
                  "Indesiderato. Immacolato. Intrepido."
                </p>
                <div className="flex gap-2 flex-wrap">
                    <span className="bg-pomodoro-blue text-white px-2 py-1 font-mono text-xs uppercase">Experimental</span>
                    <span className="bg-pomodoro-blue text-white px-2 py-1 font-mono text-xs uppercase">Live</span>
                    <span className="bg-pomodoro-blue text-white px-2 py-1 font-mono text-xs uppercase">Raw</span>
                </div>
             </div>
          </div>
        </div>

        {/* Footer of Hero */}
        <div className="relative z-10 w-full mt-12 transform -rotate-1">
            <Marquee text="COLLECTIVE RHYTHM // SPONTANEOUS JAM // ART & FILM // " className="bg-pomodoro-red text-white py-3 border-y-4 border-black" />
        </div>
      </section>


      {/* MANIFESTO GRID */}
      <section className="bg-pomodoro-blue py-20 relative">
         <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b-4 border-white pb-6">
                <h2 className="text-white text-6xl md:text-9xl font-black uppercase leading-[0.85]">
                The<br/>Mission
                </h2>
                <p className="text-white font-mono max-w-sm text-right mt-4 md:mt-0">
                    Not a space about sameness, but about owning your difference.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,0.5)]">
               {MANIFESTO.map((item, idx) => (
                  <div key={idx} className={`${item.color} ${item.textColor} p-8 border-b-4 md:border-b-0 md:border-r-4 border-black last:border-r-0 min-h-[350px] flex flex-col justify-between group hover:bg-opacity-90 transition-all`}>
                     <div className="flex justify-between items-start">
                        <span className="font-mono text-xs font-bold border-2 border-current px-2 py-1 rounded-full uppercase">0{idx + 1}</span>
                        <TomatoSlice className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity animate-spin-slow" color="currentColor" />
                     </div>
                     <div>
                        <h3 className="text-5xl font-black uppercase leading-[0.9] mb-4 tracking-tighter">{item.title}</h3>
                        <p className="font-serif text-xl leading-tight opacity-90">{item.description}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>


      {/* EVENT INFO - "The Menu" */}
      <section className="bg-white text-black py-24 px-4 relative overflow-hidden">
         <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-start">
               
               {/* Poster Text Column */}
               <div className="flex-1 space-y-8">
                  <h2 className="text-8xl md:text-[10rem] font-black uppercase text-pomodoro-blue leading-[0.8] tracking-tighter">
                     OPEN<br/>PARTY
                  </h2>
                  <div className="bg-pomodoro-red text-white p-6 inline-block transform rotate-2 border-4 border-black shadow-[8px_8px_0px_#000]">
                      <p className="font-mono text-xl md:text-2xl font-bold uppercase">
                          Noordspace is raw, spacious, eccentric.
                      </p>
                  </div>
                  <div className="flex flex-col gap-6 mt-8">
                     <div className="flex items-center gap-4">
                        <Disc className="w-12 h-12 text-pomodoro-blue animate-spin-slow" />
                        <span className="text-3xl font-black uppercase tracking-tight">Soundstorming</span>
                     </div>
                     <div className="flex items-center gap-4">
                        <Star className="w-12 h-12 text-pomodoro-blue animate-pulse" />
                        <span className="text-3xl font-black uppercase tracking-tight">Experimentation</span>
                     </div>
                  </div>
               </div>

               {/* "Menu of the Day" Style Schedule */}
               <div className="flex-1 w-full">
                  <div className="bg-[#F2F0E4] p-8 md:p-12 shadow-[20px_20px_0px_#0033A0] relative border border-gray-300">
                     {/* Paper texture overlay effect */}
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 pointer-events-none"></div>
                     
                     <div className="text-center mb-10 border-b-4 border-pomodoro-red pb-4">
                        <h3 className="font-black text-6xl uppercase text-pomodoro-red leading-none">MENU</h3>
                        <p className="font-serif italic text-xl mt-2">of the day</p>
                     </div>
                     
                     <div className="space-y-8 font-sans">
                        <div className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <span className="text-2xl font-black uppercase group-hover:text-pomodoro-red transition-colors">APERITIVO</span>
                                <span className="font-mono font-bold opacity-50">18:00</span>
                            </div>
                            <p className="font-serif text-lg leading-tight opacity-80">Tapas, warmups, and seaside simplicity.</p>
                        </div>

                        <div className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <span className="text-2xl font-black uppercase group-hover:text-pomodoro-red transition-colors">JAM SESSION</span>
                                <span className="font-mono font-bold opacity-50">21:00</span>
                            </div>
                            <p className="font-serif text-lg leading-tight opacity-80">Live instruments, spontaneous rhythm, collective energy.</p>
                        </div>

                        <div className="group">
                            <div className="flex justify-between items-baseline mb-1">
                                <span className="text-2xl font-black uppercase group-hover:text-pomodoro-red transition-colors">DANCE</span>
                                <span className="font-mono font-bold opacity-50">23:00</span>
                            </div>
                            <p className="font-serif text-lg leading-tight opacity-80">DJs, sweat, movement, and freedom.</p>
                        </div>
                     </div>

                     <div className="mt-12 text-center">
                         <div className="inline-block border-2 border-black rounded-full px-4 py-2 font-mono text-xs uppercase hover:bg-black hover:text-white cursor-pointer transition-colors">
                            * Subject to chaos
                         </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* OPEN CALL */}
      <section className="py-24 bg-pomodoro-blue border-t-4 border-white relative">
         <div className="container mx-auto px-4 max-w-4xl">
             <div className="flex flex-col items-center mb-12 text-center">
                <div className="bg-white text-pomodoro-blue px-4 py-1 font-mono font-bold uppercase mb-4 transform -rotate-2">We want you</div>
                <h2 className="text-white font-black text-6xl md:text-8xl uppercase mb-4">Open Call</h2>
                <p className="text-white/80 font-mono text-xl max-w-xl">
                    Creating space for emergent artists. Visual, Sonic, Culinary, or completely undefined.
                </p>
             </div>
             <ArtistForm />
         </div>
      </section>

      {/* ORACLE */}
      <section className="py-24 bg-black text-white border-t-4 border-white">
         <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-sans font-black text-5xl uppercase mb-8 text-white">
               The <span className="text-pomodoro-red italic font-serif">Oracle</span>
            </h2>
            <Oracle />
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-pomodoro-blue text-white py-12 border-t-4 border-black">
         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div className="relative">
               <h1 className="font-sans font-black text-6xl uppercase leading-none z-10 relative">
                  Noord<br/>Space
               </h1>
               <div className="absolute -top-4 -left-4 w-16 h-16 bg-pomodoro-red rounded-full z-0"></div>
            </div>
            <div className="font-mono text-sm space-y-2">
               <p className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin size={16} /> Gedempt Hamerkanaal 83, Amsterdam
               </p>
               <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Calendar size={16} /> Spring / Summer 2025
               </p>
               <div className="flex gap-4 mt-4 justify-center md:justify-start">
                    <a href="#" className="hover:text-pomodoro-red underline">Instagram</a>
                    <a href="#" className="hover:text-pomodoro-red underline">Email</a>
               </div>
               <p className="opacity-50 pt-4 text-xs">© POMODORI COLLECTIVE</p>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default App;
