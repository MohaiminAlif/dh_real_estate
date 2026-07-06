import Image from "next/image";
import { Award, BadgeCheck, Phone, Home } from "lucide-react";

const stats = [
  {
    icon: Home,
    number: "500+",
    label: "Homes Sold",
  },
  {
    icon: Award,
    number: "10+",
    label: "Years Experience",
  },
  {
    icon: BadgeCheck,
    number: "4.9★",
    label: "Client Rating",
  },
];

export default function AgentSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-3xl bg-[#C89B4D]/15" />



            <div className="absolute -bottom-8 right-8 rounded-2xl bg-[#071A2F] p-6 text-white shadow-xl">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-gray-300">Happy Families</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="font-semibold uppercase tracking-[0.3em] text-[#C89B4D]">
              ABOUT DEWAN HAQUE
            </span>

            <h2 className="mt-4 text-5xl font-bold text-[#071A2F]">
              Your Trusted
              <br />
              Real Estate Partner
            </h2>

            <p className="mt-8">
              Buying or selling a home is one of life's biggest decisions.
              My goal is to make the process simple, transparent and
              enjoyable. Every client receives personalized guidance,
              honest advice and dedicated support from start to finish.
            </p>

            <p className="mt-5">
              Whether you're purchasing your first home, upgrading,
              investing, or selling, I'll help you achieve the best
              possible results.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-[#F8F8F8] p-6 text-center"
                >
                  <stat.icon
                    className="mx-auto mb-4 text-[#C89B4D]"
                    size={28}
                  />

                  <h3 className="text-3xl font-bold text-[#071A2F]">
                    {stat.number}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <button className="btn-primary mt-10 flex items-center gap-2">
              <Phone size={18} />
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}