
import React from 'react';
import Navbar from '@/components/Navbar';
import { IceCream, Citrus, Star, Award, Clock, CupSoda, Heart, ChevronRight, Phone, MapPin, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section - Redesigned for professionalism */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50 to-cream-100 opacity-90" />
        
        {/* Decorative Ice cream scoops */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/5 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=90" 
              alt="Ice cream" 
              className="w-36 h-36 rounded-full object-cover shadow-xl ring-4 ring-white" 
            />
          </div>
          
          <div className="absolute bottom-1/4 right-1/4 animate-float" style={{ animationDelay: "1.5s" }}>
            <img 
              src="https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=90" 
              alt="Ice cream" 
              className="w-44 h-44 rounded-full object-cover shadow-xl ring-4 ring-white" 
            />
          </div>
          
          <div className="absolute top-1/4 right-1/5 animate-float" style={{ animationDelay: "0.8s" }}>
            <img 
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=90" 
              alt="Ice cream" 
              className="w-32 h-32 rounded-full object-cover shadow-xl ring-4 ring-white" 
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-12 md:mb-0 text-left">
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 animate-fade-up">
              Indulge Without <br/><span className="text-cream-500">Guilt</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-xl animate-fade-up mb-8" style={{ animationDelay: '0.2s' }}>
              Experience the perfect blend of taste and health with ZeroBite's zero-sugar ice creams and fresh juices. Pure joy in every scoop.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#flavors"
                className="inline-flex items-center bg-cream-500 text-white px-6 py-3 rounded-full text-base font-medium transition-all hover:shadow-lg hover:bg-cream-400 shadow-md"
              >
                <IceCream className="inline-block w-5 h-5 mr-2" />
                Explore Flavors
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
              <a
                href="#locations"
                className="inline-flex items-center bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-full text-base font-medium transition-all hover:shadow-lg hover:bg-gray-50"
              >
                <MapPin className="inline-block w-5 h-5 mr-2 text-cream-500" />
                Find Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=90" 
                alt="ZeroBite premium ice cream" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center">
                  <div className="bg-cream-100 p-2 rounded-full mr-4">
                    <Star className="h-6 w-6 text-cream-500 fill-cream-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Premium Quality</h3>
                    <p className="text-sm text-gray-700">Zero sugar, all natural ingredients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-lg p-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                <span className="font-medium text-gray-900">4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24 text-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100A438.18,438.18,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">What Makes Us Special</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our commitment to quality and innovation has made ZeroBite a favorite among health-conscious dessert lovers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-br from-cream-50 to-cream-100 shadow-sm hover:shadow-lg transition-all">
              <div className="bg-white p-4 rounded-full shadow-md mb-6 text-cream-500">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Zero Sugar</h3>
              <p className="text-gray-600">All the sweetness without the guilt. Our natural sweeteners provide the perfect taste while keeping sugar at zero.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-br from-mint-50 to-mint-100 shadow-sm hover:shadow-lg transition-all">
              <div className="bg-white p-4 rounded-full shadow-md mb-6 text-mint-300">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Ingredients</h3>
              <p className="text-gray-600">We source only the finest ingredients from local farms and international artisans to create unforgettable flavors.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-br from-cream-50 to-cream-100 shadow-sm hover:shadow-lg transition-all">
              <div className="bg-white p-4 rounded-full shadow-md mb-6 text-cream-500">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Freshly Made</h3>
              <p className="text-gray-600">Every batch of our ice cream and juices is freshly prepared daily to ensure the highest quality and taste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flavor section with more professional presentation */}
      <section id="flavors" className="py-24 bg-gradient-to-b from-cream-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-cream-100 text-cream-500 font-medium text-sm mb-3">OUR MENU</span>
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Premium Flavors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our innovative zero-sugar creations that deliver pure joy in every scoop. Made with natural sweeteners and premium ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flavors.map((flavor) => (
              <div key={flavor.name} className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {flavor.seasonal && (
                    <div className="absolute top-4 right-4 z-10 bg-cream-100 text-cream-500 px-3 py-1 rounded-full text-sm font-medium">
                      Seasonal
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2 group-hover:text-cream-500 transition-colors">
                    {flavor.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {flavor.description}
                  </p>
                  {flavor.allergens && (
                    <div className="text-sm text-gray-500 flex flex-wrap gap-2">
                      <span className="font-medium">Allergens:</span>
                      {flavor.allergens.map(allergen => (
                        <span key={allergen} className="bg-gray-100 px-2 py-0.5 rounded-full">
                          {allergen}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
                  alt="Ice cream making process"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="bg-cream-100 p-2 rounded-full shrink-0">
                    <Star className="h-5 w-5 text-cream-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Quality Guaranteed</h4>
                    <p className="text-sm text-gray-500">Each batch undergoes rigorous testing to ensure perfection</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <span className="inline-block px-4 py-1 rounded-full bg-cream-100 text-cream-500 font-medium text-sm mb-3">OUR PROCESS</span>
              <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
                Crafted with Care, <br />Zero Compromises
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                At ZeroBite, we believe in delivering pure joy without the guilt. Our innovative process ensures every scoop is perfect, using only natural ingredients and zero artificial additives.
              </p>
              <div className="space-y-8">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cream-100 flex items-center justify-center text-cream-500 font-bold">
                      {index + 1}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-1 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Juices section - Made more appealing */}
      <section id="juices" className="py-24 bg-gradient-to-b from-mint-50 to-white relative overflow-hidden">
        <div className="absolute -right-64 -top-64 w-96 h-96 bg-mint-100 rounded-full opacity-30"></div>
        <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-mint-100 rounded-full opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-mint-100 text-mint-700 font-medium text-sm mb-3">REFRESHING</span>
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              <span className="relative z-10">Fresh Juices</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-mint-200 opacity-50 z-0 rounded-full"></span>
              <Citrus className="absolute -top-6 -right-8 text-mint-300 h-8 w-8" />
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Refreshing zero-sugar juices made from freshly squeezed fruits, perfect for a healthy lifestyle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {juices.map((juice) => (
              <div key={juice.name} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={juice.image} 
                    alt={juice.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {juice.new && (
                    <div className="absolute top-4 right-4 bg-mint-100 text-mint-700 px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2 group-hover:text-mint-700 transition-colors">
                    {juice.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {juice.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-mint-50 text-mint-700 px-3 py-1 rounded-full">{juice.calories} calories</span>
                    <button className="flex items-center text-mint-700 hover:text-mint-800 transition-colors">
                      <Heart className="h-4 w-4 mr-1" /> Favorite
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Loved Flavors - Gallery style presentation */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-cream-100 text-cream-500 font-medium text-sm mb-3">FAN FAVORITES</span>
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Most Loved Flavors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Fan favorites that keep our customers coming back for more</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mostLovedFlavors.map((flavor, index) => (
              <div 
                key={flavor.name} 
                className={`relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:scale-105 duration-300 ${
                  index === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="relative h-full">
                  <div className={`${index === 0 ? 'h-96' : 'h-64'} overflow-hidden`}>
                    <img 
                      src={flavor.image} 
                      alt={flavor.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                    <h3 className="font-semibold text-white text-lg mb-1">{flavor.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <Heart className="h-3 w-3 mr-1 text-red-500 fill-red-500" /> 
                        <span className="text-white text-xs font-medium">{flavor.loves}</span>
                      </div>
                      <span className="text-xs bg-cream-500/90 text-white px-2 py-1 rounded-full">
                        Bestseller
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations section - Redesigned for professionalism */}
      <section id="locations" className="py-24 bg-cream-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-cream-100 text-cream-500 font-medium text-sm mb-3">VISIT US</span>
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at our stores across Ahmedabad to experience the delightful world of zero-sugar ice cream.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div key={location.name} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{location.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {location.address}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1 text-cream-500" />
                      <span>Open Daily: 10 AM - 12 PM</span>
                    </div>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cream-500 hover:text-cream-600 text-sm font-medium flex items-center"
                    >
                      Directions 
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section - Professional design */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-cream-100 text-cream-500 font-medium text-sm mb-3">CONTACT US</span>
              <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions about our zero-sugar ice creams or want to share your ZeroBite experience? We'd love to hear from you.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cream-100 flex items-center justify-center text-cream-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="mt-1 text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cream-100 flex items-center justify-center text-cream-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="mt-1 text-gray-600">hello@zerobite.com</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-cream-100 hover:text-cream-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-cream-100 hover:text-cream-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-cream-100 hover:text-cream-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cream-200 focus:border-cream-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cream-200 focus:border-cream-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cream-200 focus:border-cream-500 transition-colors"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-cream-500 text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-cream-600 hover:shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <span className="font-playfair text-2xl font-bold text-white">Zer</span>
                <div className="relative inline-block">
                  <span className="font-playfair text-2xl font-bold text-cream-500">0</span>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-900 rounded-full border-2 border-cream-500"></div>
                </div>
                <span className="font-playfair text-2xl font-bold text-white">Bite</span>
              </div>
              <p className="text-gray-400 mb-4">Indulge without guilt. Zero sugar, infinite delight.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cream-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cream-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cream-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#flavors" className="text-gray-400 hover:text-cream-500 transition-colors">Our Flavors</a></li>
                <li><a href="#process" className="text-gray-400 hover:text-cream-500 transition-colors">Our Process</a></li>
                <li><a href="#juices" className="text-gray-400 hover:text-cream-500 transition-colors">Fresh Juices</a></li>
                <li><a href="#locations" className="text-gray-400 hover:text-cream-500 transition-colors">Locations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">+91 98765 43210</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">hello@zerobite.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-400">Ahmedabad, Gujarat, India</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Monday - Friday: 10 AM - 10 PM</li>
                <li className="text-gray-400">Saturday: 10 AM - 11 PM</li>
                <li className="text-gray-400">Sunday: 10 AM - 9 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} ZeroBite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const flavors = [
  {
    name: "Classic Vanilla Bean",
    description: "Madagascar vanilla beans infused in our zero-sugar cream base for a classic, timeless flavor.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    allergens: ["Milk"],
  },
  {
    name: "Belgian Dark Chocolate",
    description: "Rich Belgian chocolate blended to perfection, naturally sweetened for an indulgent experience.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    allergens: ["Milk", "Soy"],
  },
  {
    name: "Garden Fresh Mint Chip",
    description: "Garden-fresh mint leaves with premium dark chocolate chips for a refreshing treat.",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    seasonal: true,
    allergens: ["Milk"],
  },
  {
    name: "Strawberry Fields",
    description: "Fresh strawberries blended with our cream base and a hint of vanilla for a fruity delight.",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    allergens: ["Milk"],
  },
  {
    name: "Salted Caramel Swirl",
    description: "Handcrafted caramel sauce swirled through our vanilla ice cream for a sweet and salty combination.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    allergens: ["Milk"],
  },
  {
    name: "Pistachio Dream",
    description: "Real pistachios blended into our creamy base for a nutty, sophisticated flavor profile.",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    allergens: ["Milk", "Nuts"],
  },
];

const mostLovedFlavors = [
  {
    name: "Classic Vanilla Bean",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    loves: "2.3k",
  },
  {
    name: "Belgian Dark Chocolate",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    loves: "1.9k",
  },
  {
    name: "Strawberry Fields",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    loves: "1.7k",
  },
  {
    name: "Salted Caramel Swirl",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    loves: "1.5k",
  },
];

const process = [
  {
    title: "Ingredient Selection",
    description: "We source the finest ingredients from local farms and international artisans to ensure premium quality.",
  },
  {
    title: "Small Batch Production",
    description: "Each batch is carefully crafted in small quantities to ensure perfect texture and flavor consistency.",
  },
  {
    title: "Quality Control",
    description: "Rigorous testing ensures every scoop meets our high standards before it reaches your cone.",
  },
];

const juices = [
  {
    name: "Tropical Orange Splash",
    description: "Freshly squeezed oranges blended with tropical fruits for a refreshing taste with zero added sugar.",
    image: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    calories: "95",
    new: true
  },
  {
    name: "Berry Burst",
    description: "A mix of strawberries, blueberries, and raspberries with a hint of mint for a refreshing drink.",
    image: "https://images.unsplash.com/photo-1506802913710-40e2e66339c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    calories: "75"
  },
  {
    name: "Green Detox",
    description: "A nutritious blend of kale, apple, cucumber, and ginger with natural sweeteners for health enthusiasts.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    calories: "65",
    new: true
  },
];

const locations = [
  {
    name: "Navrangpura",
    address: "12, Ground Floor, Sakar Complex, Near Gujarat College, Navrangpura, Ahmedabad - 380009",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Vastrapur",
    address: "5, Safal Pegasus, 100 Ft Road, Near Vastrapur Lake, Vastrapur, Ahmedabad - 380015",
    image: "https://images.unsplash.com/photo-1556710808-a9653259e7c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Prahladnagar",
    address: "3, Ground Floor, Mondeal Square, SG Highway, Prahladnagar, Ahmedabad - 380015",
    image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
];

export default Index;
