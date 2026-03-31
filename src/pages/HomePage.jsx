import React from 'react';
import { MapPin, Calendar, Users, Train, Search, ShieldCheck, Globe } from 'lucide-react';
import TrainDestinationsPage from './TrainDesPage';
import TestimonialsPage from './TestimonialPage';
import FAQPage from './FaqPage';
import { Link } from 'react-router-dom';
import AboutUsPage from './AboutPage';

export default function HeroSinglePage() {
    return (
        <>
        <div className="relative w-full min-h-screen overflow-hidden font-sans bg-slate-950">
            
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="absolute inset-0 bg-cover bg-center scale-105"
                    style={{ backgroundImage: `url('https://i.postimg.cc/CMcs1YXT/Gemini-Generated-Image-z4firmz4firmz4fi.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex flex-col justify-center">
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* LEFT */}
                    <div className="space-y-8">
                        <div className="space-y-5">
                            
                            <span className="inline-flex items-center mt-10 gap-2 px-4 py-1.5 bg-yellow-500/20 backdrop-blur-md border border-yellow-400/30 rounded-full text-xs font-bold tracking-widest text-yellow-400 uppercase">
                                <ShieldCheck size={14} /> Official Booking Partner
                            </span>

                            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
                                Rail Travel <br />
                                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                    Redefined.
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                                Book train tickets easily and securely. Compare routes, prices, and schedules — all in one place.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-10 border-t border-white/10 pt-6">
                            <div>
                                <h4 className="text-yellow-400 font-bold text-xl">500+</h4>
                                <p className="text-slate-400 text-sm">Destinations</p>
                            </div>
                            <div>
                                <h4 className="text-yellow-400 font-bold text-xl">24/7</h4>
                                <p className="text-slate-400 text-sm">Support</p>
                            </div>
                            <div>
                                <h4 className="text-yellow-400 font-bold text-xl">100%</h4>
                                <p className="text-slate-400 text-sm">Secure Pay</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.6)] space-y-6">
                        
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Train className="text-yellow-400" /> Plan Your Trip
                            </h3>

                            <div className="flex gap-2 bg-black/30 p-1 rounded-lg">
                                <button className="text-[10px] px-3 py-1 bg-yellow-500 text-black rounded-md font-bold uppercase">
                                    One Way
                                </button>
                            </div>
                        </div>

                        {/* Inputs */}
                        <div className="space-y-4">

                            {/* FROM */}
                            <div>
                                <label className="text-[10px] uppercase font-bold text-slate-400 ml-2 mb-1 block">From</label>
                                <div className="flex items-center bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 focus-within:border-yellow-400">
                                    <MapPin className="text-yellow-400 mr-3" size={18} />
                                    <input type="text" placeholder="Origin City" className="bg-transparent outline-none text-white w-full placeholder:text-slate-500"/>
                                </div>
                            </div>

                            {/* TO */}
                            <div>
                                <label className="text-[10px] uppercase font-bold text-slate-400 ml-2 mb-1 block">To</label>
                                <div className="flex items-center bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 focus-within:border-yellow-400">
                                    <Globe className="text-yellow-400 mr-3" size={18} />
                                    <input type="text" placeholder="Destination City" className="bg-transparent outline-none text-white w-full placeholder:text-slate-500"/>
                                </div>
                            </div>

                            {/* DATE + TRAVELERS */}
                            <div className="grid grid-cols-2 gap-4">
                                
                                <div>
                                    <label className="text-[10px] uppercase font-bold text-slate-400 ml-2 mb-1 block">Date</label>
                                    <div className="flex items-center bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 focus-within:border-yellow-400">
                                        <Calendar className="text-yellow-400 mr-3" size={18} />
                                        <input type="date" className="bg-transparent outline-none text-white w-full text-sm"/>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[10px] uppercase font-bold text-slate-400 ml-2 mb-1 block">Travelers</label>
                                    <div className="flex items-center bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 focus-within:border-yellow-400">
                                        <Users className="text-yellow-400 mr-3" size={18} />
                                        <select className="bg-transparent text-white w-full outline-none text-sm">
                                            <option className="bg-slate-900">1 Adult</option>
                                            <option className="bg-slate-900">2 Adults</option>
                                            <option className="bg-slate-900">Family</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* BUTTON */}
                            <button className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-400 hover:scale-[1.02] text-black font-black text-lg rounded-xl transition-all shadow-[0_10px_40px_rgba(250,204,21,0.5)] flex items-center justify-center gap-3 active:scale-[0.98]">
                               <Link to="tel:866 307 5957 "> Book Now</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AboutUsPage/>
        <TrainDestinationsPage/>
        <TestimonialsPage/>
        <FAQPage/>
        </>
    );
}