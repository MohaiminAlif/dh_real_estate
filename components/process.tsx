"use client";

import { motion } from "framer-motion";
import {
  Search,
  House,
  FileCheck,
  KeyRound,
} from "lucide-react";

import ProcessCard from "./processCard";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Consultation",
    description:
      "We start by understanding your goals, budget and timeline to create a personalized strategy.",
  },
  {
    id: 2,
    icon: House,
    title: "Property Search",
    description:
      "We carefully shortlist homes that match your needs and arrange private viewings.",
  },
  {
    id: 3,
    icon: FileCheck,
    title: "Negotiation",
    description:
      "From offers to inspections and paperwork, we negotiate to secure the best deal possible.",
  },
  {
    id: 4,
    icon: KeyRound,
    title: "Closing Day",
    description:
      "We coordinate every final detail so you can move into your new home with confidence.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export default function Process() {
  return (
    <section
      id="process"
      className="section bg-[#071A2F] text-white"
    >
      <div className="container-custom">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B4D]">
            OUR PROCESS
          </span>

          <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
            Your Journey,
            <span className="text-[#C89B4D]"> Simplified</span>
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Whether buying or selling, we guide you through every stage
            with expert advice and complete transparency.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Horizontal line */}
          <div className="absolute left-0 top-12 hidden h-1 w-full rounded-full bg-[#C89B4D]/30 lg:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="grid gap-10 lg:grid-cols-4"
          >
            {steps.map((step) => (
              <ProcessCard
                key={step.id}
                step={step.id}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}