import Navbar from "@/components/navbar";
import BuyForm from "@/components/buyForm";

export default function BuyPage() {
  return (
    <main
    
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bgimgbuy.webp')",
      }}
    >
    
      {/* Navbar */}
      <Navbar />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-32">
        <div className="mx-auto w-full max-w-7xl grid gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div className="text-white">
            <h6 className="mb-4 uppercase tracking-[6px] text-[#C89B4D]">
              Buy with Trust
            </h6>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Let's Get Your
              <br />
              Dream Home.
            </h1>

            <p className="mt-8 max-w-xl text-lg text-gray-200 leading-8">
              Complete the form and Our experienced team will review everything and contact you
              with a personalized property of your choice.
            </p>
          </div>

          {/* Form */}

          <BuyForm />

        </div>
      </div>
    </main>
  );
}