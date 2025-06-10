import React, { useState, useEffect } from 'react';
import { ChevronLeft, FileText, Users, CreditCard, AlertTriangle, Ban, Scale, HeartHandshake, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';


const TermsOfService = () => {
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
      icon: <Users className="w-6 h-6" />,
      title: "Account Terms",
      content: [
        {
          subtitle: "Creating an Account",
          items: [
            "You must be at least 13 years old to use Hushy",
            "You must provide accurate and complete information",
            "You are responsible for maintaining account security",
            "One person or legal entity may maintain only one account",
            "You may not use another person's account without permission"
          ]
        },
        {
          subtitle: "Account Responsibilities",
          items: [
            "You are responsible for all activity under your account",
            "You must notify us immediately of any unauthorized use",
            "You may not use your account for illegal purposes",
            "We may suspend or terminate accounts that violate these terms"
          ]
        }
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Content Guidelines",
      content: [
        {
          subtitle: "Your Content",
          items: [
            "You retain ownership of content you post on Hushy",
            "You grant us a license to use, display, and distribute your content",
            "You are responsible for the content you post",
            "Content must not violate laws or third-party rights",
            "We may remove content that violates our guidelines"
          ]
        },
        {
          subtitle: "Prohibited Content",
          items: [
            "Illegal content or content promoting illegal activities",
            "Harassment, bullying, or threats",
            "Hate speech or discrimination",
            "Sexually explicit content involving minors",
            "Spam or misleading content",
            "Content that violates others' privacy"
          ]
        }
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payments and Fees",
      content: [
        {
          subtitle: "Hushy Credits and Unlocking",
          items: [
            "Users can purchase credits to unlock hushys",
            "Prices are set by content creators within our guidelines",
            "All purchases are final and non-refundable",
            "We take a 15% platform fee on all transactions",
            "Creators receive 85% of unlock fees"
          ]
        },
        {
          subtitle: "Creator Earnings",
          items: [
            "Earnings are available for withdrawal after a 7-day period",
            "Minimum withdrawal amount is $10",
            "We reserve the right to withhold suspicious earnings",
            "Tax responsibilities lie with the earning party",
            "Payment processing times may vary by method"
          ]
        }
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Safety and Security",
      content: [
        {
          subtitle: "Community Safety",
          items: [
            "Report inappropriate content or behavior immediately",
            "Do not share personal contact information publicly",
            "Be cautious when meeting people from the app",
            "We are not responsible for user interactions",
            "We may share information with law enforcement when required"
          ]
        },
        {
          subtitle: "Account Security",
          items: [
            "Use a strong, unique password",
            "Enable two-factor authentication when available",
            "Do not share your login credentials",
            "Log out of shared devices",
            "Keep your app updated to the latest version"
          ]
        }
      ]
    },
    {
      icon: <Ban className="w-6 h-6" />,
      title: "Prohibited Activities",
      content: [
        {
          subtitle: "You may not:",
          items: [
            "Impersonate others or provide false information",
            "Use automated scripts or bots",
            "Attempt to hack or disrupt our service",
            "Circumvent any content restrictions or security measures",
            "Use the service for commercial spam",
            "Violate any applicable laws or regulations",
            "Infringe on intellectual property rights",
            "Collect user data without permission"
          ]
        }
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Legal Terms",
      content: [
        {
          subtitle: "Limitation of Liability",
          items: [
            "Hushy is provided 'as is' without warranties",
            "We are not liable for user-generated content",
            "We are not responsible for lost profits or data",
            "Our liability is limited to the amount you paid us",
            "Some jurisdictions don't allow these limitations"
          ]
        },
        {
          subtitle: "Indemnification",
          items: [
            "You agree to defend and hold us harmless",
            "This includes claims arising from your use of Hushy",
            "This includes your violation of these terms",
            "We may assume defense at our own expense"
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
          <div className="hidden md:flex space-x-8">
         
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Get Started
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
        
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 mb-4">The rules that govern your use of Hushy</p>
          <p className="text-sm text-[#94A3B8]">Effective date: January 1, 2025</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Welcome to Hushy!</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of Hushy, our website, mobile applications, and services (collectively, the "Service"). By using Hushy, you agree to be bound by these Terms. If you don't agree to these Terms, please don't use our Service.
            </p>
            <div className="bg-[#FF587E]/10 rounded-2xl p-4 flex items-start">
              <AlertTriangle className="w-5 h-5 text-[#FF587E] mr-3 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm">
                Please read these Terms carefully. They contain important information about your rights and obligations.
              </p>
            </div>
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

          {/* Additional Important Sections */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-[#FF587E] to-[#CC4B8D] w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Dispute Resolution</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We prefer to resolve disputes amicably. If you have a concern, please contact us first at support@hushy.app. Most issues can be resolved quickly and to everyone's satisfaction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If we can't resolve the dispute informally, you agree to binding arbitration under the rules of the American Arbitration Association. The arbitration will be conducted in English and the decision will be final.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You agree to resolve disputes with us individually, not as part of a class action. This means you cannot bring a class action lawsuit against us or participate in one.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. You agree to submit to the personal jurisdiction of the courts located in Delaware.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may modify these Terms at any time. If we make significant changes, we'll notify you through the app or by email. Your continued use of Hushy after changes take effect means you accept the new Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you don't agree to the new Terms, you must stop using Hushy. We'll always post the most current version of our Terms on this page with the effective date.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can terminate your account at any time through the app settings. We may suspend or terminate your account if you violate these Terms or for any other reason at our discretion.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use Hushy will cease immediately. Provisions that should survive termination will remain in effect.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-[#FF587E] to-[#CC4B8D] rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-8">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-[#FF587E] mr-3" />
                <h2 className="text-2xl font-bold">Questions?</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-semibold">Email:</span> legal@hushy.app
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Support:</span> support@hushy.app
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Address:</span> Hushy Inc., 123 Secret Street, San Francisco, CA 94102
                </p>
              </div>
            </div>
          </div>

          {/* Final Agreement Notice */}
          <div className="bg-[#FF587E]/10 rounded-3xl p-8 text-center">
            <p className="text-gray-700 font-medium">
              By using Hushy, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <p className="text-[#FF587E] font-bold mt-4">
              Thank you for being part of the Hushy community! 💕
            </p>
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
              <a href="/privacy" className="hover:text-[#FF587E] transition-colors">Privacy</a>
              <a href="/terms" className="text-[#FF587E]">Terms</a>
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

export default TermsOfService;