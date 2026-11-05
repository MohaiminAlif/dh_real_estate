
"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import PropertyCard from "./propertyCard";
import PropertyGallery from "./propertyGallery";

const properties = [
  {
    image: "/properties/2419_angora_st/1.jpeg",
    images: Array.from(
      { length: 15 },
      (_, index) =>
        `/properties/2419_angora_st/${index + 1}.jpeg`
    ),
    title: "2419 Angora St",
    address: "Pickering, Ontario, Canada, L1X0M6",
    price: "$845,000",
    beds: 3,
    baths: 3,
    parking: 2,
    size: "1.5k-2k ft²",
  },
  {
    image: "/properties/home2.jpg",
    images: ["/properties/home2.jpg"],
    title: "Modern Downtown Condo",
    address: "Toronto, ON",
    price: "$799,900",
    beds: 2,
    baths: 2,
    parking: 1,
    size: "1500-2000 ft²",
  },
  {
    image: "/properties/home3.jpg",
    images: ["/properties/home3.jpg"],
    title: "Executive Detached Home",
    address: "Brampton, ON",
    price: "$1,560,000",
    beds: 5,
    baths: 4,
    parking: 2,
    size: "1500-2000 ft²",
  },
];

export default function FeaturedProperties() {
  const router = useRouter();

  const [selectedProperty, setSelectedProperty] =
    useState<number | null>(null);

  const [currentImage, setCurrentImage] = useState(0);

  const openGallery = (propertyIndex: number) => {
    setSelectedProperty(propertyIndex);
    setCurrentImage(0);
  };

  const closeGallery = useCallback(() => {
    setSelectedProperty(null);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => {
      if (selectedProperty === null) return prev;

      const images = properties[selectedProperty].images;

      return (prev + 1) % images.length;
    });
  }, [selectedProperty]);

  const previousImage = useCallback(() => {
    setCurrentImage((prev) => {
      if (selectedProperty === null) return prev;

      const images = properties[selectedProperty].images;

      return (prev - 1 + images.length) % images.length;
    });
  }, [selectedProperty]);

  return (
    <>
      <section
        id="featuredProperties"
        className="section bg-[#F8F8F8]"
      >
        <div className="container-custom">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <p className="font-semibold uppercase tracking-[0.3em] text-[#C89B4D]">
                FEATURED LISTINGS
              </p>

              <h2 className="mt-3 text-4xl font-bold text-[#071A2F] lg:text-5xl">
                Explore Our Latest Properties
              </h2>
            </div>

            <button
              className="btn-primary"
              onClick={() => router.push("/buy")}
            >
              Let's Connect
            </button>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {properties.map((property, index) => (
              <PropertyCard
                key={property.title}
                {...property}
                onImageClick={() => openGallery(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Property Gallery Overlay */}
      {selectedProperty !== null && (
        <PropertyGallery
          images={properties[selectedProperty].images}
          currentIndex={currentImage}
          onClose={closeGallery}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      )}
    </>
  );
}
