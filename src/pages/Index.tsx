import React from 'react';
import Navbar from '@/components/Navbar';
import { IceCream, Star, Award, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Updated hero background image - artisanal ice cream display */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 animate-float">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                   alt="ZeroBite ice cream cup" 
                   className="w-20 h-70 rounded-full object-cover shadow-2xl ring-4 ring-white/20" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-cream-100/90 backdrop-blur-sm px-6 py-1 rounded-full text-base font-semibold shadow-lg">
                Choco  
              </div>
            </div>
          </div>
          {/* <div className="absolute bottom-1/4 right-1/4 animate-float-delayed">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1538489949601-cbabf5b0c105?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                   alt="ZeroBite cone" 
                   className="w-36 h-36 rounded-full object-cover shadow-2xl ring-4 ring-white/20" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cream-100/90 backdrop-blur-sm px-6 py-2 rounded-full text-base font-semibold shadow-lg">
                ZeroBite
              </div>
            </div>
          </div> */}
          <div className="absolute top-1/3 right-[7%] animate-float" style={{ animationDelay: '0.4s' }}>
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                   alt="ZeroBite strawberry" 
                   className="w-32 h-32 rounded-full object-cover shadow-2xl ring-4 ring-white/20" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cream-100/90 backdrop-blur-sm px-6 py-2 rounded-full text-base font-semibold shadow-lg">
                Strawberry
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 animate-fade-up tracking-tight bg-gradient-to-r from-white to-cream-100 bg-clip-text text-transparent">
            Welcome to ZeroBite
          </h1>
          <p className="font-playfair text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto mb-4 animate-fade-up italic" style={{ animationDelay: '0.2s', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            Every Bite, Pure Delight
          </p>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-up font-light" style={{ animationDelay: '0.3s' }}>
            Zero worries, Zero sugar, Infinite delight
          </p>
          <a
            href="#flavors"
            className="inline-block bg-white/95 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-white hover:scale-105 animate-fade-up shadow-lg"
            style={{ animationDelay: '0.4s' }}
          >
            Explore Our Flavors
          </a>
        </div>
      </section>

      <section className="py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <Star className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zero Sugar</h3>
              <p className="text-gray-600">Guilt-free indulgence with natural sweeteners</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zero Compromise</h3>
              <p className="text-gray-600">Premium taste without the guilt</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Zero Artificial</h3>
              <p className="text-gray-600">100% natural ingredients, always fresh</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Most Loved Flavors
            </h2>
            <p className="text-gray-600">Fan favorites that keep our customers coming back for more</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mostLovedFlavors.map((flavor) => (
              <div key={flavor.name} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img src={flavor.image} alt={flavor.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-2 right-2 bg-red-50 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                    ♥ {flavor.loves}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">{flavor.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="flavors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Featured Flavors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our innovative zero-sugar creations that deliver pure joy in every scoop. Made with natural sweeteners and premium ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flavors.map((flavor) => (
              <div key={flavor.name} className="group relative overflow-hidden rounded-xl bg-cream-50 p-6 transition-all hover:shadow-lg">
                {flavor.seasonal && (
                  <div className="absolute top-4 right-4 z-10 bg-mint-100 text-mint-700 px-3 py-1 rounded-full text-sm font-medium">
                    Seasonal
                  </div>
                )}
                <div className="aspect-square overflow-hidden rounded-lg mb-6">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                  {flavor.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {flavor.description}
                </p>
                {flavor.allergens && (
                  <p className="text-sm text-gray-500">
                    Allergens: {flavor.allergens.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
                Crafted with Care, Zero Compromises
              </h2>
              <p className="text-gray-600 mb-8">
                At ZeroBite, we believe in delivering pure joy without the guilt. Our innovative process ensures every scoop is perfect, using only natural ingredients and zero artificial additives.
              </p>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cream-200 flex items-center justify-center">
                      <IceCream className="h-5 w-5 text-gray-900" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-1 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
                alt="Ice cream making process"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at our stores across Ahmedabad to experience the delightful world of zero-sugar ice cream.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Navrangpura</h3>
              <p className="text-gray-600 mb-4">
                12, Ground Floor, Sakar Complex<br />
                Near Gujarat College<br />
                Navrangpura, Ahmedabad - 380009
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Open Daily: 10 AM - 12 PM</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vastrapur</h3>
              <p className="text-gray-600 mb-4">
                5, Safal Pegasus<br />
                100 Ft Road, Near Vastrapur Lake<br />
                Vastrapur, Ahmedabad - 380015
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Open Daily: 10 AM - 12 PM</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prahladnagar</h3>
              <p className="text-gray-600 mb-4">
                3, Ground Floor, Mondeal Square<br />
                SG Highway<br />
                Prahladnagar, Ahmedabad - 380015
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>Open Daily: 10 AM - 12 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our zero-sugar ice creams or want to share your ZeroBite experience? We'd love to hear from you.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cream-300 focus:ring focus:ring-cream-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cream-300 focus:ring focus:ring-cream-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cream-300 focus:ring focus:ring-cream-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-6 py-3 rounded-md font-medium transition-all hover:bg-gray-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const flavors = [
  {
    name: "Classic Vanilla Bean",
    description: "Madagascar vanilla beans infused in our zero-sugar cream base.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
    allergens: ["Milk"],
  },
  {
    name: "Belgian Dark Chocolate",
    description: "Rich Belgian chocolate blended to perfection, naturally sweetened.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
    allergens: ["Milk", "Soy"],
  },
  {
    name: "Garden Fresh Mint Chip",
    description: "Garden-fresh mint leaves with dark chocolate chips.",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
    seasonal: true,
    allergens: ["Milk"],
  },
  {
    name: "Strawberry Fields",
    description: "Fresh strawberries blended with cream and a hint of vanilla.",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
    allergens: ["Milk"],
  },
  {
    name: "Salted Caramel Swirl",
    description: "Handcrafted caramel sauce swirled through vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
    allergens: ["Milk"],
  },
  {
    name: "Pistachio Dream",
    description: "Real pistachios blended into our creamy base.",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
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
    description: "We source the finest ingredients from local farms and international artisans.",
  },
  {
    title: "Small Batch Production",
    description: "Each batch is carefully crafted to ensure perfect texture and flavor.",
  },
  {
    title: "Quality Control",
    description: "Rigorous testing ensures every scoop meets our high standards.",
  },
];

const instagramFeed = [
  {
    image: "https://images.unsplash.com/photo-1538489949601-cbabf5b0c105?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    likes: 234,
  },
  {
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    likes: 187,
  },
  {
    image: "https://images.unsplash.com/photo-1538489949601-cbabf5b0c105?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    likes: 342,
  },
  {
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    likes: 156,
  },
];

export default Index;
