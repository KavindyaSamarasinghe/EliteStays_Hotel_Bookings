import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={'/rooms/' + room._id}
      onClick={() => scrollTo(0, 0)}
      className="relative w-full rounded-xl overflow-hidden bg-white text-gray-700 shadow-md transition hover:shadow-lg"
    >
      <img src={room.images[0]} alt="hotel-room" className="w-full h-48 object-cover" />

      {index % 2 === 0 && (
        <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow-sm">
          Best Seller
        </p>
      )}

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-lg font-semibold text-gray-800">
            {room.hotel.name}
          </p>
          <div className="flex items-center gap-1 text-sm">
            <img src={assets.starIconFilled} alt="star-icon" className="w-4 h-4" />
            4.5
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500">
          <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <p>
            <span className="text-xl font-semibold text-gray-800">
              Rs {room.pricePerNight}
            </span>{' '}
            <span className="text-sm text-gray-500">/night</span>
          </p>
          <button
            className="px-4 py-1.5 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition-all cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
