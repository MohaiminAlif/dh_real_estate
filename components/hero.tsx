import { ArrowRight, Star } from "lucide-react";
import LeadForm from "./leadForm";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-screen items-center">
        <div className="grid w-full gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex flex-col justify-center text-white">
            <span className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C89B4D]">
              Trusted Toronto Realtor
            </span>

            <h1 className="max-w-xl text-5xl font-bold leading-tight lg:text-7xl">
              Buying Your
              <br />
              First Home
              <br />
              <span className="text-[#C89B4D]">
                Made Simple.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg text-gray-300">
              Whether you're buying or selling, our experienced team
              makes every step simple, stress-free and tailored to your
              goals.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="btn-primary">
                I'm Looking To Buy
              </button>

              <button className="btn-secondary">
                I'm Looking To Sell
              </button>
            </div>

            {/* Ratings */}
            <div className="mt-14 flex items-center gap-8">
              <div>
                <div className="mb-2 flex text-[#C89B4D]">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>

                <p className="font-semibold text-white">
                  5.0 Google Rating
                </p>
              </div>

              <div className="h-12 w-px bg-white/20" />

              <div>
                <h3 className="text-3xl font-bold">
                  500+
                </h3>

                <p className="text-gray-300">
                  Happy Families
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center lg:justify-end">

            <LeadForm />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
        <ArrowRight className="rotate-90 text-white" />
      </div>
    </section>
    
  );
  
}