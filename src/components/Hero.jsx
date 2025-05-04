import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 
    md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>

      {/* Fixed blue tag - using inline-flex to match content width */}
      <div className="inline-flex mt-20">
        <span className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full whitespace-nowrap'>
          Stay Where Comfort Meets Luxury
        </span>
      </div>

      {/* Fixed heading text with proper class names */}
      <h1 className='font-playfair text-2xl md:text-5xl font-bold md:font-extrabold max-w-xl mt-4'>
        Find Your Ideal Stay, Anywhere
      </h1>

      {/* Fixed paragraph text */}
      <p className='max-w-lg mt-2 text-sm md:text-base'> 
        From beach resorts to city escapes, EliteStays connects you to incredible 
        hotels that inspire your next unforgettable adventure.
      </p>
    </div>
  );
}

export default Hero;