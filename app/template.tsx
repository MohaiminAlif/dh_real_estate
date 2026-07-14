"use client";

import { motion } from "framer-motion";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      transition={{
        duration: 2,
      }}
    >
      {children}
    </motion.div>
  );
}