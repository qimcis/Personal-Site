import React from 'react';
import Image from 'next/image';

const ArtPage = () => {
  const images = [
    { id: 1, src: '/images/1.png', width: 400, height: 300 },
    { id: 2, src: '/images/15.png', width: 400, height: 300 },
    { id: 3, src: '/images/3.png', width: 400, height: 300 },
    { id: 4, src: '/images/4.png', width: 400, height: 300 },
    { id: 5, src: '/images/5.png', width: 400, height: 300 },
    { id: 6, src: '/images/6.png', width: 400, height: 300 },
    { id: 7, src: '/images/7.png', width: 400, height: 300 },
    { id: 9, src: '/images/9.png', width: 400, height: 300 },
    { id: 8, src: '/images/8.png', width: 400, height: 300 },
    { id: 10, src: '/images/10.png', width: 400, height: 300 },    
    { id: 11, src: '/images/11.png', width: 400, height: 300 },    
    { id: 12, src: '/images/12.png', width: 400, height: 300 },    
    { id: 13, src: '/images/13.png', width: 400, height: 300 },    
    { id: 14, src: '/images/14.png', width: 400, height: 300 },    
    { id: 15, src: '/images/2.png', width: 400, height: 300 },    
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="columns-2 gap-4 space-y-4">
        {images.map((image) => (
          <div key={image.id} className="break-inside-avoid mb-4">
            <div className="relative">
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt="image"
                className="w-full h-auto rounded-lg shadow-md hover:opacity-90 transition-opacity"
                priority={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtPage;