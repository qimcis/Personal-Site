import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function ImageGallery() {
  const imageDirectory = path.join(process.cwd(), 'public/miso-site-screenshots');
 
  let images = [];
  try {
    const filenames = fs.readdirSync(imageDirectory);
   
    const imageFiles = filenames.filter(file =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );
   
    images = imageFiles.map(filename => ({
      path: `/miso-site-screenshots/${filename}`,
      alt: filename.replace(/\.(jpg|jpeg|png|gif)$/i, '')
    }));
  } catch (error) {
    console.error('Error reading directory:', error);
  }
 
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-center relative">
          <Link href="/work" className="absolute left-0 inline-flex items-center px-4 py-2 hover:bg-gray-100 text-gray-800 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </Link>
          
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Miso
          </h1>
        </div>
        
        <p className='text-center text-black mb-5'>Checkout my <a href="https://github.com/qimcis/miso-flashcards" target='_blank' className='underline'>frontend</a> and <a href='https://github.com/qimcis/miso-backend' target='_blank' className='underline'>backend</a> code!</p>
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