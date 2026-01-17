import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation, fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn } from "@/hooks/useScrollAnimation";

type AnimationType = "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

const animations = {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
};

const AnimatedSection = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  className = "",
}: AnimatedSectionProps) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
