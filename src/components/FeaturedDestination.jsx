import React from 'react';
import { roomsDummyData } from '../assets/assets';
import HotelCard from './HotelCard';

const FeaturedDestination = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Featured Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedDestination;