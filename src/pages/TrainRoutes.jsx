import React, { useState } from 'react';
import TestimonialsPage from './TestimonialPage';

const trainRoutes = [
    { id: 1, name: "Acela", from: "Washington, DC", to: "New York, NY", depart: "07:00 AM", arrive: "10:00 AM", duration: "3h", price: 150, category: "High-Speed" },
    { id: 2, name: "Northeast Regional", from: "New York, NY", to: "Philadelphia, PA", depart: "09:30 AM", arrive: "11:00 AM", duration: "1h 30m", price: 60, category: "Express" },
    { id: 3, name: "Acela", from: "New York, NY", to: "Boston, MA", depart: "06:30 AM", arrive: "10:15 AM", duration: "3h 45m", price: 130, category: "High-Speed" },
    { id: 4, name: "Lake Shore Limited", from: "Chicago, IL", to: "New York, NY", depart: "09:30 PM", arrive: "06:30 PM", duration: "21h", price: 180, category: "Long-Distance" },
    { id: 5, name: "Capitol Limited", from: "Chicago, IL", to: "Washington, DC", depart: "06:40 PM", arrive: "01:05 PM", duration: "18h 25m", price: 140, category: "Long-Distance" },
    { id: 6, name: "Coast Starlight", from: "Los Angeles, CA", to: "San Francisco, CA", depart: "10:10 AM", arrive: "10:30 PM", duration: "12h 20m", price: 120, category: "Scenic" },
    { id: 7, name: "Amtrak Cascades", from: "Seattle, WA", to: "Portland, OR", depart: "08:00 AM", arrive: "11:30 AM", duration: "3h 30m", price: 70, category: "Regional" },
    { id: 8, name: "Brightline", from: "Miami, FL", to: "Orlando, FL", depart: "09:45 AM", arrive: "12:45 PM", duration: "3h", price: 90, category: "High-Speed" },
    { id: 9, name: "Capitol Corridor", from: "San Francisco, CA", to: "Sacramento, CA", depart: "07:15 AM", arrive: "09:15 AM", duration: "2h", price: 45, category: "Regional" },
    { id: 10, name: "Empire Service", from: "New York, NY", to: "Albany, NY", depart: "08:20 AM", arrive: "10:50 AM", duration: "2h 30m", price: 50, category: "Regional" }
];

export default function TrainRoutes() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Long-Distance', 'High-Speed', 'Regional'];

    const filteredRoutes = filter === 'All'
        ? trainRoutes
        : trainRoutes.filter(r => r.category === filter);

    return (
        <>
            <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-900">
                <header className="bg-amber-400 text-slate-900 py-12 px-6 text-center border-b-2 border-slate-900 shadow-xl">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-left">
                            <h1 className="text-4xl font-black uppercase tracking-tighter italic">Track Ride</h1>
                            <p className="text-slate-800 font-medium">Premium rail journeys across the states</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-2 rounded-lg cursor-pointer text-sm font-bold transition-all border-2
                                    ${filter === cat
                                        ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                                        : 'bg-transparent text-slate-900 border-slate-800 hover:bg-slate-900 hover:text-white'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                <main className="max-w-6xl mx-auto py-10 px-4">
                    <div className="space-y-6">
                        {filteredRoutes.map((route) => (
                            <div
                                key={route.id}
                                className="bg-white rounded-2xl border-2 border-slate-100 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-center p-6 gap-6"
                            >
                                <div className="w-full md:w-32 text-center md:text-left">
                                    <div className="text-2xl font-black text-slate-900">{route.depart}</div>
                                    <div className="text-sm text-slate-500 font-bold uppercase tracking-tight">{route.from}</div>
                                </div>

                                <div className="flex-1 flex items-center gap-4 w-full px-4">
                                    <div className="h-3 w-3 rounded-full bg-amber-500 ring-4 ring-amber-100"></div>
                                    <div className="flex-1 h-[3px] bg-slate-100 relative flex justify-center">
                                        <span className="absolute -top-7 text-[12px] text-slate-500 font-black uppercase tracking-widest bg-white px-2">
                                            {route.duration}
                                        </span>
                                        <div className="absolute -bottom-10">
                                            <div className="bg-slate-900 text-amber-400 py-1 px-4 rounded-full flex items-center gap-2 border-2 border-white shadow-sm">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM18 10H6V6h12v4z" /></svg>
                                                <span className="text-[11px] font-black uppercase whitespace-nowrap">{route.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-3 w-3 rounded-full bg-slate-300"></div>
                                </div>

                                <div className="w-full md:w-32 text-center md:text-right">
                                    <div className="text-2xl font-black text-slate-900">{route.arrive}</div>
                                    <div className="text-sm text-slate-500 font-bold uppercase tracking-tight">{route.to}</div>
                                </div>

                                <div className="w-full md:w-48 flex flex-row md:flex-col items-center justify-between md:justify-center border-t md:border-t-0 md:border-l-2 border-slate-50 pt-4 md:pt-0 md:pl-8">
                                    <div className="text-3xl font-black text-slate-900 mb-2">
                                        <span className="text-lg text-amber-600 mr-1">$</span>{route.price}
                                    </div>

                                    <button onClick={() => window.gtag_report_conversion('tel:+18001234567')} className="bg-amber-400 cursor-pointer hover:bg-slate-900 hover:text-amber-400 text-slate-900 px-8 py-3 rounded-xl font-black text-sm uppercase transition-all duration-300 shadow-md transform hover:scale-105">
                                            Book Now
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            <TestimonialsPage />
        </>
    );
}