'use client';
import { ArrowRight, Star } from "lucide-react";
import LeadForm from "./leadForm";
import { useRouter } from 'next/navigation';

export default function Hero() {

  const router = useRouter();

  const handleClickSell = () => {
    router.push('/sell');
  }; 

    const handleClickBuy = () => {
    router.push('/buy');
  }; 

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bgimg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-screen items-center">
        <div className="grid w-full gap-16 lg:grid-cols-2 mt-2 lg:mt-10 pt-20">

          {/* Left Side */}
          <div className="flex flex-col text-white">
            <span className="mb-4 text-sm uppercase tracking-[0.35em] bg-gradient-to-r from-[#f8e75a] via-[#e9b33a] via-[#d58b2e] to-[#c65a22] bg-clip-text text-transparent">
              Trusted Family Realtor
            </span>

            <h1 className="max-w-xl text-5xl font-bold leading-tight lg:text-7xl">
              Buying Or Selling
              <br />
              Your Home?
              <br />
              <span className="bg-gradient-to-r from-[#f8e75a] via-[#e9b33a] via-[#d58b2e] to-[#c65a22] bg-clip-text text-transparent">
                Made Simple.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg text-gray-300">
              Whether you're buying or selling, our experienced team
              makes every step simple, stress-free and tailored to your
              goals.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="btn-primary bg-gradient-to-r from-[#f8e75a] via-[#e9b33a] via-[#d58b2e] to-[#c65a22]" type="button" onClick={handleClickBuy}>
                <span className="text-[black]">I'm Looking To Buy</span>
              </button>

              <button className="btn-secondary" type="button" onClick={handleClickSell}>
                I'm Looking To Sell
              </button>
            </div>

            {/* Ratings */}
            <div className="mt-14 flex items-center gap-8">
              <div>
                <div className="mb-2 flex ">
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
                  5000+
                </h3>

                <p className="text-gray-300">
                  Happy Families
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center lg:justify-end relative min-h-screen pt-0 pb-10">
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
