import Image from 'next/image';
import React from 'react';
import { MapPin, Calendar, ArrowUpRight, Star } from 'lucide-react';

const DestinationCard = ({ view }) => {
  const { 
    destinationName, 
    country, 
    category, 
    price, 
    duration, 
    departureDate, 
    imageUrl, 
    description 
  } = view;

  // Rating jodi data te na thake, default ekta rating dhore nichhi
  const rating = 4.5; 

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100 transition-all hover:shadow-2xl">
      {/* Image Section with Rating Badge */}
      <div className="relative h-64 w-full">
        <Image 
          src={imageUrl} 
          alt={destinationName}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md flex items-center gap-1 shadow-sm">
          <span className="text-sm font-bold text-gray-800">{rating}</span>
          <Star className="w-4 h-4 fill-black text-black" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1 text-gray-500 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">{country}</span>
        </div>

        {/* Title and Price */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            {destinationName}
          </h2>
          <div className="text-right">
            <span className="text-2xl font-bold text-gray-900">${price}</span>
            <span className="text-xs text-gray-500 block">/Person</span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{duration}</span>
        </div>

        {/* Action Button */}
        <button className="flex items-center gap-1 text-cyan-500 font-bold text-sm tracking-wide hover:text-cyan-600 uppercase transition-colors">
          Book Now 
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;