import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const AnimatedContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
}: AnimatedContainerProps) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.2,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedItem = ({ children, className = "" }: AnimatedItemProps) => {
  return (
    <motion.div
      variants={staggerItem}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
