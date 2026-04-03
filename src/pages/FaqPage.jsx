import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare, Phone, Train } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQPage() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How do I book a train ticket on your platform?",
            answer: "Booking is simple! Just enter your origin, destination, and travel date in the search bar on our homepage. Browse the available trains, select your preferred class, and complete the secure checkout process."
        },
        {
            question: "Can I cancel or modify my booking after it's confirmed?",
            answer: "Yes, most bookings can be modified or cancelled through our 'Manage Booking' section. Please note that cancellation fees may apply depending on the rail operator's policy and how close it is to the departure time."
        },
        {
            question: "Do I need to print my train ticket?",
            answer: "In most cases, no! We provide digital e-tickets with QR codes that you can show on your smartphone. However, some specific regional routes might still require a physical printout."
        },
        {
            question: "Is there a discount for senior citizens or students?",
            answer: "Absolutely. We offer various concessionary fares. When searching for a trip, make sure to select the correct traveler type (Senior, Student, or Child) to see the discounted rates automatically."
        },
        {
            question: "What should I do if my train is delayed or cancelled?",
            answer: "If your train is delayed or cancelled, you are often eligible for a refund or a seat on the next available train. You can check the real-time status in our app or contact our 24/7 support team for immediate assistance."
        }
    ];

    return (
        <section className="py-10 bg-black/60  min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-bold uppercase tracking-widest mb-6"
                    >
                        <HelpCircle size={16} /> Help Center
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Frequently Asked <span className="text-yellow-500">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Everything you need to know about your journey, tickets, and support.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/50 hover:bg-slate-900 transition-colors"
                        >
                            <button 
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-6 py-6 flex items-center justify-between text-left transition-all"
                            >
                                <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-yellow-500' : 'text-gray-200'}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-1 rounded-full transition-all ${activeIndex === index ? 'bg-yellow-500 text-black rotate-180' : 'bg-slate-800 text-gray-400'}`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-slate-800 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Support Contact Cards */}
                <div className="mt-10  gap-6">
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex items-start gap-5 group hover:border-yellow-500/50 transition-all">
                        <div className="p-4 bg-slate-800 group-hover:bg-yellow-500 transition-colors rounded-2xl text-yellow-500 group-hover:text-black">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white mb-2">Call Support</h4>
                            <p className="text-sm text-gray-400 mb-4">Available 24/7 for urgent booking issues.</p>
                            <button onClick={() => window.gtag_report_conversion('tel:+18663075957')} className=" cursor-pointer text-yellow-500 font-bold text-sm hover:underline">+1 866 307 5957 →</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Line */}
                <div className="mt-5 text-center">
                    <div className="flex justify-center items-center gap-4 text-gray-600 text-sm">
                        <span className="flex items-center text-white gap-1"><Train size={14}/> Reliable Schedules</span>
                        <span className="h-4 w-px bg-slate-800"></span>
                        <span className="flex items-center text-white gap-1">Verified Partners</span>
                    </div>
                </div>
            </div>
        </section>
    );
}