import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, Train } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "James Wilson",
      location: "New York to DC Passenger",
      text: "The booking process was incyellowibly smooth. I saved 30% compayellow to other sites and the digital ticket was sent instantly. Highly recommended!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=1"
    },
    {
      name: "Sarah Miller",
      location: "Business Traveler",
      text: "Finally a reliable way to compare Amtrak routes. The interface is clean and their support team helped me rebook my train in minutes when I missed my connection.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=2"
    },
    {
      name: "David Chen",
      location: "Cross-Country Explorer",
      text: "Found an amazing deal for the California Zephyr. The scenic route was breathtaking and the booking through this platform was hassle-free.",
      rating: 4,
      image: "https://i.pravatar.cc/150?u=3"
    },
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-4 text-yellow-600"
          >
            <Train size={40} className="p-2 bg-yellow-100 rounded-xl" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
          >
            Trusted by Thousands of <span className="text-yellow-600">Rail Travelers</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Don't just take our word for it. Here’s what travelers from across the 
            country have to say about their experience with our booking platform.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all relative group"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-8 text-gray-100 group-hover:text-yellow-50 transition-colors">
                <Quote size={60} fill="currentColor" />
              </div>

              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed italic mb-8 italic">
                  "{t.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-yellow-100"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full text-blue-500">
                      <CheckCircle2 size={18} fill="currentColor" className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 leading-none mb-1">{t.name}</h4>
                    <p className="text-xs text-yellow-600 font-semibold tracking-wide uppercase">{t.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center bg-yellow-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready for your next journey?</h3>
            <p className="text-yellow-100 mb-8 max-w-xl mx-auto">Join our community of happy travelers and experience the best rail booking service in the USA.</p>
         
            <button onClick={() => window.gtag_report_conversion('tel:+18663075957')} className="bg-white cursor-pointer text-yellow-600 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Book Your Train Now
            </button>
         
          </div>
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-20 -translate-y-20">
             <Train size={300} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}