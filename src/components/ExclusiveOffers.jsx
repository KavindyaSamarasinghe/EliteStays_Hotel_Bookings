import React from 'react';
import Title from './Title';
import { assets, exclusiveOffers } from '../assets/assets';

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      {/* Header section with title and button */}
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title
          align='left'
          title='Exclusive Offers'
          subTitle='Discover limited-time hotel discounts and special packages. Perfect stays, better prices — crafted just for your dream getaway.'
        />
        <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className='group-hover:translate-x-1 transition-all'
          />
        </button>
      </div>

      {/* Offer cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full'>
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className='relative group rounded-xl overflow-hidden h-72 text-white transition-shadow hover:shadow-xl'
            style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Dark overlay */}
            <div className='absolute inset-0 bg-black/40 z-0'></div>

            {/* Badge */}
            <p className='absolute top-4 left-4 z-10 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full'>
              {item.priceOff}% OFF
            </p>

            {/* Content */}
            <div className='relative z-10 flex flex-col justify-between h-full p-6'>
              <div>
                <h3 className='text-2xl font-medium font-playfair'>{item.title}</h3>
                <p className='text-sm mt-1'>{item.description}</p>
              </div>
              <div>
                <p className='text-xs text-white/70 mb-2'>Expires {item.expiryDate}</p>
                <button className='flex items-center gap-2 font-medium cursor-pointer'>
                  View Offers
                  <img
                    className='invert group-hover:translate-x-1 transition-all'
                    src={assets.arrowIcon}
                    alt="arrow-icon"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
