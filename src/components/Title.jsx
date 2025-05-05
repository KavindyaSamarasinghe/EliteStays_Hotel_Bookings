import React from 'react';

const Title = ({ title, subTitle, align, font }) => {
  return (
    <div
      className={`flex flex-col justify-center text-center mb-4 ${
        align === 'left' ? 'md:items-start md:text-left' : 'items-center'
      }`}
    >
      <h1 className={`text-3xl md:text-4xl ${font || 'font-playfair'}`}>
        {title}
      </h1>
      <p className="text-sm md:text-base text-gray-500/90 mt-1 max-w-2xl">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
