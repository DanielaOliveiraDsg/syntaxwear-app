import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
  images: string[];
  alt: string;
}

export const ProductCarousel = ({ images, alt }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Main Image */}
      <img
        src={images[currentIndex]}
        alt={`${alt} ${currentIndex + 1}`}
        className="w-full h-auto aspect-square object-cover"
      />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white">
            <IoIosArrowBack size={24} />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white">
            <IoIosArrowForward size={24} />
          </button>
        </>
      )}
    </div>
  )
}