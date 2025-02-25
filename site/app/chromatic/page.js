import Image from 'next/image';
import fs from 'fs';
import path from 'path';

export default function ImageGallery() {
  const imageDirectory = path.join(process.cwd(), 'public/chromatic-data-screenshots');
  
  let images = [];
  try {
    const filenames = fs.readdirSync(imageDirectory);
    
    const imageFiles = filenames.filter(file => 
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );
    
    images = imageFiles.map(filename => ({
      path: `/chromatic-data-screenshots/${filename}`,
      alt: filename.replace(/\.(jpg|jpeg|png|gif)$/i, '')
    }));
  } catch (error) {
    console.error('Error reading directory:', error);
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Chromatic Data Dashboard
        </h1>
        <p className='text-center text-black mb-5'>(not allowed to share the code for this one)</p>

        <div className="mx-auto max-w-6xl">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="mb-6">
                <Image
                  src={image.path}
                  alt={image.alt}
                  width={800}
                  height={600}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  className="rounded-lg shadow-md"
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No images found in the directory.</p>
          )}
        </div>
      </div>
    </div>
  );
}