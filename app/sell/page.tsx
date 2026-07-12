import SellForm from "@/components/sellForm";
import Navbar from "@/components/navbar";

export default function SellPage() {
  return (
    <main
    
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bgimg.jpg')",
      }}
    >
    
      {/* Navbar */}
      <Navbar />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-32">
        <div className="mx-auto w-full max-w-7xl grid gap-16 lg:grid-cols-2 items-center">

          {/* Left Side */}

          <div className="text-white">
            <h6 className="mb-4 uppercase tracking-[6px] text-[#C89B4D]">
              Sell With Confidence
            </h6>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Let's Get Your
              <br />
              Property Sold.
            </h1>

            <p className="mt-8 max-w-xl text-lg text-gray-200 leading-8">
              Complete the form and upload a few photos of your property.
              Our experienced team will review everything and contact you
              with a personalized selling strategy.
            </p>
          </div>



          {/* Form */}

          <SellForm />

        </div>
      </div>
    </main>
  );
}