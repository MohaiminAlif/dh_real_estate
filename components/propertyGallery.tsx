
"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function PropertyGallery({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
}: PropertyGalleryProps) {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  if (!images.length) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-6 top-6 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25"
      >
        <X size={28} />
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous image"
        className="absolute left-4 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25 md:left-10"
      >
        <ChevronLeft size={36} />
      </button>

      {/* Image */}
      <div
        className="relative h-[75vh] w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex]}
          alt={`Property image ${currentIndex + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 90vw"
          className="object-contain"
        />
      </div>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-4 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25 md:right-10"
      >
        <ChevronRight size={36} />
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-6 rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-lg">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
