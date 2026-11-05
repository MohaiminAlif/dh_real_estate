
import {
  BedDouble,
  Bath,
  CarFront,
  MapPin,
  Maximize,
} from "lucide-react";

import Image from "next/image";

interface PropertyCardProps {
  image: string;
  images: string[];
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  parking: number;
  size: string;
  onImageClick: () => void;
}

export default function PropertyCard({
  image,
  images,
  title,
  address,
  price,
  beds,
  baths,
  parking,
  size,
  onImageClick,
}: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Property Image */}
      <button
        type="button"
        onClick={onImageClick}
        aria-label={`View ${images.length} photos of ${title}`}
        className="relative block h-72 w-full overflow-hidden text-left"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-6 top-6 rounded-full bg-[#C89B4D] px-4 py-2 text-sm font-semibold text-white">
          Featured
        </div>

        <div className="absolute bottom-5 right-5 rounded-full bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-md">
          View {images.length} Photos
        </div>
      </button>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#071A2F]">
          {title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-gray-500">
          <MapPin size={16} />
          {address}
        </div>

        <div className="mt-5 text-3xl font-bold text-[#C89B4D]">
          {price}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <BedDouble size={18} />
            {beds} Beds
          </div>

          <div className="flex items-center gap-2">
            <Bath size={18} />
            {baths} Baths
          </div>

          <div className="flex items-center gap-2">
            <CarFront size={18} />
            {parking} Garage
          </div>

          <div className="flex items-center gap-2">
            <Maximize size={18} />
            {size}
          </div>
        </div>
      </div>
    </article>
  );
}
