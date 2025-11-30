import React, { useEffect, useRef, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Gem, 
  Users, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ChevronDown,
  Star,
  Award,
  Shield,
  Factory,
  Settings,
  CheckCircle,
  ArrowRight,
  Play,
  Menu,
  X
} from 'lucide-react';

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const factoryImages = [
    '/5.jpg',
    '/3.jpg', 
    '/1.jpg',
    '/6.png'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.observe-card');
    cards.forEach((card) => observer.observe(card));

    // Auto-rotate factory images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % factoryImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center space-x-3">
              <img 
                src="/Logo.png" 
                alt="Royal Shoes Factory" 
                className="h-10 w-auto sm:h-12 lg:h-14 transition-transform duration-300 hover:scale-105" 
              />
              <div className="hidden sm:block">
                <h1 className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Royal Shoes Factory
                </h1>
                <p className={`text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}>
                  Premium Footwear
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('factory')}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
              >
                Factory
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}
              >
                Contact
              </button>
              <a 
                href="mailto:info@royalshoes.com.bd" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="py-4 space-y-4 bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-xl">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('factory')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                Factory
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                Contact
              </button>
              <div className="px-4">
                <a 
                  href="mailto:info@royalshoes.com.bd" 
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse" />
          <div className="absolute top-40 right-32 w-24 h-24 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="pt-8 sm:pt-12 mb-8 sm:mb-12 animate-fade-in">
            <div className="flex justify-center mb-6 sm:mb-8">
              <img 
                src="/Logo.png" 
                alt="Royal Shoes Factory Logo" 
                className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6 sm:mb-8" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight animate-fade-in-delay leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Premium Footwear
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-blue-100 mb-3 sm:mb-4 animate-fade-in-delay">
            Crafted in Ashulia, Dhaka, Bangladesh
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-delay-2 px-4">
            Where innovation meets craftsmanship. Royal Shoes Factory combines state-of-the-art technology with skilled artisanship to deliver premium footwear that stands out in both local and international markets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-delay-2">
            <button 
              onClick={() => scrollToSection('factory')}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center w-full sm:w-auto justify-center"
            >
              <Play className="mr-2 w-5 h-5" />
              Explore Our Factory
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 backdrop-blur-sm flex items-center w-full sm:w-auto justify-center"
            >
              Learn More
              <ChevronDown className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </section>

      {/* Factory Showcase Section */}
      <section id="factory" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-blue-400">Manufacturing Excellence</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              State-of-the-art facilities with modern equipment and skilled workforce
            </p>
          </div>

          {/* Main Factory Image Display */}
          <div className="mb-12 sm:mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={factoryImages[currentImageIndex]} 
                alt="Royal Shoes Factory Manufacturing" 
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Advanced Manufacturing</h3>
                <p className="text-gray-200 text-sm sm:text-base">Modern equipment ensuring precision and quality</p>
              </div>
            </div>
          </div>

          {/* Factory Image Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
            {factoryImages.map((image, index) => (
              <div 
                key={index}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === currentImageIndex ? 'ring-4 ring-blue-400 scale-105' : 'hover:scale-105'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`Factory view ${index + 1}`} 
                  className="w-full h-24 sm:h-32 md:h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>

          {/* Factory Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="observe-card bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Modern Facility</h3>
              <p className="text-gray-300 text-sm sm:text-base">State-of-the-art manufacturing equipment and clean production environment</p>
            </div>

            <div className="observe-card bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Skilled Workforce</h3>
              <p className="text-gray-300 text-sm sm:text-base">Experienced artisans and technicians ensuring quality craftsmanship</p>
            </div>

            <div className="observe-card bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Quality Control</h3>
              <p className="text-gray-300 text-sm sm:text-base">Rigorous quality assurance at every step of production</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              About <span className="text-blue-600">Royal Shoes</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Leading footwear manufacturer committed to excellence and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="observe-card bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Royal Shoes Factory combines innovation, craftsmanship, and quality to deliver footwear that balances style with comfort. Our state-of-the-art manufacturing facility ensures precision in every step — from premium material selection to modern design execution.
              </p>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Committed to Excellence</span>
              </div>
            </div>

            <div className="observe-card bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Promise</h3>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                We prioritize durability, elegance, and customer satisfaction, producing footwear that stands out in both local and international markets. Every pair tells a story of excellence and attention to detail.
              </p>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Quality Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="observe-card group bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gem className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We use only the finest materials and employ skilled artisans to create footwear that lasts for years.
              </p>
            </div>

            <div className="observe-card group bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Customer Focus</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Your satisfaction is our priority. We work closely with clients to meet their specific requirements.
              </p>
            </div>

            <div className="observe-card group bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Global Standards</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Our manufacturing processes adhere to international quality standards for consistent excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6 sm:mb-8" />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to work with us? Contact our team today for premium footwear solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="observe-card bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-blue-400" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1 text-sm sm:text-base">Email</p>
                    <a href="mailto:info@royalshoes.com.bd" className="text-white text-base sm:text-lg font-semibold hover:text-blue-400 transition-colors break-all">
                      info@royalshoes.com.bd
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1 text-sm sm:text-base">Phone</p>
                    <a href="tel:01670577300" className="text-white text-base sm:text-lg font-semibold hover:text-green-400 transition-colors">
                      01670577300
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1 text-sm sm:text-base">Factory Address</p>
                    <p className="text-white text-base sm:text-lg font-semibold">
                      Nolam, Mirzanagar, Ashulia, Dhaka-1344
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1 text-sm sm:text-base">Corporate Office</p>
                    <p className="text-white text-base sm:text-lg font-semibold">
                      House 150, Road 10, Block G, Bashundhara R/A
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="observe-card bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20">
                <div className="p-4 bg-gradient-to-r from-green-500/20 to-green-600/20">
                  <h4 className="text-white font-semibold flex items-center text-sm sm:text-base">
                    <Factory className="w-5 h-5 mr-2" />
                    Factory Location
                  </h4>
                </div>
                <iframe 
                  src="https://www.google.com/maps?q=23.929925,90.241298&hl=es;z=14&output=embed"
                  className="w-full h-48 sm:h-64 border-none"
                  title="Factory Location"
                />
              </div>

              <div className="observe-card bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20">
                <div className="p-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20">
                  <h4 className="text-white font-semibold flex items-center text-sm sm:text-base">
                    <Shield className="w-5 h-5 mr-2" />
                    Corporate Office
                  </h4>
                </div>
                <iframe 
                  src="https://www.google.com/maps?q=23.8246638,90.4299352&hl=es;z=14&output=embed"
                  className="w-full h-48 sm:h-64 border-none"
                  title="Corporate Office"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <img src="/Logo.png" alt="Royal Shoes Factory" className="h-10 sm:h-12 w-auto" />
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold">Royal Shoes Factory</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Crafting Excellence Since Day One</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              &copy; 2025 Royal Shoes Factory. All rights reserved. | Premium Footwear Manufacturing in Bangladesh
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;