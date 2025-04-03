"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';

function Photography() {
    
    const [selectedImage, setSelectedImage] = useState(null);
    //const [scrollY, setScrollY] = useState(0);

    const photos = [
        "/images/photography/IMG_9811.jpg",
        "/images/photography/IMG_9812.jpg",
        "/images/photography/IMG_9813.jpg",
        "/images/photography/IMG_9814.jpg",
        "/images/photography/IMG_9815.jpg",
        "/images/photography/IMG_9816.jpg",
        "/images/photography/IMG_9817.jpg",
        "/images/photography/IMG_9818.jpg",
        "/images/photography/IMG_9819.jpg",
        "/images/photography/IMG_9820.jpg",
        "/images/photography/IMG_9821.jpg",
        "/images/photography/IMG_9822.jpg",
        "/images/photography/IMG_9823.jpg",
        "/images/photography/IMG_9824.jpg",
        "/images/photography/IMG_9825.jpg",
        "/images/photography/IMG_9826.jpg",
        "/images/photography/IMG_9827.jpg",
        "/images/photography/IMG_9828.jpg",
    ];

    // Handle scroll for parallax effect
    // useEffect(() => {
    //     const handleScroll = () => {
    //     setScrollY(window.scrollY);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 justify-center mt-54">
        
        {/* Masonry Grid */}
        <div 
            className="columns-1 sm:columns-1 md:columns-3 lg:columns-3 gap-7 max-w-5xl space-y-12"
        >
            {photos.map((src, index) => (
                <motion.div 
                    key={index} 
                    className="relative break-inside-avoid"
                    //style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.01 }}
                >
                    <Image
                        src={src}
                        alt={`Photo ${index + 1}`}
                        width={500}
                        height={500}
                        className="w-full h-auto max-w-xs md:max-w-full lg:shadow shadow-md"
                        onClick={() => setSelectedImage(src)}
                        priority={index < 3}
                    />
                </motion.div>
            )).reverse()}
        </div>



        {/* Popup Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
            <motion.div 
                className="relative max-w-3xl mx-auto p-4" 
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Image
                    src={selectedImage}
                    alt="Selected"
                    width={800}
                    height={800}
                    className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
            </motion.div>
        </motion.div>
      )}



    </div>
  )
}

export default Photography
