import React from 'react';
import Navbar from '@/components/Navbar';
import { IceCream, Star, Award, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      
      {/* Hero Section - Keep existing code but add floating elements */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 animate-float">
            <img src="https://images.unsplash.com/photo-1560008581-09826d1de69e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                 alt="Floating ice cream" 
                 className="w-24 h-24 rounded-full object-cover shadow-lg" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 animate-float-delayed">
            <img src="https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                 alt="Floating cone" 
                 className="w-20 h-20 rounded-full object-cover shadow-lg" />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-up">
            Extraordinary Ice Cream Experiences
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Handcrafted with passion, served with love. Experience ice cream like never before.
          </p>
          <a
            href="#flavors"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-medium transition-all hover:bg-cream-100 hover:scale-105 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Explore Our Flavors
          </a>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <Star className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Made with the finest ingredients from around the world</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
              <p className="text-gray-600">Recognized for exceptional taste and quality</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
              <p className="text-gray-600">Made fresh every day in small batches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Flavors Section */}
      <section id="flavors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Featured Flavors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each flavor is carefully crafted using only the finest ingredients, creating an unforgettable taste experience.
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

      {/* Our Process Section */}
      <section id="process" className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
                Crafted with Care
              </h2>
              <p className="text-gray-600 mb-8">
                Our ice cream is made in small batches using traditional methods and the finest ingredients. We believe in taking our time to create something truly special.
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

      {/* Instagram Feed Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              #XbiteMoments
            </h2>
            <p className="text-gray-600">Share your Xbite experience with us on Instagram</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramFeed.map((post, index) => (
              <a key={index} href="#" className="relative aspect-square overflow-hidden rounded-lg group">
                <img src={post.image} alt="Instagram post" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-sm">{post.likes} likes</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question or suggestion? We'd love to hear from you.
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
    name: "Vanilla Bean Dream",
    description: "Madagascar vanilla beans infused in our signature cream base.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
    allergens: ["Milk"],
  },
  {
    name: "Dark Chocolate Decadence",
    description: "Rich Belgian chocolate blended to perfection.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
    allergens: ["Milk", "Soy"],
  },
  {
    name: "Fresh Mint Chip",
    description: "Garden-fresh mint leaves with dark chocolate chips.",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
    seasonal: true,
    allergens: ["Milk"],
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
