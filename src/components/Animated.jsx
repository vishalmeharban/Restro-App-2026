import React from "react";
import { motion } from "motion/react";

const Animated = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 40,
  scale = 1,
  ease = [0.16, 1, 0.3, 1],
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
