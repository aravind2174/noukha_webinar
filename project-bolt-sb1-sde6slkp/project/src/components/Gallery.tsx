import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: "https://res.cloudinary.com/dhn6uszk0/image/upload/v1749115002/img1_iptxvk.jpg",
    title: "StartUp Conference",
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dhn6uszk0/image/upload/v1749115004/img6_e8oxvk.jpg",
    title: "Startup Meetup",
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dhn6uszk0/image/upload/v1749115002/img4_bsgmt0.jpg",
    title: "Tech Conference Panel",
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dhn6uszk0/image/upload/v1749115002/img3_nioct5.jpg",
    title: "Student Project Showcase",
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/dhn6uszk0/image/upload/v1749115002/img7_kwtbqg.jpg",
    title: "Coding Bootcamp",
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/dhn6uszk0/image/upload/v1749115002/img2_svdhf7.jpg",
    title: "AI Innovation Hackathon",
  },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Previous Events</h2>
          <p className="text-lg text-gray-700">
            Take a look at some of our past events and workshops led by our speaker
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative group overflow-hidden rounded-xl h-64 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft size={32} />
            </button>
            
            <div className="max-w-4xl max-h-[80vh] relative">
              <img 
                src={galleryImages[currentImage].url} 
                alt={galleryImages[currentImage].title}
                className="max-h-[80vh] max-w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <h3 className="text-white font-semibold text-lg">{galleryImages[currentImage].title}</h3>
              </div>
            </div>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
              onClick={nextImage}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
