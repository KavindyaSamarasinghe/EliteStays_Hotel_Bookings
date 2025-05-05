import React from 'react';
import { roomsDummyData } from '../assets/assets';
import HotelCard from './HotelCard';
import Title from './Title';
import { useNavigate } from 'react-router-dom';

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto pt-6 pb-4">
      <Title
        title="Featured Destinations"
        subTitle="Explore handpicked hotels and resorts in top destinations, offering unforgettable experiences, elegant stays, and world-class hospitality worldwide."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      {/* Center the button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => {
            navigate('/rooms');
            scrollTo(0, 0);
          }}
          className="px-6 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
        >
          View All Destinations
        </button>
      </div>
    </div>
  );
};

export default FeaturedDestination;
