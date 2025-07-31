import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type AnimateProps = {
  id: number | string; // Unique key for motion
  children: ReactNode; // The content inside the animated card
  className?: string; // Optional custom styling
} & MotionProps; // Allow passing extra motion props if needed

function Animate({
  id,
  children,
  className = "",
  ...motionProps
}: AnimateProps) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      //   animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.1, y: -20 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.1 }}
      className={`flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

export default Animate;
