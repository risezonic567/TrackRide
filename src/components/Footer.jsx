import { Mail, Phone, Train } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
    return (
        <footer className="bg-white/50 mt-10 text-black pt-16 pb-8 border-t-4 border-yellow-500">
            <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Logo & About */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <img
                            src="/images/Track Ride Logo Png.png"
                            alt="Logo"
                            className="h-14 mb-2"
                        />
                    </div>
                    <p className="text-sm leading-relaxed">
                        Redefining rail travel with seamless booking, premium comfort, and
                        unbeatable fares across the nation. Your journey, our priority.
                    </p>
                </div>

                <div>
                    <h3 className="text-yellow-500 text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        {[
                            { name: 'Home', path: '/#home' },
                            { name: 'About Us', path: '/#about' },
                            { name: 'Train Routes', path: '/train-routes' },
                            { name: 'Privacy Policy', path: '/privacy-policy' },
                            // { name: 'Terms of Service', path: '/' }
                        ].map((link) => (            // this
                            <li key={link.name}>

                                <HashLink
                                    smooth
                                    to={link.path}
                                    className="hover:text-yellow-600 transition-all flex items-center gap-2 group"
                                >
                                    <span className="h-px w-0 bg-yellow-500 group-hover:w-3 transition-all duration-300"></span>
                                    {link.name}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-yellow-500 text-lg font-bold mb-6 uppercase tracking-wider">Support</h3>
                    <ul className="space-y-4 text-sm">
                        <li>
                            <HashLink to="tel:+1 866 307 5957" className="flex items-start gap-3 group">
                                <div className="p-2 bg-black rounded-lg group-hover:bg-yellow-500 transition-colors">
                                    <Phone size={18} className="text-yellow-500 group-hover:text-black" />
                                </div>
                                <div>
                                    <p className="text-xs text-black uppercase">Call Us Anytime</p>
                                    <span className="text-black font-semibold">+1 866 307 5957 </span>
                                </div>
                            </HashLink>
                        </li>
                        <li className="flex items-start gap-3 group">
                            {/* <div className="p-2 bg-black rounded-lg group-hover:bg-yellow-500 transition-colors">
                                <Mail size={18} className="text-yellow-500 group-hover:text-black" />
                            </div> */}
                            {/* <div>
                                <p className="text-xs text-black uppercase">Email Support</p>
                                <span className="text-gray-200 font-semibold">support@railtickets.com</span>
                            </div> */}
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}

                <div>
                    <h3 className="text-yellow-500 text-lg font-bold mb-6 uppercase tracking-wider">
                        Call
                    </h3>

                    <p className="text-xs mb-2">Enter Your Phone Number</p>

                    {/* Input full width */}
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="bg-white border text-black border-slate-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-yellow-500 text-sm"
                    />

                    {/* Button niche */}
                    <button className="bg-yellow-500 text-black px-4 py-2 mt-3 w-full rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                        Call to Book
                    </button>

                    {/* Bottom text */}
                    <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-black uppercase tracking-widest">
                        <Train size={14} className="text-yellow-500" /> Secure Rail Booking
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-black mt-16 pt-8 container mx-auto px-6 lg:px-16">
                <div className="flex flex-col  justify-between items-center gap-4">
                    <p className="text-sm  text-black">
                        © {new Date().getFullYear()} <span className="text-yellow-600 font-bold"></span>. All rights reserved.
                    </p>
                    
                </div>
            </div>
        </footer>
    );
}