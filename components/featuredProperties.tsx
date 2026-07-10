import PropertyCard from "./propertyCard";

const properties = [
  {
    image: "/properties/home1.jpg",
    title: "Luxury Family Home",
    address: "Mississauga, ON",
    price: "$1,240,000",
    beds: 4,
    baths: 3,
    parking: 2,
  },
  {
    image: "/properties/home2.jpg",
    title: "Modern Downtown Condo",
    address: "Toronto, ON",
    price: "$799,900",
    beds: 2,
    baths: 2,
    parking: 1,
  },
  {
    image: "/properties/home3.jpg",
    title: "Executive Detached Home",
    address: "Brampton, ON",
    price: "$1,560,000",
    beds: 5,
    baths: 4,
    parking: 2,
  },
];

export default function FeaturedProperties() {
  return (
    <section className="section bg-[#F8F8F8]">
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

          <button className="btn-primary">
            Let's Connect
          </button>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}