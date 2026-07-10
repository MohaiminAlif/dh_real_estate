import {
  House,
  HeartHandshake,
  ShieldCheck,
  Users,
  BadgeCheck,
} from "lucide-react";

import FeatureCard from "./featureCard";

const features = [
  {
    icon: HeartHandshake,
    title: "Client First",
    description:
      "Your dreams come first. We focus on providing a smooth and stress-free buying or selling experience.",
  },
  {
    icon: House,
    title: "Market Expertise",
    description:
      "Deep knowledge of the local market helps you make informed and confident.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Guidance",
    description:
      "From your first viewing to closing day, we're with you every step of the way.",
  },
  {
    icon: Users,
    title: "Strong Partner",
    description:
      "We negotiate aggressively on your behalf to secure the best possible outcome.",
  },
  // {
  //   icon: BadgeCheck,
  //   title: "Proven Results",
  //   description:
  //     "Hundreds of successful transactions and happy families who trust our experience.",
  // },
];

export default function Features() {
  return (
    <section className="section bg-[#F8F8F8]">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C89B4D]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#071A2F] lg:text-5xl">
            A Family Experience
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We combine local expertise, personalized service, and proven
            strategies to help you achieve your real estate dreams with
            confidence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}