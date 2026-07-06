import Link from "next/link";
import Image from "next/image";

export default function logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#C89B4D] text-white font-bold text-xl">
        DH
      </div>

     {/* <Image 
      src="/images/logo2.jpeg" 
      alt="Company Logo" 
      width={100} // Set your preferred width
      height={40} // Set your preferred height
    /> */}


      <div className="leading-tight">
        <h2 className="text-lg font-bold text-white">
          Dewan Haque
        </h2>

        <p className="text-xs uppercase tracking-[0.2em] text-gray-300">
          Real Estate
        </p>
      </div>
    </Link>
  );
}