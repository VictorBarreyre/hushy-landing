import React, { useState, useEffect } from 'react';
import { ChevronLeft, Shield, Lock, Eye, UserCheck, Globe, Database, Mail, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Google Sign-In Integration",
            content: [
                {
                    subtitle: "Information We Receive from Google",
                    items: [
                        "Basic profile information (name, email address, profile picture)",
                        "Google account unique identifier",
                        "Email verification status",
                        "Language preference"
                    ]
                },
                {
                    subtitle: "How We Use Google Sign-In",
                    items: [
                        "To create and authenticate your Hushy account",
                        "To verify your email address without additional steps",
                        "To provide a secure and convenient login experience",
                        "To protect against fraudulent account creation"
                    ]
                },
                {
                    subtitle: "Important Google OAuth Information",
                    items: [
                        "We ONLY access your basic profile information",
                        "We do NOT access your Gmail messages, contacts, or calendar",
                        "We do NOT access your Google Drive files",
                        "We do NOT post anything to your Google account",
                        "You can revoke Hushy's access anytime from your Google Account settings"
                    ]
                },
                {
                    subtitle: "Data Security with Google Sign-In",
                    items: [
                        "Your Google password is never shared with or stored by Hushy",
                        "Authentication is handled entirely by Google's secure servers",
                        "We use industry-standard OAuth 2.0 protocol",
                        "Google Sign-In provides additional security through Google's own protections"
                    ]
                }
            ]
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "Information We Collect",
            content: [
                {
                    subtitle: "Information You Provide",
                    items: [
                        "Account information (username, email, profile picture)",
                        "Content you create (hushys, messages, comments)",
                        "Payment information (processed securely through our payment providers)",
                        "Communications with us (support requests, feedback)"
                    ]
                },
                {
                    subtitle: "Information We Collect Automatically",
                    items: [
                        "Device information (device type, operating system, unique device identifiers)",
                        "Usage data (features used, time spent, interactions)",
                        "Location data (with your permission)",
                        "Cookies and similar technologies"
                    ]
                }
            ]
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "How We Use Your Information",
            content: [
                {
                    subtitle: "We use your information to:",
                    items: [
                        "Provide and improve the Hushy service",
                        "Process payments and prevent fraud",
                        "Communicate with you about your account and updates",
                        "Personalize your experience and show relevant content",
                        "Ensure safety and security of our community",
                        "Comply with legal obligations"
                    ]
                }
            ]
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            title: "Information Sharing",
            content: [
                {
                    subtitle: "We may share your information with:",
                    items: [
                        "Other users (only what you choose to make public)",
                        "Service providers who help us operate Hushy",
                        "Legal authorities when required by law",
                        "Business partners with your consent"
                    ]
                },
                {
                    subtitle: "We never:",
                    items: [
                        "Sell your personal information to third parties",
                        "Share your private messages without your consent",
                        "Use your content for advertising without permission"
                    ]
                }
            ]
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Data Security",
            content: [
                {
                    subtitle: "We protect your data through:",
                    items: [
                        "Encryption of data in transit and at rest",
                        "Regular security audits and testing",
                        "Limited access to personal information",
                        "Secure payment processing through trusted providers",
                        "Two-factor authentication options"
                    ]
                }
            ]
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Your Rights",
            content: [
                {
                    subtitle: "You have the right to:",
                    items: [
                        "Access your personal information",
                        "Correct inaccurate information",
                        "Delete your account and associated data",
                        "Export your data in a portable format",
                        "Opt-out of certain data processing",
                        "Withdraw consent at any time",
                        "Revoke Google OAuth access from your Google Account settings"
                    ]
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-[#FF587E] to-[#CC4B8D] bg-clip-text text-transparent">hushy</Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
                        <Link to="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</Link>
                        <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-xl text-gray-600 mb-4">Your privacy is fundamental to how we build Hushy</p>
                    <p className="text-sm text-[#94A3B8]">Last updated: January 2025</p>
                </div>
            </section>

            {/* Introduction */}
            <section className="pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            At Hushy, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our service. We believe in transparency and want you to understand exactly what happens to your data.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            By using Hushy, you agree to the collection and use of information in accordance with this policy. If you have any questions, please don't hesitate to contact us.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-20 px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-r from-[#FF587E] to-[#CC4B8D] w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4">
                                    {section.icon}
                                </div>
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                            </div>

                            {section.content.map((subsection, subIndex) => (
                                <div key={subIndex} className="mb-6 last:mb-0">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-800">{subsection.subtitle}</h3>
                                    <ul className="space-y-2">
                                        {subsection.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start">
                                                <span className="text-[#FF587E] mr-2 mt-1">•</span>
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Additional Sections */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Children's Privacy</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Hushy is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">International Data Transfers</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Your information may be transferred to and processed in countries other than your own. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold mb-6">Changes to This Policy</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Significant changes will be communicated through the app or via email.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-gradient-to-r from-[#FF587E] to-[#CC4B8D] rounded-3xl p-1">
                        <div className="bg-white rounded-3xl p-8">
                            <div className="flex items-center mb-4">
                                <Mail className="w-6 h-6 text-[#FF587E] mr-3" />
                                <h2 className="text-2xl font-bold">Contact Us</h2>
                            </div>
                            <p className="text-gray-700 mb-4">
                                If you have any questions about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="space-y-2">
                                <p className="text-gray-600">
                                    <span className="font-semibold">Email:</span> privacy@hushy.app
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Support:</span> support@hushy.app
                                </p>
                                <p className="text-gray-600">
                                    <span className="font-semibold">Google OAuth concerns:</span> privacy@hushy.app
                                </p>
                                <p className="text-gray-600 text-sm mt-4">
                                    To manage your Google permissions, visit: 
                                    <a href="https://myaccount.google.com/permissions" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="text-[#FF587E] hover:underline ml-1">
                                        Google Account Permissions
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <span className="text-2xl font-bold">hushy</span>
                        </div>
                        <div className="flex space-x-6">
                            <Link to="/" className="hover:text-[#FF587E] transition-colors">Home</Link>
                            <Link to="/privacy" className="text-[#FF587E]">Privacy</Link>
                            <Link to="/terms" className="hover:text-[#FF587E] transition-colors">Terms</Link>
                            <a href="mailto:support@hushy.app" className="hover:text-[#FF587E] transition-colors">Support</a>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-[#94A3B8]">
                        <p>&copy; 2025 Hushy. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;