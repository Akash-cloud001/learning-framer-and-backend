import { motion } from "motion/react";

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in slide-in-one"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: .75,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <motion.div
        className="slide-in slide-in-two"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: .75,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2, // Delay for staggered effect
        }}
      />
      <motion.div
        className="slide-in slide-in-three"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: .75,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3, // Delay for staggered effect
        }}
      />
      <motion.div
        className="slide-in slide-in-four"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: .75,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.4, // Delay for staggered effect
        }}
      />




      <motion.div
        className="slide-out slide-out-one"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: .75,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      {/* Slide-Out Bottom */}
      <motion.div
        className="slide-out slide-out-two"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: .75,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2, // Delay for staggered effect

        }}
      />
      <motion.div
        className="slide-out slide-out-three"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: .75,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3, // Delay for staggered effect

        }}
      />
      <motion.div
        className="slide-out slide-out-four"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: .75,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.4, // Delay for staggered effect

        }}
      />
    </>
  );
};

export default transition;
