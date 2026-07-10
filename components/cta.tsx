export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cta.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-[#071A2F]/85" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl text-center text-white">
          <span className="font-semibold uppercase tracking-[0.3em] text-[#C89B4D]">
            LET'S GET STARTED
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
            Ready To Find Your
            <br />
            Dream Home?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-300">
            Whether you're buying, selling or investing, we're ready to
            help you every step of the way.
          </p>

          {/* <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="btn-primary">
              Book A Consultation
            </button>

            <button className="btn-secondary">
              Browse Listings
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}