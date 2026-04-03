import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
            <div className="max-w-4xl mx-auto bg-white shadow-md shadow-yellow-200 rounded-2xl p-8">

                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Privacy Policy
                </h1>

                <p className="text-gray-600 mb-4">
                    Your privacy is important to us. This Privacy Policy explains how we
                    collect, use, and protect your information when you use our platform.
                </p>

                {/* Section 1 */}
                <p className="text-gray-600 mb-4">
                    At Airlines Ticket Booking (Rail Division), we are committed to protecting your privacy while providing a smooth and reliable train booking experience across the United States. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
                </p>

                {/* Section 1 */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                    1. Information We Collect
                </h2>
                <p className="text-gray-600">
                    When you book train tickets across the USA, we may collect personal details such as your full name, email address, phone number, travel preferences, and payment information. This helps us ensure accurate bookings and a seamless travel experience.
                </p>

                {/* Section 2 */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                    2. How We Use Your Information
                </h2>
                <p className="text-gray-600">
                    Your information is used to confirm train reservations, send booking updates, provide customer support, and improve our services. We may also use your contact details to notify you about schedule changes or important travel updates.
                </p>

                {/* Section 3 */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                    3. Data Security
                </h2>
                <p className="text-gray-600">
                    We implement industry-standard security measures to protect your personal data. All transactions are encrypted, ensuring that your booking and payment information remains safe and secure.
                </p>

                {/* Section 4 */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                    4. Sharing of Information
                </h2>
                <p className="text-gray-600">
                    We do not sell your personal data. Your information may be shared only with trusted railway partners and service providers within the USA to complete your booking and provide essential travel services.
                </p>

                {/* Section 5 */}
                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                    5. Your Rights
                </h2>
                <p className="text-gray-600">
                    You have the right to access, update, or request deletion of your personal data. You can contact our support team at any time for assistance regarding your information.
                </p>

                {/* Contact Us Section */}
                <div className="mt-10 bg-gray-100 rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 mb-2">
                        If you have any questions about this Privacy Policy, feel free to contact us:
                    </p>

                    {/* <p className="text-gray-700">
                        📧 Email:{" "}
                        <a
                            href="mailto:support@yourcompany.com"
                            className="text-blue-600 hover:underline"
                        >
                            support@yourcompany.com
                        </a>
                    </p> */}

                    <p className="text-gray-700">
                        📞 Phone:{" "}
                        <button
                            onClick={() => window.gtag_report_conversion('tel:+18663075957')}
                            className="text-yellow-600 cursor-pointer hover:underline"
                        >
                            +1 866 307 5957

                        </button>
                    </p>

                </div>

                {/* Footer */}
                <div className="mt-8 border-t pt-4">
                    <p className="text-gray-500 text-sm">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

            </div>
        </div>
    );
}