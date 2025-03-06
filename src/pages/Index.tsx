import React from 'react';
import Navbar from '@/components/Navbar';
import { IceCream, Citrus, Star, Award, Clock, CupSoda, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white overflow-hidden">
      <Navbar />
      
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538489949601-cbabf5b0c105?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-orange-300/30 backdrop-blur-sm" />
        
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/5 animate-float">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="ZeroBite ice cream cup" 
                className="w-24 h-24 rounded-full object-cover shadow-2xl ring-4 ring-white/20" 
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cream-100/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Sugar-Free
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 right-1/4 animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="ZeroBite strawberry" 
                className="w-32 h-32 rounded-full object-cover shadow-2xl ring-4 ring-white/20" 
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cream-100/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Strawberry
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/4 right-1/5 animate-float" style={{ animationDelay: "0.8s" }}>
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="ZeroBite chocolate" 
                className="w-28 h-28 rounded-full object-cover shadow-2xl ring-4 ring-white/20" 
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cream-100/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Chocolate
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-1/3 left-1/4 animate-float" style={{ animationDelay: "2.2s" }}>
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                alt="Fresh juice" 
                className="w-24 h-24 rounded-full object-cover shadow-2xl ring-4 ring-white/20" 
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cream-100/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Fresh Juice
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-5xl sm:text-7xl md:text-8xl font-bold mb-8 animate-fade-up tracking-tight bg-gradient-to-r from-white to-cream-100 bg-clip-text text-transparent drop-shadow-lg">
            Welcome to ZeroBite
          </h1>
          <p className="font-playfair text-xl sm:text-2xl text-white max-w-2xl mx-auto mb-4 animate-fade-up italic" style={{ animationDelay: '0.2s', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            Every Bite, Pure Delight
          </p>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-up font-light" style={{ animationDelay: '0.3s' }}>
            Zero worries, Zero sugar, Infinite delight
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#flavors"
              className="inline-block bg-gradient-to-r from-cream-300 to-cream-500 text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg hover:scale-105 shadow-xl"
            >
              <IceCream className="inline-block w-5 h-5 mr-2" />
              Explore Ice Cream
            </a>
            <a
              href="#juices"
              className="inline-block bg-gradient-to-r from-mint-200 to-mint-300 text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-lg hover:scale-105 shadow-xl"
            >
              <CupSoda className="inline-block w-5 h-5 mr-2" />
              Try Our Juices
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100A438.18,438.18,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-cream-50 to-cream-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-white p-4 rounded-full shadow-md mb-4 text-cream-500">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Sugar</h3>
              <p className="text-gray-600">Guilt-free indulgence with natural sweeteners</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-mint-50 to-mint-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-white p-4 rounded-full shadow-md mb-4 text-mint-300">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Compromise</h3>
              <p className="text-gray-600">Premium taste without the guilt</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-cream-50 to-cream-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-white p-4 rounded-full shadow-md mb-4 text-cream-500">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Artificial</h3>
              <p className="text-gray-600">100% natural ingredients, always fresh</p>
            </div>
          </div>
        </div>
      </section>

      <section id="juices" className="py-20 bg-gradient-to-b from-mint-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              <span className="relative z-10">Fresh Juices</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-mint-200 opacity-50 z-0 rounded-full"></span>
              <Citrus className="absolute -top-6 -right-8 text-mint-300 h-8 w-8" />
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Refreshing zero-sugar juices made from freshly squeezed fruits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {juices.map((juice) => (
              <div key={juice.name} className="group relative bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={juice.image} 
                    alt={juice.name} 
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  {juice.new && (
                    <div className="absolute top-2 right-2 bg-mint-100 text-mint-700 px-3 py-1 rounded-full text-xs font-medium">
                      New
                    </div>
                  )}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                  {juice.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {juice.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{juice.calories} calories</span>
                  <button className="flex items-center text-mint-700 hover:text-mint-800">
                    <Heart className="h-4 w-4 mr-1" /> Like
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute -right-64 -top-64 w-96 h-96 bg-cream-100 rounded-full opacity-30"></div>
        <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-mint-100 rounded-full opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              <span className="relative z-10">Most Loved Flavors</span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-cream-200 opacity-50 z-0 rounded-full"></span>
              <IceCream className="absolute -top-6 -right-8 text-cream-400 h-8 w-8" />
            </h2>
            <p className="text-gray-600">Fan favorites that keep our customers coming back for more</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mostLovedFlavors.map((flavor) => (
              <div key={flavor.name} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:scale-105 duration-300">
                <div className="relative">
                  <div className="h-52 overflow-hidden">
                    <img src={flavor.image} alt={flavor.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                  </div>
                  <div className="absolute top-2 right-2 bg-red-50 text-red-600 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Heart className="h-3 w-3 mr-1 fill-current" /> {flavor.loves}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{flavor.name}</h3>
                  <div className="flex justify-end">
                    <span className="text-xs bg-cream-100 text-cream-700 px-2 py-1 rounded-full">
                      Bestseller
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="flavors" className="py-20 bg-gradient-to-b from-cream-50 to-white">
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

      <section id="process" className="py-20 bg-white">
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
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    allergens: ["Milk"],
  },
  {
    name: "Belgian Dark Chocolate",
    description: "Rich Belgian chocolate blended to perfection, naturally sweetened.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    allergens: ["Milk", "Soy"],
  },
  {
    name: "Garden Fresh Mint Chip",
    description: "Garden-fresh mint leaves with dark chocolate chips.",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    seasonal: true,
    allergens: ["Milk"],
  },
  {
    name: "Strawberry Fields",
    description: "Fresh strawberries blended with cream and a hint of vanilla.",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    allergens: ["Milk"],
  },
  {
    name: "Salted Caramel Swirl",
    description: "Handcrafted caramel sauce swirled through vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    allergens: ["Milk"],
  },
  {
    name: "Pistachio Dream",
    description: "Real pistachios blended into our creamy base.",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
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
    description: "A nutritious blend of kale, apple, cucumber, and ginger with natural sweeteners.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    calories: "65",
    new: true
  },
];

export default Index;
