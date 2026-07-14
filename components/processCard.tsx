"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ProcessCard({
  step,
  title,
  description,
  icon: Icon,
}: ProcessCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
      }}
      className="group relative rounded-3xl bg-white p-8 shadow-lg"
    >

      {/* Icon */}
      <div className="mb-6 mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071A2F] text-white transition-all duration-300 group-hover:bg-[#C89B4D] group-hover:rotate-6">
        <Icon size={30} />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-semibold text-[#071A2F]">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-7 text-gray-600">
        {description}
      </p>
    </motion.div>
  );
}