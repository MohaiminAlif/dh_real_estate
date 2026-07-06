import { BedDouble, Bath, CarFront, MapPin } from "lucide-react";
import Image from "next/image";

interface PropertyCardProps {
  image: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  parking: number;
}

export default function PropertyCard({
  image,
  title,
  address,
  price,
  beds,
  baths,
  parking,
}: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-6 top-6 rounded-full bg-[#C89B4D] px-4 py-2 text-sm font-semibold text-white">
          Featured
        </div>
      </div>

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

        <div className="mt-6 grid grid-cols-3 gap-3 border-t pt-6">
          <div className="flex items-center gap-2">
            <BedDouble size={18} />
            <span>{beds} Beds</span>
          </div>

          <div className="flex items-center gap-2">
            <Bath size={18} />
            <span>{baths} Baths</span>
          </div>

          <div className="flex items-center gap-2">
            <CarFront size={18} />
            <span>{parking} Garage</span>
          </div>
        </div>
      </div>
    </article>
  );
}