import Image from 'next/image';
import React from 'react';
import { Star, Calendar, MapPin, Check, ArrowRight } from 'lucide-react';
import Modals from '@/components/modal/Modals';

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const data = await res.json();

  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description
  } = data;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-sans">
      <div className='flex justify-center'>
        <Modals destination={data}/>
      </div>
      {/* ১. টপ ব্যানার ইমেজ */}
      <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-10 shadow-lg">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ২. মেইন কন্টেন্ট গ্রিড */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* বাম পাশ: ডিটেইলস */}
        <div className="lg:col-span-2">
          <div className="flex items-center text-gray-500 gap-1 mb-3">
            <MapPin size={18} className="text-cyan-500" />
            <span className="text-sm font-medium uppercase tracking-wider">{country}</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-5">{destinationName}</h1>

          <div className="flex flex-wrap items-center gap-8 mb-10 border-b pb-8">
            <div className="flex items-center gap-2">
              <Star className="text-green-500 fill-green-500" size={20} />
              <span className="font-bold text-lg">4.9</span>
              <span className="text-gray-500">(234 reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar size={20} className="text-cyan-500" />
              <span className="font-semibold">{duration}</span>
            </div>
            <div className="px-4 py-1 bg-cyan-50 text-cyan-600 rounded-full text-sm font-bold">
              {category}
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Luxury beachfront accommodation",
                "Traditional cultural experience",
                "Professional tour guide",
                "All transport included",
                "Exclusive dinner events"
              ].map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check size={16} className="text-green-600" />
                  </div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ডান পাশ: বুকিং কার্ড */}
        <div className="lg:col-span-1">
          <div className="border border-gray-100 rounded-3xl p-8 shadow-xl sticky top-10 bg-white">
            <div className="mb-8">
              <p className="text-gray-500 font-medium mb-1">Starting from</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-cyan-600">${price}</span>
                <span className="text-gray-400 font-medium text-sm">/ per person</span>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 mb-2">Departure Date</label>
              <div className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 font-semibold">
                {departureDate || "05/15/2026"}
              </div>
            </div>

            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-lg shadow-cyan-200 mb-8">
              Book Now <ArrowRight size={22} />
            </button>

            <div className="space-y-4 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check size={18} className="text-green-500" />
                <span>Free cancellation up to 7 days</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Check size={18} className="text-green-500" />
                <span>Travel insurance included</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailsPage;