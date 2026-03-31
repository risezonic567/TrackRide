import React from "react";
import { Percent, Search, Clock, ShieldCheck, Train, MapPin, Ticket } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TrainDestinationsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <Ticket className="w-6 h-6 text-yellow-600" />,
      title: "Quick & Easy Rail Booking",
      desc: "Book your train tickets across the country in just a few clicks—fast, simple, and 100% secure.",
    },
    {
      icon: <Percent className="w-6 h-6 text-yellow-600" />,
      title: "Best Rail Fare Deals",
      desc: "Get exclusive discounts on major rail routes with no hidden charges or booking fees.",
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-600" />,
      title: "24/7 Travel Support",
      desc: "Our dedicated rail experts are available 24/7 to help you with schedules, routes, or cancellations.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-yellow-600" />,
      title: "Trusted Rail Partners",
      desc: "Travel with the most reliable train operators and enjoy comfortable, scenic journeys every time.",
    },
  ];

  const destinations = [
    {
      name: "New York City",
      img: "/images/New York City,.jpg.jpeg",
      info: "Penn Station Hub"
    },
    {
      name: "Chicago",
      img: "/images/Chicago,.jpg.jpeg",
      info: "Union Station Routes"
    },
    {
      name: "Los Angeles",
      img: "/images/Los Angeles,.jpg.jpeg",
      info: "Union Station West Coast"
    },
    {
      name: "San Francisco",
      img: "/images/San Francisco,.jpg.jpeg",
      info: "Bay Area Rail"
    },
    {
      name: "Boston",
      img: "/images/Boston.jpg.jpeg",
      info: "Northeast Rail Hub"
    },
    {
      name: "Washington D.C.",
      img: "/images/Washington D.C.jpg.jpeg",
      info: "Northeast Corridor"
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* TOP HEADING */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center px-4"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
          Book Train Tickets to Your Favorite Cities at the Best Prices!
        </h2>
        <p className="text-gray-600 mb-14 leading-relaxed max-w-3xl mx-auto text-lg">
          Discover affordable train journeys across the USA, Europe, and beyond.
          Enjoy scenic views, spacious seating, and flexible schedules without
          breaking your budget.
        </p>
      </motion.div>

      {/* FEATURE CARDS */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-6 border border-gray-100 transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4 p-3 bg-red-50 rounded-full w-fit mx-auto transition-colors group-hover:bg-red-100">
              {f.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* DESTINATIONS SECTION HEADING */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mt-20 mb-10 px-4"
      >
        <div className="flex items-center justify-center gap-2 mb-2 text-yellow-600 font-bold uppercase tracking-wider">
          <Train size={20} />
          <span>Top Rail Routes</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Explore Iconic Destinations by Rail!
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Skip the airport lines and enjoy the journey. Travel comfortably to
          the heart of major cities including New York, Chicago, Paris, and more.
        </p>
      </motion.div>

      {/* DESTINATION GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {destinations.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full border object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all"></div>

            <div className="absolute bottom-0 left-0 p-6 w-full">
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">{item.info}</p>
              <h3 className="text-white font-extrabold text-2xl uppercase tracking-wide flex items-center gap-2">
                <MapPin size={20} className="text-yellow-600" /> {item.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-red-600/30 transition-all hover:scale-105 block mx-auto mt-12 active:scale-95">
        <Link to="tel:+866 307 5957" className="flex items-center gap-2">
          Enquire About Rail Passes
        </Link>
      </button>
    </section>
  );
}