import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, MessageCircle, Lock, Users, Sparkles, Globe, Shield, Heart, Unlock, MapPin, Clock, Share2, Apple, ArrowRight, ChevronRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faComments, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// Import des images

// Import des images
import deviceImg from '/src/assets/device.png';
import card1Img from '/src/assets/card.png';
import card2Img from '/src/assets/card.png';
import card3Img from '/src/assets/card.png';
import card4Img from '/src/assets/card.png';
import card5Img from '/src/assets/card.png';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedPrice, setAnimatedPrice] = useState(2.99);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation du prix
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedPrice(prev => prev === 2.99 ? 3.99 : 2.99);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Animation du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FontAwesomeIcon icon={faHome} className="w-8 h-8" />,
      title: "Discover Amazing Secrets",
      description: "Browse through a feed of intriguing hushys from people around the world"
    },
    {
      icon: <FontAwesomeIcon icon={faPlus} className="w-8 h-8" />,
      title: "Share Your Story",
      description: "Create hushys with blurred words that only unlock for those who dare to discover"
    },
    {
      icon: <FontAwesomeIcon icon={faComments} className="w-8 h-8" />,
      title: "Connect & Chat",
      description: "Join exclusive conversations with people who unlock your secrets"
    }
  ];

  const categories = [
    { name: "Entertainment", color: "from-pink-400 to-pink-600" },
    { name: "Confessions", color: "from-purple-400 to-purple-600" },
    { name: "Work Stories", color: "from-blue-400 to-blue-600" },
    { name: "Relationships", color: "from-red-400 to-red-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-[#FF587E] to-[#CC4B8D] bg-clip-text text-transparent">hushy</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-pink-600 transition-colors">Features</a>
            <a href="#how" className="text-gray-700 hover:text-pink-600 transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-pink-600 transition-colors">Pricing</a>
            <a href="/privacy" className="text-gray-700 hover:text-pink-600 transition-colors">Privacy</a>
            <a href="/terms" className="text-gray-700 hover:text-pink-600 transition-colors">Terms</a>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6 shadow-md">
            <Globe className="w-4 h-4 text-pink-600 mr-2" />
            <span className="text-sm text-gray-800 font-medium">Over 50,000 secrets shared worldwide</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Share Secrets,
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Discover Communities</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Post hushys with blurred words. Only those who unlock them can join your exclusive conversations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Download for iOS
            </button>
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg border-2 border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all duration-200">
              Join Waitlist for Android
            </button>
          </div>

          {/* Interactive Carousel */}
          <div className="relative mt-16 pt-24 pb-2 overflow-visible">
            <div className="relative max-w-6xl mx-auto">
              {/* Carousel Container */}
              <div className="relative flex items-center justify-center h-[500px]">

                {/* Central Device - Lower z-index */}
                <div className="relative" style={{ zIndex: 10 }}>
                  <img
                    src={deviceImg}
                    alt="Hushy app on iPhone"
                    className="w-[280px] md:w-[320px] h-auto drop-shadow-2xl"
                  />
                </div>

                {/* Cards Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[card1Img, card2Img, card3Img, card4Img, card5Img].map((cardImg, index) => {
                    // Calculate relative position
                    const relativePos = (index - carouselIndex + 5) % 5;

                    // Define positions and styles for each card
                    const getCardStyle = () => {
                      // Détection mobile
                      const isMobile = window.innerWidth < 768;

                      switch (relativePos) {
                        case 0: // Current card (center on device)
                          return {
                            transform: 'translateX(0) translateY(-10px)',
                            opacity: 1,
                            zIndex: 30,
                            width: isMobile ? '235px' : '270px',      // ← NOUVELLE LIGNE
                            maxWidth: isMobile ? '235px' : '270px'
                          };
                        case 1: // Next card (right side)
                          return {
                            transform: isMobile
                              ? 'translateX(200px) translateY(-10px) scale(0.7) '
                              : 'translateX(275px) translateY(-10px) scale(0.8) ',
                            opacity: isMobile ? 0.6 : 0.8,
                            zIndex: 20,
                            width: isMobile ? '235px' : '270px',      // ← NOUVELLE LIGNE
                            maxWidth: isMobile ? '235px' : '270px'
                          };
                        case 2: // Far right (partially visible)
                          return {
                            transform: isMobile
                              ? 'translateX(250px) translateY(-20px) scale(0.5) rotateY(-30deg)'
                              : 'translateX(460px)translateY(-10px) scale(0.6) rotateY(-35deg)',
                            opacity: isMobile ? 0.3 : 0.4,
                            zIndex: 10,
                            width: isMobile ? '235px' : '270px',      // ← NOUVELLE LIGNE
                            maxWidth: isMobile ? '235px' : '270px'
                          };
                        case 3: // Far left (partially visible)
                          return {
                            transform: isMobile
                              ? 'translateX(-250px) translateY(-20px) scale(0.5) rotateY(30deg)'
                              : 'translateX(-460px) translateY(-10px) scale(0.6) rotateY(35deg)',
                            opacity: isMobile ? 0.3 : 0.4,
                            zIndex: 10,
                            width: isMobile ? '235px' : '270px',      // ← NOUVELLE LIGNE
                            maxWidth: isMobile ? '235px' : '270px'
                          };
                        case 4: // Previous card (left side)
                          return {
                            transform: isMobile
                              ? 'translateX(-200px) translateY(-10px) scale(0.7) rotateY(20deg)'
                              : 'translateX(-275px) translateY(-10px) scale(0.8) rotateY(25deg)',
                            opacity: isMobile ? 0.6 : 0.8,
                            zIndex: 20,
                            width: isMobile ? '235px' : '270px',      // ← NOUVELLE LIGNE
                            maxWidth: isMobile ? '235px' : '270px'
                          };
                        default:
                          return {
                            transform: 'translateX(0) translateY(-50px) scale(0.5) rotateY(25deg)',
                            opacity: 0,
                            zIndex: 5,
                            width: isMobile ? '235px' : '270px',      // ← NOUVELLE LIGNE
                            maxWidth: isMobile ? '235px' : '270px'
                          };
                      }
                    };

                    const style = getCardStyle();

                    return (
                      <div
                        key={index}
                        className="absolute transition-all duration-700 ease-in-out"
                        style={{
                          transform: style.transform,
                          opacity: style.opacity,
                          zIndex: style.zIndex,
                          transformStyle: 'preserve-3d',
                          perspective: '1000px'
                        }}
                      >
                        <img
                          src={cardImg}
                          alt={`Hushy card ${index + 1}`}
                          className="h-auto rounded-2xl shadow-2xl object-contain"
                          style={{
                            width: style.width,
                            maxWidth: style.maxWidth,
                            aspectRatio: 'auto'
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${carouselIndex === index ? 'bg-pink-600 w-8' : 'bg-gray-300'
                    }`}
                  onClick={() => setCarouselIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why People Love Hushy</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${activeFeature === index ? 'ring-4 ring-pink-400 ring-opacity-50' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="bg-gradient-to-r from-[#FF587E] to-[#CC4B8D] w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How Hushy Works</h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-pink-600 font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Create Your Hushy</h3>
                  <p className="text-gray-600">Write your secret with certain words automatically blurred for mystery</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Set Your Price</h3>
                  <p className="text-gray-600">Choose how much people pay to unlock your secret and join the conversation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-pink-600 font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Discover Your Community</h3>
                  <p className="text-gray-600">Everyone who unlocks your hushy joins an exclusive chat where real connections happen</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8">
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-2xl p-4">
                      <div className="flex items-center mb-2">
                        <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500">San Francisco</span>
                      </div>
                      <p className="text-lg">I accidentally <span className="bg-pink-200 px-2 py-1 rounded blur-sm">deleted</span> my boss's <span className="bg-purple-200 px-2 py-1 rounded blur-sm">presentation</span> and saved the company...</p>
                    </div>
                    <div className="flex justify-center">
                      <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
                    </div>
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4">
                      <p className="text-lg font-medium mb-2">Unlocked! 🎉</p>
                      <p className="text-gray-700 mb-2">23 people are discussing this</p>
                      <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        Join Conversation <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Free to browse and share. Pay only to unlock secrets and join conversations.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">For Sharers</h3>
              <p className="text-4xl font-bold mb-2">Free Forever</p>
              <p className="text-gray-600 mb-6">Share unlimited hushys</p>
              <ul className="space-y-3 text-left">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  Post unlimited secrets
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  Set your own prices
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  Earn 85% of unlock fees
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  Discover your community
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-4">For Discoverers</h3>
                <p className="text-4xl font-bold mb-2">$0.99+</p>
                <p className="text-gray-600 mb-6">Per secret unlocked</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-pink-600 text-sm">✓</span>
                    </div>
                    Browse free forever
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-pink-600 text-sm">✓</span>
                    </div>
                    Pay to unlock secrets
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-pink-600 text-sm">✓</span>
                    </div>
                    Join exclusive chats
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-pink-600 text-sm">✓</span>
                    </div>
                    Connect with communities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section - NOUVELLE SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#FF587E] to-[#CC4B8D] rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Your Privacy & Security Matter</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-[#FF587E]" />
                    Secure Google Sign-In
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We use Google OAuth for secure authentication. Your Google password is never shared with us, and we only access your basic profile information.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-[#FF587E]" />
                    End-to-End Protection
                  </h3>
                  <p className="text-gray-600 mb-4">
                    All your hushys are encrypted and secure. Only paying supporters can unlock your secrets. Your data is yours and always protected.
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <a href="/privacy" className="text-[#FF587E] font-semibold hover:underline">
                  Read our full Privacy Policy <ChevronRight className="inline w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Join the Hushy Community</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Real people. Real secrets. Real connections.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-200">
              <p className="text-3xl font-bold text-pink-600 mb-2">50K+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-200">
              <p className="text-3xl font-bold text-purple-600 mb-2">200K+</p>
              <p className="text-gray-600">Hushys Shared</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-200">
              <p className="text-3xl font-bold text-pink-600 mb-2">$2.3M</p>
              <p className="text-gray-600">Earned by Creators</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-200">
              <p className="text-3xl font-bold text-purple-600 mb-2">4.8⭐</p>
              <p className="text-gray-600">App Store Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Share Your First Hushy?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands creating meaningful connections through shared secrets</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Download on App Store
            </button>
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-pink-300 transition-all">
              Join Waitlist for Android
            </button>
          </div>
        </div>
      </section>

      {/* Footer - MODIFIÉ */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">hushy</h3>
              <p className="text-gray-400">
                Share secrets, build communities, create connections.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors font-semibold">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors font-semibold">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:support@hushy.app" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="mailto:privacy@hushy.app" className="hover:text-white transition-colors">Privacy Questions</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 Hushy. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="mailto:support@hushy.app" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;