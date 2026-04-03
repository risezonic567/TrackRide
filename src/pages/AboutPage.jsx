import React from 'react';
import { motion } from 'framer-motion';
import { Train, Users, Globe, Award, ShieldCheck, Heart } from 'lucide-react';

export default function AboutUsPage() {
    const stats = [
        { label: "Happy Travelers", value: "2M+", icon: <Users size={20} /> },
        { label: "Rail Partners", value: "45+", icon: <Train size={20} /> },
        { label: "Countries", value: "12", icon: <Globe size={20} /> },
        { label: "Support", value: "24/7", icon: <ShieldCheck size={20} /> },
    ];

    return (
        <section className="bg-white font-sans mt-10">
            <div className="bg-black/60 py-24 px-6 text-center border-b-4 border-yellow-500">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-white mb-6"
                >
                    We Move The <span className="text-yellow-500">Nation</span>
                </motion.h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Making rail travel accessible, affordable, and comfortable for everyone.
                    From local commutes to cross-country adventures.
                </p>
            </div>

            <div className="max-w-7xl mx-auto py-20 px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-slate-950 flex items-center gap-3">
                            <span className="w-12 h-1 bg-yellow-500 inline-block"></span>
                            Our Mission
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            At Airlines Ticket Booking (Rail Division), our goal is not just to sell tickets, but to make your journey memorable. We noticed that train booking was often complex and slow, so we created a platform that is fast, secure, and transparent.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We use the right blend of technology and human support to ensure you get assistance at every step of your journey.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="flex items-start gap-3">
                                <div className="text-yellow-600 p-1 bg-yellow-50 rounded-lg">
                                    <Heart size={20} fill="currentColor" />
                                </div>
                                <p className="text-sm font-bold text-slate-900 leading-tight">Customer First Approach</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="text-yellow-600 p-1 bg-yellow-50 rounded-lg">
                                    <Award size={20} fill="currentColor" />
                                </div>
                                <p className="text-sm font-bold text-slate-900 leading-tight">Industry Leading Tech</p>
                            </div>
                            <div className="mx-auto">
                                <button
                                    onClick={() => window.gtag_report_conversion('tel:+18663075957')}
                                    className="text-2xl py-2 cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-400 hover:scale-[1.02] text-black font-semibold rounded-lg transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.98] w-40"
                                >
                                    Call Us
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-yellow-500 rounded-[2.5rem] -rotate-3 z-0"></div>
                        <img
                            src="https://i.postimg.cc/fTgGD7mn/Home_Page_Banner_2.jpg"
                            alt="Train Journey"
                            className="relative z-10 rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="bg-slate-950 py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-yellow-500 mb-2 flex justify-center group-hover:scale-125 transition-transform">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-black text-white mb-1">{stat.value}</h3>
                            <p className="text-gray-500 text-sm font-bold uppercase tracking-tighter">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-20 text-center bg-gray-50">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Have Questions?</h3>
                <p className="text-gray-500 mb-8 max-w-lg mx-auto italic">
                    "Our team is ready to answer all your questions 24 hours a day."
                </p>
                <button
                    onClick={() => window.gtag_report_conversion('tel:+18663075957')}
                    className="px-10 py-4 cursor-pointer bg-yellow-500 text-black font-black rounded-xl hover:bg-yellow-400 transition-all shadow-lg active:scale-95"
                >
                    Connect With Our Experts
                </button>

            </div>
        </section>
    );
}